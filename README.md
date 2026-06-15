# #つぶやきProcessing Archive

A public static archive concept for tweet-sized p5.js sketches tagged `#つぶやきProcessing`.

Phase 1 is a polished static prototype:

- Gallery view with sorting and artist filtering
- Sketch detail view with live p5.js runner
- Original-code panel with copy button
- Mock archive data shaped like the future X ingestion output
- GitHub Pages-ready static files under `site/`

Phase 2 adds scheduled X API ingestion, preview generation, and automated commits via GitHub Actions.

## Local preview

```bash
cd site
python3 -m http.server 8080
```

Open `http://localhost:8080/`.

## Phase 2 secrets

The scheduled ingestion workflow will need an X API bearer token stored in GitHub Secrets as:

```text
X_BEARER_TOKEN
```

See `docs/x-api-setup.md` for setup instructions.

## Attribution / removal policy draft

This project is intended as an attribution-forward archive and launcher for public `#つぶやきProcessing` sketches. Every archived sketch should link to the original post and author profile. Artists can request removal by opening an issue or contacting the repository owner.


## Local ingestion test

Keep the token out of chat/logs. Load it from a private env file:

```bash
scripts/store_x_token.sh
set -a; source ~/.hermes/secrets/tsubuyaki-x.env; set +a
python3 scripts/fetch_x_posts.py --max-results 10 --dry-run --print-json
```

Real archive update:

```bash
set -a; source ~/.hermes/secrets/tsubuyaki-x.env; set +a
python3 scripts/fetch_x_posts.py --max-results 50
```
