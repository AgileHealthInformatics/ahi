# EMPI and National EHR

Interactive explainer of an Enterprise Master Patient Index as the identity foundation for a national Electronic Health Record service.

## Site location

Deploy these files to `/resources/explainers/empi-national-ehr/`:

- `index.html`: self-contained webpage, with embedded site logo, CSS, JavaScript and SVG.
- `README.md`: maintenance and integration notes.

Proposed canonical URL: https://agilehealthinformatics.com/resources/explainers/empi-national-ehr/

## Content and interaction

The explainer retains the supplied content, architecture scenarios, illustrative matching exercise, identity lifecycle, standards boundaries, decision register filters and readiness review. Matching scores and readiness indicators are educational aids, not a validated matching algorithm or programme assurance assessment. No real patient data is collected or transmitted.

## Site integration

Add a resource entry to `resources.html`, under explainers or interoperability and architecture, and a card in the homepage New content section. Suggested title: **EMPI and National EHR**. Suggested description: **An interactive guide to patient identity, cross-organisational record linkage, matching uncertainty and the governance needed for a national EHR.** Use the root-relative link `/resources/explainers/empi-national-ehr/`. Suggested search terms: EMPI, MPI, patient identity, national EHR, matching, PIXm, PDQm, PMIR, FHIR, stewardship.

The homepage and resources listing are not modified by this deliverable.

## Design and maintenance

Uses the existing Agile Health Informatics palette, embedded logo, navigation and footer, with a blue hero, responsive sections, accessible controls and print styles. The theme is stored under `ahi-theme` and applied with `data-theme`. Storage failure does not prevent operation. The mobile menu supports Escape and keyboard operation. Diagram containers scroll on narrow screens.

All core narrative is available without JavaScript. Interactive outputs require JavaScript. No external frameworks or runtime services are required. Root-relative navigation needs the site root when previewing locally. Source links are retained from the supplied explainer; substantive clinical, legal or standards updates should be reviewed separately.

## Checks before publication

Check the page at desktop, tablet and mobile widths; light and dark themes; keyboard navigation; all interactive controls; and print preview. Verify the proposed path and links against the live website before deployment. The live site was inaccessible during this adaptation; the available homepage, resource library and metadata strategy page were used as design references.
