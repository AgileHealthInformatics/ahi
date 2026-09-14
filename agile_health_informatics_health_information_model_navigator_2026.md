# Health Information Model Navigator

[Open the interactive navigator](agile_health_informatics_health_information_model_navigator_2026.html)

## About this resource

The **Health Information Model Navigator** provides interactive guidance for choosing and governing healthcare information models across capture, exchange, longitudinal records, analytics, research and preservation.

Its central position is that healthcare does **not** need one universal information model. It needs a governed chain of models whose purposes and transformations are explicit.

## What it helps you do

Use the navigator to:

- distinguish modelling purposes and abstraction levels;
- compare conceptual, clinical, exchange, analytical and preservation models;
- choose models according to information purpose;
- build a model stack around a use case;
- identify risks at the boundaries between models;
- govern source-to-target transformations;
- understand where canonical models are useful and where they become constraining; and
- review findings, evidence and source material.

## How to use the navigator

### 1. Define what you are modelling

Start with **What are you modelling?** and the intended lifecycle purpose.

### 2. Search and filter

Controls include:

- **Search models, risks or standards**;
- **Model family**; and
- **Use context**.

### 3. Work through the five modelling layers

The navigator distinguishes:

1. concept and metadata layer;
2. clinical content and record layer;
3. exchange and document layer;
4. analytical and research layer; and
5. preservation and traceability layer.

These layers should remain distinguishable even where one implementation spans more than one of them.

### 4. Select by purpose

Use the purpose-based sections to compare information models for capture, exchange, longitudinal use, analytics, research and preservation.

### 5. Build a model stack

The stack view encourages combinations of models with governed transformation between them rather than a single universal representation.

### 6. Examine model transitions

Pay particular attention to the sections describing what happens when:

- requirements become structures;
- information becomes an exchange contract;
- mutable state becomes a snapshot;
- care data becomes research data; or
- application semantics must outlive software.

### 7. Review governance guidance

The navigator recommends explicit model taxonomies, source-to-target mappings, historical version preservation, narrow governance of canonical models and semantic round-trip testing.

### 8. Use the findings register

Search and filter findings by severity and evidence type when using the navigator for architecture review or assurance.

## Interpretation

The navigator distinguishes coherence from uniformity. Coherence can be achieved through traceability and governed mappings without forcing every system and lifecycle stage into the same schema.

The resource is not a substitute for the authoritative specification of any information model or standard.

## Technical notes

The interactive HTML resource is self-contained and intended for static hosting. It uses standard HTML, embedded CSS and vanilla JavaScript, so no application server or build process is required.

When deployed in the Agile Health Informatics GitHub Pages site, keep this Markdown file in the same repository directory as its corresponding HTML file so the relative link above remains valid.

---

**Agile Health Informatics Ltd**  
*creative ideas & solutions*  
<https://agilehealthinformatics.com/>
