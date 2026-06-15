#!/usr/bin/env python3
"""Fetch recent #つぶやきProcessing posts from X and archive runnable p5.js sketches.

Requires X_BEARER_TOKEN in the environment. Uses only Python stdlib plus optional
ffmpeg for preview generation.
"""
from __future__ import annotations

import argparse
import html
import json
import os
import re
import subprocess
import sys
import tempfile
import time
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
DATA_FILE = SITE / "data" / "sketches.json"
SKETCH_DIR = SITE / "sketches"
PREVIEW_DIR = SITE / "previews"
API_URL = "https://api.x.com/2/tweets/search/recent"
DEFAULT_QUERY = "#つぶやきProcessing has:media -is:retweet"
USER_AGENT = "tsubuyaki-processing-archive/0.2 (+https://github.com/)"

CODE_HINTS = (
    "function", "setup", "draw", "createCanvas", "createGraphics", "=>",
    "for(", "for (", "let ", "const ", "var ", "noise(", "random(", "circle(", "rect(", "line(", "p5"
)
URL_RE = re.compile(r"https?://\S+")
HASHTAG_RE = re.compile(r"(?:^|\s)#\S+")
MENTION_RE = re.compile(r"(?:^|\s)@\w+")
WS_RE = re.compile(r"\s+")

@dataclass
class FetchResult:
    data: dict[str, Any]
    status: int


def log(msg: str) -> None:
    print(msg, file=sys.stderr)


def load_json(path: Path, default: Any) -> Any:
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, data: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def api_get(url: str, token: str) -> FetchResult:
    req = Request(url, headers={
        "Authorization": f"Bearer {token}",
        "User-Agent": USER_AGENT,
    })
    try:
        with urlopen(req, timeout=30) as resp:
            body = resp.read().decode("utf-8")
            return FetchResult(json.loads(body), resp.status)
    except HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"X API HTTP {e.code}: {body[:1200]}") from e
    except URLError as e:
        raise RuntimeError(f"X API network error: {e}") from e


def search_recent(token: str, query: str, max_results: int) -> dict[str, Any]:
    params = {
        "query": query,
        "max_results": str(max(10, min(max_results, 100))),
        "expansions": "author_id,attachments.media_keys",
        "tweet.fields": "created_at,entities,attachments,lang,possibly_sensitive",
        "user.fields": "username,name,profile_image_url",
        "media.fields": "type,url,preview_image_url,variants,width,height,duration_ms",
    }
    url = API_URL + "?" + urlencode(params)
    return api_get(url, token).data


def line_looks_like_code(line: str) -> bool:
    stripped = line.strip()
    if not stripped:
        return False
    if any(h in stripped for h in CODE_HINTS):
        return True
    return bool(re.match(r"^(\w+\s*=|draw\s*=|setup\s*=|function\s+|for\s*\(|if\s*\(|while\s*\()", stripped))


def normalize_social_text(text: str) -> str:
    t = html.unescape(text).replace("\u00a0", " ").strip()
    t = URL_RE.sub("", t)
    t = HASHTAG_RE.sub("", t)
    t = t.replace("#つぶやきProcessing", "")
    t = MENTION_RE.sub("", t)
    t = t.replace("“", '"').replace("”", '"').replace("‘", "'").replace("’", "'")
    return t.strip()


def extract_title(text: str, username: str, tweet_id: str) -> str:
    cleaned = normalize_social_text(text)
    for raw in cleaned.splitlines():
        line = raw.strip().strip("「」『』\"'")
        if line and not line_looks_like_code(line) and len(line) <= 80:
            return line
    return f"@{username} / {tweet_id}"


def normalize_code(text: str) -> str:
    """Extract likely p5 code while preserving the artist's code as much as possible."""
    t = normalize_social_text(text)
    lines = [ln.rstrip() for ln in t.splitlines()]
    start = 0
    for i, line in enumerate(lines):
        if line_looks_like_code(line):
            start = i
            break
    lines = lines[start:]
    return "\n".join(lines).strip()


def looks_like_code(code: str) -> bool:
    if len(code) < 20:
        return False
    return any(h in code for h in CODE_HINTS)


def safe_slug(value: str) -> str:
    return re.sub(r"[^A-Za-z0-9_.-]+", "-", value).strip("-")[:120]


def status_for_code(code: str) -> str:
    if not code:
        return "no-code"
    if not looks_like_code(code):
        return "manual-review"
    # Lightweight brace sanity, not a JS parser.
    if abs(code.count("{") - code.count("}")) > 2:
        return "manual-review"
    return "unverified"


def pick_video_variant(media: dict[str, Any]) -> str | None:
    variants = media.get("variants") or []
    mp4s = [v for v in variants if v.get("content_type") == "video/mp4" and v.get("url")]
    if not mp4s:
        return None
    # Prefer a small-ish bitrate for archive previews.
    def bitrate(v: dict[str, Any]) -> int:
        return int(v.get("bit_rate") or 0)
    mp4s.sort(key=bitrate)
    nonzero = [v for v in mp4s if bitrate(v) > 0]
    return (nonzero[0] if nonzero else mp4s[0])["url"]


def download(url: str, dest: Path) -> None:
    req = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(req, timeout=60) as resp:
        dest.write_bytes(resp.read())


def have_ffmpeg() -> bool:
    return subprocess.run(["bash", "-lc", "command -v ffmpeg >/dev/null"], stdout=subprocess.DEVNULL).returncode == 0


def have_webpmux() -> bool:
    return subprocess.run(["bash", "-lc", "command -v webpmux >/dev/null"], stdout=subprocess.DEVNULL).returncode == 0


