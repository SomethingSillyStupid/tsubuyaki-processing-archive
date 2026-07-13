#!/usr/bin/env node
import {readFile,readdir} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import {join} from 'node:path';
import {migrateWithResults} from './admit_candidates.mjs';
import {verifyCandidate} from './verify_runtime.mjs';

async function main(){
  const args=process.argv.slice(2); const value=(flag,def)=>{const i=args.indexOf(flag);return i<0?def:args[i+1]};
  const candidateDir=value('--candidate-dir','.work/language-migration');
  const siteDir=value('--site-dir','site'); const stateDir=value('--state-dir','archive_state');
  const names=await readdir(candidateDir); const results=new Map();
  for(const name of names){
    const dir=join(candidateDir,name); const metadata=JSON.parse(await readFile(join(dir,'candidate.json'),'utf8'));
    const source=(await readdir(dir)).find(file=>file.startsWith('source.'));
    const result=await verifyCandidate({...metadata,sourcePath:join(dir,source)});
    results.set(metadata.id,result); console.error(`${metadata.id} ${result.ok?'runs':result.reason} ${result.language} canvases=${result.canvasCount||0}`);
  }
  console.log(JSON.stringify(await migrateWithResults({candidateDir,siteDir,stateDir,results})));
}
if(import.meta.url===pathToFileURL(process.argv[1]||'').href)main().catch(error=>{console.error(error);process.exitCode=1});
