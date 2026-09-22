# Theatres Pathway Navigator

Interactive Agile Health Informatics resource for exploring a draft theatre and perioperative pathway catalogue represented using the proposed Healthcare Pathway Description Standard (HPDS).

## Purpose

The navigator presents theatre and perioperative pathways as technology-neutral business artefacts rather than EPR workflow definitions. It is intended to help users explore how listing, preparation, consent, elective and emergency surgery, intraoperative safety, postoperative care, discharge and governance fit together, and how individual definitions depend on evidence and reusable sub-pathways.

The catalogue is a reference demonstrator for analysis and service design. It is **not clinical guidance**, and the pathway definitions are draft and unapproved. HPDS conformance does not imply clinical correctness, organisational approval or regulatory compliance.

## Files

```text
theatres/
├── index.html
└── README.md
```

`index.html` is self-contained. It uses embedded CSS, vanilla JavaScript, inline SVG and the embedded Agile Health Informatics logo. No build process, JavaScript framework or external font is required.

## Recommended website location

```text
/resources/clinical-pathways/theatres/
```

## Navigator views

The page provides four complementary views:

- **Navigate** — browse and search pathway definitions by domain, follow pathway exits, inspect reusable sub-pathways, and view roles, information, outcomes, evidence and questions for local implementers.
- **Pathway map** — visualise `transitionsTo`, `escalatesTo` and `includes` relationships across the catalogue domains.
- **Evidence and impact** — see which pathway definitions cite each evidence source and identify definitions that would need review when a source changes.
- **Variants** — inspect deviations from reference definitions, including jurisdiction-specific capacity/consent arrangements and the day-case joint-replacement setting.

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

- **28 pathway definitions** across **9 domains**;
- **9 care pathways**;
- **16 shared sub-pathways**;
- **3 governance processes**;
- **28 evidence records** and **2 design/method sources**;
- **4 variants**, specialising **2 parent definitions**; and
- **21 unresolved catalogue or implementation questions**.

### Domains

- Listing, scheduling & waiting
- Preoperative assessment & optimisation
- Shared decisions & consent
- Elective surgical pathways
- Emergency surgery
- Intraoperative safety
- Recovery & postoperative care
- Discharge & follow-up
- Governance, quality & capacity

## Identifier and relationship model

Pathways use stable `TH-...` identifiers, for example `TH-PRE-001`, `TH-SAF-001` and `TH-EMG-002`.

The navigator recognises three explicit relationship types:

- `transitionsTo` — the pathway normally leads on to another definition;
- `escalatesTo` — the pathway can escalate to another definition; and
- `includes` — a pathway reuses a shared definition without copying it.

Keeping reusable concepts such as consent, preoperative assessment, invasive-procedure safety checks, VTE prophylaxis, anaesthesia, recovery and discharge as shared sub-pathways reduces duplication and makes evidence impact easier to trace.

## Variants

The catalogue deliberately separates reference pathway definitions from controlled deviations. The current variant set covers:

- consent for adults lacking capacity in **England and Wales**;
- consent in **Scotland**;
- consent in **Northern Ireland**, including the source catalogue's qualification that commencement of the 2016 Act is partial; and
- **day-case primary hip or knee replacement** for selected people.

These are presented as catalogue data, not as legal or clinical advice. The underlying wording and evidence status are retained from the source catalogue.

## Evidence and review status

The evidence register mixes NICE guidance, professional standards, audit sources, national policy and legislation. Each source retains its catalogue verification state. Some entries are marked as verified; others explicitly say that the current version, locator or recommendation-level reference still needs confirmation.

The navigator does not silently upgrade those evidence states. When maintaining the catalogue, review source versions and recommendation identifiers before changing a pathway definition that depends on them.

## Updating the catalogue

When editing the embedded catalogue:

1. Keep pathway identifiers stable once published.
2. If a relationship target changes, update both the source pathway and the target identifier consistently.
3. Keep source identifiers in pathway `src` fields synchronised with `D.s`.
4. Ensure every variant `parent` resolves to an existing pathway definition.
5. Preserve the distinction between a reusable **shared sub-pathway**, a patient-facing **care pathway**, and a **governance process**.
6. Keep legal/jurisdictional differences in variants where practical rather than duplicating whole pathway definitions.
7. Treat the questions in `D.dq` as unresolved matters, not established requirements.
8. Update the catalogue version and review status deliberately when content changes.

## Accessibility and responsive behaviour

The navigator supports keyboard operation for pathway lists, tables and SVG map nodes. Controls have labels and visible focus states. Wide tables and the pathway map scroll horizontally where necessary, and the pathway list becomes non-sticky on smaller screens.

The surrounding Agile Health Informatics shell uses the established responsive breakpoints, and the page respects `prefers-reduced-motion`.

## Deployment

No compilation is required. Commit `index.html` and `README.md` to the target directory in the GitHub Pages repository.

When the file is opened directly from disk, root-relative links such as `/resources.html` will not resolve as they do on the deployed website. Test the final page through a local web server or on GitHub Pages before publication.
