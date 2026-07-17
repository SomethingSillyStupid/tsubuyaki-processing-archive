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
RECENT_SEARCH_URL = "https://api.x.com/2/tweets/search/recent"
ARCHIVE_SEARCH_URL = "https://api.x.com/2/tweets/search/all"
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
UTC_RFC3339_RE = re.compile(r"^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$")

@dataclass
class FetchResult:
    data: dict[str, Any]
    status: int


@dataclass(frozen=True)
class ExtractionResult:
    source: str
    removed_prefix: str = ""
    removed_suffix: str = ""


def log(msg: str) -> None:
    print(msg, file=sys.stderr)


def load_json(path: Path, default: Any) -> Any:
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, data: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def api_get(url: str, token: str, max_attempts: int = 4) -> FetchResult:
    req = Request(url, headers={
        "Authorization": f"Bearer {token}",
        "User-Agent": USER_AGENT,
    })
    for attempt in range(max_attempts):
        try:
            with urlopen(req, timeout=30) as resp:
                body = resp.read().decode("utf-8")
                return FetchResult(json.loads(body), resp.status)
        except HTTPError as e:
            body = e.read().decode("utf-8", errors="replace")
            transient = e.code in {429, 500, 502, 503, 504}
            if transient and attempt + 1 < max_attempts:
                retry_after = e.headers.get("Retry-After")
                reset = e.headers.get("x-rate-limit-reset")
                if retry_after is not None:
                    delay = max(0.0, float(retry_after))
                elif reset is not None:
                    delay = max(0.0, min(60.0, float(reset) - time.time() + 0.25))
                else:
                    delay = min(8.0, float(2 ** attempt))
                log(f"X API HTTP {e.code}; retrying in {delay:.2f}s (attempt {attempt + 2}/{max_attempts})")
                time.sleep(delay)
                continue
            raise RuntimeError(f"X API HTTP {e.code}: {body[:1200]}") from e
        except URLError as e:
            if attempt + 1 < max_attempts:
                delay = min(8.0, float(2 ** attempt))
                log(f"X API network error; retrying in {delay:.2f}s (attempt {attempt + 2}/{max_attempts})")
                time.sleep(delay)
                continue
            raise RuntimeError(f"X API network error: {e}") from e
    raise RuntimeError("X API request exhausted retries")


def validate_archive_bounds(start_time: str, end_time: str) -> tuple[datetime, datetime]:
    if not UTC_RFC3339_RE.fullmatch(start_time) or not UTC_RFC3339_RE.fullmatch(end_time):
        raise ValueError("Archive bounds must be UTC RFC3339 timestamps ending in Z")
    start = datetime.fromisoformat(start_time[:-1] + "+00:00")
    end = datetime.fromisoformat(end_time[:-1] + "+00:00")
    if start >= end:
        raise ValueError("Archive start_time must be earlier than end_time")
    return start, end


def search_posts(
    token: str,
    query: str,
    max_results: int,
    *,
    archive: bool = False,
    start_time: str | None = None,
    end_time: str | None = None,
    next_token: str | None = None,
    since_id: str | None = None,
) -> dict[str, Any]:
    if archive and not (start_time and end_time):
        raise ValueError("Full-archive search requires start_time and end_time")
    if archive:
        assert start_time is not None and end_time is not None
        validate_archive_bounds(start_time, end_time)
    params = {
        "query": query,
        "max_results": str(max(10, min(max_results, 500 if archive else 100))),
        "expansions": "author_id,attachments.media_keys",
        "tweet.fields": "created_at,entities,attachments,lang,possibly_sensitive",
        "user.fields": "username,name,profile_image_url",
        "media.fields": "type,url,preview_image_url,variants,width,height,duration_ms",
    }
    if next_token:
        params["next_token"] = next_token
    if since_id:
        params["since_id"] = since_id
    if archive:
        assert start_time is not None and end_time is not None
        params["start_time"] = start_time
        params["end_time"] = end_time
    url = (ARCHIVE_SEARCH_URL if archive else RECENT_SEARCH_URL) + "?" + urlencode(params)
    return api_get(url, token).data


