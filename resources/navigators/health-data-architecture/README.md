# Health Data Architecture Navigator

[Open the interactive navigator](index.html)

## About this resource

The **Health Data Architecture Navigator** is an interactive guide to selecting and combining health data architecture patterns.

It is based on the principle that the right health data architecture is normally a **composition of patterns**, not a single platform or universal representation.

The navigator distinguishes operational, exchange, analytical, evidential and preservation needs so that patterns can be selected according to purpose.

## What it helps you do

Use the navigator to:

- compare health data architecture patterns;
- identify the problem a pattern is intended to solve;
- distinguish operational from analytical use;
- consider local custody, shared services and federation;
- build a composable architecture stack;
- understand where centralisation is useful and where it creates risk;
- identify architecture anti-patterns and semantic lock-in; and
- review the standards and concepts supporting each pattern.

## How to use the navigator

### 1. Define what you are trying to do

Start with **What are you trying to do?** rather than selecting a technology or platform first.

### 2. Search and filter patterns

Use:

- **Search patterns, risks or standards**;
- **Architecture family**; and
- **Use context**.

For example, search for longitudinal, Data Vault or provenance when exploring a particular design problem.

### 3. Compare patterns

Each architecture pattern is presented in relation to the job it is good at and the risks of using it outside that purpose.

The page positions patterns between operational and analytical use and between local custody and federation.

### 4. Build a stack

Use the stack-building section to combine complementary architecture components rather than forcing one pattern to serve every lifecycle need.

### 5. Consider the architecture planes

The composable model distinguishes:

- coordination and semantic plane;
- operational and exchange plane;
- analytical and evidence plane; and
- preservation and continuity plane.

### 6. Review failure patterns

The navigator highlights common architecture errors including:

- universal canonicalisation;
- platform monoculture;
- semantic lock-in;
- data-lake literalism;
- using the exchange model as the persistence strategy;
- treating shared-record aggregation as the whole architecture;
- allowing analytics to become operational truth; and
- storage without preservation.

## Interpretation

A pattern being useful for one purpose does not make it the preferred architecture for every purpose. The navigator should therefore be used to reason about combinations, boundaries and transformations.

The resource is architectural guidance rather than a procurement specification or endorsement of a particular product.

## Technical notes

The interactive HTML resource is self-contained and intended for static hosting. It uses standard HTML, embedded CSS and vanilla JavaScript, so no application server or build process is required.

When deployed in the Agile Health Informatics GitHub Pages site, keep this Markdown file in the same repository directory as its corresponding HTML file so the relative link above remains valid.

---

**Agile Health Informatics Ltd**  
*creative ideas & solutions*  
<https://agilehealthinformatics.com/>
