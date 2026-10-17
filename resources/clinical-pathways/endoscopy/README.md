# Endoscopy Pathway Navigator

An interactive reference catalogue for exploring endoscopy pathways, their relationships, evidence dependencies and jurisdictional variants. The navigator is intended for service analysis and design. It is not clinical guidance.

## Contents

- `endoscopy-navigator.html` — self-contained viewer with embedded pathway data, styles and JavaScript.
- `README.md` — project overview and use notes.

## Open the navigator

Open `endoscopy-navigator.html` in a modern web browser. No server, package installation or build step is required. The viewer’s functionality uses embedded CSS and vanilla JavaScript. It requests web fonts when an internet connection is available and falls back to system fonts when they are not.

## Explore the catalogue

The navigator contains 29 draft pathway definitions across referral and readiness, suspected cancer, symptomatic diagnosis, urgent and emergency endoscopy, screening, surveillance, endoscopic therapy, procedure episodes, and governance. Use the tabs to:

- **Navigate** definitions by pathway, search, class and evidence basis, then follow pathway relationships.
- **Pathway map** inspect connections between definitions.
- **Evidence and impact** see which pathway definitions use a source.
- **Variants** compare the recorded jurisdictional parameters.
- **Stakeholder views** examine pathway entry, activities, decisions, information and onward hand-offs from a selected role’s point of view.

The stakeholder view includes:

- General Practice / primary care
- Straight-to-Test Clinical Nurse Specialist (CNS)
- Endoscopy vetting / triage clinician
- Endoscopy pre-assessment nurse / CNS
- Endoscopist / procedure team
- Pathology / results owner
- Cancer CNS / navigator
- Person receiving care / carer

Select a role and then a pathway to see the relevant pathway-wide information fields alongside role-specific considerations. Potential hand-offs can be followed within the view, or the full pathway definition can be opened in the navigator.

## Interpretation and local validation

The catalogue is draft and unapproved. Its pathway definitions are for analysis and service design, and do not establish clinical correctness, local policy or operational approval. Jurisdictional rules, referral thresholds, role boundaries, clinical authority, escalation arrangements, result ownership and hand-off procedures must be validated with the relevant services.

In particular, the source catalogue refers to a triage clinician in the colorectal straight-to-test pathway and a clinical nurse specialist in an upper GI cancer pathway. It does not establish that these are the same role or define an STT CNS’s scope of practice. The STT CNS lens is therefore a proposed way to inspect the work and its hand-offs, not an assertion about local staffing or delegated authority. Pathway activities and decisions shown in a role view remain pathway-wide unless local governance assigns them to that role.

The **Evidence and impact** tab exposes the sources recorded by the catalogue. Check source currency and local applicability before relying on any definition or variant.

## Implementation notes

The HTML file is designed to be usable as a standalone viewer. When embedding it in a website, retain the complete file and ensure the host page provides enough viewport width for the navigation and map views. The stakeholder view adapts to narrower screens by stacking its controls above the content.

The catalogue reports version `0.1.0`; the stakeholder-view addition changes the viewer experience and does not constitute approval or clinical versioning of the pathway definitions.
