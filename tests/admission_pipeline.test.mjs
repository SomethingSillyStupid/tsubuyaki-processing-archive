import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp, mkdir, writeFile, readFile, access, readdir} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {admitWithResults, migrateWithResults} from '../scripts/admit_candidates.mjs';

async function candidate(root, id, language, source) {
  const dir=join(root,'candidates',id); await mkdir(dir,{recursive:true});
  const ext=language==='processing'?'pde':'js';
  await writeFile(join(dir,`source.${ext}`),source);
  await writeFile(join(dir,'candidate.json'),JSON.stringify({id,language,created_at:'2026-01-01T00:00:00Z',author:{username:'a'},code_file:`sketches/${id}.${ext}`}));
}

test('only successful verified candidates are atomically admitted', async()=>{
  const root=await mkdtemp(join(tmpdir(),'admit-')); const site=join(root,'site'); const state=join(root,'state');
  await candidate(root,'100','p5js','function setup(){createCanvas(2,2)}');
  await candidate(root,'200','processing','void setup(){size(}');
  const summary=await admitWithResults({candidateDir:join(root,'candidates'),siteDir:site,stateDir:state,results:new Map([
    ['100',{ok:true,language:'p5js',canvasCount:1}],['200',{ok:false,language:'processing',reason:'invalid-source',error:'compile failed',retryable:false}]
  ])});
  assert.deepEqual(summary,{fetched:2,admitted:{p5js:1,processing:0},rejected:{'invalid-source':1},retryable:0});
  const records=JSON.parse(await readFile(join(site,'data/sketches.json'),'utf8'));
  assert.equal(records.length,1); assert.equal(records[0].id,'100'); assert.equal(records[0].runtime.status,'runs');
  await assert.rejects(access(join(site,'sketches/bad.pde')));
  const ledger=JSON.parse(await readFile(join(state,'rejections.json'),'utf8'));
  assert.equal(ledger[0].id,'200'); assert.equal(ledger[0].retryable,false);
});

test('ambiguous candidates require exactly one successful runtime', async()=>{
  const root=await mkdtemp(join(tmpdir(),'admit-')); await candidate(root,'101','ambiguous','source');
  const results=new Map([['101',{ok:true,language:'processing',canvasCount:1,attempts:['p5js','processing']}]]);
  await admitWithResults({candidateDir:join(root,'candidates'),siteDir:join(root,'site'),stateDir:join(root,'state'),results});
  const records=JSON.parse(await readFile(join(root,'site/data/sketches.json'),'utf8'));
  assert.equal(records[0].language,'processing'); assert.match(records[0].code_file,/\.pde$/);
});

test('migration replaces existing source only after verification and removes obsolete extension', async()=>{
  const root=await mkdtemp(join(tmpdir(),'migrate-')); const site=join(root,'site'); const state=join(root,'state');
  await mkdir(join(site,'data'),{recursive:true}); await mkdir(join(site,'sketches'),{recursive:true});
  await writeFile(join(site,'sketches/101.js'),'corrupted');
  const original={id:'101',created_at:'2025-01-01',author:{username:'artist'},preview_file:'keep.webp',code_file:'sketches/101.js',summary:'old'};
  await writeFile(join(site,'data/sketches.json'),JSON.stringify([original]));
  await candidate(root,'101','processing','void setup(){size(2,2)}');
  const summary=await migrateWithResults({candidateDir:join(root,'candidates'),siteDir:site,stateDir:state,results:new Map([['101',{ok:true,language:'processing',canvasCount:1}]])});
  assert.deepEqual(summary.migrated,{p5js:0,processing:1});
  const [record]=JSON.parse(await readFile(join(site,'data/sketches.json'),'utf8'));
  assert.equal(record.preview_file,'keep.webp'); assert.equal(record.language,'processing'); assert.match(record.summary,/Processing/);
  assert.equal(await readFile(join(site,'sketches/101.pde'),'utf8'),'void setup(){size(2,2)}');
  await assert.rejects(access(join(site,'sketches/101.js')));
});

test('migration removes failed authoritative candidates from public data and records rejection', async()=>{
  const root=await mkdtemp(join(tmpdir(),'migrate-')); const site=join(root,'site'); const state=join(root,'state');
  await mkdir(join(site,'data'),{recursive:true}); await mkdir(join(site,'previews'),{recursive:true});
  await writeFile(join(site,'previews/bad.webp'),'preview');
  await writeFile(join(site,'data/sketches.json'),JSON.stringify([{id:'200',author:{username:'a'},code_file:'sketches/bad.js',preview_file:'previews/bad.webp'}]));
  await candidate(root,'200','p5js','broken authoritative source');
  const summary=await migrateWithResults({candidateDir:join(root,'candidates'),siteDir:site,stateDir:state,results:new Map([['200',{ok:false,language:'p5js',reason:'runtime-error',error:'boom'}]])});
  assert.equal(summary.rejected['runtime-error'],1);
  assert.deepEqual(JSON.parse(await readFile(join(site,'data/sketches.json'),'utf8')),[]);
  await assert.rejects(access(join(site,'previews/bad.webp')));
  const [entry]=JSON.parse(await readFile(join(state,'rejections.json'),'utf8')); assert.equal(entry.id,'200'); assert.equal(entry.reason,'runtime-error');
});

