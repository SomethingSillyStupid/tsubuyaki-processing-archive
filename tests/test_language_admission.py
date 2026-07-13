#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import io
import json
from email.message import Message
import sys
import tempfile
import unittest
from unittest.mock import patch
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import parse_qs, urlparse

ROOT = Path(__file__).resolve().parents[1]


def load_fetch():
    spec = importlib.util.spec_from_file_location("fetch_language", ROOT / "scripts" / "fetch_x_posts.py")
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    assert spec.loader
    spec.loader.exec_module(module)
    return module


class LanguageTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.fetch = load_fetch()

    def test_classifies_strong_p5_syntax(self):
        for source in ("function setup(){createCanvas(10,10)}", "setup=_=>createCanvas(10,10)"):
            self.assertEqual(self.fetch.classify_language(source), "p5js")

    def test_classifies_strong_processing_syntax(self):
        source = "float x=1; void setup(){size(10,10,P3D);} void draw(){point(x,2,3);}"
        self.assertEqual(self.fetch.classify_language(source), "processing")

    def test_comments_do_not_influence_classification(self):
        self.assertEqual(self.fetch.classify_language("// void setup float\nfunction setup(){createCanvas(2,2)}"), "p5js")

    def test_conflicting_or_weak_syntax_is_ambiguous(self):
        self.assertEqual(self.fetch.classify_language("size(10,10); createCanvas(10,10)"), "ambiguous")
        self.assertEqual(self.fetch.classify_language("background(0)"), "ambiguous")

    def test_extraction_preserves_malformed_tokens(self):
        for token in ('"', '⛈️'):
            text = f"caption\nfunction setup(){{createCanvas(2,2)}}{token}\n#つぶやきProcessing https://t.co/x"
            result = self.fetch.extract_source(text)
            self.assertIn(token, result.source)
            self.assertEqual(result.removed_prefix, "caption")

    def test_exact_x_regressions_preserve_source_and_classify_language(self):
        cases = {
            "2076103984876765477": ("//#つぶやきProcessing\nfloat i,x,y,n,k,t;\nvoid setup(){size(800,800);colorMode(HSB);}\nvoid draw(){background(0);for(i=0;i<800;i++){x=i/200;k=(1-cos(t))/2;for(n=0;n<99;n++){y=x*k*(1-k);stroke(n,255,255);point(i,600-y*500);k=y;}}t+=PI/400;} https://t.co/a", "float i,x,y,n,k,t;\nvoid setup(){size(800,800);colorMode(HSB);}\nvoid draw(){background(0);for(i=0;i<800;i++){x=i/200;k=(1-cos(t))/2;for(n=0;n<99;n++){y=x*k*(1-k);stroke(n,255,255);point(i,600-y*500);k=y;}}t+=PI/400;}", "processing"),
            "2075214387615580373": ('t=1,setup=_=>{createCanvas(w=400,w)}\ndraw=_=>{for(i=w;i>0;i-=8,"#つぶやきProcessing #p5js"){circle(i,i,i)}} https://t.co/b', 't=1,setup=_=>{createCanvas(w=400,w)}\ndraw=_=>{for(i=w;i>0;i-=8,"#つぶやきProcessing #p5js"){circle(i,i,i)}}', "p5js"),
            "2073022002475184542": ('t=1,setup=_=>{createCanvas(w=400,w)}\ndraw=_=>{for(i=0;i<w;i+=5,"#つぶやきProcessing #p5js"){circle(i,i,i)}} https://t.co/c', 't=1,setup=_=>{createCanvas(w=400,w)}\ndraw=_=>{for(i=0;i<w;i+=5,"#つぶやきProcessing #p5js"){circle(i,i,i)}}', "p5js"),
            "2069379464765817154": ('t=1,setup=_=>{createCanvas(w=400,w)}\ndraw=_=>{for(j=0;j<TAU;j+=PI/12,"#つぶやきProcessing #p5js"){circle(j,j,j)}} https://t.co/d', 't=1,setup=_=>{createCanvas(w=400,w)}\ndraw=_=>{for(j=0;j<TAU;j+=PI/12,"#つぶやきProcessing #p5js"){circle(j,j,j)}}', "p5js"),
            "2071775628131500154": ("#つぶやきProcessing setup=_=>createCanvas(w=500,w);k=.1;draw=_=>{h=w/2;f=random(map(sin(PI*k)/PI*k,-1,1,0,h));background(0,f,f);for(i=0;i<99;i++){stroke(h);x=random(w);y=random(w);d=random(w/9);line(x,y,x+d,y+d)}k+=.005}⛈️ https://t.co/e", "setup=_=>createCanvas(w=500,w);k=.1;draw=_=>{h=w/2;f=random(map(sin(PI*k)/PI*k,-1,1,0,h));background(0,f,f);for(i=0;i<99;i++){stroke(h);x=random(w);y=random(w);d=random(w/9);line(x,y,x+d,y+d)}k+=.005}", "p5js"),
            "2076113590977974481": ("//#つぶやきProcessing\nfloat i,x,y,z,n,k,t;void setup(){size(800,800,P3D);}\nvoid draw(){background(-1);point(i,y,0);} https://t.co/f", "float i,x,y,z,n,k,t;void setup(){size(800,800,P3D);}\nvoid draw(){background(-1);point(i,y,0);}", "processing"),
            "2066391828509966530": ("@deconbatch //🙃#つぶやきProcessing #p5js\nt=0,d=4\ndraw=_=>{\ncreateCanvas(W=(w=200)*2,W)\ncolorMode(HSB)\nstrokeWeight(d)\nN=.01*sin(t/w)\nfor(x=0;x<W;x+=d)\nfor(y=0;y<W;y+=d)\nT=atan2(Y=y-w,X=x-w),\nD=mag(X,Y),\nP=(sin(noise(x*N,y*N)*50+D*.05+T)+1)/2,\nstroke(lerp(0,255,P),w,w),\npoint(x,y)\n++t} https://t.co/g", "t=0,d=4\ndraw=_=>{\ncreateCanvas(W=(w=200)*2,W)\ncolorMode(HSB)\nstrokeWeight(d)\nN=.01*sin(t/w)\nfor(x=0;x<W;x+=d)\nfor(y=0;y<W;y+=d)\nT=atan2(Y=y-w,X=x-w),\nD=mag(X,Y),\nP=(sin(noise(x*N,y*N)*50+D*.05+T)+1)/2,\nstroke(lerp(0,255,P),w,w),\npoint(x,y)\n++t}", "p5js"),
            "2067385417465495566": ("t=0;setup=_=>{createCanvas(w=innerWidth,h=innerHeight);m=min(w,h);noStroke()};draw=_=>{background(0,40);t+=.02;for(i=700;i--;)fill(255,120-(s=sin(t+i*.1))*120),circle(w/2+cos(a=i+t)*(r=i*m/1550),h/2+sin(a)*r,s*m/25+10)}\n#つぶやきprocessing\n#minacoding https://t.co/h", "t=0;setup=_=>{createCanvas(w=innerWidth,h=innerHeight);m=min(w,h);noStroke()};draw=_=>{background(0,40);t+=.02;for(i=700;i--;)fill(255,120-(s=sin(t+i*.1))*120),circle(w/2+cos(a=i+t)*(r=i*m/1550),h/2+sin(a)*r,s*m/25+10)}", "p5js"),
            "2074995611599098277": ("t=0;draw=_=>{createCanvas(w=innerWidth,h=innerHeight);background(0);translate(w/2,h/2);strokeWeight(2);for(i=0;i<4e3;i++){a=i+t;r=i%200+99*sin(i*i+t);stroke(255,220+35*sin(i),255,90);point(r*sin(a)+80*sin(i+t),r*cos(a)+80*cos(i*3+t))}t+=.01}\n#つぶやきProcessing #p5js https://t.co/i", "t=0;draw=_=>{createCanvas(w=innerWidth,h=innerHeight);background(0);translate(w/2,h/2);strokeWeight(2);for(i=0;i<4e3;i++){a=i+t;r=i%200+99*sin(i*i+t);stroke(255,220+35*sin(i),255,90);point(r*sin(a)+80*sin(i+t),r*cos(a)+80*cos(i*3+t))}t+=.01}", "p5js"),
            "2075731082910310694": ("setup=_=>{createCanvas(400,400);background(0);noStroke();fill(255);\nfor(let i=-2.5; i<30; i+=1/40){c=createVector;u=c(0.1,0).copy().slerp(c(0,0.14),i);\ncircle(200+200*u.x,200+200*u.y,4)}}\n#つぶやきProcessing #p5js https://t.co/j", "setup=_=>{createCanvas(400,400);background(0);noStroke();fill(255);\nfor(let i=-2.5; i<30; i+=1/40){c=createVector;u=c(0.1,0).copy().slerp(c(0,0.14),i);\ncircle(200+200*u.x,200+200*u.y,4)}}", "p5js"),
        }
        for tweet_id, (tweet, expected, language) in cases.items():
            with self.subTest(tweet_id=tweet_id):
                source = self.fetch.extract_source(tweet).source
                self.assertEqual(source, expected)
                self.assertEqual(self.fetch.classify_language(source), language)

    def test_processing_record_uses_pde_and_explicit_language(self):
        tweet = {"id":"1", "text":"void setup(){size(10,10);}", "created_at":"2026-01-01T00:00:00Z"}
        user = {"username":"artist", "name":"Artist"}
        record, source = self.fetch.build_record(tweet, user, None, True)
        self.assertEqual(record["language"], "processing")
        self.assertEqual(record["code_file"], "sketches/1.pde")
        self.assertNotIn("runtime", record)
        self.assertEqual(source, tweet["text"])

    def test_schema_rejects_unknown_language_and_missing_runtime(self):
        base = {"id":"1", "language":"p5js", "code_file":"sketches/1.js", "runtime":{"engine":"p5.js","engine_version":"1.11.3","status":"runs","canvas_count":1,"verified_at":"2026-01-01T00:00:00Z"}}
        self.assertEqual(self.fetch.validate_accepted_record(base), [])
        bad = dict(base, language="python")
        self.assertTrue(self.fetch.validate_accepted_record(bad))
        missing = dict(base); missing.pop("runtime")
        self.assertTrue(self.fetch.validate_accepted_record(missing))

    def test_stage_candidates_writes_nothing_below_site(self):
        tweet = {"id":"1", "text":"function setup(){createCanvas(10,10)}", "created_at":"2026-01-01T00:00:00Z"}
        user = {"username":"artist", "name":"Artist"}
        item = self.fetch.build_record(tweet, user, None, True)
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            self.fetch.stage_candidates([item], root / ".work/candidates")
            self.assertFalse((root / "site").exists())
            self.assertEqual((root / ".work/candidates/1/source.js").read_text(), tweet["text"])
            metadata = json.loads((root / ".work/candidates/1/candidate.json").read_text())
            self.assertEqual(metadata["language"], "p5js")

    def test_full_archive_search_uses_bounded_all_endpoint_and_500_result_pages(self):
        captured = {}
        def fake_get(url, token):
            captured.update(url=url, token=token)
            return self.fetch.FetchResult({"meta": {"result_count": 0}}, 200)
        with patch.object(self.fetch, "api_get", side_effect=fake_get):
            result = self.fetch.search_posts(
                "secret", "#つぶやきProcessing", 500,
                archive=True,
                start_time="2026-01-13T00:00:00Z",
                end_time="2026-02-01T00:00:00Z",
            )
        parsed = urlparse(captured["url"])
        params = parse_qs(parsed.query)
        self.assertEqual(parsed.path, "/2/tweets/search/all")
        self.assertEqual(params["max_results"], ["500"])
        self.assertEqual(params["start_time"], ["2026-01-13T00:00:00Z"])
        self.assertEqual(params["end_time"], ["2026-02-01T00:00:00Z"])
        self.assertEqual(result["meta"]["result_count"], 0)

    def test_backfill_cli_accepts_bounded_archive_arguments(self):
        parser = self.fetch.build_arg_parser()
        args = parser.parse_args([
            "--archive",
            "--start-time", "2026-01-13T00:00:00Z",
            "--end-time", "2026-02-01T00:00:00Z",
            "--max-results", "500",
            "--max-posts", "500",
        ])
        self.assertTrue(args.archive)
        self.assertEqual(args.start_time, "2026-01-13T00:00:00Z")
        self.assertEqual(args.end_time, "2026-02-01T00:00:00Z")
        self.assertEqual(args.max_posts, 500)

    def test_api_get_retries_rate_limits_before_succeeding(self):
        class Response:
            status = 200
            def __enter__(self): return self
            def __exit__(self, *args): return False
            def read(self): return b'{"meta":{"result_count":1}}'
        headers = Message()
        headers["Retry-After"] = "0"
        limited = HTTPError(
            "https://api.x.com/test", 429, "Too Many Requests",
            headers, io.BytesIO(b'{"title":"Too Many Requests"}'),
        )
        with patch.object(self.fetch, "urlopen", side_effect=[limited, Response()]) as opened, \
             patch.object(self.fetch.time, "sleep") as slept:
            result = self.fetch.api_get("https://api.x.com/test", "secret")
        self.assertEqual(result.data["meta"]["result_count"], 1)
        self.assertEqual(opened.call_count, 2)
        slept.assert_called_once()

    def test_full_archive_search_requires_start_and_end_times(self):
        with self.assertRaisesRegex(ValueError, "start_time and end_time"):
            self.fetch.search_posts("secret", "query", 100, archive=True)


if __name__ == "__main__": unittest.main()
