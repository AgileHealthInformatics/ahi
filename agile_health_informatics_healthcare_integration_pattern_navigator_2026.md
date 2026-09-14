# Healthcare Integration Pattern Navigator

[Open the interactive navigator](agile_health_informatics_healthcare_integration_pattern_navigator_2026.html)

## About this resource

The **Healthcare Integration Pattern Navigator** is an interactive professional guide to choosing healthcare integration patterns by interaction, workflow, durability, coupling and semantics.

Its central principle is that integration quality is determined by the behaviour and meaning of the interaction, not by how modern the protocol appears.

## What it helps you do

Use the navigator to:

- identify an appropriate integration pattern before choosing a protocol;
- distinguish interaction, information, delivery, identity, trust, process and operational concerns;
- compare synchronous, asynchronous, document, messaging, API and store/query/retrieve approaches;
- understand how older and newer patterns coexist;
- build an integration stack around a use case;
- define better integration requirements;
- examine failure and operational assurance; and
- review findings and source material.

## How to use the navigator

### 1. Describe what you are integrating

Begin with **What are you integrating?** and the operational behaviour required.

### 2. Search and filter

Controls include:

- **Search patterns, risks or standards**;
- **Pattern family**; and
- **Use context**.

Search terms such as durable, XDS, workflow or imaging can be used to narrow the page.

### 3. Separate the integration layers

The navigator distinguishes:

- interaction;
- information;
- delivery;
- identity and trust;
- process; and
- operations.

A message payload alone is therefore not treated as the complete integration design.

### 4. Compare pattern families

The history and pattern sections cover approaches including point-to-point integration, HL7 v2 messaging, integration engines, CDA/IHE sharing and FHIR/web patterns.

### 5. Build the stack

Use the stack section to combine the required interaction, semantic, delivery, identity, security and operational components.

### 6. Strengthen requirements

The navigator contrasts weak and stronger integration requirements and encourages observable behaviour to be specified.

### 7. Consider assurance after conformance

The assurance material distinguishes conformance testing from operational and clinical/process telemetry.

### 8. Use the findings register

Search and filter findings by severity and evidence type when applying the navigator in architecture governance.

## Interpretation

A technically valid interface can still be operationally incomplete or unsafe.

Protocol selection should therefore follow the interaction and workflow decision, not replace it.

This resource is a professional architecture guide and does not replace the authoritative specifications or implementation guides for the standards it references.

## Technical notes

The interactive HTML resource is self-contained and intended for static hosting. It uses standard HTML, embedded CSS and vanilla JavaScript, so no application server or build process is required.

When deployed in the Agile Health Informatics GitHub Pages site, keep this Markdown file in the same repository directory as its corresponding HTML file so the relative link above remains valid.

---

**Agile Health Informatics Ltd**  
*creative ideas & solutions*  
<https://agilehealthinformatics.com/>