test('a later malformed candidate leaves public and state data unchanged', async()=>{
  const root=await mkdtemp(join(tmpdir(),'admit-atomic-')); const site=join(root,'site'); const state=join(root,'state');
  await mkdir(join(site,'data'),{recursive:true}); await mkdir(state,{recursive:true});
  await writeFile(join(site,'data/sketches.json'),'[]\n'); await writeFile(join(state,'rejections.json'),'[]\n');
  await candidate(root,'100','p5js','ok'); await candidate(root,'200','p5js','bad');
  await writeFile(join(root,'candidates/200/candidate.json'),'{bad json');
  await assert.rejects(admitWithResults({candidateDir:join(root,'candidates'),siteDir:site,stateDir:state,results:new Map([['100',{ok:true,language:'p5js',canvasCount:1}]])}));
  assert.equal(await readFile(join(site,'data/sketches.json'),'utf8'),'[]\n');
  assert.equal(await readFile(join(state,'rejections.json'),'utf8'),'[]\n');
  await assert.rejects(access(join(site,'sketches/100.js')));
});

test('candidate safety rejects traversal IDs, missing source, and multiple sources', async()=>{
  for(const kind of ['traversal','missing','multiple']){
    const root=await mkdtemp(join(tmpdir(),'admit-safe-')); await candidate(root,'123','p5js','ok');
    if(kind==='traversal')await writeFile(join(root,'candidates/123/candidate.json'),JSON.stringify({id:'../123',language:'p5js'}));
    if(kind==='missing')await import('node:fs/promises').then(fs=>fs.rm(join(root,'candidates/123/source.js')));
    if(kind==='multiple')await writeFile(join(root,'candidates/123/source.extra.js'),'x');
    await assert.rejects(admitWithResults({candidateDir:join(root,'candidates'),siteDir:join(root,'site'),stateDir:join(root,'state'),results:new Map([['123',{ok:true,language:'p5js',canvasCount:1}]])}));
    await assert.rejects(access(join(root,'site')));
  }
});

test('a later transaction failure restores source, JSON, and ledger byte-for-byte without temporary files', async()=>{
  const root=await mkdtemp(join(tmpdir(),'admit-rollback-')); const site=join(root,'site'); const state=join(root,'state');
  await mkdir(join(site,'data'),{recursive:true}); await mkdir(join(site,'sketches'),{recursive:true}); await mkdir(state,{recursive:true});
  const oldSource='existing orphan source\n', oldData='[ ]\n', oldLedger='[{"id":"999"}]\n';
  await writeFile(join(site,'sketches/100.js'),oldSource);
  await writeFile(join(site,'data/sketches.json'),oldData); await writeFile(join(state,'rejections.json'),oldLedger);
  await candidate(root,'100','p5js','replacement');
  await assert.rejects(admitWithResults({
    candidateDir:join(root,'candidates'),siteDir:site,stateDir:state,
    results:new Map([['100',{ok:true,language:'p5js',canvasCount:1}]]),
    transactionTestHook:({swapped})=>{if(swapped===2)throw Error('injected later swap failure')}
  }),/injected later swap failure/);
  assert.equal(await readFile(join(site,'sketches/100.js'),'utf8'),oldSource);
  assert.equal(await readFile(join(site,'data/sketches.json'),'utf8'),oldData);
  assert.equal(await readFile(join(state,'rejections.json'),'utf8'),oldLedger);
  const files=await readdir(root,{recursive:true});
  assert.deepEqual(files.filter(file=>/\.txn-(?:tmp|bak)-/.test(file)),[]);
});

test('migration uses candidate safety checks and sorts its rejection ledger deterministically', async()=>{
  const root=await mkdtemp(join(tmpdir(),'migrate-safe-')); const site=join(root,'site'); const state=join(root,'state');
  await mkdir(join(site,'data'),{recursive:true}); await mkdir(state,{recursive:true});
  await writeFile(join(site,'data/sketches.json'),JSON.stringify([{id:'123',code_file:'sketches/123.js'}]));
  await writeFile(join(state,'rejections.json'),JSON.stringify([{id:'999'},{id:'001'}]));
  await candidate(root,'123','p5js','bad'); await writeFile(join(root,'candidates/123/source.extra.js'),'duplicate');
  await assert.rejects(migrateWithResults({candidateDir:join(root,'candidates'),siteDir:site,stateDir:state,results:new Map()}),/exactly one source/);
  await import('node:fs/promises').then(fs=>fs.rm(join(root,'candidates/123/source.extra.js')));
  await migrateWithResults({candidateDir:join(root,'candidates'),siteDir:site,stateDir:state,results:new Map([['123',{ok:false,language:'p5js',reason:'runtime-error',error:'bad'}]])});
  const ledger=JSON.parse(await readFile(join(state,'rejections.json'),'utf8'));
  assert.deepEqual(ledger.map(entry=>entry.id),['001','123','999']);
});

test('candidate safety rejects numeric tweet IDs that cannot route on the static site', async()=>{
  const root=await mkdtemp(join(tmpdir(),'admit-numeric-id-')); await candidate(root,'123','p5js','ok');
  await writeFile(join(root,'candidates/123/candidate.json'),JSON.stringify({id:123,language:'p5js'}));
  await assert.rejects(admitWithResults({candidateDir:join(root,'candidates'),siteDir:join(root,'site'),stateDir:join(root,'state'),results:new Map([[123,{ok:true,language:'p5js',canvasCount:1}]])}),/Invalid tweet ID/);
});
