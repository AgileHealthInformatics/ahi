# HPDS Frailty & Multimorbidity Neighbourhood Care Clinical Explainer

This file accompanies the interactive HTML demonstrator:

**`HPDS_Frailty_Neighbourhood_Clinical_Explainer.html`**

The demonstrator is a plain-English introduction to the proposed **Healthcare Pathway Description Standard (HPDS) WD 0.3**. It is designed primarily for clinicians, service leads and other non-technical staff who need to understand **why a standard way of representing clinical pathways might be useful**, before being asked to consider the technical detail of the standard itself.

> **Status:** Informative demonstrator only. HPDS WD 0.3 is a Working Draft. The embedded frailty and multimorbidity catalogue is a reference catalogue for local validation. No local clinical approval or HPDS conformance is claimed.

## Purpose

The demonstrator starts from a simple question:

> **What if a clinical pathway meant the same thing wherever it was used?**

Clinical pathways are commonly described across documents, local procedures, referral forms, EPR configuration, service specifications and professional knowledge. This can make it difficult to distinguish the enduring **clinical model of care** from the systems and local arrangements used to deliver it.

HPDS explores the idea that a pathway could instead be represented as a persistent, governed and technology-neutral clinical and business artefact.

The demonstrator explains that proposition without requiring the user to understand modelling languages, JSON, FHIR, BPMN or enterprise architecture.

## Audience

The primary audience is:

- clinicians;
- clinical pathway owners;
- neighbourhood-care teams;
- service leads and managers;
- clinical informaticians;
- transformation and EPR programme staff;
- people involved in pathway redesign or cross-organisational care.

A separate **Technical detail** section is provided for informatics, architecture and standards specialists.

## Example domain

The demonstrator uses a **Frailty and Multimorbidity Neighbourhood Care Pathway Catalogue** as its example.

The embedded catalogue contains:

- **35 care pathways**;
- **3 governance processes**;
- **9 coordination domains**;
- supporting evidence and local discovery questions.

The catalogue is deliberately cross-organisational. It includes pathways involving primary care, community services, social care, pharmacy, urgent community response, care homes, virtual wards, hospital services, carers and voluntary/community organisations.

This makes neighbourhood frailty care a useful test of a pathway standard because no single provider or EPR necessarily owns the complete end-to-end journey.

## Main proposition

The demonstrator separates three ideas:

```text
Catalogue
   ↓
Reference pathway definition
   ↓
Local implementation
```

### Catalogue

The catalogue allows pathways to be found, compared, governed and related to one another.

### Reference pathway definition

The pathway definition describes the enduring clinical and service meaning, for example:

- who the pathway is for;
- what starts it;
- its purpose;
- intended outcomes;
- participating roles and services;
- principal activities;
- important decisions and escalation points;
- information requirements;
- care settings;
- follow-up and review.

### Local implementation

The local implementation records how a particular organisation or neighbourhood delivers the pathway, including:

- named teams and organisations;
- local systems and EPRs;
- interfaces;
- local workflow arrangements;
- local additions or deviations;
- assurance evidence.

The aim is to prevent the clinical meaning of the pathway from becoming inseparable from today's technology.

## Operability rather than interoperability alone

A key theme of the demonstrator is **operability**.

In this context, operability means that a pathway remains:

- understandable;
- usable;
- coordinated;
- monitorable;
- safely adaptable;

across professional, organisational, technical and temporal boundaries.

Technical and semantic interoperability are important components of operability, but successful message exchange alone does not show that the pathway works.

For example, a technically interoperable pathway may still fail if:

- responsibilities are unclear;
- information is not available to the right person;
- information arrives too late;
- tasks and referrals are not coordinated;
- multiple plans conflict;
- escalation arrangements are ambiguous.

## Structure of the demonstrator

### Start here

Introduces the problem in non-technical language and explains the difference between:

- a pathway catalogue;
- a reference pathway definition;
- a local implementation.

It is intended to establish the value proposition before introducing standards terminology.

### 5-minute guided tour

Uses the pathway **“Deterioration identified at home or usual residence”** as a worked clinical example.

The tour progresses through five steps:

1. Start with the clinical story.
2. Make the pathway explicit.
3. Separate care from technology.
4. Ask what must remain operable.
5. Reuse the pathway locally.

The intention is to make the benefit of standardisation visible through a recognisable clinical situation rather than through a formal data model.

### Why a standard helps

Compares the practical consequences of having, or not having, a common pathway representation.

The proposed benefits include:

- less ambiguity;
- clearer responsibilities;
- better hand-offs;
- safer technology change;
- easier comparison between pathways;
- better traceability to evidence;
- less dependence on a particular EPR or supplier.

