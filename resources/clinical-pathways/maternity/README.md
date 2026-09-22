# Maternity Pathway Navigator

Interactive Agile Health Informatics resource for exploring a draft maternity pathway catalogue represented using the proposed Healthcare Pathway Description Standard (HPDS).

## Purpose

The navigator presents maternity pathways as technology-neutral business artefacts rather than as an EPR workflow, product architecture or clinical decision-support system. It is intended to help users inspect pathway scope, entry and exit conditions, activities, decisions, roles, information requirements, evidence dependencies, relationships and local implementation questions across antenatal care, screening, pregnancy complications, labour and birth, postnatal care, deterioration, pregnancy loss and maternity governance.

**This is a reference catalogue, not clinical guidance.** The pathway definitions are draft and unapproved and are intended for analysis and service design. Conformance to HPDS does not imply clinical correctness or approval.

## Files

```text
maternity/
├── index.html
└── README.md
```

`index.html` is self-contained. The catalogue data, styling, embedded Agile Health Informatics logo and JavaScript are included in the file. There is no build step and no external JavaScript, stylesheet or font dependency.

## Recommended website location

```text
/resources/clinical-pathways/maternity/
```

The page uses root-relative links to the Agile Health Informatics corporate pages, resource library and Healthcare Pathway Description Standard material.

## Navigator views

The application provides four complementary views:

- **Navigate**: search and filter pathway definitions, enter the catalogue by route into care and follow exits and relationships across maternity pathways.
- **Pathway map**: inspect transitions, escalations and inclusion relationships across the eight maternity pathway domains.
- **Evidence and impact**: identify which pathway definitions depend on a source and which definitions may therefore require review when that source changes.
- **Pathway variants**: compare specialisations of reference definitions by care setting or population.

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

The current catalogue is **v0.1.0**. It contains **29 pathway definitions across 8 domains**: 14 care pathways, 12 shared sub-pathways and 3 governance processes. It also records 22 evidence, policy or guidance sources, 2 design or method sources, 6 pathway variants specialising 2 reference definitions, and 21 unresolved questions.

The pathway domains are: Booking & antenatal care; Antenatal & newborn screening; Pregnancy complications; Labour & birth; Postnatal care; Deterioration & emergencies; Pregnancy loss & bereavement; Governance, safety & voice.

Pathway identifiers such as `MAT-LAB-002` are used as stable references between records. Relationship types currently include `transitionsTo`, `escalatesTo` and `includes`.

## Maternity-specific modelling considerations

The catalogue highlights several issues that are useful for further HPDS development. Maternity pathways can involve both the woman or pregnant person and the baby, including pathways in which the baby is not yet a separate subject of care at pathway entry. The catalogue also raises cross-catalogue questions around neonatal care and obstetric theatres.

The variant model is used for two different kinds of specialisation:

- low-risk labour and birth by planned birth setting, including home, freestanding midwifery unit, alongside midwifery unit and obstetric unit;
- diabetes in pregnancy by population, distinguishing pre-existing diabetes from gestational diabetes.

These are retained as specialisations of reference definitions rather than duplicated as independent pathways.

## Evidence and review status

The catalogue draws principally on NICE guidance, NHS England policy and national maternity programmes, including the Saving Babies' Lives Care Bundle, screening programmes, the National Bereavement Care Pathway and maternity safety material. Source records retain their original verification status and any notes indicating that versions, locators or recommendation references remain to be confirmed.

Several pathway definitions contain an explicit review trigger linked to the **Independent National Maternity and Neonatal Investigation final report of 30 June 2026** and the expected national action plan. The navigator preserves those review triggers rather than assuming that the investigation recommendations have already been fully reconciled with the catalogue.

The catalogue also preserves distinctions between directly grounded content, synthesis and professional inference. It should therefore be treated as a structured reference model for analysis, not as a validated clinical specification.

## Updating the catalogue

When changing the embedded data:

1. Preserve stable `MAT-...` pathway identifiers unless an identifier is intentionally retired.
2. Keep relationship targets synchronised with the pathway records they reference.
3. Preserve the distinction between care pathways, shared sub-pathways and governance processes.
4. Update evidence verification, change notes and review triggers when national guidance, policy or maternity safety recommendations change.
5. Re-check NICE recommendation references and Saving Babies' Lives intervention references when source documents are updated.
6. Review catalogue entries affected by the 2026 national maternity and neonatal investigation and its subsequent action plan.
7. Keep birth-setting and diabetes variants aligned with their parent definitions rather than duplicating whole pathways.
8. Review unresolved questions as the catalogue is validated with maternity services, women and families, screening services, neonatal services and governance teams.
9. Update the catalogue version displayed by the application when the content model changes materially.
10. Keep the clinical-guidance disclaimer visible and do not present draft definitions as approved care instructions.

## Accessibility and responsive behaviour

The navigator supports keyboard operation for pathway lists, evidence tables and the SVG pathway map. Form controls have associated accessible labels, focus states are visible, tables and the map can scroll horizontally on smaller screens, and the site navigation collapses to a mobile menu.

The page supports the shared light and dark themes, respects `prefers-reduced-motion`, and includes a print treatment that removes unnecessary corporate and interactive controls while retaining the substantive pathway content.

## Deployment

No compilation is required. Place `index.html` and this `README.md` in the target directory and commit them to the website repository. The page can also be opened locally for review, although root-relative corporate navigation links will only resolve correctly when served from the website root.
