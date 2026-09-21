# Modern NHS Digital Workforce Navigator

Interactive Agile Health Informatics resource describing selected digital, data, architecture, AI, cyber and clinical informatics roles needed by a modern NHS organisation.

## Purpose

The navigator helps users:

- explore specialist workforce roles and likely experience requirements;
- compare recruitment difficulty, retention pressure and the importance of continuity;
- review indicative England Agenda for Change pay ranges alongside external market benchmarks;
- use a decision aid to identify likely capability needs;
- compare substantive, fixed-term, contractor and managed-service resourcing models;
- examine illustrative substantive-versus-contract cost differences; and
- identify workforce anti-patterns that can create capability debt.

Recruitment and retention scores are evidence-informed professional judgements rather than measured vacancy statistics. Salary and contract figures are planning benchmarks, not recommended pay or job-evaluation outcomes.

## Website location

Recommended location:

`/resources/navigators/modern-nhs-digital-workforce/`

Files:

- `index.html`
- `README.md`

## Design

The page follows the current Agile Health Informatics website design system and reuses the standard site header, embedded logo, navigation, blue resource hero, breadcrumbs, card treatment, responsive breakpoints, dark mode using the `ahi-theme` localStorage key, print treatment and footer.

The page is self-contained HTML5 with embedded CSS, JavaScript and SVG. No framework is required.

## Interaction

The workforce landscape plots recruitment difficulty against retention risk. Point size represents the value of continuity. To avoid label collisions, only the selected role is labelled; roles sharing the same score are offset slightly around the common grid point.

The role catalogue supports search and filtering. The decision aid combines capability need, duration, urgency and the value of institutional knowledge. The cost comparison annualises contractor rates on a 220-day assumption and applies a user-set substantive employment on-cost percentage.

## Maintenance

Workforce market information changes quickly. Review pay scales, Recruitment and Retention Premia examples, external salary/rate benchmarks and role assumptions before republishing material updates.
