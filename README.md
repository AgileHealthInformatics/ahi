# Agile Health Informatics Ltd: Homepage

**Website:** https://agilehealthinformatics.com/  
**Page:** `/index.html`  
**Source reviewed:** `index(20261113-095310).html` (13 November 2026)  
**Organisation:** Agile Health Informatics Ltd  
**Tagline:** *creative ideas & solutions*

## Purpose

The homepage introduces Agile Health Informatics Ltd and provides routes into its professional services, healthcare architecture and data-management knowledge resources, professional development material and contact information. It presents the practice as an independent senior advisory service working across enterprise architecture, health data, interoperability, secure data environments and AI-enabled analysis.

The content is written in UK English for healthcare leaders, programme teams, architects, informatics professionals and other stakeholders considering architectural or data-related decisions.

## Page structure

The supplied HTML contains the following sections, in display order:

| Area | Content and purpose |
| --- | --- |
| Sticky site header | Company identity, six principal navigation links, dark/light theme control and a responsive menu |
| Blue hero | Principal proposition, service and resource links, experience and professional standing |
| **New content** | Four resources identified as November 2026 additions |
| How we can help | Six linked service areas: enterprise architecture, health data architecture, interoperability, secure data environments, AI-enabled architecture and transformation readiness |
| Featured resources | Four links to selected navigators, reference material and a maturity assessment |
| About the practice | Overview of the principal consultant and professional standing, including FBCS, CITP, Open Agile Architecture, TOGAF and ArchiMate |
| Connect | LinkedIn call to action, with the in-page anchor `#contact` |
| Footer | Company identity, LinkedIn link, privacy notice and analytics privacy settings |

### November 2026 additions

The `#new-content` section currently links to:

1. [Canonical Reporting Metadata](/resources/explainers/canonical-reporting-metadata/)
2. [EHDS Data Catalogue Explorer](/resources/ehds-data-catalogue/)
3. [National PEWS: A Warning Score Is Not a Response](/resources/explainers/national-pews/)
4. [EHDS Direct Care Sharing Explorer](/resources/explainers/ehds-direct-care-sharing/)

This is a manually maintained collection, not an automatically generated publication feed. The date in the section heading is explicitly set to **November 2026**. When updating it, ensure that the featured entries correspond to the stated month; retain older resources in the main [resource library](/resources.html).

## Navigation and important destinations

The main navigation is **Home | Services | Resources | Professional Development | About | Connect**. Links use root-relative site paths, allowing the same navigation to work across nested resources hosted on GitHub Pages under the custom domain.

The current homepage also links directly to the Healthcare Standards Navigator, Modern NHS Digital Workforce Navigator, UK Secondary Care Integration Reference Atlas and Health Data Operability Maturity Assessment.

When changing a resource location, update its link here and in `resources.html`. For service cards, check that the destination anchors in `/services.html` still exist: `#enterprise`, `#data`, `#interoperability`, `#secure`, `#ai` and `#transformation`.

## Design and responsiveness

The page uses a self-contained inline CSS design, with the standard Agile Health Informatics palette and system fonts. Its principal CSS variables include `--bg`, `--surface`, `--text`, `--muted`, `--brand`, `--brand-deep`, `--accent`, `--line`, `--radius` and `--max`.

- Normal content is limited to **1180px** using `--max`.
- The header is sticky; the primary navigation becomes a toggleable mobile menu at approximately **980px**.
- Cards and content grids collapse for narrower screens at approximately **680px**.
- The design includes visible keyboard focus, reduced-motion support and print-specific CSS.
- A narrow progress indicator at the top of the page reflects page scroll position.

The page uses one `h1` and section-level `h2` headings, with `h3` headings for linked cards.

## Theme behaviour

Light and dark palettes are defined using `:root` and `[data-theme=dark]`. The theme control updates `document.documentElement.dataset.theme`, stores the selected value under the localStorage key **`ahi-theme`**, and restores `light` or `dark` values when the page loads. Storage reads and writes are wrapped in error handling so the page can still function when browser storage is unavailable.

