#!/usr/bin/env node
import {readFile} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import {resolve, join} from 'node:path';
import {pathToFileURL} from 'node:url';

const ROOT=resolve(new URL('..',import.meta.url).pathname);
const WORKER=join(ROOT,'scripts/runtime_probe_worker.mjs');

async function probe(sourcePath,language,{timeout,postReadyMs}={}){
  timeout ??= language==='processing'?120000:10000;
  postReadyMs ??= 1500;
  return new Promise(resolveResult=>{
    const child=spawn(process.execPath,[WORKER,sourcePath,language,String(timeout),String(postReadyMs)],{detached:true,stdio:['ignore','pipe','pipe']});
    let stdout='',stderr='',settled=false;
    child.stdout.on('data',chunk=>stdout+=chunk); child.stderr.on('data',chunk=>stderr+=chunk);
    const finish=result=>{if(settled)return;settled=true;clearTimeout(timer);resolveResult(result)};
    const timer=setTimeout(()=>{
      try{process.kill(-child.pid,'SIGKILL')}catch{}
      finish({ok:false,language,reason:'runtime-error',retryable:false,error:`Runtime probe exceeded ${timeout}ms hard timeout`});
    },timeout+postReadyMs+750);
    child.on('error',error=>finish({ok:false,language,reason:'infrastructure-error',retryable:true,error:String(error)}));
    child.on('close',()=>{
      try{finish(JSON.parse(stdout))}catch{finish({ok:false,language,reason:'infrastructure-error',retryable:true,error:`Probe produced invalid output: ${stderr||stdout}`})}
    });
  });
}

export async function verifyCandidate(candidate,options={}){
  // Fail before spawning Chromium and preserve the normal filesystem error contract.
  await readFile(candidate.sourcePath);
  const requested=candidate.language;
  if(requested!=='ambiguous'){const result=await probe(candidate.sourcePath,requested,options);return {...result,attempts:[requested]}}
  const attempts=['p5js','processing']; const probed=[];
  for(const language of attempts)probed.push(await probe(candidate.sourcePath,language,options));
  const successes=probed.filter(r=>r.ok);
  if(successes.length===1)return {...successes[0],attempts};
  return {ok:false,language:'ambiguous',attempts,reason:'ambiguous-language',retryable:false,error:`Expected exactly one runtime to succeed; got ${successes.length}`};
}

async function main(){
  const data=JSON.parse(await readFile(join(ROOT,'site/data/sketches.json'),'utf8')); let failed=0;
  for(const sketch of data){
    if(!['p5js','processing'].includes(sketch.language)){console.error(`${sketch.id} missing/invalid language`);failed++;continue}
    const result=await verifyCandidate({...sketch,sourcePath:join(ROOT,'site',sketch.code_file)});
    console.log(`${sketch.id} ${result.ok?'runs':result.reason} canvases=${result.canvasCount||0}`);if(!result.ok)failed++;
  }
  if(failed)throw new Error(`${failed} admitted sketch(es) failed verification`);
}
if(import.meta.url===pathToFileURL(process.argv[1]||'').href)main().catch(e=>{console.error(e);process.exitCode=1});
