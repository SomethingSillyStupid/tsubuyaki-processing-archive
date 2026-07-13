#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_fetch_module():
    spec = importlib.util.spec_from_file_location("fetch_x_posts", ROOT / "scripts" / "fetch_x_posts.py")
    assert spec is not None
    assert spec.loader is not None
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module


def test_code_that_passes_ingest_gets_pending_runtime_status_before_browser_check():
    fetch = load_fetch_module()
    code = "function setup(){createCanvas(100,100);background(0)}"

    assert fetch.status_for_code(code) == "pending-runtime"


def test_media_url_does_not_count_against_tsubuyaki_tweet_limit():
    fetch = load_fetch_module()
    tweet = (
        "setup=_=&gt;{t=0,createCanvas(w=400,w),angleMode(DEGREES)}, "
        "draw=_=&gt;{background(0),fill(255),px=t%(w+100)-50;"
        "for(i=floor(px/20);i&lt;20;i++){ellipse(20* i,w/2,12,12)};"
        "translate(px,w/2),fill(255,255,0),arc(0, 0,100,100,a=sin(millis()*1.5)*30+30,-a),t++} "
        "//#つぶやきProcessing https://t.co/TLbFu9NZGr"
    )
    code = fetch.normalize_code(tweet)

    checks = fetch.verify_tsubuyaki(tweet, code)

    assert checks["tweet_chars"] == 264
    assert checks["tweet_under_280"] is True
    assert checks["single_tweet_full_code"] is True
    assert checks["status"] == "verified"


def test_update_archive_workflow_stages_admits_generates_and_then_regression_verifies():
    workflow = (ROOT / ".github" / "workflows" / "update-archive.yml").read_text(encoding="utf-8")

    fetch_pos = workflow.index("python3 scripts/fetch_x_posts.py --max-results 50")
    admit_pos = workflow.index("node scripts/admit_candidates.mjs")
    artifacts_pos = workflow.index("python3 scripts/generate_site_artifacts.py")
    verify_pos = workflow.index("npm run verify:runtime")
    commit_pos = workflow.index("name: Commit archive updates")

    assert "npm ci" in workflow
    assert "npx playwright install --with-deps chromium" in workflow
    assert fetch_pos < admit_pos < artifacts_pos < verify_pos < commit_pos
    assert "rm -rf .work/candidates" in workflow
    assert "git diff --quiet -- archive_state/rejections.json site/data" in workflow
    assert "git add archive_state/rejections.json site/data" in workflow
    assert "path: site" in workflow
    assert "path: archive_state" not in workflow


def test_site_badge_uses_verified_copy_for_successful_runtime_check():
    app = (ROOT / "site" / "app.js").read_text(encoding="utf-8")

    assert "if (runtime === 'runs') return 'verified';" in app


def test_runtime_verifier_is_a_fail_closed_read_only_regression_check():
    verifier = (ROOT / "scripts" / "verify_runtime.mjs").read_text(encoding="utf-8")

    assert "export async function verifyCandidate" in verifier
    assert "failed++" in verifier
    assert "admitted sketch(es) failed verification" in verifier
    assert "writeFile" not in verifier
    worker = (ROOT / "scripts" / "runtime_probe_worker.mjs").read_text(encoding="utf-8")
    assert "processingRuntimeSource" in worker
    assert "p5RuntimeSource" in worker


def test_runtime_verifier_keeps_language_specific_hard_timeouts_and_override():
    verifier = (ROOT / "scripts" / "verify_runtime.mjs").read_text(encoding="utf-8")
    assert "language==='processing'?120000:10000" in verifier
    assert "timeout ??=" in verifier
    assert "process.kill(-child.pid,'SIGKILL')" in verifier


def test_site_runs_filter_uses_authoritative_nested_runtime_status():
    app = (ROOT / "site" / "app.js").read_text(encoding="utf-8")
    assert "sketch.runtime?.status" in app
