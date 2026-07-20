# Ops notes (2026-07-20 incident + general maintenance)

Handoff notes for whatever agent or human maintains this repo next. The
project was originally built by OpenAI Codex; the 2026-07-20 repair was done
by Hermes Agent (kimi-k3). No secrets in here; the X bearer token lives only
in GitHub Secrets as `X_BEARER_TOKEN`.

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
