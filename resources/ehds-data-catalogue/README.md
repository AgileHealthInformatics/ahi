# EHDS Data Catalogue Explorer

**Version:** 1.0.2 (public educational demonstrator)  
**Publisher:** Agile Health Informatics Ltd  
**Platform:** GitHub Pages; HTML, CSS and JavaScript  
**Reference:** HealthDCAT-AP Release 8 and European Health Data Space (EHDS)

## Purpose

The EHDS Data Catalogue Explorer is an interactive, country-neutral illustration of how a national catalogue of health datasets could support secondary-use discovery and metadata federation under the EHDS. It presents the perspectives of a data requester, a data provider and a national catalogue steward, followed by a guided, simulated route towards HealthData@EU.

**This is an educational simulation, not an operational national catalogue, a statutory data access system or an officially validated HealthDCAT-AP implementation.** The dataset descriptions, organisations, identities, access decisions, vocabulary references and receipts are fictional or illustrative. No personal health data is used.

## Explore the demonstrator

When published in the Agile Health Informatics website:

https://agilehealthinformatics.com/resources/ehds-data-catalogue/

The landing page includes six workspaces:

| Workspace | What to explore |
| --- | --- |
| Discover | Search four synthetic health dataset records, use filters and inspect descriptive metadata and variable dictionaries. |
| Data requester | Select a dataset, inspect its access conditions and submit a browser-only illustrative enquiry. |
| Data provider | Enter and edit synthetic metadata; use field-completeness checks and submit to a simulated steward. |
| National steward | Review submitted records, return incomplete descriptions for correction and approve fictional publication. |
| Federation journey | Follow a selected published dataset through a guided six-stage simulated metadata federation process. |
| Standards and limits | Understand the relationship to EHDS, DCAT-AP, HealthDCAT-AP, SHACL and the boundaries of the educational version. |

### Guided federation journey

1. **Data holder:** Inspect the synthetic provider and its dataset metadata.
2. **Local checks:** Review the illustrative field validation, including warnings.
3. **National review:** Examine the simulated stewardship decision.
4. **National catalogue:** Inspect the published dataset metadata.
5. **Local federation outbox:** View and download an illustrative RDF Turtle payload, together with a manifest and SHA-256 digest where browser support allows.
6. **Simulated receiver:** View the fictional HealthData@EU acknowledgement and download the final evidence JSON.

Select **Start guided journey** to begin at stage 1. Use **Next stage** and **Previous stage** to explore the sequence. The receiver acknowledgement is deliberately withheld until stage 6. No data is transmitted to an EU service.

## Technical architecture

The demonstrator is a static web application that runs entirely in the browser. It requires no Docker runtime, application server, database, identity provider or API credentials. Synthetic exercise state is stored in the visitor's browser using `localStorage` and can be cleared using the application's reset function. State is not shared between devices or users.

```text
resources/
  ehds-data-catalogue/
    index.html          # application page
    assets/
      app.js            # static sample data and interactive simulation
      styles.css        # responsive Agile Health Informatics styling
      ahi-logo.webp     # Agile Health Informatics logo
```

### Security and privacy

The demonstrator has no operational authentication or authorisation. Workspace switches are not security boundaries. Browser-local publication, review and request decisions are illustrative and cannot serve as an operational audit record. Do not enter personal data, credentials, proprietary metadata or real patient information into the example forms. The public application does not provide a real data-access application service.

## Local preview

From the directory containing the demonstrator's `index.html`, run:

```powershell
py -m http.server 8089
```

Then open `http://127.0.0.1:8089/` in a browser. The site can also run on a GitHub Pages project subpath because its application assets use relative links.

## Publishing to GitHub Pages

1. Place the `index.html` and `assets/` directory under `resources/ehds-data-catalogue/` in the `AgileHealthInformatics/ahi` repository.
2. Preserve the site's existing root `index.html`. The demonstrator's `index.html` is a different file inside its resource directory.
3. Update the website's root `index.html` and `resources.html` with links to `/resources/ehds-data-catalogue/`.
4. Commit and push the changes to the branch from which GitHub Pages publishes the website.
5. Visit the published URL and verify navigation, responsive layouts and the full six-stage sequence. After updates, use a hard refresh if cached JavaScript or CSS still appears.

The resource link will not work until the demonstrator directory has been published.

## Testing

The package includes automated metadata and RDF escaping checks, browser tests and layout regression scripts. Where Node.js is installed:

```powershell
node .\tests\logic_smoke.cjs
```

For the optional browser tests, install Python Playwright and Chromium, then use:

```powershell
python .\tests\browser_smoke.py
python .\tests\layout_smoke.py
```

Verify the published site manually, especially the six-stage guided journey, payload and evidence downloads, requester and provider workflows, reset behaviour, mobile layout and keyboard navigation.

## Standards, limitations and provenance

The explorer explains HealthDCAT-AP-oriented concepts and produces an illustrative RDF export. Its browser-only field checks are **not** the authoritative Release 8 SHACL shapes or complete controlled-vocabulary verification. A digest establishes the identity of a locally generated payload, not compliance or European acceptance. Simulated receipts must not be interpreted as confirmations from HealthData@EU.

Primary references:

- [Regulation (EU) 2025/327 establishing the European Health Data Space](https://eur-lex.europa.eu/eli/reg/2025/327/oj/eng)
- [HealthDCAT-AP Release 8](https://data.health.europa.eu/healthdcat-ap/releases/release-8/)
- [DCAT-AP Release 3.0.1](https://semiceu.github.io/DCAT-AP/releases/3.0.1/)

Review the authoritative current specifications before applying any of this illustrative design to a production national infrastructure.

## Release notes

**v1.0.2:** The federation exercise is now a guided stage-by-stage walkthrough. Starting no longer skips directly to the final receipt; evidence is progressively unlocked.  
**v1.0.1:** Fixed compressed Journey Evidence columns, long digest wrapping and RDF preview overflow at narrow widths.  
**v1.0.0:** Original GitHub Pages educational demonstrator with role-specific browser workspaces and synthetic catalogue entries.

**Copyright:** Agile Health Informatics Ltd. Use and redistribution subject to the terms chosen by the repository owner; this README does not assign a new software licence.
