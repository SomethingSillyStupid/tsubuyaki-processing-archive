# Ops notes (2026-07-23 incident + earlier)

Handoff notes for whatever agent or human maintains this repo next. The
project was originally built by OpenAI Codex; the 2026-07-20 and 2026-07-23
repairs were done by Hermes Agent (kimi-k3). No secrets in here; the X bearer
token lives only in GitHub Secrets as `X_BEARER_TOKEN`.

## 2026-07-23: X API credits exhausted + one unverifiable sketch

Two independent failures stacked:

1. **X API HTTP 402 "credits depleted"** killed every scheduled run at the
   fetch step from 2026-07-22 ~04:00 UTC onward. Fetch state only persists on
   a successful commit, so no candidates were lost — the backlog refetches
   once credits are topped up. This is a billing condition, not a code bug;
   fail-closed behaved correctly.
2. Before credits ran out, the 2026-07-22 03:43 UTC run already failed
   verification on sketch 2076113590977974481 (@hisadan, P3D, ~633k
   rotateX+point calls per frame). Diagnosis: the sketch starves the
   renderer's main thread so hard that its frames take seconds-to-minutes
   under headless SwiftShader, and (a) the runner's ready signal could not be
   observed by the probe (passive waits — waitForFunction polling, CDP
   bindings, postMessage to the top page — all stall; only repeated active
   frame.evaluate calls pump the frame's task queue and get slots), and
   (b) the sketch blooms only after ~200 frames (t += PI/400), so it shows
   no visible pixels for 10+ minutes of wall time in software GL. It was
   removed per the admission policy (a sketch visitors can't see render is
   effectively blank); source remains in git history.

Probe/runner hardening that came out of it (this commit):

- `site/runner.js`: every `send()` now also mirrors the message into
  `window.__tsubuyakiResult`, and the Processing ready signal comes from a
  repeating frameCount watch (250ms interval, 15s dead-loop guard) instead of
  a one-shot 600ms timer that misfires under starvation.
- `scripts/runtime_probe_worker.mjs`: waits are done by a `pump()` helper —
  repeated frame.evaluate calls (capped at 4 in flight, self-swallowing on
  teardown) that both observe `window.__tsubuyakiResult` and keep the starved
  frame's task queue moving. Pixel sampling budget scales with the probe
  timeout (min(timeout/2, 30s), clamped to finish inside the caller's hard
  timeout).
- Do NOT try screenshot-based blank detection: an untouched p5 canvas
  composites as semi-transparent gray, so screenshots cannot tell blank from
  drawn. toDataURL-vs-blank-canvas is the only exact test. WebGL canvases
  without preserveDrawingBuffer read transparent between frames — heavy GL
  sketches that need minutes to show pixels are unverifiable by any in-window
  pixel probe and will be removed on detection, like this one.

## What broke (2026-07-18 → 2026-07-20)

Every scheduled `Update archive` run failed for ~2.5 days. Symptom: site
frozen at Jul 17 content, runs failing after ~44 min at step "Fetch
candidates, verify, and admit fail-closed" with:

    Error: 17 admitted sketch(es) failed verification

Cause chain:

1. Commit 1b3cd5e (Jul 17, "fix: restore visible output for p5 sketches")
   added a rendered-pixel check to `scripts/runtime_probe_worker.mjs`.
2. The verify step checks the WHOLE admitted corpus, not just new
   candidates, and 17 already-admitted sketches render blank, so the run
   died before the commit step. New admissions (~12/run) were discarded.
3. Of the 17:
   - 13 were corrupted at ingestion: their draw callback is commented out
     by a literal `https://t.co/zuB9SSxcnY(B=>...)` artifact in the
     archived source. `https:` parses as a JS label and `//...` comments
     out the rest of the line, so the sketch runs clean, creates a canvas,
     and draws nothing. Blank by construction; not repairable client-side.
     All 13 were by the same author (きんぞ / TakagiHitoshi). If a salvage
     pass is ever wanted, re-fetch those tweet IDs from the X API and
     re-extract; the originals may or may not be clean (authors remixing
     from displayed tweet text would carry the artifact too). Removed
     sketches remain in git history (commit 809920d's parent).
   - 1 was interaction-only (`mousePressed` pushes points; nothing draws
     without input). Policy decision: interaction-only sketches are out of
     scope for this archive; the admission check rejects them as
     `no-render`. Removed for consistency.
   - 3 were legitimate sketches with flaky blank windows (slow first paint
     on a loaded runner; one recreates its canvas mid-loop). Kept.

## The fix (commit 809920d)

- Removed the 14 unrecoverable sketches (sketches.json entries, source
  files, preview files; artifacts regenerated).
- `runtime_probe_worker.mjs` now re-samples canvas pixels for up to 7s
  after the ready signal (650ms interval) instead of a single shot. A
  truly blank canvas stays blank for the whole window, so the check stays
  fail-closed; slow/flaky first paint no longer kills the run.
- Sampling is skipped when the message is `tsubuyaki-error` (sketch
  already failed; keeps the delayed-exception test within its timeout).

## Maintenance cheat sheet

Probe one sketch locally:

    node scripts/runtime_probe_worker.mjs site/sketches/<id>.js p5js 10000 1500

Run the test suite (node --test):

    npm test

Regenerate site/data/latest.json, feed.xml, sitemap.xml after touching
sketches.json:

    python3 scripts/generate_site_artifacts.py

Full corpus verification (what CI gates on; takes ~40 min):

    npm run verify:runtime

Trigger an update run manually:

    gh workflow run update-archive.yml

If CI fails with "N admitted sketch(es) failed verification": download the
job log (`gh api repos/<owner>/<repo>/actions/jobs/<job-id>/logs`), grep
for `no-render` / `runtime-error` / `no-canvas`, then decide per sketch:
remove (corrupted/interactive) or improve probe tolerance (flaky).
Verification is sequential and fail-closed on the first N failures, so one
rotten sketch blocks all publishing.

## Conventions worth keeping

- Artist source is never repaired or converted; admission is fail-closed
  (docs/archive-admission.md). Removal + git history is the remedy for
  corrupted admissions, not source edits.
- p5.js minified golf source: braces around nested loops, avoid modern
  golf syntax like `??=` (breaks the p5.js Web Editor with _LP0 errors).
- site/vendor runtimes are pinned and self-hosted; do not hotlink CDNs.
