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
  await page.setContent(`<iframe id="runner" sandbox="allow-scripts" srcdoc="${escAttr(srcdoc)}"></iframe><script>window.result=null;addEventListener('message',e=>{if(e.source===document.querySelector('#runner').contentWindow&&e.data&&String(e.data.type).startsWith('tsubuyaki-'))window.result=e.data})<\/script>`);
  await page.waitForFunction(()=>window.result!==null,null,{timeout});
  let message=await page.evaluate(()=>window.result);
  if(message?.type==='tsubuyaki-ready'){
    await page.waitForTimeout(postReadyMs);
    message=await page.evaluate(()=>window.result);
  }
  const frame=page.frames()[1]; const canvasCount=frame?await frame.locator('canvas').count():0;
  const rendered=frame&&canvasCount>0?await frame.locator('canvas').evaluateAll(canvases=>canvases.some(canvas=>{
    try {
      const blank=document.createElement('canvas'); blank.width=canvas.width; blank.height=canvas.height;
      return canvas.toDataURL()!==blank.toDataURL();
    } catch {
      // A tainted canvas necessarily consumed external pixels and is not blank.
      return true;
    }
  })):false;
  let result;
  if(message?.type==='tsubuyaki-ready'&&canvasCount>0&&rendered&&!errors.length) result={ok:true,language,canvasCount,frameCount:message.frameCount,rendered,errors};
  else {
    const error=message?.message||errors.join('; ')||(!rendered&&canvasCount?'Canvas remained blank':'Sketch did not create a canvas or signal ready');
    const reason=message?.type==='tsubuyaki-error'?reasonFor(`${message.phase||''} ${error}`):(!rendered&&canvasCount?'no-render':(canvasCount?'runtime-error':'no-canvas'));
    result={ok:false,language,canvasCount,rendered,reason,retryable:false,error};
  }
  process.stdout.write(JSON.stringify(result));
  await server.kill();
} catch(error) {
  process.stdout.write(JSON.stringify({ok:false,language,reason:String(error).includes('Timeout')?'runtime-error':'infrastructure-error',retryable:!String(error).includes('Timeout'),error:String(error)}));
  if(server) await server.kill().catch(()=>{});
}