def search_recent(token: str, query: str, max_results: int, next_token: str | None = None, since_id: str | None = None) -> dict[str, Any]:
    return search_posts(token, query, max_results, next_token=next_token, since_id=since_id)


def line_looks_like_code(line: str) -> bool:
    stripped = line.strip()
    if not stripped:
        return False
    # Mentions and hashtag-only lines are social wrapping even when a marker
    # contains the substring "p5" from CODE_HINTS.
    if stripped.startswith("@") or re.fullmatch(r"(?:#[^\s#]+)(?:\s+#[^\s#]+)*", stripped):
        return False
    if any(h in stripped for h in CODE_HINTS):
        return True
    # Processing sketches commonly put typed globals before setup.  Starting at
    # `void setup` silently deletes those declarations and changes the program.
    if re.match(r"^(?:(?:float|double|int|long|boolean|byte|char|color|String|PVector)\s+[A-Za-z_$]\w*(?:\s*[=,;\[])|(?:public|private|static)\s+)", stripped):
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


def restore_code_autolinks(text: str, entities: dict[str, Any] | None) -> str:
    """Restore identifier-like tokens that X rewrote as t.co links."""
    replacements: list[tuple[int, int, str]] = []
    for entity in (entities or {}).get("urls", []):
        if entity.get("media_key"):
            continue
        display = str(entity.get("display_url") or "")
        expanded = str(entity.get("expanded_url") or "")
        if not re.fullmatch(r"[A-Za-z_$]\w*(?:\.[A-Za-z_$]\w*)+", display):
            continue
        if expanded not in {f"http://{display}", f"https://{display}"}:
            continue
        start, end = entity.get("start"), entity.get("end")
        if not isinstance(start, int) or not isinstance(end, int) or text[start:end] != entity.get("url"):
            continue
        replacements.append((start, end, display))
    for start, end, display in sorted(replacements, reverse=True):
        text = text[:start] + display + text[end:]
    return text


def extract_source(text: str) -> ExtractionResult:
    """Separate only boundary social wrapping; never rewrite source tokens."""
    t = html.unescape(text).replace("\u00a0", " ").strip()
    removed: list[str] = []

    # A bare campaign marker is social text only at the beginning.  The same
    # bytes inside a string (notably in for-loop update expressions) are code.
    marker = re.match(r"^#つぶやきProcessing(?:\s+|$)", t)
    if marker:
        removed.append(marker.group(0).strip())
        t = t[marker.end():]

    lines = [ln.rstrip() for ln in t.splitlines()]
    start = 0
    for i, line in enumerate(lines):
        if line_looks_like_code(line):
            start = i
            break
    prefix = "\n".join(lines[:start]).strip()
    if prefix:
        removed.insert(0, prefix)
    source = "\n".join(lines[start:]).strip()

    suffix_parts: list[str] = []
    # X appends its media t.co URL after whitespace.  Restrict this to t.co at
    # the source boundary instead of deleting URL-looking text throughout code.
    media = re.search(r"\s+https?://t\.co/\S+\s*$", source)
    if media:
        suffix_parts.append(source[media.start():].strip())
        source = source[:media.start()].rstrip()

    # This known tweet has a weather emoji between a syntactically complete
    # closing brace and its media URL.  Strip symbol/variation-selector runs at
    # that boundary only; malformed punctuation and strings remain untouched.
    social_emoji = re.search(r"(?<=\})[\u2600-\u27bf\ufe0f]+$", source, flags=re.I)
    if social_emoji:
        suffix_parts.insert(0, social_emoji.group(0))
        source = source[:social_emoji.start()].rstrip()

    # Remove only complete trailing lines made entirely of hashtags.  This is
    # deliberately line- and boundary-aware so hashtag text inside strings or
    # comments in the source remains byte-for-byte intact.
    source_lines = source.splitlines()
    social_lines: list[str] = []
    while source_lines and re.fullmatch(r"(?:#[^\s#]+)(?:\s+#[^\s#]+)*", source_lines[-1].strip()):
        social_lines.insert(0, source_lines.pop().strip())
    if social_lines:
        suffix_parts.insert(0, "\n".join(social_lines))
        source = "\n".join(source_lines).rstrip()

    tail = re.search(r"(?:\s+//#つぶやきProcessing|\s+#つぶやきProcessing)\s*$", source)
    if tail:
        suffix_parts.insert(0, source[tail.start():].strip())
        source = source[:tail.start()].rstrip()
    return ExtractionResult(source, "\n".join(removed), " ".join(suffix_parts))


