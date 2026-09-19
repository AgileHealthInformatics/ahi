#!/usr/bin/env python3
"""Verify the refactored Agile Health Informatics static site.

Version 2 fixes false positives from the original verifier by using Python's
HTMLParser rather than regular expressions. JavaScript template strings such
as href="${url}", data-id attributes and dynamically constructed id values are
therefore not mistaken for literal HTML links or duplicate DOM ids.
"""

from __future__ import annotations

from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


RESOURCE_DIRS = [
    "resources/atlases/uk-secondary-care-integration",
    "resources/navigators/terminology-semantics",
    "resources/navigators/health-data-architecture",
    "resources/navigators/health-data-lifecycle",
    "resources/navigators/information-models",
    "resources/navigators/ai-assurance",
    "resources/navigators/integration-patterns",
    "resources/navigators/healthcare-interoperability",
    "resources/navigators/healthcare-standards",
    "resources/assessments/health-data-operability",
    "resources/professional-development/health-care-computing",
    "resources/guides/health-data-operability-workshop",
]

OLD_ROOT_HTML = {
    "UK_Secondary_Care_Integration_Reference_Atlas_v0.6.html",
    "agile_health_informatics_clinical_terminology_semantics_navigator_2026.html",
    "agile_health_informatics_health_data_architecture_navigator_2026.html",
    "agile_health_informatics_health_data_lifecycle_navigator_2026.html",
    "agile_health_informatics_health_information_model_navigator_2026.html",
    "agile_health_informatics_healthcare_ai_assurance_navigator_2026.html",
    "agile_health_informatics_healthcare_integration_pattern_navigator_2026.html",
    "agile_health_informatics_healthcare_interoperability_navigator_2026.html",
    "agile_health_informatics_healthcare_standards_navigator_2026.html",
    "hdomm-toolkit-agile-health-informatics.html",
    "health_care_computing_professional_development_navigator.html",
    "health_data_operability_workshop_facilitation_guide.html",
}


class SiteHTMLParser(HTMLParser):
    """Collect literal DOM ids, hrefs and srcs from parsed HTML markup only."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = []
        self.links = []

    def handle_starttag(self, tag, attrs):
        self._handle_attrs(attrs)

    def handle_startendtag(self, tag, attrs):
        self._handle_attrs(attrs)

    def _handle_attrs(self, attrs):
        for name, value in attrs:
            if value is None:
                continue
            lname = name.lower()
            if lname == "id":
                self.ids.append(value)
            elif lname in {"href", "src"}:
                self.links.append(value)


def parse_html(path: Path) -> SiteHTMLParser:
    parser = SiteHTMLParser()
    parser.feed(path.read_text(encoding="utf-8"))
    parser.close()
    return parser


def local_target(root: Path, source: Path, raw: str):
    raw = raw.strip()

    if not raw or raw.startswith("#"):
        return None

    lower = raw.lower()
    if lower.startswith((
        "http://", "https://", "mailto:", "tel:",
        "data:", "javascript:", "blob:"
    )):
        return None

    if "${" in raw or "{{" in raw or "<%" in raw:
        return None

    parts = urlsplit(raw)
    path = unquote(parts.path)

    if not path:
        return None

    if path.startswith("/"):
        target = root / path.lstrip("/")
    else:
        target = source.parent / path

    if path.endswith("/"):
        target = target / "index.html"

    return target.resolve()


def main() -> int:
    root = Path.cwd().resolve()
    errors = []
    warnings = []

    required_root = [
        "index.html",
        "services.html",
        "resources.html",
        "about.html",
        "README.md",
        "CNAME",
        "_config.yml",
    ]

    for name in required_root:
        if not (root / name).exists():
            errors.append(f"Missing root file: {name}")

    config = root / "_config.yml"
    if config.exists():
        config_text = config.read_text(encoding="utf-8")
        if "jekyll-redirect-from" not in config_text:
            errors.append("_config.yml does not enable jekyll-redirect-from")

    for directory in RESOURCE_DIRS:
        d = root / directory
        if not (d / "index.html").exists():
            errors.append(f"Missing resource index: {directory}/index.html")
        if not (d / "README.md").exists():
            warnings.append(f"Missing companion README: {directory}/README.md")

    for old in sorted(OLD_ROOT_HTML):
        if (root / old).exists():
            errors.append(f"Legacy resource still present at root: {old}")

    redirects = root / "legacy-redirects"
    redirect_text = ""

    if not redirects.exists():
        errors.append("Missing legacy-redirects directory")
    else:
        for path in redirects.glob("*.md"):
            redirect_text += path.read_text(encoding="utf-8") + "\n"

        for old in sorted(OLD_ROOT_HTML):
            if f"permalink: /{old}" not in redirect_text:
                errors.append(f"No legacy redirect declared for /{old}")

    html_files = sorted(root.rglob("*.html"))

    for html in html_files:
        try:
            parsed = parse_html(html)
        except Exception as exc:
            errors.append(
                f"Could not parse {html.relative_to(root)}: "
                f"{type(exc).__name__}: {exc}"
            )
            continue

        counts = Counter(parsed.ids)
        duplicates = sorted(k for k, v in counts.items() if v > 1)

        if duplicates:
            errors.append(
                f"Duplicate HTML ids in {html.relative_to(root)}: "
                + ", ".join(duplicates[:20])
            )

        for raw in parsed.links:
            target = local_target(root, html, raw)
            if target is None:
                continue

            if target.exists():
                continue

            if target.suffix == "" and (target / "index.html").exists():
                continue

            try:
                shown = target.relative_to(root)
            except ValueError:
                shown = target

            errors.append(
                f"Broken local link in {html.relative_to(root)}: "
                f"{raw} -> {shown}"
            )

    print("AHI site verification v2")
    print("========================")
    print(f"HTML files checked: {len(html_files)}")
    print(f"Errors:   {len(errors)}")
    print(f"Warnings: {len(warnings)}")

    if warnings:
        print("\nWarnings:")
        for item in warnings:
            print(f"  - {item}")

    if errors:
        print("\nErrors:")
        for item in errors:
            print(f"  - {item}")
        return 1

    print("\nPASS: repository structure, literal DOM ids and local links are consistent.")
    print("Note: dynamic links generated by JavaScript are not filesystem-validated.")
    print("Note: this script does not execute a GitHub Pages/Jekyll build.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
