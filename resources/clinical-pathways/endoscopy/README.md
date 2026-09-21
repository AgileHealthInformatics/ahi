# Endoscopy Pathway Navigator

Interactive Agile Health Informatics resource for exploring a draft endoscopy pathway catalogue represented using the proposed Healthcare Pathway Description Standard (HPDS).

## Purpose

The navigator presents endoscopy pathways as technology-neutral business artefacts rather than as an EPR workflow or clinical decision-support system. It is intended to help users inspect pathway scope, entry and exit conditions, activities, decisions, roles, information requirements, evidence dependencies, relationships and jurisdictional variants.

**This is a reference catalogue, not clinical guidance.** The pathway definitions are draft and unapproved and are intended for analysis and service design. Conformance to HPDS does not imply clinical correctness or approval.

## Files

```text
endoscopy-pathway-navigator/
├── index.html
└── README.md
```

`index.html` is self-contained. The catalogue data, styling and JavaScript are embedded in the file and there is no build step or external JavaScript dependency.

## Recommended website location

```text
/resources/clinical-pathways/healthcare-pathway-description/endoscopy-pathway-navigator/
```

The page uses root-relative links to the Agile Health Informatics corporate pages and to the parent Healthcare Pathway Description Standard resource.

## Navigator views

The application provides four complementary views:

- **Navigate**: search and filter pathway definitions, enter a pathway by route into care, and follow its exits and relationships.
- **Pathway map**: inspect transitions, escalations and inclusion relationships across pathway domains.
- **Evidence and impact**: identify which pathway definitions depend on a source and which definitions may therefore require review when that source changes.
- **Variants**: compare jurisdiction-specific specialisations of a reference pathway where programme parameters differ.

## Agile Health Informatics integration

The page follows the current Agile Health Informatics website pattern. It includes the standard embedded logo and corporate navigation, breadcrumb trail, compact blue resource hero, pale blue-grey page canvas, rounded resource surfaces, restrained lime accent, responsive mobile navigation, the shared `ahi-theme` light/dark preference and the standard dark footer.

The navigator keeps semantic colours for pathway relationships and status cues, but these sit within the shared AHI colour and typography system. The application layout remains deliberately wider than a normal article page because the pathway map and evidence tables require additional horizontal space.

## Catalogue structure

The embedded JavaScript object `D` is the catalogue source used by the interface. Its principal collections are:

- `D.domains` for pathway domains;
- `D.p` for pathway definitions and relationships;
- `D.s` for evidence sources and verification metadata;
- `D.v` for jurisdictional variants.

Pathway identifiers such as `END-REF-001` are used as stable references between records. Relationship types currently include `transitionsTo`, `escalatesTo` and `includes`.

## Updating the catalogue

When changing the embedded data:

1. Preserve stable pathway identifiers unless an identifier is intentionally retired.
2. Keep relationship targets synchronised with the pathway records they reference.
3. Update evidence source metadata and verification information when guidance changes.
4. Review jurisdictional variants when national screening or waiting-time parameters change.
5. Update the catalogue version displayed by the application when the content model changes materially.
6. Keep the clinical-guidance disclaimer visible and do not present draft definitions as approved care instructions.

## Accessibility and responsive behaviour

The navigator supports keyboard operation for pathway lists, tables and the SVG pathway map. Form controls have associated accessible labels, focus states are visible, tables and the map can scroll horizontally on smaller screens, and the site navigation collapses to a mobile menu. A print treatment removes the corporate shell and prints the active navigator view.

## Deployment

No compilation is required. Place `index.html` and this `README.md` in the target directory and commit them to the website repository. The page can also be opened locally for review, although root-relative corporate navigation links will only resolve correctly when served from the website root.
