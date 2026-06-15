#!/usr/bin/env python3
"""Generate static feed/search artifacts for the #つぶやきProcessing archive."""
from __future__ import annotations

import json
import html
from datetime import datetime, timezone
from email.utils import format_datetime, parsedate_to_datetime
from pathlib import Path
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
DATA_FILE = SITE / "data" / "sketches.json"
BASE_URL = "https://somethingsillystupid.github.io/tsubuyaki-processing-archive/"


def load_items() -> list[dict]:
    return json.loads(DATA_FILE.read_text(encoding="utf-8"))


def dt(value: str) -> datetime:
    v = value.replace("Z", "+00:00")
    try:
        return datetime.fromisoformat(v)
    except ValueError:
        return parsedate_to_datetime(value)


def detail_url(item: dict) -> str:
    return f"{BASE_URL}sketch.html?id={item['id']}"


def label(item: dict) -> str:
    return f"@{item['author']['username']} · {dt(item['created_at']).strftime('%Y-%m-%d')}"


def generate_latest(items: list[dict]) -> None:
    latest = []
    for item in items[:20]:
        latest.append({
            "id": item["id"],
            "created_at": item["created_at"],
            "author": item["author"],
            "tweet_url": item["tweet_url"],
            "archive_url": detail_url(item),
            "preview_still_file": item.get("preview_still_file"),
            "preview_motion_file": item.get("preview_motion_file"),
            "runtime_status": item.get("runtime_status"),
            "tsubuyaki": item.get("tsubuyaki"),
        })
    out = SITE / "data" / "latest.json"
    out.write_text(json.dumps(latest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def generate_feed(items: list[dict]) -> None:
    now = format_datetime(datetime.now(timezone.utc))
    parts = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
        '<channel>',
        '<title>#つぶやきProcessing Archive</title>',
        f'<link>{BASE_URL}</link>',
        '<description>Recent archived #つぶやきProcessing p5.js sketches.</description>',
        '<language>en</language>',
        f'<lastBuildDate>{escape(now)}</lastBuildDate>',
        f'<atom:link href="{BASE_URL}feed.xml" rel="self" type="application/rss+xml" />',
    ]
    for item in items[:30]:
        title = label(item)
        url = detail_url(item)
        pub = format_datetime(dt(item["created_at"]))
        desc = html.escape(
            f"Verified single-tweet p5.js sketch by @{item['author']['username']} "
            f"({(item.get('tsubuyaki') or {}).get('code_chars', '≤280')} code chars). "
            f"Original post: {item['tweet_url']}"
        )
        parts.extend([
            '<item>',
            f'<title>{escape(title)}</title>',
            f'<link>{escape(url)}</link>',
            f'<guid isPermaLink="true">{escape(url)}</guid>',
            f'<pubDate>{escape(pub)}</pubDate>',
            f'<description>{desc}</description>',
            '</item>',
        ])
    parts.extend(['</channel>', '</rss>', ''])
    (SITE / "feed.xml").write_text("\n".join(parts), encoding="utf-8")


def generate_sitemap(items: list[dict]) -> None:
    urls = [BASE_URL, f"{BASE_URL}about.html", f"{BASE_URL}feed.xml"]
    urls.extend(detail_url(item) for item in items)
    parts = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for url in urls:
        parts.extend(['  <url>', f'    <loc>{escape(url)}</loc>', '  </url>'])
    parts.extend(['</urlset>', ''])
    (SITE / "sitemap.xml").write_text("\n".join(parts), encoding="utf-8")


def main() -> int:
    items = load_items()
    items.sort(key=lambda item: item.get("created_at", ""), reverse=True)
    generate_latest(items)
    generate_feed(items)
    generate_sitemap(items)
    print(f"Generated latest.json, feed.xml, sitemap.xml for {len(items)} sketches")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