Any new visual components should use the existing CSS variables rather than introducing unrelated colours. Check the readability of headings, buttons, links and labels in both themes.

## Google Analytics and consent

The homepage references the shared site-level resources:

```html
<link rel="stylesheet" href="/assets/css/analytics-consent.css">
<script src="/assets/js/analytics.js" defer></script>
```

These files are **dependencies of the website**, not embedded in the supplied `index.html`. They are expected to handle the site's analytics consent interface and Google Analytics integration. The homepage itself does not include a separate Google Analytics measurement ID or initialise `gtag` directly.

**Do not add an independent Google Analytics snippet to the homepage.** Maintain a single consent-controlled integration across the site. After deployment, check the initial consent choice, refusal, acceptance, subsequent visits and the privacy-settings link to `/privacy.html#analytics-settings`. Confirm that analytics requests are not made before the applicable consent is given.

## Logo implementation note

In this particular supplied version, the two logo images initially have inline SVG fallback data in their `src` attributes. A script then fetches **`/about.html`**, reads the image source from that page's `.brand-link img`, and replaces the homepage's header and footer logo images with it when available.

The supplied fallback `data:image/svg+xml` strings contain unescaped double quotes within double-quoted HTML attributes. An HTML parser therefore does not retain the complete image source. The fallback images may fail if the fetch of `/about.html` does not succeed. The `about.html` fetch also means that the final logo depends on another page being available.

**Recommended maintenance correction:** embed the site's standard logo directly in the homepage header and footer, using the same valid data URI or asset reference as the other site pages, instead of depending on runtime retrieval. This README documents the current implementation; it does not modify the uploaded HTML.

## Deployment

The homepage is published from the repository root as `index.html`, served at:

`https://agilehealthinformatics.com/`

For manual deployment to the GitHub Pages repository:

1. Retain a copy of the current root `index.html` and `README.md` before replacing them.
2. Upload the reviewed homepage HTML as the repository-root **`index.html`**, not under a dated filename.
3. Place this **`README.md`** alongside it at the repository root.
4. Keep `/assets/css/analytics-consent.css` and `/assets/js/analytics.js` in place, along with all linked resource and site pages.
5. Commit the changes to the branch used by GitHub Pages and inspect the published page once deployment completes.

GitHub Pages does not require a build step for this standalone HTML page. Root-relative site links presume deployment on the site's own domain, not under a repository subpath.

## Maintenance and verification checklist

- [ ] Confirm that the standard logo renders immediately, even if `/about.html` cannot be fetched.
- [ ] Verify all six main navigation destinations and the mobile menu with keyboard and touch input.
- [ ] Confirm that resource links and service section anchors resolve successfully.
- [ ] Keep the **New content** section limited to material added during the month shown in its heading.
- [ ] Check the four featured resource links against the resource library.
- [ ] Verify theme persistence across pages using `ahi-theme`.
- [ ] Test desktop, tablet and mobile layouts, including keyboard focus and reduced-motion settings.
- [ ] Validate the analytics consent interface and test the privacy-settings link.
- [ ] Check that internal links use the intended root-relative paths and that no HTML IDs are duplicated.
- [ ] Check browser-console errors, print layout and heading contrast in both themes.
- [ ] Confirm the canonical URL, page title and meta description remain appropriate.

## Scope and limitations

This README describes the **uploaded homepage snapshot**, not an independent audit of the current deployed website. The source was inspected for its structure and implementation dependencies, but deployment, live navigation destinations and analytics-consent network behaviour have not been verified in a browser. Neither the page content nor its linked resources have been substantively revalidated against external sources as part of preparing this README.

The homepage is a public introduction and navigation point. The linked demonstrators and explainers are separate resources and may describe synthetic examples, proposed architectures or educational analyses rather than operational healthcare services.

---

**Maintainer:** Agile Health Informatics Ltd  
**Site:** [agilehealthinformatics.com](https://agilehealthinformatics.com/)  
**Source snapshot reviewed:** 13 November 2026
