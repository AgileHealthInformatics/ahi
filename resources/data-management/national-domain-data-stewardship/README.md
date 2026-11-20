# National Domain Data Stewardship

A jurisdiction-neutral interactive explainer from **Agile Health Informatics Ltd** about establishing and sustaining a national network of health data stewards.

## Publication location

- **URL:** https://agilehealthinformatics.com/resources/data-management/national-domain-data-stewardship/
- **Repository path:** `resources/data-management/national-domain-data-stewardship/index.html`
- **Library entry:** `resources.html`, with a November 2026 addition to the homepage `index.html`.

## Purpose and audience

The resource is intended for senior health service executives, clinical and professional leaders, national data offices, domain stewards, regional data custodians, registries and external partners. It proposes one workable model rather than describing an approved national programme.

## Content

The adapted explainer retains the original seven substantive sections:

1. Why a stewardship network is needed.
2. Scope across terminology, reference data, dictionaries, reporting metadata and data-asset catalogues.
3. Ten design principles.
4. Executive, clinical, data and operational accountability; roles; workflow and asset tiers.
5. A phased roadmap and the first 100 days.
6. Measures of performance, sustainability and delivery risks.
7. A structured decision and mobilisation checklist.

It also adds a **persistent desktop section navigator**, a **collapsible mobile section navigator** and a **role-based responsibility navigator**. The checklist retains local browser tick persistence and provides copy, reset and print functions. Its question content is authored for the page; it does not submit answers to a server.

## Design and privacy

- Uses the established Agile Health Informatics colours, system font, header, logo, navigation, sticky treatment, mobile menu and footer.
- Supports light/dark themes using `data-theme` and `localStorage` key `ahi-theme`.
- Loads the shared website consent assets at `/assets/css/analytics-consent.css` and `/assets/js/analytics.js`.
- The shared analytics service uses **GA4 `G-EF8ZF37K5H`**. Its consent logic ensures that Google analytics requests are not issued until visitors accept analytics. This resource does **not** include a separate `gtag` snippet.
- Includes canonical metadata, basic accessibility support, keyboard-operable controls, reduced-motion handling, and print styling.
- Resource HTML is self-contained apart from the existing root-level analytics assets and optional logo refresh from `/about.html`.

## Deployment

Extract the release archive into the root of the GitHub Pages repository, preserving the folder hierarchy. It contains:

```
index.html
resources.html
resources/data-management/national-domain-data-stewardship/index.html
resources/data-management/national-domain-data-stewardship/README.md
```

Commit the four files to the publishing branch. The root-level stylesheet and script under `/assets/` are **already part of the website** and are intentionally not replaced by this package. Once deployed, test the resource link in the homepage and library, theme controls, mobile navigation, role selection, checklist persistence, print mode and the analytics privacy setting.

## Scope and evidence limitations

The content is a **proposed governance and operating model**, not an official specification, accreditation claim, costed business case or proof of real-world adoption. The phase durations and pilot volumes are indicative. Jurisdiction-specific statutory responsibilities, boards, participation rights and data authority must be validated locally. The resource uses no real patient data.

## Source and maintenance

Adapted from the author-supplied *National Domain Data Stewardship.html*, November 2026. Stewardship proposals and substantive recommendations should be reviewed and updated when underlying governance assumptions change.

## Responsibility navigator update (November 2026)

The perspective selector now changes a substantial role-specific view, rather than only a short descriptive paragraph. Each view presents responsibilities, decisions, authority boundaries, assurance evidence and links into the original reference sections. Matching rows in the operating-model tables are highlighted while the full reference remains visible. The selector supports keyboard, touch and mouse interactions and announces the selected perspective. The content remains an illustrative proposal, not an approved national policy.
