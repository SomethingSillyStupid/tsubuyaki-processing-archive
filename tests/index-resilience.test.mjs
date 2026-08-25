import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { dirname, extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { chromium } from 'playwright';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SITE = join(ROOT, 'site');
const MIME = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

async function startStaticSite({ handleRequest } = {}) {
  const server = createServer(async (req, res) => {
    if (handleRequest && await handleRequest(req, res)) return;
    const pathname = new URL(req.url, 'http://127.0.0.1').pathname;
    const relativePath = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
    const filePath = normalize(join(SITE, relativePath));
    if (!filePath.startsWith(`${SITE}/`)) {
      res.writeHead(403).end();
      return;
    }
    try {
      const file = await readFile(filePath);
      const info = await stat(filePath);
      if (!info.isFile()) throw new Error('not a file');
      res.writeHead(200, { 'content-type': MIME[extname(filePath)] || 'application/octet-stream' });
      res.end(file);
    } catch {
      res.writeHead(404).end('not found');
    }
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  const { port } = server.address();
  return { server, url: `http://127.0.0.1:${port}/` };
}

const sampleSketches = [
  {
    id: 'missing-source',
    language: 'p5js',
    created_at: '2026-08-01T00:00:00.000Z',
    author: { username: 'missing', name: 'Missing source', url: 'https://example.test/missing' },
    code_file: 'sketches/missing-source.js',
    status: 'verified',
    runtime: { status: 'runs' },
    tsubuyaki: { code_chars: 12 },
    summary: 'A sketch whose source endpoint is temporarily unavailable.',
  },
  {
    id: 'working-source',
    language: 'p5js',
    created_at: '2026-08-02T00:00:00.000Z',
    author: { username: 'working', name: 'Working source', url: 'https://example.test/working' },
    code_file: 'sketches/working-source.js',
    status: 'verified',
    runtime: { status: 'runs' },
    tsubuyaki: { code_chars: 12 },
    summary: 'A sketch whose source endpoint still works.',
  },
];

test('a single unavailable source file does not blank the archive index', { timeout: 30_000 }, async () => {
  const { server, url } = await startStaticSite();
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  try {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.route('**/data/sketches.json', route => route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(sampleSketches),
    }));
    await page.route('**/sketches/missing-source.js', route => route.fulfill({
      status: 404,
      contentType: 'text/plain',
      body: 'temporarily unavailable',
    }));
    await page.route('**/sketches/working-source.js', route => route.fulfill({
      status: 200,
      contentType: 'application/javascript',
      body: 'const searchableCodeMarker = true;',
    }));

    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(
      () => document.querySelectorAll('#grid .card').length > 0 || document.querySelector('#grid .empty'),
      null,
      { timeout: 10_000 },
    );

    const state = await page.evaluate(() => ({
      cards: document.querySelectorAll('#grid .card').length,
      links: document.querySelectorAll('#grid a').length,
      error: document.querySelector('#grid .empty')?.textContent || null,
    }));
    assert.equal(state.cards, 2, `expected both cards to remain visible; got ${JSON.stringify(state)}`);
    assert.equal(state.links, 2, `expected both cards to remain linked; got ${JSON.stringify(state)}`);
    assert.equal(state.error, null, `unexpected index-level error: ${state.error}`);

    await page.fill('#search', 'searchablecodemarker');
    await page.waitForFunction(() => document.querySelectorAll('#grid .card').length === 1, null, { timeout: 10_000 });
    assert.equal(await page.locator('#grid .card').first().getAttribute('href'), 'sketch.html?id=working-source');
    await context.close();
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
});

const transientSketches = [
  {
    id: 'transient-source',
    language: 'p5js',
    created_at: '2026-08-03T00:00:00.000Z',
    author: { username: 'transient', name: 'Transient source', url: 'https://example.test/transient' },
    code_file: 'sketches/transient-source.js',
    status: 'verified',
    runtime: { status: 'runs' },
    tsubuyaki: { code_chars: 12 },
    summary: 'A sketch whose first source response is a cacheable 404.',
  },
];

test('a retry bypasses a cacheable transient source 404', { timeout: 30_000 }, async () => {
  let sourceHits = 0;
  const { server, url } = await startStaticSite({
    handleRequest(req, res) {
      if (req.url === '/data/sketches.json') {
        res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(transientSketches));
        return true;
      }
      if (req.url !== '/sketches/transient-source.js') return false;
      sourceHits += 1;
      const recovered = sourceHits > 1;
      res.writeHead(recovered ? 200 : 404, {
        'cache-control': 'max-age=3600',
        'content-type': 'application/javascript; charset=utf-8',
      });
      res.end(recovered ? 'const recoveredCodeMarker = true;' : 'temporarily unavailable');
      return true;
    },
  });
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  try {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => document.querySelectorAll('#grid .card').length === 1, null, { timeout: 10_000 });
    await page.waitForFunction(
      () => document.querySelector('#grid .card')?.dataset.title?.includes('recoveredcodemarker'),
      null,
      { timeout: 10_000 },
    );
    assert.equal(sourceHits, 2, 'the retry must bypass the cached 404 response');

    await page.fill('#search', 'recoveredcodemarker');
    await page.waitForFunction(() => document.querySelectorAll('#grid .card').length === 1, null, { timeout: 10_000 });
    assert.equal(await page.locator('#grid .card').first().getAttribute('href'), 'sketch.html?id=transient-source');
    await context.close();
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
});

const bodyFailureSketches = [
  {
    id: 'body-failure-source',
    language: 'p5js',
    created_at: '2026-08-04T00:00:00.000Z',
    author: { username: 'bodyfailure', name: 'Body failure source', url: 'https://example.test/bodyfailure' },
    code_file: 'sketches/body-failure-source.js',
    status: 'verified',
    runtime: { status: 'runs' },
    tsubuyaki: { code_chars: 12 },
    summary: 'A sketch whose first successful response body cannot be read.',
  },
];

test('a source-body read failure is retried before indexing', { timeout: 30_000 }, async () => {
  let sourceHits = 0;
  const { server, url } = await startStaticSite({
    handleRequest(req, res) {
      if (req.url === '/data/sketches.json') {
        res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(bodyFailureSketches));
        return true;
      }
      if (req.url !== '/sketches/body-failure-source.js') return false;
      sourceHits += 1;
      res.writeHead(200, { 'content-type': 'application/javascript; charset=utf-8' });
      res.end('const bodyRetryMarker = true;');
      return true;
    },
  });
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  try {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.addInitScript(() => {
      const originalText = Response.prototype.text;
      let failFirstBodyRead = true;
      Response.prototype.text = function () {
        const isSourceCode = this.headers.get('content-type')?.startsWith('application/javascript');
        if (failFirstBodyRead && isSourceCode) {
          failFirstBodyRead = false;
          return Promise.reject(new Error('simulated source-body read failure'));
        }
        return originalText.call(this);
      };
    });

    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(
      () => document.querySelector('#grid .card')?.dataset.title?.includes('bodyretrymarker'),
      null,
      { timeout: 10_000 },
    );
    assert.equal(sourceHits, 2, 'the failed body read must trigger one retry');
    await page.fill('#search', 'bodyretrymarker');
    assert.equal(await page.locator('#grid .card').count(), 1);
    await context.close();
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
});

const initialQuerySketches = [
  {
    id: 'stalled-source',
    language: 'p5js',
    created_at: '2026-08-05T00:00:00.000Z',
    author: { username: 'stalled', name: 'Stalled source', url: 'https://example.test/stalled' },
    code_file: 'sketches/stalled-source.js',
    status: 'verified',
    runtime: { status: 'runs' },
    tsubuyaki: { code_chars: 12 },
    summary: 'A sketch whose source request never completes.',
  },
  {
    id: 'query-match-source',
    language: 'p5js',
    created_at: '2026-08-06T00:00:00.000Z',
    author: { username: 'querymatch', name: 'Query match source', url: 'https://example.test/querymatch' },
    code_file: 'sketches/query-match-source.js',
    status: 'verified',
    runtime: { status: 'runs' },
    tsubuyaki: { code_chars: 12 },
    summary: 'A sketch whose source contains the initial search query.',
  },
];

test('an initial source-code query updates without waiting for another source request', { timeout: 30_000 }, async () => {
  const { server, url } = await startStaticSite({
    handleRequest(req, res) {
      if (req.url === '/data/sketches.json') {
        res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(initialQuerySketches));
        return true;
      }
      if (req.url === '/sketches/stalled-source.js') return true;
      if (req.url !== '/sketches/query-match-source.js') return false;
      res.writeHead(200, { 'content-type': 'application/javascript; charset=utf-8' });
      res.end('const initialQueryMarker = true;');
      return true;
    },
  });
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  try {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(`${url}?q=initialquerymarker`, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => document.querySelectorAll('#grid .card').length === 1, null, { timeout: 2_000 });
    assert.equal(await page.locator('#grid .card').first().getAttribute('href'), 'sketch.html?id=query-match-source');
    await context.close();
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
});

const staleSuccessSketches = [
  {
    id: 'stale-success-source',
    language: 'p5js',
    created_at: '2026-08-07T00:00:00.000Z',
    author: { username: 'stalesuccess', name: 'Stale success source', url: 'https://example.test/stalesuccess' },
    code_file: 'sketches/stale-success-source.js',
    status: 'verified',
    runtime: { status: 'runs' },
    tsubuyaki: { code_chars: 12 },
    summary: 'A sketch whose cached source is replaced before archive indexing.',
  },
];

test('source indexing reloads a cacheable stale successful response', { timeout: 30_000 }, async () => {
  let sourceHits = 0;
  const { server, url } = await startStaticSite({
    handleRequest(req, res) {
      if (req.url === '/primer') {
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
        res.end('<!doctype html><title>primer</title>');
        return true;
      }
      if (req.url === '/data/sketches.json') {
        res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(staleSuccessSketches));
        return true;
      }
      if (req.url !== '/sketches/stale-success-source.js') return false;
      sourceHits += 1;
      res.writeHead(200, {
        'cache-control': 'max-age=3600',
        'content-type': 'application/javascript; charset=utf-8',
      });
      res.end(sourceHits === 1 ? 'const staleCodeMarker = true;' : 'const freshCodeMarker = true;');
      return true;
    },
  });
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  try {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(`${url}primer`, { waitUntil: 'domcontentloaded' });
    assert.equal(await page.evaluate(() => fetch('/sketches/stale-success-source.js').then(response => response.text())), 'const staleCodeMarker = true;');
    assert.equal(sourceHits, 1, 'the primer must populate the browser cache');

    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(
      () => document.querySelector('#grid .card')?.dataset.title?.includes('freshcodemarker'),
      null,
      { timeout: 2_000 },
    );
    assert.equal(sourceHits, 2, 'archive indexing must revalidate the cached source');
    await page.fill('#search', 'freshcodemarker');
    assert.equal(await page.locator('#grid .card').count(), 1);
    await context.close();
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
});

const nonOkStallSketches = [
  {
    id: 'non-ok-stall-source',
    language: 'p5js',
    created_at: '2026-08-08T00:00:00.000Z',
    author: { username: 'nonokstall', name: 'Non-OK stalled source', url: 'https://example.test/nonokstall' },
    code_file: 'sketches/non-ok-stall-source.js',
    status: 'verified',
    runtime: { status: 'runs' },
    tsubuyaki: { code_chars: 12 },
    summary: 'A source endpoint that sends an error status and never completes its body.',
  },
  {
    id: 'non-ok-match-source',
    language: 'p5js',
    created_at: '2026-08-09T00:00:00.000Z',
    author: { username: 'nonokmatch', name: 'Non-OK matching source', url: 'https://example.test/nonokmatch' },
    code_file: 'sketches/non-ok-match-source.js',
    status: 'verified',
    runtime: { status: 'runs' },
    tsubuyaki: { code_chars: 12 },
    summary: 'A source endpoint that remains healthy beside the stalled error response.',
  },
];

test('a non-OK response with a stalled body is canceled before retrying', { timeout: 30_000 }, async () => {
  let resolveClosed;
  const responseClosed = new Promise(resolve => { resolveClosed = resolve; });
  const { server, url } = await startStaticSite({
    handleRequest(req, res) {
      if (req.url === '/data/sketches.json') {
        res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(nonOkStallSketches));
        return true;
      }
      if (req.url === '/sketches/non-ok-stall-source.js') {
        res.once('close', () => resolveClosed(true));
        res.writeHead(503, {
          'content-length': '100',
          'content-type': 'text/plain; charset=utf-8',
        });
        res.flushHeaders();
        return true;
      }
      if (req.url !== '/sketches/non-ok-match-source.js') return false;
      res.writeHead(200, { 'content-type': 'application/javascript; charset=utf-8' });
      res.end('const nonOkMatchMarker = true;');
      return true;
    },
  });
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  try {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(`${url}?q=nonokmatchmarker`, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => document.querySelectorAll('#grid .card').length === 1, null, { timeout: 2_000 });
    const canceled = await Promise.race([
      responseClosed,
      new Promise(resolve => setTimeout(() => resolve(false), 1_500)),
    ]);
    assert.equal(canceled, true, 'the stalled non-OK response must be canceled before retrying');
    await context.close();
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
});