def normalize_code(text: str) -> str:
    """Backward-compatible name for exact source extraction."""
    return extract_source(text).source


def _without_comments(code: str) -> str:
    return re.sub(r"/\*.*?\*/|//[^\n]*", "", code, flags=re.S)


def classify_language(code: str) -> str:
    """Classify only from strong, deterministic syntax signals."""
    clean = _without_comments(code)
    processing = bool(re.search(r"\bvoid\s+(?:setup|draw)\s*\(|\b(?:float|int|boolean|color|PVector|String)\s+[A-Za-z_$]\w*|\bsize\s*\(", clean))
    p5js = bool(re.search(r"\bfunction\s+(?:setup|draw)\s*\(|\b(?:setup|draw)\s*=.*=>|\bcreateCanvas\s*\(|\b(?:let|const|var)\s+[A-Za-z_$]", clean, flags=re.S))
    if processing == p5js:
        return "ambiguous"
    return "processing" if processing else "p5js"


def validate_accepted_record(record: dict[str, Any]) -> list[str]:
    errors: list[str] = []
    if record.get("language") not in {"p5js", "processing"}:
        errors.append("language must be p5js or processing")
    runtime = record.get("runtime")
    required = {"engine", "engine_version", "status", "canvas_count", "verified_at"}
    if not isinstance(runtime, dict) or not required.issubset(runtime):
        errors.append("complete runtime metadata is required")
    elif runtime.get("status") != "runs" or int(runtime.get("canvas_count", 0)) < 1:
        errors.append("runtime must be a successful canvas run")
    return errors


def looks_like_code(code: str) -> bool:
    if len(code) < 20:
        return False
    return any(h in code for h in CODE_HINTS)


def countable_tweet_text(text: str) -> str:
    """Return tweet text for 280-char verification, excluding X media/link URLs."""
    return URL_RE.sub("", html.unescape(text or "")).strip()


def char_count(value: str) -> int:
    # Python counts Unicode code points here, matching the archive's practical
    # definition closely enough for public verification metadata.
    return len(value)


def verify_tsubuyaki(text: str, code: str) -> dict[str, Any]:
    cleaned_tweet = countable_tweet_text(text)
    tweet_chars = char_count(cleaned_tweet)
    code_chars = char_count(code)
    checks = {
        "tweet_chars": tweet_chars,
        "code_chars": code_chars,
        "tweet_under_280": tweet_chars <= 280,
        "code_under_280": code_chars <= 280,
        "code_detected": looks_like_code(code),
        "single_tweet_full_code": tweet_chars <= 280 and code_chars <= 280 and looks_like_code(code),
    }
    checks["status"] = "verified" if checks["single_tweet_full_code"] else "not-tsubuyaki"
    return checks


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
    return "pending-runtime"


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


