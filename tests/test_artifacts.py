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

    def test_vendored_p5_runtime_matches_documented_checksum(self):
        runtime=ROOT/'site/vendor/p5-1.11.3.min.js'
        digest=hashlib.sha256(runtime.read_bytes()).hexdigest()
        provenance=(ROOT/'site/vendor/P5-PROVENANCE.md').read_text(encoding='utf-8')
        self.assertEqual(digest,'af51e6211e061b5ae463fbc5c3c1c272e5ca67fa560ed3513fde17325d837506')
        self.assertIn(digest,provenance)

if __name__=='__main__': unittest.main()
