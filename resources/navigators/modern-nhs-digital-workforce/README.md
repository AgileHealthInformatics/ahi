# Modern NHS Digital Workforce Navigator

Interactive Agile Health Informatics Ltd resource for exploring digital, data, architecture, AI, cyber and clinical informatics workforce roles needed by a modern NHS organisation.

## Intended site location

`/resources/navigators/modern-nhs-digital-workforce/`

The accompanying `index.html` is self-contained and uses the Agile Health Informatics website design system, including the standard colour variables, responsive header, theme control, print treatment and root-relative site navigation.

## What the navigator does

The resource:

- describes 15 specialist workforce roles across six capability families;
- estimates recruitment difficulty, retention pressure and continuity value;
- records likely Agenda for Change ranges using England 2026/27 as a consistent comparator;
- provides external market salary and contractor-rate benchmarks where a meaningful comparator exists;
- includes an interactive recruitment-difficulty versus retention-risk landscape;
- provides a decision aid for identifying likely roles and an appropriate employment model;
- compares substantive employment and contract staffing using adjustable planning assumptions;
- describes workforce anti-patterns and capability-debt risks.

## Interpretation

Recruitment and retention scores are analytical judgements informed by labour-market evidence and contemporary NHS recruitment examples. They are not vacancy statistics or NHS-wide workforce ratings.

Agenda for Change ranges are indicative role comparators only. Actual NHS banding must follow job evaluation. Scotland, Wales and Northern Ireland have separate pay arrangements.

The substantive-versus-contract calculator is a planning aid. Contractor rates are annualised at 220 days. The user-selected substantive on-cost percentage is illustrative and should be replaced with local finance assumptions for a business case.

## Design and interaction

The page follows the Agile Health Informatics navigator design system:

- blue resource hero with lime accent;
- pale blue-grey page background and rounded white/dark-blue surfaces;
- maximum content width of 1180px;
- system fonts;
- standard site navigation and route back to the Resource library;
- light/dark theme using `data-theme` and localStorage key `ahi-theme`;
- responsive breakpoints around 980px and 680px;
- print styles that remove interactive navigation and retain core content;
- keyboard-operable native controls and visible focus states.

The workforce landscape deliberately avoids permanent labels on every point. Roles sharing the same recruitment/retention coordinates are separated visually, while the selected role alone is labelled and described in a persistent detail panel.

## Maintenance

Review at least annually, and earlier when any of the following materially changes:

- Agenda for Change pay scales;
- NHS Recruitment and Retention Premium practice;
- Government Digital and Data Profession capability definitions;
- market salary or contractor-rate benchmarks;
- emergence of new AI, data or cyber roles;
- material changes to NHS workforce or operating-model expectations.

When updating salary or market evidence, retain the source date and distinguish sourced facts from professional assessment.
