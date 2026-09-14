# Agile Health Informatics Website

This repository contains the public website and interactive reference resources for **Agile Health Informatics Ltd**.

The site is intentionally lightweight. It is built from self-contained HTML files that can be served directly from the repository without a build system, package manager, framework or external deployment pipeline.

**Public site:** https://agilehealthinformatics.com

## Site structure

The repository is organised as a small core website with a growing library of specialist healthcare architecture and data resources.

```text
ahi/
├── CNAME
├── index.html
├── services.html
├── resources.html
├── about.html
│
├── UK_Secondary_Care_Integration_Reference_Atlas_v0.6.html
│
├── agile_health_informatics_healthcare_standards_navigator_2026.html
├── agile_health_informatics_healthcare_interoperability_navigator_2026.html
├── agile_health_informatics_health_data_lifecycle_navigator_2026.html
├── agile_health_informatics_health_data_architecture_navigator_2026.html
├── agile_health_informatics_healthcare_integration_pattern_navigator_2026.html
├── agile_health_informatics_health_information_model_navigator_2026.html
├── agile_health_informatics_clinical_terminology_semantics_navigator_2026.html
├── agile_health_informatics_healthcare_ai_assurance_navigator_2026.html
│
├── hdomm-toolkit-agile-health-informatics.html
└── health_data_operability_workshop_facilitation_guide.html
```

The repository currently uses a **flat root structure**. This is deliberate: the principal pages and specialist resources can link to one another using simple relative URLs, and each resource remains independently publishable as a single HTML file.

## Core website

The four core pages provide the main navigation and separate the consultancy site from the specialist knowledge resources.

| File | Purpose |
|---|---|
| `index.html` | Main holding page. Introduces Agile Health Informatics, summarises the principal service areas and highlights selected resources. |
| `services.html` | Describes the advisory services, including enterprise architecture, health data, interoperability, secure environments, AI-enabled architecture and transformation readiness. |
| `resources.html` | Resource library and principal discovery page for navigators, reference atlases, assessment tools and workshop material. |
| `about.html` | Background on Agile Health Informatics and Dr Tito Castillo, including selected experience and professional qualifications. |

These pages should remain relatively stable and should link into the specialist resources rather than reproducing their content.

## Resource families

### Healthcare navigators

The navigator series provides interactive decision aids for different aspects of healthcare information architecture.

| Resource | File |
|---|---|
| Healthcare Standards Navigator | `agile_health_informatics_healthcare_standards_navigator_2026.html` |
| Healthcare Interoperability Navigator | `agile_health_informatics_healthcare_interoperability_navigator_2026.html` |
| Health Data Lifecycle Navigator | `agile_health_informatics_health_data_lifecycle_navigator_2026.html` |
| Health Data Architecture Navigator | `agile_health_informatics_health_data_architecture_navigator_2026.html` |
| Healthcare Integration Pattern Navigator | `agile_health_informatics_healthcare_integration_pattern_navigator_2026.html` |
| Health Information Model Navigator | `agile_health_informatics_health_information_model_navigator_2026.html` |
| Clinical Terminology and Semantics Navigator | `agile_health_informatics_clinical_terminology_semantics_navigator_2026.html` |
| Healthcare AI Assurance Navigator | `agile_health_informatics_healthcare_ai_assurance_navigator_2026.html` |

The navigators are related, but they are not intended to be one monolithic application. Each addresses a distinct architecture or standards question and can be used independently.

### Reference atlases

Reference atlases compare architectures, capabilities or information flows across environments rather than providing a standards-selection workflow.

Current atlas:

- **UK Secondary Care Integration Reference Atlas**  
  `UK_Secondary_Care_Integration_Reference_Atlas_v0.6.html`

The atlas compares secondary-care integration capabilities and data flows across England, Wales, Scotland and Northern Ireland and includes a view of structural alignment with the emerging European Health Data Space.

### Assessment and workshop tools

These resources support structured assessment and facilitated analysis.

