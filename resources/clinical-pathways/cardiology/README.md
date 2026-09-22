# Cardiology Pathway Navigator

Interactive Agile Health Informatics resource for exploring a draft cardiology pathway catalogue represented using the proposed Healthcare Pathway Description Standard (HPDS).

## Purpose

The navigator presents cardiology pathways as technology-neutral business artefacts rather than as an EPR workflow or clinical decision-support system. It is intended to help users inspect pathway scope, entry and exit conditions, activities, decisions, roles, information requirements, evidence dependencies, relationships and pathway variants across prevention, acute care, diagnostics, long-term management and service governance.

**This is a reference catalogue, not clinical guidance.** The pathway definitions are draft and unapproved and are intended for analysis and service design. Conformance to HPDS does not imply clinical correctness or approval.

## Files

```text
cardiology/
├── index.html
└── README.md
```

`index.html` is self-contained. The catalogue data, styling and JavaScript are embedded in the file and there is no build step or external JavaScript dependency.

## Recommended website location

```text
/resources/clinical-pathways/cardiology/
```

The page uses root-relative links to the Agile Health Informatics corporate pages and the resource library.

## Navigator views

The application provides four complementary views:

- **Navigate**: search and filter pathway definitions, enter the catalogue by route into care, and follow exits and relationships across cardiology pathways.
- **Pathway map**: inspect transitions, escalations and inclusion relationships across pathway domains.
- **Evidence and impact**: identify which pathway definitions depend on an evidence source and which definitions may therefore require review when that source changes.
- **Pathway variants**: compare specialisations of reference definitions by care setting, jurisdiction or population, including STEMI reperfusion, cardiac rehabilitation and heart-failure treatment variants.

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

The current draft contains 26 pathway definitions across 9 domains: 18 care pathways, 6 shared sub-pathways and 2 governance processes. It also records 20 evidence sources, 2 design or method sources, 5 pathway variants and 14 unresolved decision questions.

The pathway domains are: Prevention & risk; Chest pain & acute coronary syndromes; Heart failure; Arrhythmia & syncope; Valve & structural disease; Cardiac diagnostics & procedures; Cardiac emergencies; Rehabilitation & long-term care; Governance, access & audit.

Pathway identifiers such as `CAR-ACS-002` are used as stable references between records. Relationship types currently include `transitionsTo`, `escalatesTo` and `includes`.

## Updating the catalogue

When changing the embedded data:

1. Preserve stable pathway identifiers unless an identifier is intentionally retired.
2. Keep relationship targets synchronised with the pathway records they reference.
3. Update evidence source metadata and verification information when guidance, policy or professional standards change.
4. Review pathway variants when reperfusion arrangements, national guidance or phenotype-specific treatment recommendations change.
5. Review unresolved decision questions as the catalogue is validated with clinical service owners, cardiac networks and local implementers.
6. Update the catalogue version displayed by the application when the content model changes materially.
7. Keep the clinical-guidance disclaimer visible and do not present draft definitions as approved care instructions.

## Accessibility and responsive behaviour

The navigator supports keyboard operation for pathway lists, evidence tables and the SVG pathway map. Form controls have associated accessible labels, focus states are visible, tables and the map can scroll horizontally on smaller screens, and the site navigation collapses to a mobile menu. The page supports the shared light and dark themes, respects reduced-motion preferences and includes a print treatment that removes unnecessary corporate and interactive controls.

## Deployment

No compilation is required. Place `index.html` and this `README.md` in the target directory and commit them to the website repository. The page can also be opened locally for review, although root-relative corporate navigation links will only resolve correctly when served from the website root.