def make_still_preview(motion_preview: str | None, tweet_id: str, dry_run: bool) -> str | None:
    if not motion_preview:
        return None
    if motion_preview.startswith("http"):
        return motion_preview
    source = SITE / motion_preview
    target = PREVIEW_DIR / f"{tweet_id}-still.webp"
    if target.exists() and target.stat().st_size > 0:
        return str(target.relative_to(SITE))
    if target.exists():
        target.unlink()
    if dry_run or not source.exists():
        return motion_preview
    if source.suffix.lower() == ".webp" and have_webpmux():
        subprocess.run(["webpmux", "-get", "frame", "1", str(source), "-o", str(target)], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        return str(target.relative_to(SITE))
    if have_ffmpeg():
        subprocess.run(["ffmpeg", "-y", "-i", str(source), "-frames:v", "1", str(target)], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        return str(target.relative_to(SITE))
    return motion_preview


def make_preview(media: dict[str, Any], tweet_id: str, dry_run: bool) -> str | None:
    PREVIEW_DIR.mkdir(parents=True, exist_ok=True)
    target = PREVIEW_DIR / f"{tweet_id}.webp"
    if target.exists():
        return str(target.relative_to(SITE))
    if media.get("type") in {"animated_gif", "video"}:
        url = pick_video_variant(media)
        if not url or dry_run or not have_ffmpeg():
            return media.get("preview_image_url")
        with tempfile.TemporaryDirectory() as td:
            src = Path(td) / "source.mp4"
            download(url, src)
            cmd = [
                "ffmpeg", "-y", "-i", str(src),
                "-vf", "fps=15,scale=480:-1:flags=lanczos",
                "-c:v", "libwebp", "-loop", "0", "-lossless", "0", "-q:v", "68",
                "-an", "-vsync", "0", str(target),
            ]
            subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            return str(target.relative_to(SITE))
    return media.get("url") or media.get("preview_image_url")


def build_record(tweet: dict[str, Any], user: dict[str, Any], media: dict[str, Any] | None, dry_run: bool) -> tuple[dict[str, Any], str] | None:
    tweet_id = tweet["id"]
    code = normalize_code(tweet.get("text", ""))
    status = status_for_code(code)
    if status == "no-code":
        return None
    username = user.get("username") or "unknown"
    title = extract_title(tweet.get("text", ""), username, tweet_id)
    created_at = tweet.get("created_at") or datetime.now(timezone.utc).isoformat()
    motion_preview = make_preview(media, tweet_id, dry_run) if media else None
    still_preview = make_still_preview(motion_preview, tweet_id, dry_run)
    record = {
        "id": tweet_id,
        "status": status,
        "created_at": created_at,
        "title": title,
        "author": {
            "name": user.get("name") or username,
            "username": username,
            "url": f"https://x.com/{username}",
            "profile_image_url": user.get("profile_image_url"),
        },
        "tweet_url": f"https://x.com/{username}/status/{tweet_id}",
        "code_file": f"sketches/{safe_slug(tweet_id)}.js",
        "preview_file": still_preview,
        "preview_still_file": still_preview,
        "preview_motion_file": motion_preview,
        "summary": "Archived from #つぶやきProcessing.",
        "tags": ["#つぶやきProcessing"],
        "source": "x-api-v2",
        "archived_at": datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
    }
    return record, code


def merge_records(existing: list[dict[str, Any]], new_items: list[tuple[dict[str, Any], str]], dry_run: bool) -> int:
    by_id = {s["id"]: s for s in existing}
    added = 0
    for record, code in new_items:
        if record["id"] in by_id:
            continue
        added += 1
        by_id[record["id"]] = record
        if not dry_run:
            path = SITE / record["code_file"]
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(code.rstrip() + "\n", encoding="utf-8")
    merged = list(by_id.values())
    merged.sort(key=lambda s: s.get("created_at", ""), reverse=True)
    if not dry_run and added:
        save_json(DATA_FILE, merged)
    return added


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--query", default=DEFAULT_QUERY)
    ap.add_argument("--max-results", type=int, default=50)
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--print-json", action="store_true", help="Print fetched candidate records to stdout")
    args = ap.parse_args()

    token = os.environ.get("X_BEARER_TOKEN")
    if not token:
        raise SystemExit("X_BEARER_TOKEN is not set. Store it in env/GitHub Secrets; do not paste it into logs.")

    SKETCH_DIR.mkdir(parents=True, exist_ok=True)
    PREVIEW_DIR.mkdir(parents=True, exist_ok=True)

    payload = search_recent(token, args.query, args.max_results)
    tweets = payload.get("data") or []
    includes = payload.get("includes") or {}
    users = {u["id"]: u for u in includes.get("users", [])}
    media = {m["media_key"]: m for m in includes.get("media", [])}

    candidates: list[tuple[dict[str, Any], str]] = []
    for tweet in tweets:
        user = users.get(tweet.get("author_id"), {})
        keys = ((tweet.get("attachments") or {}).get("media_keys") or [])
        first_media = media.get(keys[0]) if keys else None
        item = build_record(tweet, user, first_media, args.dry_run)
        if item:
            candidates.append(item)

    if args.print_json:
        print(json.dumps([r for r, _ in candidates], ensure_ascii=False, indent=2))

    existing = load_json(DATA_FILE, [])
    added = merge_records(existing, candidates, args.dry_run)
    log(f"Fetched {len(tweets)} tweets; {len(candidates)} candidate sketches; added {added} new records.")
    if payload.get("meta"):
        log("X meta: " + json.dumps(payload["meta"], ensure_ascii=False))
    return 0

if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except RuntimeError as exc:
        print(str(exc), file=sys.stderr)
        raise SystemExit(1)
