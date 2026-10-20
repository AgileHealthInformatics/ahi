# Agile Health Informatics Ltd website

This repository contains the public website for **Agile Health Informatics Ltd**.

Website: <https://agilehealthinformatics.com/>

Tagline: **creative ideas & solutions**

This README reflects the supplied homepage `index.html` as reviewed on 12 October
2026. The homepage presents the practice’s enterprise architecture, health data,
interoperability, secure data and AI-enabled advisory services, alongside its
public resource library.

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
    ├── explainers/
    ├── data-management/
    ├── clinical-pathways/
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

The homepage navigation is **Home | Services | Resources | Professional
Development | About | Connect**. Professional Development currently links directly
to `/resources/professional-development/health-care-computing/index.html`.
Connect moves to the homepage’s `#contact` section, which links to Dr Tito
Castillo’s LinkedIn profile.

## Homepage content

The homepage contains:

- A blue introductory hero with links to services and the resource library.
- **New content**, currently labelled October 2026, announcing the resources below.
- **How we can help**, linking to six service areas: enterprise architecture,
  health data architecture, interoperability, secure data environments,
  AI-enabled architecture and transformation readiness.
- **Featured resources**, highlighting the Healthcare Standards Navigator,
  Modern NHS Digital Workforce Navigator, UK Secondary Care Integration Reference
  Atlas and Health Data Operability Maturity Assessment.
- An overview of the practice and professional standing, followed by the
  **Start a conversation** contact section and company footer.

### Resources announced under New content

| Resource | Homepage destination |
| --- | --- |
| Understanding Data Vault 2.0 in Healthcare | `/resources/explainers/data-vault-2-healthcare/` |
| EMPI and National EHR | `/resources/explainers/empi-national-ehr/` |
| Data Dictionary and Metadata Registry Explainer | `/resources/explainers/data-dictionary-metadata-registry/` |
| Metadata Management for a National Health Service | `/resources/data-management/metadata-management-national-health-service/` |
| Making UK Core Genuinely Core | `/resources/explainers/making-uk-core-genuinely-core/` |
| Clinical Information Requirements Catalogue Explorer | `/resources/data-management/clinical-information-requirements-catalogue/` |
| Trust Metadata and Reference Data Strategy | `/resources/data-management/trust-reference-data-strategy/` |

The Data Vault 2.0 entry introduces hubs, links and satellites through synthetic
healthcare records, including new sources, corrections, preserved history and
multiple analytical outputs. It is presented as an introductory explainer requiring
no prior knowledge.

## Presentation and implementation

The homepage is a self-contained HTML page with embedded CSS, vanilla JavaScript
and embedded logo images. It uses system fonts and a maximum normal content width
of 1180px, with the established blue, pale blue-grey and restrained lime palette.
No external JavaScript framework is loaded.

The shared header is sticky. A responsive menu replaces the desktop navigation at
980px, with additional layout adjustments at 680px. The theme button switches
`data-theme` between light and dark and stores the preference under the
`ahi-theme` localStorage key. A scroll-progress indicator updates as the page is
scrolled. The stylesheet also includes print rules.

Preserve the logo, company name, tagline, navigation, theme behaviour and footer
when maintaining the homepage. Use root-relative links for new resource cards so
that their destinations remain consistent across the site.

## Established resource URLs

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
| Modern NHS Digital Workforce Navigator | `/resources/navigators/modern-nhs-digital-workforce/` | None recorded |
| Health Data Operability Maturity Assessment | `/resources/assessments/health-data-operability/` | `hdomm-toolkit-agile-health-informatics.html` |
| Health & Care Computing Professional Development Navigator | `/resources/professional-development/health-care-computing/` | `health_care_computing_professional_development_navigator.html` |
| Health Data Operability Workshop Facilitation Guide | `/resources/guides/health-data-operability-workshop/` | `health_data_operability_workshop_facilitation_guide.html` |
| Frailty and Multimorbidity Pathway Demonstrator | `/resources/clinical-pathways/healthcare-pathway-description/frailty-multimorbidity-demonstrator/` | `HPDS_Frailty_Neighbourhood_Clinical_Explainer.html` |

## Legacy links

The existing repository guidance uses `jekyll-redirect-from` to preserve historical
HTML URLs, with redirect source files under `legacy-redirects/`.

The supplied homepage still uses historical filenames for the Healthcare Standards
Navigator, UK Secondary Care Integration Reference Atlas and Health Data
Operability Maturity Assessment. Keep those routes working while they remain in
use. The resource table above records their intended canonical paths; it does not
mean that every homepage link has already been migrated.

The repository structure and redirect configuration are retained from the existing
README. Their presence and behaviour cannot be confirmed from the homepage alone.

## Adding a new resource

1. Choose the appropriate category under `resources/`.
2. Create a stable, descriptive directory name.
3. Put the published resource at `index.html`.
4. Put its repository-facing guide at `README.md`.
5. Add it to `resources.html`, including appropriate search terms and a resource type.
6. For a new publication, add an announcement to the homepage’s `#new-content`
   section using the existing card structure. Keep its title, description, tags
   and destination consistent with the resource library, and update the section’s
   month label when appropriate.
7. Update this README’s new-content table to match the homepage. Keep older
   resources discoverable in the resource library when retiring their announcements.
8. Preserve any previous public path through `legacy-redirects/`.
9. Run `python tools/site-maintenance/verify_site.py` if the repository’s documented
   verification tool is present. Check internal links, duplicate IDs, JavaScript
   errors, keyboard navigation, desktop and mobile layouts, light and dark themes,
   and print output before publishing.

## Deployment

The site is designed for GitHub Pages. Keep the root `CNAME` file in place and
preserve the existing Jekyll and redirect configuration.

For local review, serve the repository root over HTTP rather than opening nested
HTML files directly; this allows root-relative navigation to resolve correctly.
This documentation update does not change the HTML or publish the website.
## Optional website analytics

The website uses consent-managed Google Analytics 4 (`G-EF8ZF37K5H`). Shared assets
in `assets/js/analytics.js` and `assets/css/analytics-consent.css` are included on
all public HTML pages, with Privacy notice and Privacy settings links in the footer.
Google's tag loads only after acceptance and only on the production HTTPS domains.

See [analytics setup and maintenance](docs/site/analytics.md) for the required GA4
account settings, deployment checks, privacy notice review and reporting guidance.
Include the shared assets and privacy links when adding a page. Run
`python3 tools/site-maintenance/check_analytics.py` before publication; GitHub Actions
also checks coverage on pull requests and pushes to main.
