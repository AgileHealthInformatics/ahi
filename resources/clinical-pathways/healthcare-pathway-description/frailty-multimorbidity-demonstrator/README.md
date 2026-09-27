# Frailty & Multimorbidity Neighbourhood Care Demonstrator

Interactive Agile Health Informatics resource showing how the Frailty and Multimorbidity Neighbourhood Care Pathway Catalogue can be interpreted against **Healthcare Pathway Description Standard (HPDS), Release 1, Working Draft 0.5**.

## Purpose

The demonstrator is intended to make two things understandable at the same time:

1. why a governed, technology-neutral representation of a healthcare pathway can be useful to clinicians, service teams and architects; and
2. what is still required before an existing tabular catalogue can be represented as a conformant HPDS pathway catalogue.

It is deliberately an **informative demonstrator**, not clinical guidance and not an HPDS conformance claim.

## Website location

```text
/resources/clinical-pathways/healthcare-pathway-description/frailty-multimorbidity-demonstrator/
    index.html
    README.md
```

The page links to the current working draft PDF at:

```text
../R1-WD0.5/HPDS_R1_WD0.5.pdf
```

## Source catalogue

The embedded source catalogue contains 38 records across nine coordination domains:

- 35 care-pathway records that are candidates for HPDS pathway definitions; and
- 3 governance-process records retained as supporting analytical material.

Working Draft 0.5 explicitly places processes whose subject is a service or organisation, rather than a subject of care, outside the scope of an HPDS healthcare pathway. The three governance-process records are therefore **not** presented as pathway definitions and must not be included as catalogue entries covered by an HPDS catalogue conformance claim.

## Alignment with HPDS Release 1, Working Draft 0.5

This version updates the earlier WD 0.3 demonstrator in line with the 27 September 2026 working draft.

The principal changes applied are:

- `Care Coordinator / Accountable Function` now maps to a `Role` plus the `accountableFor` relationship rather than a proposed extension.
- `includes`, `transitionsTo` and `escalatesTo` relationships may originate from the pathway as a whole at Level 1. At Level 2 they must be refined to the relevant Activity, ExitPoint, Event or DecisionPoint required by the relationship type.
- principal stages are **recommended rather than mandatory** at Level 1. This avoids forcing artificial sequential structure onto adaptive neighbourhood pathways.
- adaptive pathway structure can use unordered stages where appropriate.
- information-sharing, consent and access concerns map to `Constraint` with `constraintType=information-governance`, with applicable constraints referenced from `InteroperabilityRequirement.accessRequirement`.
- a shared care plan is represented as an `InformationProduct` with `productType=plan`, with relationships and constraints used to express how it is produced, required and governed.
- HPDS still has no capability entity. Generic digital and care-coordination capabilities remain derived analytical conclusions. Named worklists, applications, interfaces and workflow configuration belong in `PathwayImplementation`.
- local validation questions are treated as implementation-authoring aids rather than pathway-definition content.
- the technical projection uses WD 0.5 normative JSON collection and property names and the schema identifier `urn:hpds:schema:0.5`.

## Conformance status

No conformance claim is made for the source catalogue or the demonstrator.

The source catalogue contains much of the Level 1 business content, but several mandatory items or required attributes still need explicit authoring. Important gaps include:

- real pathway owners rather than `Not yet assigned`;
- `EntryPoint.entryType`;
- structured exit points and exit criteria;
- decomposition of the combined `Participating Services / Roles` field into `Role` and `Service`, including required `roleCategory` and `serviceType`;
- `Activity.requiresClinicalResponsibility`;
- decision criteria, selection rules and branch structure for represented decision points;
- decomposition of candidate information requirements and products into their required WD 0.5 structures;
- complete technology-neutral interoperability requirement structures; and
- catalogue governance authority.

Principal stages are no longer treated as a Level 1 gap.

## JSON projection

The Technical detail view can export an **illustrative WD 0.5 JSON-shaped projection** for a care-pathway record.

The export deliberately:

- uses `documentType: "definition"`;
- uses the top-level WD 0.5 collections such as `pathway`, `populations`, `entryPoints`, `activities`, `decisionPoints`, `outcomes`, `evidenceSources` and `relationships`;
- uses only information that can be derived transparently from the source catalogue;
- omits mandatory values that cannot safely be inferred; and
- lists those missing values separately in the user interface.

The resulting JSON is therefore a mapping aid, **not a schema-valid conformance example**. It is intentionally not padded with invented clinical or governance values merely to satisfy validation.

For governance-process records, the demonstrator does not generate an HPDS definition document because those records are outside pathway-definition scope.

## Demonstrator views

The page provides eight views:

- **Start here**: introduces the problem and the definition / implementation / instance distinction.
- **Guided tour**: follows a deterioration-at-home example.
- **Why a standard helps**: explains the value of a governed representation and progressive formality.
- **Explore pathways**: searches and inspects the source catalogue while distinguishing candidate definitions from supporting governance records.
- **Reference vs local**: shows which information belongs in the pathway definition and which belongs in `PathwayImplementation`.
- **Information dependencies**: relates source information fields to HPDS information requirements, products, interoperability requirements and derived capabilities.
- **Evidence**: keeps evidence provenance separate from clinical authority and exposes local discovery questions as implementation aids.
- **Technical detail**: documents WD 0.5 changes, conformance levels, minimum dataset, catalogue metadata, the 33-field mapping and the draft JSON projection.

## Agile Health Informatics integration

The page follows the current Agile Health Informatics site conventions:

- standard embedded logo at the top left;
- standard corporate navigation;
- root-relative links for nested navigation;
- breadcrumb route to Home, Resources, Clinical Pathways and the HPDS landing page;
- blue resource hero;
- established AHI CSS variables and system font stack;
- pale blue-grey page canvas, rounded surfaces and restrained lime accents;
- `ahi-theme` light/dark preference;
- responsive behaviour at approximately 980 px and 680 px;
- visible keyboard focus states and keyboard-operable catalogue records;
- `prefers-reduced-motion` support; and
- print styling that removes the navigation shell and exposes all content views.

## Updating the demonstrator

When the HPDS working draft changes:

1. Re-check the conformance levels and minimum dataset.
2. Review the 33-field mapping against the conceptual model and Appendix H.
3. Review scope boundaries, especially any records that are not subject-of-care pathways.
4. Update the JSON projection only where the normative serialisation changes.
5. Do not infer missing clinical, governance or implementation information merely to make the projection validate.
6. Keep authority status, intended use, lifecycle and technical conformance conceptually separate.
7. Update the working-draft PDF link and visible version metadata.
8. Re-test the page in light and dark mode, desktop and mobile widths, keyboard navigation and print.

## Files

`index.html` is self-contained: CSS, catalogue data, the Agile Health Informatics logo and vanilla JavaScript are embedded. No external font, CSS framework or JavaScript library is required.
