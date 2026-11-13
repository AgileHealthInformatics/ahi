# Canonical Reporting Metadata

Interactive explainer and synthetic demonstrator for Agile Health Informatics Ltd.

## Publication location

- **URL:** https://agilehealthinformatics.com/resources/explainers/canonical-reporting-metadata/
- **Repository path:** `resources/explainers/canonical-reporting-metadata/index.html`
- **Page title:** Canonical Reporting Metadata | Agile Health Informatics Ltd
- **Version:** Source explainer 3.1, adapted for the site on 13 November 2026.

## Purpose

The explainer makes an evidence-led case for an implementation-neutral capability to govern healthcare reporting measures, source-data metadata and their relationships with terminology and reference-data authorities. It targets reporting sponsors, information governance professionals, analysts, data stewards, clinical and operational leaders, and enterprise architects.

The proposed design separates the authority for a reporting definition, source-system asset metadata, and independently governed terminology and reference data. A versioned mapping contract connects them, retaining transformation rules, evidence of semantic equivalence, effective dates, assurance status and traceability to results.

## Content and interactions

The page includes 18 narrative sections and retains the explanatory material from the source. It provides:

1. An executive judgement and staged funding proposition, with limits on the available evidence.
2. A synthetic example of emergency-department four-hour completion reporting. It is explicitly **not** an official NHS or HSE indicator specification.
3. Two interactive UML conceptual models covering reporting definitions and the links to source assets, reference data and terminology.
4. A mapping workbench for synthetic emergency, outpatient and laboratory reporting measures. The workbench compares candidate clinical, administrative and laboratory source metadata and demonstrates validation and simulated approvals.
5. Effective-dated reference-data mappings, change-impact analysis, stakeholder decision rights, assurance questions and a filterable findings register.
6. Browser-side JSON, CSV, SVG and PlantUML exports.

The page does not connect to live source systems, process patient data, execute clinical calculations or create genuine governance approvals. The examples, mapping decisions, impact ratings and assurance status are educational. The standards references support selected components, not the entire proposed canonical model.

## Files

```text
resources/explainers/canonical-reporting-metadata/
├── index.html
├── README.md
└── diagrams/
    ├── reporting-definition.svg
    ├── reporting-definition.puml
    ├── source-mapping-and-reference-data.svg
    └── source-mapping-and-reference-data.puml
```

The HTML embeds the diagrams, CSS and demonstration logic, so it does not rely on these separate diagram files to render. The diagram files support reuse and review. A modern browser with JavaScript enabled is required for the interactive features; narrative content and original diagrams remain readable without JavaScript.

## Site integration

The page has the Agile Health Informatics palette, typography, blue hero, responsive site header, six standard navigation items, internal section navigation, theme control, footer and privacy links. It shares the existing site's `ahi-theme` localStorage preference.

The correct original embedded brand logo is loaded from the existing `/about.html` header on the live website. A simple AHI fallback monogram appears if the brand asset cannot be retrieved. This keeps the current public-site logo as the single source of truth without introducing a new logo file. For a completely offline copy, embed the current logo directly before distributing.

### Google Analytics and consent

The page references the same site-managed assets as the current homepage and resource library:

```html
<link rel="stylesheet" href="/assets/css/analytics-consent.css">
<script src="/assets/js/analytics.js" defer></script>
```

There is **no independent GA4 loader**, direct `gtag` call or hard-coded tracking ID in the page. Analytics therefore remains subject to the consent implementation already maintained by the website. The page supplies a footer link to `/privacy.html#analytics-settings` with the existing `data-ahi-privacy-settings` attribute.

This package does not include or replace the site-wide analytics CSS, JavaScript or privacy notice; they must already be present at the root-relative locations shown above.

## Manual deployment

1. Review the root `index.html` and `resources.html` files in the package against your latest versions before overwriting. These were built to reflect the public website's content and layout as reviewed on 13 November 2026, but should be merged where unrelated site changes have since been made.
2. Copy `resources/explainers/canonical-reporting-metadata/` into the same repository directory structure.
3. Publish the root `index.html` and `resources.html` so their new links resolve to the resource URL. The homepage's **New content** section lists November 2026 additions, including this new resource.
4. Keep the existing `/assets/css/analytics-consent.css`, `/assets/js/analytics.js`, `/about.html` and `/privacy.html` unchanged.
5. Commit and push to the branch configured for GitHub Pages, normally `main`.
6. Confirm the new page, homepage and resource library at their published URLs; test narrow-screen navigation, theme persistence, a blocked mapping, the JSON and CSV downloads, and analytics consent preferences.

## Editorial and architectural limits

- No real-world clinical data, patient identifiers or source-system connections are used.
- Approval and validation are illustrative completeness checks, not evidence of actual calculation correctness, clinical equivalence or authorised organisational decisions.
- Standards referenced include ISO/IEC 11179-31, SDMX 3.1, W3C DCAT 3, PROV-O, SKOS and HL7 FHIR R5 Measure. They are relevant inputs, not endorsement or certification of the proposed model.
- The design deliberately avoids any dependency on a specific metadata repository, clinical record platform or BI product.
- All underlying source material and references remain on the HTML page in the source and limitations section.

## Accessibility and testing

Semantic headings, native controls, labelled filters, keyboard-activatable SVG class selectors, live status messages, responsive layouts and print styles are retained. The UML diagrams are horizontally scrollable on small viewports so that individual class labels remain legible. `prefers-reduced-motion` is respected.

Test the deployed page in Chromium or Firefox for responsive layout and interaction, then verify that the existing analytics consent manager remains the only mechanism that activates GA4. This resource does not claim a formal WCAG audit.
