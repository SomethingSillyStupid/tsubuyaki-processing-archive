import importlib.util
import hashlib
import sys
import unittest
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('artifacts',ROOT/'scripts/generate_site_artifacts.py')
artifacts=importlib.util.module_from_spec(spec); sys.modules[spec.name]=artifacts; spec.loader.exec_module(artifacts)

class ArtifactLanguageTests(unittest.TestCase):
    def test_language_label_is_accurate(self):
        self.assertEqual(artifacts.language_label({'language':'processing'}),'Processing')
        self.assertEqual(artifacts.language_label({'language':'p5js'}),'p5.js')

    def test_public_artifacts_use_primary_custom_domain(self):
        self.assertEqual(artifacts.BASE_URL, 'https://tsubuyaki.art/')
        self.assertEqual((ROOT/'site/CNAME').read_text(encoding='utf-8'), 'tsubuyaki.art\n')
        robots=(ROOT/'site/robots.txt').read_text(encoding='utf-8')
        self.assertIn('Sitemap: https://tsubuyaki.art/sitemap.xml', robots)

    def test_pages_publish_canonical_and_social_urls(self):
        index=(ROOT/'site/index.html').read_text(encoding='utf-8')
        about=(ROOT/'site/about.html').read_text(encoding='utf-8')
        detail=(ROOT/'site/sketch.html').read_text(encoding='utf-8')
        app=(ROOT/'site/app.js').read_text(encoding='utf-8')
        self.assertIn('<link rel="canonical" href="https://tsubuyaki.art/">', index)
        self.assertIn('<meta property="og:url" content="https://tsubuyaki.art/">', index)
        self.assertIn('<link rel="canonical" href="https://tsubuyaki.art/about.html">', about)
        self.assertIn('id="canonical"', detail)
        self.assertIn("canonical.href = `https://tsubuyaki.art/sketch.html?id=${encodeURIComponent(sketch.id)}`", app)

    def test_vendored_p5_runtime_matches_documented_checksum(self):
        runtime=ROOT/'site/vendor/p5-1.11.3.min.js'
        digest=hashlib.sha256(runtime.read_bytes()).hexdigest()
        provenance=(ROOT/'site/vendor/P5-PROVENANCE.md').read_text(encoding='utf-8')
        self.assertEqual(digest,'af51e6211e061b5ae463fbc5c3c1c272e5ca67fa560ed3513fde17325d837506')
        self.assertIn(digest,provenance)

if __name__=='__main__': unittest.main()