### Explore pathways

Allows users to browse and search the complete embedded catalogue.

Each selected pathway is initially presented using clinical questions:

- **Who is this for?**
- **What starts it?**
- **What are we trying to achieve?**
- **Who needs to be involved?**
- **What decisions matter?**
- **What should happen afterwards?**
- **What information is needed?**
- **What information is created or updated?**

This is deliberately different from presenting the user with the HPDS class model first.

### Reference versus local delivery

Shows how the same pathway definition can remain stable while local delivery arrangements differ.

The view separates:

1. the **reference pathway**;
2. the **information that must remain usable**;
3. the **local implementation**.

This is intended to support pathway reuse without forcing different organisations to use identical technologies or operational arrangements.

### Shared record and operability

Explores the role of a Single Patient Record or shared care record.

It distinguishes:

- what the shared record should help people see;
- what information the pathway creates or updates;
- what still requires active orchestration.

The demonstrator therefore treats the shared record as an enabling information environment, not as the pathway itself.

### Evidence

Shows the public evidence used to construct the reference catalogue and the local discovery questions that would need to be answered before applying it to a real service.

An important distinction is maintained between:

- **evidence provenance**, and
- **clinical or organisational authority**.

A pathway can be well grounded in national guidance without being locally approved.

### Technical detail

The technical section is intentionally separated from the main clinical journey.

It contains:

- HPDS WD 0.3 conformance levels;
- catalogue metadata;
- the 33-field catalogue-to-HPDS mapping;
- a draft JSON projection for the selected pathway.

Clinical readers do not need to use this section to understand the purpose of the demonstrator.

## What the demonstrator is intended to show

The demonstrator tests the proposition that a standard representation of a pathway could provide a stable bridge between:

```text
clinical intent
      ↓
pathway description
      ↓
information and coordination requirements
      ↓
local service design
      ↓
systems and interfaces
```

This is different from treating the current EPR workflow as the definition of the pathway.

A successful standard should make it possible to change technology, organisational boundaries or local implementation while retaining the clinical identity and meaning of the pathway.

## What it is not

The demonstrator is **not**:

- a clinical decision-support system;
- a workflow engine;
- a live pathway-management application;
- a statement of current local practice;
- a clinically approved pathway library;
- an HPDS conformance claim;
- a replacement for FHIR, BPMN, CMMN, DMN or other implementation standards.

HPDS is intended to describe the pathway as a governed clinical and business artefact. Other standards and technologies can then be used to implement, exchange or automate parts of it.

## Running the demonstrator

The demonstrator is a single self-contained HTML5 file.

It uses:

- embedded CSS;
- vanilla JavaScript;
- embedded catalogue data;
- no external JavaScript libraries;
- no build process;
- no server-side component.

Open the HTML file in a modern browser.

If the demonstrator is published as `index.html`, update any repository links accordingly.

## GitHub Pages

The file is suitable for static publication using GitHub Pages.

A minimal repository can contain:

```text
index.html
HPDS_Frailty_Neighbourhood_Clinical_Explainer.md
```

If the HTML file is named `index.html`, GitHub Pages can serve it directly from the repository root.

## Current development status

The demonstrator uses **HPDS WD 0.3** and should be treated as an experimental reference implementation.

The current catalogue is aimed towards **Level 1, Catalogue-ready**, but no conformance is claimed.

Known areas still requiring further authoring or validation include:

- pathway ownership;
- explicit exit points and criteria;
- principal stages;
- clinical validation of candidate pathway relationships;
- local implementation details;
- catalogue governance authority.

## Feedback sought

Feedback is especially useful on the following questions:

- Does the demonstrator make the value of pathway standardisation understandable to clinical staff?
- Is the separation between the reference pathway and local delivery meaningful in practice?
- Is **operability** a useful way of framing the wider problem beyond interoperability?
- Are the pathway fields clinically understandable and sufficiently complete?
- Does the approach help explain the role of a shared record without making the shared record the pathway?
- Could a common pathway representation improve cross-organisational pathway design, assurance and change?
- Which parts of the proposed HPDS model add unnecessary complexity?
- What would clinicians need to trust and use a pathway catalogue based on this approach?

## Related artefacts

This demonstrator is part of the wider HPDS exploratory work, which includes:

- the HPDS WD 0.3 specification;
- the Frailty and Multimorbidity Neighbourhood Care Pathway Catalogue;
- structured pathway-to-HPDS mappings;
- local implementation templates;
- evidence and discovery registers.

## Licence and status

No licence is declared by this file. Repository owners should add an explicit licence if redistribution or reuse is intended.

HPDS is currently an experimental working proposal and should not be represented as an ISO, national or formally approved healthcare standard.
