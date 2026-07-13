import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp, writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {verifyCandidate} from '../scripts/verify_runtime.mjs';

async function verify(root, name, language, source) {
  const sourcePath = join(root, name);
  await writeFile(sourcePath, source);
  return verifyCandidate({language, sourcePath});
}

test('real verifier admits valid Processing and p5.js but rejects invalid Processing', {timeout: 20_000}, async () => {
  const root = await mkdtemp(join(tmpdir(), 'verify-candidate-'));

  const processing = await verify(root, 'valid.pde', 'processing', 'void setup(){size(8,8);background(0);}');
  assert.equal(processing.ok, true, processing.error);
  assert.equal(processing.canvasCount, 1);

  const animatedProcessing = await verify(root, 'animated.pde', 'processing', 'void setup(){size(8,8);} void draw(){background(frameCount%255);}');
  assert.equal(animatedProcessing.ok, true, animatedProcessing.error);
  assert.ok(animatedProcessing.frameCount > 0, `expected a live Processing draw loop, got frameCount=${animatedProcessing.frameCount}`);

  const invalid = await verify(root, 'invalid.pde', 'processing', 'void setup(){size(}');
  assert.equal(invalid.ok, false);
  assert.equal(invalid.reason, 'invalid-source');

  const p5 = await verify(root, 'valid.js', 'p5js', 'function setup(){createCanvas(8,8);background(0)}');
  assert.equal(p5.ok, true, p5.error);
  assert.equal(p5.canvasCount, 1);
});

test('verifier observes after ready and rejects a delayed exception', {timeout: 10_000}, async () => {
  const root = await mkdtemp(join(tmpdir(), 'verify-delayed-'));
  const result = await verify(root, 'delayed.js', 'p5js', 'function setup(){createCanvas(8,8);setTimeout(()=>{throw Error("late boom")},900)}');
  assert.equal(result.ok, false);
  assert.equal(result.reason, 'runtime-error');
  assert.match(result.error, /late boom/);
});

test('verifier force-terminates a renderer-blocking sketch within bounded wall time', {timeout: 8_000}, async () => {
  const root = await mkdtemp(join(tmpdir(), 'verify-blocked-'));
  const sourcePath=join(root,'blocked.js'); await writeFile(sourcePath,'while(true){}');
  const started = Date.now();
  const result = await verifyCandidate({language:'p5js', sourcePath}, {timeout:1200, postReadyMs:1500});
  assert.equal(result.ok, false);
  assert.ok(Date.now()-started < 6000, `probe took ${Date.now()-started}ms`);
});
