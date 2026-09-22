# Child and Youth Mental Health Pathway Navigator

Interactive Agile Health Informatics resource for exploring a draft child and youth mental health pathway catalogue represented using the proposed Healthcare Pathway Description Standard (HPDS).

## Purpose

The navigator presents child and youth mental health pathways as technology-neutral business artefacts rather than as an EPR workflow or clinical decision-support system. It is intended to help users inspect pathway scope, entry and exit conditions, activities, decisions, roles, information requirements, evidence dependencies, relationships and jurisdictional variants across early intervention, specialist access, assessment, condition pathways, crisis care, inpatient care, transitions, safeguarding and service governance.

**This is a reference catalogue, not clinical guidance.** The pathway definitions are draft and unapproved and are intended for analysis and service design. Conformance to HPDS does not imply clinical correctness or approval.

## Files

```text
child-youth-mental-health/
├── index.html
└── README.md
```

`index.html` is self-contained. The catalogue data, styling and JavaScript are embedded in the file and there is no build step or external JavaScript dependency.

## Recommended website location

```text
/resources/clinical-pathways/child-youth-mental-health/
```

The page uses root-relative links to the Agile Health Informatics corporate pages and the resource library.

## Navigator views

The application provides four complementary views:

- **Navigate**: search and filter pathway definitions, enter the catalogue by route into care, and follow exits and relationships across child and youth mental health pathways.
- **Pathway map**: inspect transitions, escalations and inclusion relationships across pathway domains.
- **Evidence and impact**: identify which pathway definitions depend on an evidence source and which definitions may therefore require review when that source changes.
- **Pathway variants**: compare specialisations of reference definitions by jurisdiction and legal effect, including referral criteria and consent rules.

## Agile Health Informatics integration

The page follows the current Agile Health Informatics website pattern and the preceding clinical-pathway navigators. It includes the standard embedded logo and corporate navigation, breadcrumb trail, compact blue resource hero, pale blue-grey page canvas, rounded resource surfaces, restrained lime accent, responsive mobile navigation, the shared `ahi-theme` light/dark preference and the standard dark footer.

The navigator keeps semantic colours for pathway relationships and status cues within the shared AHI colour and typography system. The application layout remains deliberately wider than a normal article page because the pathway map and evidence tables require additional horizontal space.

## Catalogue structure

The embedded JavaScript object `D` is the catalogue source used by the interface. Its principal collections are:

- `D.domains` for pathway domains;
- `D.p` for pathway definitions and relationships;
- `D.s` for evidence sources and verification metadata;
- `D.v` for pathway variants;
- `D.dq` for unresolved catalogue and implementation questions retained with the source data.

The current draft contains 25 pathway definitions across 9 domains: 14 care pathways, 8 shared sub-pathways and 3 governance processes. It also records 20 evidence sources, 2 design or method sources, 5 pathway variants and 14 unresolved decision questions.

The pathway domains are: Promotion & early intervention; Access & referral; Assessment & care planning; Condition pathways; Crisis & self-harm; Intensive & inpatient care; Transitions & discharge; Safeguarding & family; Governance, regulation & access.

Pathway identifiers such as `CYM-ACC-001` are used as stable references between records. Relationship types currently include `transitionsTo`, `escalatesTo` and `includes`.

## Legal and policy status

The catalogue deliberately distinguishes current requirements from enacted changes that are not yet in force. In particular, the embedded source records the Irish Mental Health Act 2026 as enacted but not yet commenced and models the future consent position for 16 and 17 year olds as a dated jurisdictional variant. The navigator does not convert that future state into current practice.

Several evidence records are explicitly marked as requiring version or locator confirmation. Those statuses are retained in the interface rather than silently treated as verified.

## Updating the catalogue

When changing the embedded data:

1. Preserve stable pathway identifiers unless an identifier is intentionally retired.
2. Keep relationship targets synchronised with the pathway records they reference.
3. Update evidence source metadata and verification information when legislation, national policy, guidance or service models change.
4. Review the Irish consent and regulation variants when Mental Health Act 2026 commencement orders and associated standards are published.
5. Review access and crisis pathways when the HSE Single Point of Access and Integrated Crisis Response Pathways are published.
6. Review unresolved decision questions as the catalogue is validated with service owners, regional teams, clinical professionals, young people and families.
7. Update the catalogue version displayed by the application when the content model changes materially.
8. Keep the clinical-guidance disclaimer visible and do not present draft definitions as approved care instructions.

## Accessibility and responsive behaviour

The navigator supports keyboard operation for pathway lists, evidence tables and the SVG pathway map. Form controls have associated accessible labels, focus states are visible, tables and the map can scroll horizontally on smaller screens, and the site navigation collapses to a mobile menu. The page supports the shared light and dark themes, respects reduced-motion preferences and includes a print treatment that removes unnecessary corporate and interactive controls.

## Deployment

No compilation is required. Place `index.html` and this `README.md` in the target directory and commit them to the website repository. The page can also be opened locally for review, although root-relative corporate navigation links will only resolve correctly when served from the website root.
