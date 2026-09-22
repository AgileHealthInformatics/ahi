# Clinical Pathways resource collection

This directory is the collection landing page for the Agile Health Informatics Ltd clinical-pathway resources.

## Public path

`/resources/clinical-pathways/`

The collection page uses `index.html` so the public URL remains stable as individual pathway resources are added or revised.

## Purpose

The collection provides a curated entry point to pathway-related material without requiring every individual pathway navigator to appear as a separate card on the main `/resources.html` page.

It brings together:

- the Healthcare Pathway Description Standard (HPDS) working proposal;
- the frailty and multimorbidity HPDS demonstrator; and
- draft clinical pathway navigators covering acute admission and discharge, cardiology, child and youth mental health, endoscopy, frailty and neighbourhood care, maternity, medicines reconciliation and transfer, and theatres/perioperative care.

The collection should remain clear that the pathway catalogues are **reference material for analysis and service design, not clinical guidance**. Draft pathway definitions are unapproved and HPDS conformance does not establish clinical correctness, organisational approval or regulatory compliance.

## Current structure

```text
resources/clinical-pathways/
├── index.html
├── README.md
├── acute-admission-discharge/
│   ├── index.html
│   └── README.md
├── cardiology/
│   ├── index.html
│   └── README.md
├── child-youth-mental-health/
│   ├── index.html
│   └── README.md
├── endoscopy/
│   ├── index.html
│   └── README.md
├── frailty/
│   ├── index.html
│   └── README.md
├── healthcare-pathway-description/
│   ├── index.html
│   ├── README.md
│   └── frailty-multimorbidity-demonstrator/
├── maternity/
│   ├── index.html
│   └── README.md
├── medicines-reconciliation-transfer/
│   ├── index.html
│   └── README.md
└── theatres/
    ├── index.html
    └── README.md
```

## Information architecture

`/resources.html` is the main resource-library landing page. It should contain one **Clinical Pathways** collection card rather than a separate top-level card for every pathway navigator.

The HPDS resource remains separately listed on `/resources.html` as a **Working proposal** because it is both:

1. part of the Clinical Pathways subject collection; and
2. a substantive proposal that users may reasonably discover by resource type.

The Clinical Pathways collection page exposes the individual pathway navigators and provides search within the collection.

## Adding another pathway navigator

When adding a new pathway resource:

1. Create a stable lower-case, hyphenated directory under `/resources/clinical-pathways/`.
2. Include a self-contained `index.html` and companion `README.md`.
3. Use the current Agile Health Informatics header, embedded logo, navigation, colour variables, theme behaviour and footer.
4. Link back to `/resources.html` and `/resources/clinical-pathways/`.
5. Keep the resource explicit about whether content is fact, analysis, professional inference or unresolved.
6. Keep the clinical-guidance disclaimer visible where the catalogue contains draft clinical pathway content.
7. Add a card to `/resources/clinical-pathways/index.html`.
8. Add the new clinical topic to the `data-search` text on the Clinical Pathways collection card in `/resources.html` so searches on the main library still find the collection.
9. Do not add a separate top-level card to `/resources.html` unless the resource has an independent role comparable with HPDS.
10. Check responsive behaviour, dark mode, keyboard use, print output, internal links, duplicate IDs and JavaScript errors.

## Design

The landing page follows the current Agile Health Informatics website design system:

- system fonts;
- pale blue-grey page background;
- white or dark-blue surfaces;
- blue hierarchy with restrained lime accents;
- maximum normal content width of `1180px`;
- rounded cards with subtle borders and shadows;
- standard sticky header and responsive mobile menu;
- `ahi-theme` localStorage key for light/dark theme;
- root-relative corporate navigation;
- clean print treatment.

## Maintenance principle

The collection page is a subject-level catalogue, while the main Resources page remains a curated front door to the wider knowledge base. This separation is intended to allow the clinical-pathway library to expand without making `/resources.html` progressively harder to scan.
