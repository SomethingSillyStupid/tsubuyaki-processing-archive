#!/usr/bin/env python3
"""Re-fetch and safely migrate every admitted sketch from authoritative X text."""
from __future__ import annotations

import argparse
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path
from urllib.parse import urlencode

from fetch_x_posts import api_get, classify_language, extract_source

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "site/data/sketches.json"
LOOKUP_URL = "https://api.x.com/2/tweets"


def lookup_tweets(token: str, ids: list[str]) -> tuple[dict[str, dict], list[dict]]:
    if not ids or len(ids) > 100:
        raise ValueError("X lookup requires between 1 and 100 IDs")
    url = LOOKUP_URL + "?" + urlencode({"ids": ",".join(ids), "tweet.fields": "text"})
    payload = api_get(url, token).data
    return {item["id"]: item for item in payload.get("data", [])}, payload.get("errors", [])


def stage_authoritative(records: list[dict], tweets: dict[str, dict], candidate_dir: Path) -> dict[str, int]:
    missing = [record["id"] for record in records if record["id"] not in tweets]
    if missing:
        raise RuntimeError(f"Authoritative X source unavailable for {len(missing)} record(s): {','.join(missing)}")
    shutil.rmtree(candidate_dir, ignore_errors=True)
    counts = {"p5js": 0, "processing": 0, "ambiguous": 0}
    for record in records:
        tweet = tweets[record["id"]]
        source = extract_source(tweet.get("text", "")).source
        language = classify_language(source)
        ext = "pde" if language == "processing" else "js"
        directory = candidate_dir / record["id"]
        directory.mkdir(parents=True)
        (directory / f"source.{ext}").write_text(source, encoding="utf-8")
        metadata = {"id": record["id"], "language": language, "tweet_url": record.get("tweet_url")}
        (directory / "candidate.json").write_text(json.dumps(metadata, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        counts[language] += 1
    return counts


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--candidate-dir", type=Path, default=ROOT / ".work/language-migration")
    parser.add_argument("--fetch-only", action="store_true")
    args = parser.parse_args()
    token = os.environ.get("X_BEARER_TOKEN")
    if not token:
        raise SystemExit("X_BEARER_TOKEN is not set")
    records = json.loads(DATA.read_text(encoding="utf-8"))
    tweets, errors = lookup_tweets(token, [record["id"] for record in records])
    unavailable = [record["id"] for record in records if record["id"] not in tweets]
    if unavailable:
        print(json.dumps({"total": len(records), "fetched": len(tweets), "unavailable": unavailable, "x_errors": errors}, ensure_ascii=False), file=sys.stderr)
        return 2
    counts = stage_authoritative(records, tweets, args.candidate_dir)
    print(json.dumps({"total": len(records), "fetched": len(tweets), "classified": counts, "unavailable": []}))
    if not args.fetch_only:
        subprocess.run(["node", str(ROOT / "scripts/migrate_existing.mjs"), "--candidate-dir", str(args.candidate_dir)], cwd=ROOT, check=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
