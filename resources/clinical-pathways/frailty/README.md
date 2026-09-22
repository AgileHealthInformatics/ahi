# Frailty Neighbourhood Care Pathway Navigator

Interactive Agile Health Informatics resource for exploring a draft frailty, multimorbidity and neighbourhood-care pathway catalogue represented using the proposed Healthcare Pathway Description Standard (HPDS).

## Purpose

The navigator presents frailty and multimorbidity neighbourhood-care pathways as technology-neutral business artefacts rather than as an EPR workflow, product architecture or clinical decision-support system. It is intended to help users inspect pathway scope, entry and exit conditions, activities, decisions, roles, care-coordination requirements, information requirements, evidence dependencies, relationships and local implementation questions across proactive care, urgent community response, hospital-at-home, transitions and longer-term neighbourhood coordination.

**This is a reference catalogue, not clinical guidance.** The pathway definitions are draft and unapproved and are intended for analysis and service design. Conformance to HPDS does not imply clinical correctness or approval.

## Files

```text
frailty-neighbourhood/
├── index.html
└── README.md
```

`index.html` is self-contained. The catalogue data, styling, embedded Agile Health Informatics logo and JavaScript are included in the file. There is no build step and no external JavaScript, stylesheet or font dependency.

## Recommended website location

```text
/resources/clinical-pathways/frailty-neighbourhood/
```

The page uses root-relative links to the Agile Health Informatics corporate pages, resource library and Healthcare Pathway Description Standard material.

## Navigator views

The application provides four complementary views:

- **Navigate**: search and filter pathway definitions, enter the catalogue by route into care and follow exits and relationships across frailty and neighbourhood-care pathways.
- **Pathway map**: inspect transitions, escalations and inclusion relationships across the nine pathway domains.
- **Evidence and impact**: identify which pathway definitions depend on a source and which definitions may therefore require review when that source changes.
- **Pathway variants**: compare specialisations of reference definitions by care setting or referral route.

## Agile Health Informatics integration

The page follows the same Agile Health Informatics pattern as the preceding clinical-pathway navigators. It includes the standard embedded logo and corporate navigation, breadcrumb trail, compact blue resource hero, pale blue-grey page canvas, rounded resource surfaces, restrained lime accent, responsive mobile navigation, the shared `ahi-theme` light/dark preference and the standard footer.

The navigator retains semantic colours for pathway relationships and status cues within the shared AHI colour and typography system. The application layout remains wider than a normal article page because the pathway map and evidence tables require additional horizontal space.

## Catalogue structure

The embedded JavaScript object `D` is the catalogue source used by the interface. Its principal collections are:

- `D.domains` for pathway domains;
- `D.p` for pathway definitions and relationships;
- `D.s` for evidence, policy, guidance and design sources;
- `D.v` for pathway variants;
- `D.dq` for unresolved catalogue, governance and implementation questions.

The current catalogue is **v0.2.0** and is labelled as superseding v3 in the source navigator. It contains **38 pathway definitions across 9 domains**: 28 care pathways, 7 shared sub-pathways and 3 governance processes. It also records 17 web evidence or policy sources, 3 design or method sources, 3 pathway variants and 43 unresolved questions.

The pathway domains are: Population identification & enrolment; Holistic assessment & personalised planning; Medicines & multimorbidity optimisation; Proactive neighbourhood coordination; Deterioration & urgent neighbourhood response; Admission avoidance & hospital-at-home; Transitions, discharge & recovery; Cognition, advance care & palliative coordination; Governance, review & learning.

Pathway identifiers such as `FNM-UCR-002` are used as stable references between records. Relationship types currently include `transitionsTo`, `escalatesTo` and `includes`.

## Care coordination extension

This catalogue contains a `coord` field that is displayed as **Care coordination (HPDS extension)**. The source uses it to identify the coordinating role or function and the information or accountability requirements needed to keep a pathway coherent across organisational boundaries.

This field is intentionally retained as an extension rather than silently folded into the standard HPDS fields. One of the catalogue's unresolved modelling questions is whether named care coordination should become an explicit HPDS concept or remain represented as a role with specific responsibilities.

## Evidence and review status

The catalogue draws on NHS England policy and service guidance, NICE guidance, British Geriatrics Society material and the proposed HPDS. Source records retain their original verification and review status.

Several pathway definitions include an explicit review trigger because the March 2026 **Neighbourhood Health Framework** evolves the earlier 2025/26 neighbourhood guidance. The navigator preserves those review triggers rather than assuming that the later framework has already been fully reconciled with every definition.

The catalogue also explicitly distinguishes direct evidence from synthesis, professional inference and setting-limited application. For example, the source notes where delirium guidance is being applied outside its stated hospital and long-term residential-care scope by professional inference.

## Updating the catalogue

When changing the embedded data:

1. Preserve stable `FNM-...` pathway identifiers unless an identifier is intentionally retired.
2. Keep relationship targets synchronised with the pathway records they reference.
3. Preserve the distinction between care pathways, shared sub-pathways and governance processes.
4. Update source verification, change notes and review triggers when national policy, guidance or service models change.
5. Review entries citing the earlier neighbourhood guidance against the March 2026 Neighbourhood Health Framework as the catalogue is reconciled.
6. Retain the `coord` extension unless the HPDS model is formally changed to represent care coordination differently.
7. Review unresolved questions as the catalogue is validated with neighbourhood teams, primary care, community services, social care, urgent-care services, people using services and carers.
8. Update the catalogue version displayed by the application when the content model changes materially.
9. Keep the clinical-guidance disclaimer visible and do not present draft definitions as approved care instructions.

## Accessibility and responsive behaviour

The navigator supports keyboard operation for pathway lists, evidence tables and the SVG pathway map. Form controls have associated accessible labels, focus states are visible, tables and the map can scroll horizontally on smaller screens, and the site navigation collapses to a mobile menu.

The page supports the shared light and dark themes, respects `prefers-reduced-motion`, and includes a print treatment that removes unnecessary corporate and interactive controls while retaining the substantive pathway content.

## Deployment

No compilation is required. Place `index.html` and this `README.md` in the target directory and commit them to the website repository. The page can also be opened locally for review, although root-relative corporate navigation links will only resolve correctly when served from the website root.
