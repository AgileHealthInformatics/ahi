# Healthcare Interoperability Navigator

[Open the interactive navigator](agile_health_informatics_healthcare_interoperability_navigator_2026.html)

## About this resource

The **Healthcare Interoperability Navigator** is a practical interactive guide to selecting exchange patterns, standards, profiles and semantic components according to the interoperability problem and jurisdiction.

The navigator treats interoperability as a **stack of decisions**, not a protocol choice.

## What it helps you do

Use the navigator to:

- explore interoperability components in context;
- select standards according to a real interoperability problem;
- distinguish purpose, interaction, representation, semantics, identity, trust and assurance;
- compare jurisdictional implementation choices;
- build an interoperability stack;
- generate a decision trace; and
- inspect individual standards and profiles in more detail.

## How to use the navigator

### 1. Select the interoperability problem

The problem selector includes examples such as:

- real-time clinical data access;
- integrating an established hospital system;
- notifying subscribers about clinical change;
- persistent clinical document exchange;
- cross-enterprise document sharing;
- diagnostic imaging;
- patient or clinician applications;
- clinical decision support;
- terminology services;
- cross-organisational patient identity;
- bulk population analytics;
- cross-border patient summaries;
- referral or work coordination; and
- laboratory orders and results.

### 2. Select the jurisdiction

Available jurisdiction filters include:

- UK-wide;
- England;
- Scotland;
- Wales;
- Northern Ireland;
- Europe / EU;
- United States;
- Canada;
- Australia; and
- New Zealand.

The same base standard can be implemented differently in different jurisdictions, so this filter materially changes the interpretation.

### 3. Filter by layer and interaction

Use the **Layer** and **Interaction** controls to narrow the components shown.

Layers include documents, exchange, identity, imaging, jurisdictional, knowledge and workflow, security and semantics.

Interactions include bulk, CDS, documents, event-driven, identity, imaging, messaging, store/query/retrieve, synchronous API and terminology.

### 4. Search

Use the search box for standards or topics such as FHIR, imaging, documents or terminology.

### 5. Build an interoperability stack

Select **Build stack** to assemble a set of complementary components around the chosen problem.

The navigator includes technologies and standards such as FHIR, HL7 v2, CDA, IHE profiles, DICOM, SNOMED CT, LOINC, UCUM, SMART App Launch, OAuth/OpenID Connect and national FHIR profiles.

### 6. Copy the decision trace

Use **Copy decision trace** to capture the reasoning and selected components for reuse in architecture notes or discussion.

### 7. Inspect details

Many entries can be expanded for more detailed explanation.

## Interpretation

The navigator helps structure architecture decisions. It does not assert that selecting a stack automatically delivers interoperability.

Implementation profiles, terminology bindings, identity, trust, conformance and operational behaviour still need to be designed and tested in context.

Current national implementation guidance should be checked before production use.

## Technical notes

The interactive HTML resource is self-contained and intended for static hosting. It uses standard HTML, embedded CSS and vanilla JavaScript, so no application server or build process is required.

When deployed in the Agile Health Informatics GitHub Pages site, keep this Markdown file in the same repository directory as its corresponding HTML file so the relative link above remains valid.

---

**Agile Health Informatics Ltd**  
*creative ideas & solutions*  
<https://agilehealthinformatics.com/>
