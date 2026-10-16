# EHDS Specifications: Critical Review and Explainer

## Site location

Deploy `index.html` and this README to `/resources/assessments/ehds-specifications/`.
Canonical URL: https://agilehealthinformatics.com/resources/assessments/ehds-specifications/

## Purpose and evidence date

An interactive architectural review of EHDS primary-use and secondary-use specifications. Evidence cut-off: 15 October 2026, with supplementary checks dated 16 October 2026. The website adaptation preserves the supplied analysis, register and sources; it is not a fresh verification of legal or technical claims.

## Integration

Add a card to the homepage's new-content section and a searchable entry to `resources.html` under assessments. Suggested title: **EHDS specifications: critical review and explainer**. Suggested description: **Explore primary-use and secondary-use architecture, specification maturity, implementation decisions and evidence requirements.** Use the root-relative link `/resources/assessments/ehds-specifications/`.

The homepage and resources page themselves are not modified in this package.

## Design and behaviour

Reuses the live site's embedded logo, header, navigation and footer, with its blue palette, system fonts and lime accents. Supports `ahi-theme`, a mobile menu, desktop section navigation and a mobile section selector. The page is self-contained, with no third-party scripts or build requirements.

The architecture walkthrough, timeline, register filters and JSON export, findings filters, evidence planner and text export are retained. Planner input is held in the current page session; export notes before leaving. Print expands disclosures and includes both architecture routes and the full timeline. JavaScript is required for generated registers and interactive content; static analysis remains readable without it.

## Maintenance

Update evidence dates only after reviewing the sources. Register data is in the `reviewData` JSON script; journeys and milestones are in the following JavaScript. Preserve distinction between evidence, analysis and unresolved questions. Check mobile layout, both themes, keyboard operation, fragment targets and exports after edits. Root-relative site links require deployment at the site root or a local web server.

## Validation in this adaptation

JavaScript syntax, JSON parsing, duplicate IDs and site navigation targets were checked. Visual browser checks could not be completed because the browser runtime was unavailable. Review the page in your browser before publication.