- **Health Data Operability Maturity Assessment**  
  `hdomm-toolkit-agile-health-informatics.html`

- **Health Data Operability Workshop Facilitation Guide**  
  `health_data_operability_workshop_facilitation_guide.html`

These are distinct from the navigator series. They are intended to support assessment, discussion and organisational improvement rather than standards discovery alone.

## Information architecture

The intended site hierarchy is:

```text
Home
├── Services
├── Resources
│   ├── Navigators
│   ├── Reference Atlases
│   ├── Assessment Tools
│   └── Workshop Guides
└── About
```

The design principle is to keep the **main website concise** while allowing the specialist knowledge base to grow independently.

`resources.html` is therefore the principal catalogue for public resources. Individual resources should not normally become permanent top-level navigation items unless they represent a new major section of the site.

## Design and implementation

The site uses a common Agile Health Informatics visual language:

- blue and pale-green brand palette
- embedded Agile Health Informatics logo
- responsive layouts
- accessible semantic HTML
- light and dark presentation where supported
- print-friendly styling where useful
- vanilla JavaScript for interactivity
- no framework or build dependency

Specialist resources are generally designed as **self-contained HTML5 documents**. CSS, JavaScript and visual assets are embedded where practical so that pages remain portable and can also be viewed offline.

## Deployment

`CNAME` maps the repository to:

```text
agilehealthinformatics.com
```

The site is designed to be published directly from the repository root. Relative links between pages therefore assume that the core site pages and specialist HTML resources remain in the same directory.

When renaming or replacing a published resource, check all relative links before deployment.

## Adding a new resource

When adding a new navigator, atlas or assessment resource:

1. Add the new self-contained HTML file to the repository root.
2. Use a descriptive and stable filename.
3. Add the resource to `resources.html` under the appropriate resource family.
4. Add it to `index.html` only if it is important enough to feature on the holding page.
5. Do not automatically add individual resources to the global site navigation.
6. Check links to the Agile Health Informatics homepage and ensure the common brand treatment is retained.
7. Test the page at desktop and mobile widths.
8. Check interactive controls, internal anchors, print behaviour and dark/light presentation where applicable.
9. Update this README if the repository structure or resource taxonomy changes.

## File naming

The repository currently contains both descriptive resource names and year/version-qualified filenames.

For new resources, prefer filenames that are:

- descriptive
- lowercase where practical
- separated consistently with underscores or hyphens
- stable enough that external links do not need frequent changes

Published filenames should not be changed casually because LinkedIn posts, search engines and external documents may link directly to them.

Where a resource needs formal versioning, retain the version in the visible resource itself and avoid changing the public filename unless there is a clear reason to expose the version in the URL.

## Maintenance principles

The repository should remain simple enough to understand without specialist tooling.

In particular:

- keep the core website separate from detailed specialist resources
- use `resources.html` as the authoritative public resource catalogue
- avoid duplicating substantial resource content across pages
- keep relative links valid
- preserve consistent branding across standalone resources
- distinguish navigators, atlases and assessment tools rather than treating every resource as a navigator
- prefer self-contained pages over introducing dependencies without a clear benefit
- review older resources when standards, legislation or national architectures materially change

## Content scope

The website and resources focus on areas including:

- enterprise architecture
- healthcare data architecture
- metadata and semantic interoperability
- healthcare standards
- integration and information exchange
- clinical terminology
- information modelling
- data lifecycle and operability
- secure data and research environments
- healthcare AI assurance
- digital transformation and EPR readiness

Many resources are analytical or educational rather than formal standards, regulatory guidance or compliance specifications. Where evidence-led comparisons are presented, readers should refer to the source material and limitations stated within the individual resource.

## Repository status

This repository is the public website repository for Agile Health Informatics Ltd. The `main` branch contains the currently published site structure.

The repository is intentionally small and static. If the resource library grows substantially, a later restructuring into directories such as `/navigators/`, `/atlases/` and `/tools/` may become useful, but the current flat structure avoids unnecessary URL migration and keeps deployment straightforward.
