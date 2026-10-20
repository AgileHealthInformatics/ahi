#!/usr/bin/env python3
"""Check public HTML pages have exactly one consent-managed analytics integration."""
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

class Tags(HTMLParser):
    def __init__(self):
        super().__init__()
        self.scripts, self.styles, self.settings, self.notices = [], [], 0, 0
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'script' and 'src' in a: self.scripts.append(a['src'])
        if tag == 'link' and a.get('rel') == 'stylesheet': self.styles.append(a.get('href'))
        if tag == 'a' and 'data-ahi-privacy-settings' in a: self.settings += 1
        if tag == 'a' and a.get('href') == '/privacy.html': self.notices += 1
    handle_startendtag = handle_starttag

def main():
    errors, count = [], 0
    for path in sorted(ROOT.rglob('*.html')):
        if any(x in {'.git', 'docs', 'tools', 'legacy-redirects', '_site', 'node_modules'} for x in path.relative_to(ROOT).parts): continue
        count += 1
        parser = Tags(); parser.feed(path.read_text(encoding='utf-8'))
        checks = [
            (parser.scripts.count('/assets/js/analytics.js') == 1, 'one shared analytics script'),
            (parser.styles.count('/assets/css/analytics-consent.css') == 1, 'one consent stylesheet'),
            (parser.settings >= 1 and parser.notices >= 1, 'privacy notice and settings links'),
            (not any('googletagmanager.com' in s or 'google-analytics.com' in s for s in parser.scripts), 'no direct Google script bypassing consent'),
        ]
        for ok, label in checks:
            if not ok: errors.append(f'{path.relative_to(ROOT)}: expected {label}')
    for asset in ['assets/js/analytics.js', 'assets/css/analytics-consent.css', 'privacy.html']:
        if not (ROOT / asset).is_file(): errors.append(f'Missing {asset}')
    print(f'Analytics integration: {count} public HTML pages, {len(errors)} errors')
    for error in errors: print(error)
    return bool(errors)

if __name__ == '__main__': raise SystemExit(main())
