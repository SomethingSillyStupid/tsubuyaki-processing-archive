# #つぶやきProcessing Archive

A public static archive for tweet-sized p5.js sketches tagged `#つぶやきProcessing`.

The site preserves each sketch as local runnable JavaScript while linking back to the original X post and artist profile.

Features:

- Gallery view with sorting, search, and artist filtering
- Still thumbnail previews that animate only on hover/focus
- Sketch detail pages with a live p5.js runner
- Original-code panel with copy button
- Scheduled X API ingestion via GitHub Actions
- GitHub Pages hosting from the static files under `site/`

## Local preview

```bash
cd site
python3 -m http.server 8080
```

Open `http://localhost:8080/`.

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

Real archive update:

```bash
set -a; source ~/.hermes/secrets/tsubuyaki-x.env; set +a
python3 scripts/fetch_x_posts.py --max-results 50
```
