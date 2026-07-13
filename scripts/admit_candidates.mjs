#!/usr/bin/env node
import {access, mkdir, readFile, readdir, rename, rm, writeFile} from 'node:fs/promises';
import {randomUUID} from 'node:crypto';
import {extname, join, resolve, sep} from 'node:path';
import {pathToFileURL} from 'node:url';
import {verifyCandidate} from './verify_runtime.mjs';

const exists=async p=>access(p).then(()=>true,()=>false);
async function readJson(path,fallback){return exists(path).then(ok=>ok?readFile(path,'utf8').then(JSON.parse):fallback)}
const jsonBytes=value=>JSON.stringify(value,null,2)+'\n';
const now=()=>new Date().toISOString().replace(/\.\d{3}Z$/,'Z');
const under=(root,path)=>{const rel=resolve(root);return resolve(path)===rel||resolve(path).startsWith(rel+sep)};

async function transactionalApply(changes,{transactionTestHook}={}){
  const token=`${process.pid}-${randomUUID()}`;
  const unique=new Map();
  for(const change of changes){
    const target=resolve(change.target);
    if(unique.has(target))throw new Error(`Duplicate transaction target: ${target}`);
    unique.set(target,{...change,target,tmp:`${target}.txn-tmp-${token}`,backup:`${target}.txn-bak-${token}`});
  }
  const staged=[...unique.values()];
  const applied=[];
  let committed=false;
  try {
    // Prepare every replacement before the first public path is touched.
    for(const change of staged){
      await mkdir(join(change.target,'..'),{recursive:true});
      if(!change.delete)await writeFile(change.tmp,change.content);
    }
    let swapped=0;
    for(const change of staged){
      const hadOriginal=await exists(change.target);
      if(hadOriginal)await rename(change.target,change.backup);
      let installed=false;
      try {
        if(!change.delete){await rename(change.tmp,change.target);installed=true}
      } catch(error) {
        if(hadOriginal)await rename(change.backup,change.target);
        throw error;
      }
      applied.push({...change,hadOriginal,installed});
      swapped++;
      if(transactionTestHook)await transactionTestHook({swapped,target:change.target});
    }
    committed=true;
  } catch(error) {
    let rollbackError;
    for(const change of [...applied].reverse()){
      try {
        if(change.installed)await rm(change.target,{force:true,recursive:true});
        if(change.hadOriginal)await rename(change.backup,change.target);
      } catch(cause){rollbackError??=cause}
    }
    for(const change of staged){
      await rm(change.tmp,{force:true,recursive:true}).catch(()=>{});
      await rm(change.backup,{force:true,recursive:true}).catch(()=>{});
    }
    if(rollbackError)throw new AggregateError([error,rollbackError],'Transaction failed and rollback was incomplete');
    throw error;
  } finally {
    for(const change of staged)await rm(change.tmp,{force:true,recursive:true}).catch(()=>{});
    // Backup cleanup is post-commit housekeeping. A cleanup failure must never
    // enter rollback after earlier backups have already been removed.
    if(committed)for(const change of applied)if(change.hadOriginal)await rm(change.backup,{force:true,recursive:true}).catch(()=>{});
  }
}

const ledgerSorted=rejected=>[...rejected.values()].sort((a,b)=>String(a.id).localeCompare(String(b.id)));
async function loadCandidates(candidateDir,names){
  const loaded=[];
  for(const name of [...names].sort()){
    if(!/^\d+$/.test(name))throw new Error(`Unsafe candidate directory name: ${name}`);
    const dir=join(candidateDir,name); if(!under(candidateDir,dir))throw new Error(`Candidate path escapes root: ${name}`);
    const candidate=JSON.parse(await readFile(join(dir,'candidate.json'),'utf8'));
    if(typeof candidate.id!=='string'||!/^\d+$/.test(candidate.id)||candidate.id!==name)throw new Error(`Invalid tweet ID for ${name}`);
    if(!['p5js','processing','ambiguous'].includes(candidate.language))throw new Error(`Invalid candidate language for ${name}`);
    const sources=(await readdir(dir)).filter(f=>f.startsWith('source.'));
    if(sources.length!==1)throw new Error(`Candidate ${name} must contain exactly one source file`);
    const expected=candidate.language==='processing'?'.pde':'.js';
    if(candidate.language!=='ambiguous'&&extname(sources[0])!==expected)throw new Error(`Candidate ${name} source extension must be ${expected}`);
    loaded.push({dir,candidate,sourceName:sources[0]});
  }
  return loaded;
}
function validateAccepted(record){
  if(typeof record.id!=='string'||!/^\d+$/.test(record.id)||!['p5js','processing'].includes(record.language)||record.status!=='verified'||record.runtime?.status!=='runs'||!Number.isInteger(record.runtime.canvas_count)||record.runtime.canvas_count<1)throw new Error(`Invalid accepted record ${record.id}`);
  if(record.code_file!==`sketches/${record.id}.${record.language==='processing'?'pde':'js'}`)throw new Error(`Invalid accepted source path ${record.code_file}`);
}

