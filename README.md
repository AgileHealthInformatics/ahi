# Agile Health Informatics Ltd website

This repository contains the public website for **Agile Health Informatics Ltd**.

Website: <https://agilehealthinformatics.com/>

## Repository structure

```text
/
├── CNAME
├── README.md
├── _config.yml
├── index.html
├── services.html
├── resources.html
├── about.html
├── docs/
│   └── site/
├── legacy-redirects/
└── resources/
    ├── navigators/
    ├── atlases/
    ├── assessments/
    ├── guides/
    └── professional-development/
```

The repository follows a simple rule:

> **The root contains the corporate website. `/resources` contains substantive
> publications. Each publication owns its own directory.**

## Corporate pages

- `index.html` - homepage
- `services.html` - advisory services
- `resources.html` - public resource library
- `about.html` - practice and professional profile

Repository-facing documentation for these pages is held under `docs/site/`.

## Resource URLs

| Resource | Canonical path | Historical filename |
| --- | --- | --- |
| UK Secondary Care Integration Reference Atlas | `/resources/atlases/uk-secondary-care-integration/` | `UK_Secondary_Care_Integration_Reference_Atlas_v0.6.html` |
| Clinical Terminology and Semantics Navigator | `/resources/navigators/terminology-semantics/` | `agile_health_informatics_clinical_terminology_semantics_navigator_2026.html` |
| Health Data Architecture Navigator | `/resources/navigators/health-data-architecture/` | `agile_health_informatics_health_data_architecture_navigator_2026.html` |
| Health Data Lifecycle Navigator | `/resources/navigators/health-data-lifecycle/` | `agile_health_informatics_health_data_lifecycle_navigator_2026.html` |
| Health Information Model Navigator | `/resources/navigators/information-models/` | `agile_health_informatics_health_information_model_navigator_2026.html` |
| Healthcare AI Assurance Navigator | `/resources/navigators/ai-assurance/` | `agile_health_informatics_healthcare_ai_assurance_navigator_2026.html` |
| Healthcare Integration Pattern Navigator | `/resources/navigators/integration-patterns/` | `agile_health_informatics_healthcare_integration_pattern_navigator_2026.html` |
| Healthcare Interoperability Navigator | `/resources/navigators/healthcare-interoperability/` | `agile_health_informatics_healthcare_interoperability_navigator_2026.html` |
| Healthcare Standards Navigator | `/resources/navigators/healthcare-standards/` | `agile_health_informatics_healthcare_standards_navigator_2026.html` |
| Modern NHS Digital Workforce Navigator | `/resources/navigators/modern-nhs-digital-workforce/` | — |
| Health Data Operability Maturity Assessment | `/resources/assessments/health-data-operability/` | `hdomm-toolkit-agile-health-informatics.html` |
| Health & Care Computing Professional Development Navigator | `/resources/professional-development/health-care-computing/` | `health_care_computing_professional_development_navigator.html` |
| Health Data Operability Workshop Facilitation Guide | `/resources/guides/health-data-operability-workshop/` | `health_data_operability_workshop_facilitation_guide.html` |
| Frailty and Multimorbidity Pathway Demonstrator | `/resources/clinical-pathways/healthcare-pathway-description/frailty-multimorbidity-demonstrator/` | `HPDS_Frailty_Neighbourhood_Clinical_Explainer.html` |

## Legacy links

Historical HTML URLs are preserved using `jekyll-redirect-from`.
Redirect source files are held under `legacy-redirects/`.

## Adding a new resource

1. Choose the appropriate category under `resources/`.
2. Create a stable, descriptive directory name.
3. Put the published resource at `index.html`.
4. Put its repository-facing guide at `README.md`.
5. Add it to `resources.html`.
6. Preserve any previous public path through `legacy-redirects/`.
7. Run `python tools/site-maintenance/verify_site.py` before publishing.

## Deployment

The site is designed for GitHub Pages. Keep the root `CNAME` file in place.