# Medicines Reconciliation and Transfer Navigator

Interactive Agile Health Informatics resource for exploring a draft medicines reconciliation and transfer catalogue represented using the proposed Healthcare Pathway Description Standard (HPDS).

## Purpose

The navigator presents medicines reconciliation and transfer as a set of technology-neutral pathway and process artefacts rather than EPR workflow definitions. It is intended to help users explore how an accurate medicines record is established on admission, how changes are recorded during a hospital stay, how medicines are reconciled and explained at discharge, and how information and responsibility pass to general practice, community pharmacy, care homes and home-care services.

The catalogue deliberately crosses organisational boundaries. It therefore demonstrates how HPDS can describe a healthcare process whose safe completion depends on several organisations and professional groups rather than a single provider or condition-specific service.

The catalogue is a reference demonstrator for analysis and service design. It is **not clinical guidance**, and the pathway definitions are draft and unapproved. HPDS conformance does not imply clinical correctness, organisational approval, legal compliance or conformance with any cited information standard.

## Files

```text
medicines-transfer/
├── index.html
└── README.md
```

`index.html` is self-contained. It uses embedded CSS, vanilla JavaScript, inline SVG and the embedded Agile Health Informatics logo. No build process, JavaScript framework or external font is required.

## Recommended website location

```text
/resources/clinical-pathways/medicines-transfer/
```

## Navigator views

The page provides four complementary views:

- **Navigate** — browse and search definitions by domain, follow transfers and escalation routes, inspect reusable sub-pathways, and view roles, information, outcomes, evidence and questions for local implementers.
- **Pathway map** — visualise `transitionsTo`, `escalatesTo` and `includes` relationships across the catalogue domains.
- **Evidence and impact** — see which definitions cite each evidence source and identify definitions that would need review when a source or information standard changes.
- **Variants** — inspect jurisdiction-specific deviations in discharge information standards and community-pharmacy referral arrangements.

## Agile Health Informatics integration

The page uses the same site treatment as the other Agile Health Informatics pathway navigators:

- standard embedded Agile Health Informatics logo and navigation;
- breadcrumb route back to **Home**, **Resources** and the clinical-pathway/HPDS area;
- established blue hero treatment and restrained lime accent;
- pale blue-grey page background, rounded surfaces and subtle borders;
- responsive mobile navigation and navigator layout;
- light/dark theme using `data-theme` and the `ahi-theme` localStorage key;
- visible keyboard focus states;
- reduced-motion support; and
- print styling that removes the surrounding website controls and concentrates on the active analytical view.

## Catalogue structure

The embedded `D` object contains the complete catalogue used by the navigator:

- `D.domains` — catalogue domains;
- `D.p` — pathway definitions;
- `D.s` — evidence and design/method sources;
- `D.v` — pathway variants; and
- `D.dq` — unresolved catalogue, governance and local implementation questions.

The current demonstrator contains:

- **25 pathway definitions** across **8 domains**;
- **4 care pathways**;
- **17 shared sub-pathways**;
- **4 governance processes**;
- **20 evidence records** and **2 design/method sources**;
- **5 variants**, specialising **2 parent definitions**; and
- **13 unresolved catalogue or implementation questions**.

### Domains

- Admission reconciliation
- Changes during the stay
- Discharge preparation
- Information transfer
- Community reconciliation
- Discrepancies & escalation
- Special circumstances
- Governance & information standards

## Identifier and relationship model

Pathways use stable `MRT-...` identifiers, for example `MRT-ADM-001`, `MRT-DSP-001` and `MRT-TRF-001`.

The navigator recognises three explicit relationship types:

- `transitionsTo` — the pathway or process normally leads on to another definition;
- `escalatesTo` — an unresolved discrepancy or safety concern escalates to another definition; and
- `includes` — a pathway reuses a shared definition without copying it.

This supports reuse of admission reconciliation, discharge prescription, patient counselling, information transfer and community reconciliation components while preserving traceability across organisational boundaries.

## Cross-organisational scope

The catalogue covers a medicines journey rather than a single disease pathway. Its definitions span:

- hospital admission and inpatient care;
- discharge preparation and medicines supply;
- electronic or other transfer of medicines information;
- general-practice reconciliation;
- community-pharmacy follow-up;
- care-home and home-care handover; and
- cross-organisational discrepancy resolution, audit and learning.

This is an important HPDS design test. The source catalogue itself leaves open whether these process-oriented definitions should be treated as healthcare pathways, how population should be interpreted, and who should own a pathway that crosses organisational boundaries. Those questions remain unresolved in `D.dq` and should not be treated as settled requirements.

## Variants and information standards

The catalogue deliberately separates reference definitions from jurisdiction-specific deviations. The current variants cover:

- medicines information to the GP in **England**, using the referenced PRSB discharge and medications standards;
- medicines information to the GP in **Ireland**, using the referenced HIQA discharge-summary dataset and national GP messaging;
- **international/cross-border** exchange using the International Patient Summary medication section;
- the contracted community-pharmacy referral route in **England**; and
- the source catalogue's stated absence of a national equivalent referral protocol in **Ireland**, represented as a local-arrangements variant.

These entries describe the source catalogue's modelling assumptions and evidence state. They do not independently certify implementation or standards conformance.

## Evidence and review status

The evidence register mixes NICE guidance, WHO medication-safety material, Royal Pharmaceutical Society principles, NHS England policy, Irish policy and standards, legislation, and international information standards. Each source retains its catalogue verification state. Several records explicitly say that the current version, title, locator or recommendation-level reference still needs confirmation.

The navigator does not silently upgrade those evidence states. Before publication as an authoritative catalogue, the evidence register should be reviewed and the entries marked `to confirm` should be resolved against the relevant source owners.

## Updating the catalogue

When editing the embedded catalogue:

1. Keep published pathway identifiers stable.
2. Keep relationship targets synchronised with the pathway identifiers in `D.p`.
3. Keep source identifiers in pathway `src` fields synchronised with `D.s`.
4. Ensure every variant `parent` resolves to an existing definition.
5. Preserve the distinction between a reusable **shared sub-pathway**, a cross-setting **care pathway**, and a **governance process**.
6. Keep jurisdiction-specific information standards and referral mechanisms in variants where practical rather than duplicating entire reference definitions.
7. Treat the questions in `D.dq` as unresolved matters, not established requirements.
8. Re-check external information standards when their versions change, because a standards change may affect several pathway definitions even if the clinical process has not changed.
9. Update the catalogue version and review status deliberately when content changes.

## Accessibility and responsive behaviour

The navigator supports keyboard operation for pathway lists, evidence tables and SVG map nodes. Controls have labels and visible focus states. Wide tables and the pathway map scroll horizontally where necessary, and the pathway list becomes non-sticky on smaller screens.

The surrounding Agile Health Informatics shell uses the established responsive breakpoints, and the page respects `prefers-reduced-motion`.

## Deployment

No compilation is required. Commit `index.html` and `README.md` to the target directory in the GitHub Pages repository.

When the file is opened directly from disk, root-relative links such as `/resources.html` will not resolve as they do on the deployed website. Test the final page through a local web server or on GitHub Pages before publication.