export async function admitWithResults({candidateDir,siteDir,stateDir,results,transactionTestHook}) {
  const names=(await exists(candidateDir))?await readdir(candidateDir):[];
  const candidates=await loadCandidates(candidateDir,names);
  const dataPath=join(siteDir,'data/sketches.json'); const ledgerPath=join(stateDir,'rejections.json');
  const records=await readJson(dataPath,[]); const ledger=await readJson(ledgerPath,[]); const byId=new Map(records.map(r=>[r.id,r])); const rejected=new Map(ledger.map(r=>[r.id,r]));
  for(const {candidate} of candidates){const result=results.get(candidate.id);if(!result)throw new Error(`Missing verifier result for ${candidate.id}`);if(result.ok&&(!['p5js','processing'].includes(result.language)||!Number.isInteger(result.canvasCount)||result.canvasCount<1))throw new Error(`Invalid verifier result for ${candidate.id}`)}
  const summary={fetched:names.length,admitted:{p5js:0,processing:0},rejected:{},retryable:0};
  const changes=[];
  for(const {dir,candidate,sourceName} of candidates){
    if(byId.has(candidate.id)) continue;
    const result=results.get(candidate.id);
    if(!result.ok){
      const reason=result.reason||'infrastructure-error'; const entry={id:candidate.id,tweet_url:candidate.tweet_url,classification_attempts:result.attempts||[candidate.language],reason,error:String(result.error||reason).slice(0,1000),retryable:result.retryable??reason==='infrastructure-error',checked_at:now()};
      rejected.set(candidate.id,entry); summary.rejected[reason]=(summary.rejected[reason]||0)+1; if(entry.retryable)summary.retryable++; continue;
    }
    const language=result.language; const ext=language==='processing'?'pde':'js';
    const target=join(siteDir,'sketches',`${candidate.id}.${ext}`);
    changes.push({target,content:await readFile(join(dir,sourceName))});
    const runtime={engine:language==='processing'?'processing.js':'p5.js',engine_version:language==='processing'?'1.6.6':'1.11.3',status:'runs',canvas_count:result.canvasCount,verified_at:now()};
    const accepted={...candidate,language,status:'verified',code_file:`sketches/${candidate.id}.${ext}`,runtime}; validateAccepted(accepted);
    byId.set(candidate.id,accepted); rejected.delete(candidate.id); summary.admitted[language]++;
  }
  const sorted=[...byId.values()].sort((a,b)=>String(b.created_at).localeCompare(String(a.created_at)));
  changes.push({target:dataPath,content:jsonBytes(sorted)},{target:ledgerPath,content:jsonBytes(ledgerSorted(rejected))});
  await transactionalApply(changes,{transactionTestHook});
  return summary;
}

