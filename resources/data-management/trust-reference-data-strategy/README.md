# Trust Metadata and Reference Data Strategy

An illustrative NHS trust strategy for metadata, reference data, national terminology, value sets and mappings. Intended for digital leaders, data owners, stewards, clinical informaticians and clinical safety officers in England.

## Publication location

Place this folder at:

`/resources/data-management/trust-reference-data-strategy/`

Public URL: https://agilehealthinformatics.com/resources/data-management/trust-reference-data-strategy/

Publish `index.html` and this README together. The page is self-contained, with embedded styles, vanilla JavaScript and the site's existing embedded logo. There are no external font or framework dependencies. This package does not deploy changes or modify other live pages.

## Design and content

The redesign reuses the current resource library's header, navigation, embedded company logo, footer, colours and components. It adds the standard blue hero, breadcrumbs, sticky contents on desktop, keyboard-scrollable tables, responsive layout, persistent theme control using `ahi-theme`, visible focus states, a skip link, reduced-motion support and a print stylesheet. The print control also provides a route to saving a PDF through the browser.

All thirteen original sections and the strategy's substantive wording are retained. A publication-status note identifies the strategy as illustrative and for adaptation, distinguishing its proposed approval roles from an adopted policy. The underlying factual and legal assertions have not been independently reassessed as part of this design task. Verify the source links, obligations, implementation dates and terminology release requirements before publication or organisational adoption.

## Recommended site updates

### 1. Resource library: `/resources.html` (essential)

Add a searchable resource card near the Clinical Terminology and Semantics Navigator and Health Data Architecture Navigator. Use the existing `proposal` type and its Working proposals filter, avoiding a new filter for a single item. Add the following inside the existing `.resource-grid`:

```html
<article class="card resource-card" data-type="proposal"
  data-search="trust metadata reference data management strategy nhs england governance data dictionary catalogue terminology snomed ct dm+d icd-10 opcs-4 ods code lists value sets mappings owners stewards clinical safety national releases roadmap first 90 days">
  <div class="type">Working proposal</div>
  <h3>Trust Metadata and Reference Data Strategy</h3>
  <p>An illustrative NHS trust strategy for governing metadata, code lists, terminology and mappings, with named owners, controlled change and a 24-month roadmap.</p>
  <div class="tags"><span>Metadata</span><span>Reference data</span><span>Governance</span><span>NHS England</span></div>
  <div class="action"><a href="/resources/data-management/trust-reference-data-strategy/">Open strategy →</a></div>
</article>
```

Search terms deliberately include reference data, data dictionary, code lists, stewardship, mappings and individual terminology names so readers need not know the page title.

### 2. Homepage: `/index.html` (recommended)

Add a compact link beneath Featured resources, or temporarily feature the strategy in an existing card position. Preserve the homepage's current layout and avoid expanding its four-card grid indefinitely. Suggested link text: **Trust Metadata and Reference Data Strategy**. Suggested description: **A practical proposed approach to ownership, code lists, terminology updates and mappings in an NHS trust.**

### 3. Clinical Terminology and Semantics Navigator (recommended)

Current canonical location: `/resources/navigators/terminology-semantics/`.

Add a Related resources link explaining that the strategy shows how to organise local ownership, national releases, value sets and mapping change control. The older root-level navigator file is a redirect, so edit the canonical resource rather than its redirect. The redesigned strategy already links back to the canonical navigator.

### 4. Health Data Architecture Navigator (recommended)

Currently linked from the resource library as `/agile_health_informatics_health_data_architecture_navigator_2026.html`.

Add a reciprocal Related resources link under metadata or governance guidance. Position the strategy as an organisational implementation resource supporting governed data architecture. If this legacy URL redirects, edit its canonical destination and retain the redirect.

### 5. Services: `/services.html#data` (optional)

Add a restrained supporting-resource link within Health data architecture. This connects advisory services with a practical public resource without adding a new service or primary navigation item.

### 6. Data management subject collection (later)

Create `/resources/data-management/index.html` when enough related resources exist to warrant a collection, grouping metadata, dictionaries, reference data, terminology, stewardship and data operability. Link the collection from `/resources.html`. At that point, add Data management to this page's breadcrumb. Do not create an empty parent page simply to support the folder structure.

### 7. Site maintenance

Update the homepage/resource-library README files to document the addition. Add the canonical resource URL to the sitemap if the repository maintains one, and to any manually maintained search index. Confirm GitHub Pages serves the trailing-slash directory URL. No primary-navigation change is needed.

## Local verification and release checks

Verify desktop and mobile views, both themes, navigation expansion and Escape handling, contents anchors, keyboard table scrolling and print output. Ensure there is one h1, all IDs are unique and all internal links resolve. Root-relative links are intended for the deployed site; a local preview must serve the site root or provide the corresponding pages.

The resource's date remains 3 October 2026. Review source currency when changing substantive strategy content. The canonical URL assumes the recommended directory is used; change it if the publication location changes.

### Verification completed in this redesign

Original section text was compared and confirmed unchanged. There is one h1, no duplicate IDs and no broken fragment links. JavaScript syntax checks passed. All linked internal page URLs returned HTTP 200 at the time of checking. Interactive and visual browser tests could not be completed because the preview browser was unavailable and its installation download failed. Responsive, theme, keyboard and print rendering therefore require visual confirmation before publication.
