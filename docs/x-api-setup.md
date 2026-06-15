# X API setup for Phase 2

The archive updater needs read-only access to recent X posts tagged `#つぶやきProcessing`.

## What we need

A bearer token with access to X API v2 Recent Search:

- Endpoint: `GET /2/tweets/search/recent`
- Query: `#つぶやきProcessing has:media -is:retweet`
- Expansions: `author_id,attachments.media_keys`
- Tweet fields: `created_at,entities,attachments`
- User fields: `username,name,profile_image_url`
- Media fields: `type,url,preview_image_url,variants`

## User setup steps

1. Go to https://developer.x.com/en/portal/dashboard
2. Create or select a Project/App.
3. Confirm your access tier supports Recent Search.
4. Generate/copy the app Bearer Token.
5. In the GitHub repo, go to:

   Settings → Secrets and variables → Actions → New repository secret

6. Add:

   Name: `X_BEARER_TOKEN`

   Value: your bearer token

Do not paste the token into chat. Store it only as a GitHub Actions secret.

## Optional local testing

If using the official `xurl` CLI locally, authenticate outside the agent session, then test:

```bash
xurl auth status
xurl '/2/tweets/search/recent?query=%23%E3%81%A4%E3%81%B6%E3%82%84%E3%81%8DProcessing%20has%3Amedia%20-is%3Aretweet&max_results=10&expansions=author_id,attachments.media_keys&tweet.fields=created_at,entities,attachments&user.fields=username,name,profile_image_url&media.fields=type,url,preview_image_url,variants'
```