export async function migrateWithResults({candidateDir,siteDir,stateDir,results,transactionTestHook}) {
  const names=(await exists(candidateDir))?await readdir(candidateDir):[];
  const candidates=await loadCandidates(candidateDir,names);
  const dataPath=join(siteDir,'data/sketches.json'); const ledgerPath=join(stateDir,'rejections.json');
  const records=await readJson(dataPath,[]); const ledger=await readJson(ledgerPath,[]);
  const byId=new Map(records.map(r=>[r.id,r])); const rejected=new Map(ledger.map(r=>[r.id,r]));
  for(const {candidate} of candidates){
    if(!byId.has(candidate.id))throw new Error(`Migration candidate ${candidate.id} is not an existing archive record`);
    const result=results.get(candidate.id); if(!result)throw new Error(`Missing verifier result for ${candidate.id}`);
    if(result.ok&&(!['p5js','processing'].includes(result.language)||!Number.isInteger(result.canvasCount)||result.canvasCount<1))throw new Error(`Invalid verifier result for ${candidate.id}`);
    if(!result.ok&&(result.reason||'infrastructure-error')==='infrastructure-error')throw new Error(`Infrastructure verification failed for ${candidate.id}: ${result.error||result.reason||'infrastructure-error'}`);
  }
  const summary={fetched:names.length,migrated:{p5js:0,processing:0},rejected:{},retryable:0};
  const changes=[]; const changedTargets=new Set();
  const addChange=change=>{const target=resolve(change.target);if(changedTargets.has(target))return;changedTargets.add(target);changes.push({...change,target})};
  const deletePublic=relative=>{
    if(!relative)return;
    const target=resolve(siteDir,relative); if(!under(siteDir,target))throw new Error(`Archive path escapes site root: ${relative}`);
    addChange({target,delete:true});
  };
  for(const {dir,candidate,sourceName} of candidates){
    const original=byId.get(candidate.id); const result=results.get(candidate.id);
    if(!result.ok){
      const reason=result.reason||'infrastructure-error';
      rejected.set(candidate.id,{id:candidate.id,tweet_url:original.tweet_url,classification_attempts:result.attempts||[candidate.language],reason,error:String(result.error||reason).slice(0,1000),retryable:false,checked_at:now()});
      summary.rejected[reason]=(summary.rejected[reason]||0)+1; byId.delete(candidate.id);
      deletePublic(original.code_file);
      for(const preview of new Set([original.preview_file,original.preview_still_file,original.preview_motion_file].filter(Boolean)))deletePublic(preview);
      continue;
    }
    const language=result.language; const ext=language==='processing'?'pde':'js'; const codeFile=`sketches/${candidate.id}.${ext}`;
    const target=resolve(siteDir,codeFile); if(!under(siteDir,target))throw new Error(`Accepted source escapes site root: ${codeFile}`);
    addChange({target,content:await readFile(join(dir,sourceName))});
    if(original.code_file&&original.code_file!==codeFile)deletePublic(original.code_file);
    const runtime={engine:language==='processing'?'processing.js':'p5.js',engine_version:language==='processing'?'1.6.6':'1.11.3',status:'runs',canvas_count:result.canvasCount,verified_at:now()};
    const accepted={...original,language,status:'verified',code_file:codeFile,summary:`Verified single-tweet ${language==='processing'?'Processing':'p5.js'} sketch from #つぶやきProcessing.`,runtime,runtime_status:'runs',runtime_errors:[],runtime_canvas_count:result.canvasCount,last_verified_at:runtime.verified_at};
    validateAccepted(accepted); byId.set(candidate.id,accepted);
    rejected.delete(candidate.id); summary.migrated[language]++;
  }
  const sorted=[...byId.values()].sort((a,b)=>String(b.created_at).localeCompare(String(a.created_at)));
  changes.push({target:dataPath,content:jsonBytes(sorted)},{target:ledgerPath,content:jsonBytes(ledgerSorted(rejected))});
  await transactionalApply(changes,{transactionTestHook});
  return summary;
}

async function main(){
  const args=process.argv.slice(2); const value=(flag,def)=>{const i=args.indexOf(flag);return i<0?def:args[i+1]};
  const candidateDir=value('--candidate-dir','.work/candidates'),siteDir=value('--site-dir','site'),stateDir=value('--state-dir','archive_state');
  const names=(await exists(candidateDir))?await readdir(candidateDir):[]; const results=new Map();
  for(const name of names){const dir=join(candidateDir,name);const metadata=JSON.parse(await readFile(join(dir,'candidate.json'),'utf8'));const source=(await readdir(dir)).find(f=>f.startsWith('source.'));results.set(metadata.id,await verifyCandidate({...metadata,sourcePath:join(dir,source)}));}
  console.log(JSON.stringify(await admitWithResults({candidateDir,siteDir,stateDir,results})));
}
if(import.meta.url===pathToFileURL(process.argv[1]||'').href)main().catch(e=>{console.error(e);process.exitCode=1});
