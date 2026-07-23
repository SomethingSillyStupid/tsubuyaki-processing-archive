#!/usr/bin/env node
import {readFile} from 'node:fs/promises';
import {resolve, join} from 'node:path';
import {runnerSrcDoc} from '../site/runner.js';

const ROOT=resolve(new URL('..',import.meta.url).pathname);
const escAttr=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;');
const reasonFor=message=>/SyntaxError|Unexpected token|processing\.js|compile/i.test(message)?'invalid-source':'runtime-error';
const [sourcePath,language,timeoutText,postReadyText]=process.argv.slice(2);
const timeout=Number(timeoutText),postReadyMs=Number(postReadyText);
let server;
try {
  const {chromium}=await import('playwright');
  const code=await readFile(sourcePath,'utf8');
  const processingRuntimeSource=language==='processing'?await readFile(join(ROOT,'site/vendor/processing-1.6.6.min.js'),'utf8'):undefined;
  const p5RuntimeSource=language==='p5js'?await readFile(join(ROOT,'site/vendor/p5-1.11.3.min.js'),'utf8'):undefined;
  server=await chromium.launchServer();
  const browser=await chromium.connect(server.wsEndpoint());
  const page=await browser.newPage(); const errors=[];
  page.on('pageerror',e=>errors.push(String(e.message||e)));
  page.on('console',m=>{if(m.type()==='error'&&!m.text().includes('Permissions policy violation'))errors.push(m.text())});
  const srcdoc=runnerSrcDoc({code,language,processingRuntimeSource,p5RuntimeSource});
  // Poll the runner frame's own result flag via frame.evaluate: pathologically heavy sketches
  // starve the iframe's main thread for seconds at a time; fresh CDP evaluates both pump the
  // frame's task queue awake and eventually get a slot, while passive waits (waitForFunction,
  // bindings, postMessage to the top page) all stall. The runner mirrors every send() into
  // window.__tsubuyakiResult, so reading the frame directly sidesteps the messaging delay.
  // In-flight calls are capped rather than awaited unboundedly: a queued evaluate on a starved
  // thread can block longer than any deadline, and abandoned calls self-swallow on teardown.
  await page.setContent(`<iframe id="runner" sandbox="allow-scripts" srcdoc="${escAttr(srcdoc)}"></iframe>`);
  const t0=Date.now();
  const pump=async(fn,{budgetMs,intervalMs=400,accept=v=>v!=null,maxInFlight=4}={})=>{
    const flights=new Set();
    const end=Date.now()+budgetMs;
    let result;
    while(result===undefined&&Date.now()<end){
      const runnerFrame=page.frames()[1];
      if(runnerFrame&&flights.size<maxInFlight){
        const p=Promise.resolve().then(()=>fn(runnerFrame)).then(v=>{flights.delete(p);return v},()=>{flights.delete(p);return null});
        flights.add(p);
      }
      if(flights.size===0){await page.waitForTimeout(intervalMs);continue}
      const r=await Promise.race([...[...flights].map(p=>p.then(v=>({v}))),page.waitForTimeout(intervalMs).then(()=>({}))]);
      if('v' in r&&accept(r.v))result=r.v;
    }
    return result;
  };
  let message=await pump(f=>f.evaluate(()=>window.__tsubuyakiResult||null),{budgetMs:timeout});
  const timedOut=!message;
  if(message?.type==='tsubuyaki-ready'){
    await page.waitForTimeout(postReadyMs);
    const late=await pump(f=>f.evaluate(()=>window.__tsubuyakiResult||null),{budgetMs:2000});
    if(late)message=late;
  }
  const frame=page.frames()[1];
  const canvasCount=message?.canvasCount??(frame?(await pump(f=>f.locator('canvas').count(),{budgetMs:1500}))??0:0);
  let rendered=false;
  if(message?.type==='tsubuyaki-ready'&&frame&&canvasCount>0){
    // Re-sample instead of single-shot: first paint can lag the ready signal
    // on slow/loaded hosts, and some sketches periodically recreate their
    // canvas. A truly blank canvas stays blank for the whole window.
    // toDataURL comparison is exact for 2D (an untouched canvas is transparent). WebGL
    // canvases without preserveDrawingBuffer read transparent between frames, so a heavy
    // GL sketch can only pass if a sample lands mid-frame — a GL sketch that needs minutes
    // of wall time to show pixels is unverifiable in-window and fails here (fail-closed;
    // see ops notes 2026-07-23). The budget scales with the probe timeout and is clamped
    // so the worker always finishes inside the caller's hard timeout (timeout+postReadyMs).
    const want=Math.min(30000,Math.max(7000,Math.floor(timeout/2)));
    const room=timeout+postReadyMs-(Date.now()-t0)-500;
    const sampleBudget=Math.max(1500,Math.min(want,room));
    rendered=!!await pump(f=>f.locator('canvas').evaluateAll(canvases=>canvases.some(canvas=>{
      try {
        const blank=document.createElement('canvas'); blank.width=canvas.width; blank.height=canvas.height;
        return canvas.toDataURL()!==blank.toDataURL();
      } catch {
        // A tainted canvas necessarily consumed external pixels and is not blank.
        return true;
      }
    })),{budgetMs:sampleBudget,intervalMs:650,accept:v=>v===true})??false;
  }
  let result;
  if(message?.type==='tsubuyaki-ready'&&canvasCount>0&&rendered&&!errors.length) result={ok:true,language,canvasCount,frameCount:message.frameCount,rendered,errors};
  else {
    const error=timedOut&&!message?`Sketch did not signal ready within ${timeout}ms`:(message?.message||errors.join('; ')||(!rendered&&canvasCount?'Canvas remained blank':'Sketch did not create a canvas or signal ready'));
    const reason=timedOut&&!message?'runtime-error':(message?.type==='tsubuyaki-error'?reasonFor(`${message.phase||''} ${error}`):(!rendered&&canvasCount?'no-render':(canvasCount?'runtime-error':'no-canvas')));
    result={ok:false,language,canvasCount,rendered,reason,retryable:false,error};
  }
  process.stdout.write(JSON.stringify(result));
  await server.kill();
} catch(error) {
  process.stdout.write(JSON.stringify({ok:false,language,reason:String(error).includes('Timeout')?'runtime-error':'infrastructure-error',retryable:!String(error).includes('Timeout'),error:String(error)}));
  if(server) await server.kill().catch(()=>{});
}
