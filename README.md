# #つぶやきProcessing Archive

A public static archive for tweet-sized p5.js and Processing sketches tagged `#つぶやきProcessing`.

The site preserves and runs each artist's original source while linking back to the original X post and artist profile. p5.js source is stored as `.js`; Processing source is stored as `.pde` and is not converted to p5.js. Sketches are presented by artist username and date rather than archive-invented titles.

Features:

- Gallery view with sorting, search, artist/language/status filtering, artist permalinks, and load-more pagination
- Verified tsubuyaki metadata: the full sketch source must fit in one standard 280-character tweet
- Still thumbnail previews that animate only on hover/focus
- Sketch detail pages with language-aware p5.js and Processing runners
- Original-source panel with copy button
- Runtime verification metadata for archived sketches
- RSS, latest JSON, and sitemap artifacts
- Scheduled X API ingestion via GitHub Actions
- GitHub Pages hosting from the static files under `site/`

## Local preview

```bash
cd site
python3 -m http.server 8080
```

Open `http://localhost:8080/`.

## Generate static artifacts

```bash
python3 scripts/generate_site_artifacts.py
```

This writes:

- `site/data/latest.json`
- `site/feed.xml`
- `site/sitemap.xml`

## Runtime verification

Runtime verification uses isolated Playwright workers and the same pinned, self-hosted runtimes as the public site. A candidate must create a canvas and remain free of console/page errors through the observation window. Blocking sketches are force-terminated at a hard deadline.

```bash
npm install
npx playwright install chromium
npm run verify:runtime
```

## Secrets

The scheduled ingestion workflow needs an X API bearer token stored in GitHub Secrets as:

```text
X_BEARER_TOKEN
```

See `docs/x-api-setup.md` for setup instructions.

## Attribution / removal policy

This project is intended as an attribution-forward archive and launcher for public `#つぶやきProcessing` sketches. Every archived sketch links to the original post and author profile. Artists can request removal by opening an issue or contacting the repository owner.

## Local ingestion test

Keep the token out of chat/logs. Load it from a private env file:

```bash
scripts/store_x_token.sh
set -a; source ~/.hermes/secrets/tsubuyaki-x.env; set +a
python3 scripts/fetch_x_posts.py --max-results 10 --dry-run --print-json
```

Real archive update stages private candidates, verifies them, and only then admits successful sketches:

```bash
set -a; source ~/.hermes/secrets/tsubuyaki-x.env; set +a
python3 scripts/fetch_x_posts.py --max-results 50 --candidate-dir .work/candidates --state-dir archive_state
node scripts/admit_candidates.mjs --candidate-dir .work/candidates --site-dir site --state-dir archive_state
python3 scripts/generate_site_artifacts.py
npm run verify:runtime
```

Careful backfill / pagination, for manual use only because it consumes more X API credits:

```bash
python3 scripts/fetch_x_posts.py --max-results 100 --pages 3 --dry-run --print-json
python3 scripts/fetch_x_posts.py --max-results 100 --pages 3
```

Continuation controls:

```bash
python3 scripts/fetch_x_posts.py --next-token <token-from-x-meta>
python3 scripts/fetch_x_posts.py --since-id <newest-known-tweet-id>
```
