#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, resolve } from 'node:path';

const ROOT = resolve(new URL('..', import.meta.url).pathname);
const SITE = join(ROOT, 'site');
const DATA = join(SITE, 'data', 'sketches.json');
const PORT = Number(process.env.PORT || 4173);
const BASE = `http://127.0.0.1:${PORT}`;

const mime = new Map([
  ['.html','text/html; charset=utf-8'], ['.js','text/javascript; charset=utf-8'], ['.json','application/json; charset=utf-8'],
  ['.css','text/css; charset=utf-8'], ['.webp','image/webp'], ['.xml','application/xml; charset=utf-8']
]);

function serve(){
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url || '/', BASE);
      const rel = url.pathname === '/' ? '/index.html' : decodeURIComponent(url.pathname);
      const file = join(SITE, rel);
      if (!file.startsWith(SITE)) throw new Error('bad path');
      const body = await readFile(file);
      res.writeHead(200, {'content-type': mime.get(extname(file)) || 'application/octet-stream'});
      res.end(body);
    } catch {
      res.writeHead(404); res.end('not found');
    }
  });
  return new Promise(resolve => server.listen(PORT, '127.0.0.1', () => resolve(server)));
}

async function main(){
  let playwright;
  try {
    playwright = await import('playwright');
  } catch {
    console.error('Playwright is not installed. Run: npm install && npx playwright install chromium');
    process.exit(2);
  }

  const data = JSON.parse(await readFile(DATA, 'utf8'));
  const server = await serve();
  const browser = await playwright.chromium.launch();
  try {
    for (const sketch of data) {
      const page = await browser.newPage();
      const errors = [];
      page.on('pageerror', err => errors.push(String(err.message || err)));
      page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
      await page.goto(`${BASE}/sketch.html?id=${encodeURIComponent(sketch.id)}`, {waitUntil:'networkidle'});
      await page.waitForTimeout(1800);
      const canvasCount = await page.locator('#runner').evaluate(frame => {
        const doc = frame.contentDocument;
        return doc ? doc.querySelectorAll('canvas').length : 0;
      }).catch(() => 0);
      sketch.runtime_status = errors.length ? 'runtime-error' : (canvasCount ? 'runs' : 'manual-review');
      sketch.runtime_errors = errors.slice(0, 5);
      sketch.runtime_canvas_count = canvasCount;
      sketch.last_verified_at = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
      console.log(`${sketch.id} ${sketch.runtime_status} canvases=${canvasCount} errors=${errors.length}`);
      await page.close();
    }
    await writeFile(DATA, JSON.stringify(data, null, 2) + '\n');
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch(err => { console.error(err); process.exit(1); });