def choose_webp_still_frame(source: Path) -> int:
    """Pick a later, visually richer frame for static thumbnails."""
    try:
        info = subprocess.run(["webpmux", "-info", str(source)], text=True, capture_output=True, check=True).stdout
    except subprocess.CalledProcessError:
        return 1
    count_match = re.search(r"Number of frames:\s*(\d+)", info)
    count = int(count_match.group(1)) if count_match else 1
    if count <= 1:
        return 1
    rows: list[tuple[int, int]] = []
    for line in info.splitlines():
        row = re.match(r"\s*(\d+):.*?\s+(\d+)\s+lossy\s*$", line)
        if row:
            rows.append((int(row.group(1)), int(row.group(2))))
    lo = max(2, int(count * 0.25))
    hi = max(lo, int(count * 0.85))
    window = [row for row in rows if lo <= row[0] <= hi]
    if window:
        return max(window, key=lambda row: row[1])[0]
    return max(2, int(count * 0.4))


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
        frame = choose_webp_still_frame(source)
        subprocess.run(["webpmux", "-get", "frame", str(frame), str(source), "-o", str(target)], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        if target.exists() and target.stat().st_size > 0:
            return str(target.relative_to(SITE))
    if have_ffmpeg():
        subprocess.run(["ffmpeg", "-y", "-i", str(source), "-frames:v", "1", str(target)], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        return str(target.relative_to(SITE))
    return motion_preview


def make_preview(media: dict[str, Any], tweet_id: str, dry_run: bool) -> str | None:
    if not dry_run:
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
                "-vf", "fps=12,scale=360:-1:flags=lanczos",
                "-c:v", "libwebp", "-loop", "0", "-lossless", "0", "-q:v", "58",
                "-an", "-vsync", "0", str(target),
            ]
            subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            return str(target.relative_to(SITE))
    return media.get("url") or media.get("preview_image_url")


def build_record(tweet: dict[str, Any], user: dict[str, Any], media: dict[str, Any] | None, dry_run: bool) -> tuple[dict[str, Any], str] | None:
    tweet_id = tweet["id"]
    tweet_text = restore_code_autolinks(tweet.get("text", ""), tweet.get("entities"))
    code = extract_source(tweet_text).source
    tsubuyaki = verify_tsubuyaki(tweet_text, code)
    if not tsubuyaki["single_tweet_full_code"]:
        return None
    status = status_for_code(code)
    if status == "no-code":
        return None
    username = user.get("username") or "unknown"
    title = None
    created_at = tweet.get("created_at") or datetime.now(timezone.utc).isoformat()
    motion_preview = make_preview(media, tweet_id, dry_run) if media else None
    still_preview = make_still_preview(motion_preview, tweet_id, dry_run)
    language = classify_language(code)
    extension = "pde" if language == "processing" else "js"
    record = {
        "id": tweet_id,
        "status": status,
        "language": language,
        "created_at": created_at,
        "title": title,
        "author": {
            "name": user.get("name") or username,
            "username": username,
            "url": f"https://x.com/{username}",
            "profile_image_url": user.get("profile_image_url"),
        },
        "tweet_url": f"https://x.com/{username}/status/{tweet_id}",
        "code_file": f"sketches/{safe_slug(tweet_id)}.{extension}",
        "preview_file": still_preview,
        "preview_still_file": still_preview,
        "preview_motion_file": motion_preview,
        "summary": f"Verified single-tweet {'Processing' if language == 'processing' else 'p5.js'} sketch from #つぶやきProcessing.",
        "tsubuyaki": tsubuyaki,
        "tags": ["#つぶやきProcessing"],
        "source": "x-api-v2",
        "archived_at": datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
    }
    return record, code


def stage_candidates(items: list[tuple[dict[str, Any], str]], candidate_dir: Path) -> int:
    """Write private candidates only; admission owns every public write."""
    staged = 0
    for record, source in items:
        directory = candidate_dir / safe_slug(record["id"])
        directory.mkdir(parents=True, exist_ok=True)
        extension = "pde" if record["language"] == "processing" else "js"
        (directory / f"source.{extension}").write_text(source, encoding="utf-8")
        save_json(directory / "candidate.json", record)
        staged += 1
    return staged


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
        subprocess.run([sys.executable, str(ROOT / "scripts" / "generate_site_artifacts.py")], check=True)
    return added


def build_arg_parser() -> argparse.ArgumentParser:
    ap = argparse.ArgumentParser()
    ap.add_argument("--query", default=DEFAULT_QUERY)
    ap.add_argument("--max-results", type=int, default=50)
    ap.add_argument("--pages", type=int, default=1, help="Result pages to fetch; use sparingly to conserve X API credits")
    ap.add_argument("--max-posts", type=int, default=1000, help="Fail closed before staging if fetched posts exceed this bound")
    ap.add_argument("--archive", action="store_true", help="Use paid full-archive search instead of recent search")
    ap.add_argument("--start-time", help="Inclusive full-archive lower bound in ISO 8601 UTC")
    ap.add_argument("--end-time", help="Exclusive full-archive upper bound in ISO 8601 UTC")
    ap.add_argument("--next-token", help="Start from a specific X search pagination token")
    ap.add_argument("--since-id", help="Only return posts newer than this tweet ID (recent search only)")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--candidate-dir", type=Path, default=ROOT / ".work" / "candidates")
    ap.add_argument("--state-dir", type=Path, default=ROOT / "archive_state")
    ap.add_argument("--print-json", action="store_true", help="Print fetched candidate records to stdout")
    return ap


def main() -> int:
    ap = build_arg_parser()
    args = ap.parse_args()
    if args.archive and not (args.start_time and args.end_time):
        ap.error("--archive requires --start-time and --end-time")
    if not args.archive and (args.start_time or args.end_time):
        ap.error("--start-time and --end-time require --archive")
    if args.archive and args.since_id:
        ap.error("--since-id is only supported for recent search")
    if args.max_posts < 1:
        ap.error("--max-posts must be positive")

    token = os.environ.get("X_BEARER_TOKEN")
    if not token:
        raise SystemExit("X_BEARER_TOKEN is not set. Store it in env/GitHub Secrets; do not paste it into logs.")

    all_tweets: list[dict[str, Any]] = []
    users: dict[str, dict[str, Any]] = {}
    media: dict[str, dict[str, Any]] = {}
    payload: dict[str, Any] = {}
    next_token = args.next_token
    pages = max(1, min(args.pages, 10))
    for page_num in range(pages):
        payload = search_posts(
            token,
            args.query,
            args.max_results,
            archive=args.archive,
            start_time=args.start_time,
            end_time=args.end_time,
            next_token=next_token,
            since_id=args.since_id,
        )
        tweets = payload.get("data") or []
        if len(all_tweets) + len(tweets) > args.max_posts:
            raise RuntimeError(f"Fetched post count would exceed --max-posts={args.max_posts}; nothing was staged")
        includes = payload.get("includes") or {}
        users.update({u["id"]: u for u in includes.get("users", [])})
        media.update({m["media_key"]: m for m in includes.get("media", [])})
        all_tweets.extend(tweets)
        next_token = (payload.get("meta") or {}).get("next_token")
        if not next_token:
            break
        log(f"Fetched page {page_num + 1}; next_token available for backfill continuation.")

    candidates: list[tuple[dict[str, Any], str]] = []
    skipped_not_tsubuyaki = 0
    for tweet in all_tweets:
        author_id = tweet.get("author_id")
        user = users.get(str(author_id), {}) if author_id is not None else {}
        keys = ((tweet.get("attachments") or {}).get("media_keys") or [])
        first_media = media.get(keys[0]) if keys else None
        # Fetching stages metadata/source only. Media publication belongs to the
        # atomic admission step, so this path has no public-site side effects.
        item = build_record(tweet, user, first_media, True)
        if item:
            candidates.append(item)
        else:
            skipped_not_tsubuyaki += 1

    if args.print_json:
        print(json.dumps([r for r, _ in candidates], ensure_ascii=False, indent=2))

    staged = 0 if args.dry_run else stage_candidates(candidates, args.candidate_dir)
    log(f"Fetched {len(all_tweets)} tweets across up to {pages} page(s); {len(candidates)} candidate sketches; skipped {skipped_not_tsubuyaki} non-tsubuyaki/invalid posts; staged {staged} candidates.")
    if payload.get("meta"):
        log("X meta: " + json.dumps(payload["meta"], ensure_ascii=False))
    return 0

if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except RuntimeError as exc:
        print(str(exc), file=sys.stderr)
        raise SystemExit(1)
