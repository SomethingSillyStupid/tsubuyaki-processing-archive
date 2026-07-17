import test from 'node:test';
import assert from 'node:assert/strict';
import { runnerSrcDoc } from '../site/runner.js';

test('p5 runner dispatches, escapes script endings, and posts contract messages', () => {
  const html = runnerSrcDoc({code:'function setup(){createCanvas(2,2)}<\/script>', language:'p5js'});
  assert.match(html, /vendor\/p5-1\.11\.3\.min\.js/);
  assert.doesNotMatch(html, /cdnjs|https?:\/\//);
  assert.doesNotMatch(html, /createCanvas\(2,2\)<\/script>/);
  assert.match(html, /tsubuyaki-ready/);
  assert.match(html, /tsubuyaki-error/);
  assert.match(html, /"p5js"/);
});

test('runner preserves the browser default white backdrop for transparent canvases', () => {
  const html = runnerSrcDoc({code:'draw=_=>{createCanvas(8,8);point(1,1)}', language:'p5js'});
  assert.match(html, /background:#fff/);
  assert.doesNotMatch(html, /background:#07080b/);
});

test('Processing runner embeds original source and self-hosted pinned runtime', () => {
  const source = 'float x=1; void setup(){size(2,2,P3D);}';
  const html = runnerSrcDoc({code:source, language:'processing'});
  assert.match(html, /vendor\/processing-1\.6\.6\.min\.js/);
  assert.ok(html.includes(source));
  assert.doesNotMatch(html, /createCanvas/);
  assert.match(html, /"processing"/);
  assert.match(html, /Processing\.disableInit\(\)/);
  assert.ok(html.indexOf('Processing.disableInit()') < html.indexOf('new Processing('));
});

test('unknown language fails closed without embedding source', () => {
  const html = runnerSrcDoc({code:'EVIL_SOURCE()', language:'python'});
  assert.doesNotMatch(html, /EVIL_SOURCE/);
  assert.match(html, /Unsupported sketch language/);
  assert.match(html, /tsubuyaki-error/);
});
