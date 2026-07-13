# Archive admission

The ingestion pipeline is fail-closed: `fetched → extracted → classified → verified → admitted`. Fetching writes exact source and private metadata only to `.work/candidates/`. It does not publish code or records. `admit_candidates.mjs` runs the declared browser runtime (both runtimes only for ambiguous input) and atomically publishes only a clean run that creates a canvas and sends the shared ready message.

Accepted languages are `p5js` and `processing`. Accepted records require nested runtime metadata: engine, pinned engine version, `runs` status, canvas count, and verification timestamp. Rejections remain outside `site/` with one of `invalid-source`, `runtime-error`, `no-canvas`, `unsupported-feature`, `ambiguous-language`, or `infrastructure-error`; infrastructure failures are retryable and never admitted.

Artist source is not repaired or converted. New Processing records use `.pde`; p5.js uses `.js`. The iframe remains sandboxed with `allow-scripts` only.

Processing.js 1.6.6 is self-hosted from the upstream `processing-js` 1.6.6 package. SHA-256: `77c4b21f18482e08984ee9e7bc74a86c23fc6bc592062ab940a05ea74ed8f355`.
