# Clinical Information Requirements Catalogue Explorer

A self-contained draft catalogue explorer for Agile Health Informatics Ltd, adapted from the supplied NHS acute trust catalogue. The embedded catalogue and supporting mapping data have been preserved.

## Installation

Copy this folder to `/resources/data-management/clinical-information-requirements-catalogue/` in the website repository. The public URL and canonical URL are:

https://agilehealthinformatics.com/resources/data-management/clinical-information-requirements-catalogue/

Add a resource card on `/resources.html` beside the Trust Metadata and Reference Data Strategy, using the existing resource card markup. Suggested text: **Clinical Information Requirements Catalogue Explorer**. Explore a draft NHS acute trust catalogue by clinical domain, criticality, pathway relationships and candidate standards mappings. Link the strategy page to this explorer and add it to the homepage new content section if appropriate.

## Features

Search, domain/type/status/criticality filtering, requirement detail, comparison of up to three requirements, domain coverage, example pathway links, candidate semantic and implementation mapping coverage, guide and sources, filtered CSV export, and printing. Shared site navigation, embedded company logo, mobile menu and persistent `ahi-theme` control follow the existing site components. Tabs support arrow keys, Home and End; requirement rows support Enter and Space. A non-JavaScript reference lists the requirement definitions.

## Content and maintenance

The catalogue remains a draft reference resource. Candidate mappings require validation against current national standards, implementation guides and local clinical safety governance. Mapping coverage indicates populated fields, not validated conformance. This restyle does not validate or expand the clinical content.

The HTML contains its own CSS, JavaScript, logo and catalogue data. No frameworks or network requests are required for the explorer. Root-relative site navigation requires hosting at the site root; catalogue interactions also work when the file is opened locally.

To update the content, maintain the embedded DATA, PATHWAYS, GUIDE, SOURCES and DOMAIN_SUMMARY arrays together. Review the visible summary counts and draft caveat after any catalogue update. Check search, comparisons, exports, tab and row keyboard operation, narrow screens, dark mode, printing and duplicate IDs before publication.

## Validation of this restyle

The embedded data arrays were compared with the original and are unchanged. Automated DOM checks passed for rendering, search, filters, reset, comparisons, keyboard selection, tabs, theme persistence, mobile menu, CSV and print actions. No duplicate HTML IDs or JavaScript syntax errors were found. Full browser visual checks could not be completed because the browser download was unavailable; inspect desktop/mobile layout, dark mode and print preview on the target site before publication.
