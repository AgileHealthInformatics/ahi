# Three NHS England models, read as one system

An interactive explainer of three NHS England publications that together describe the urgent and emergency care pathway from arrival to leaving hospital:

- **The Model Emergency Department: high performing urgent and emergency care pathways** (PRN02373, 9 February 2026)
- **The Model Acute Pathway: standards for care of acutely unwell patients in their first 72 hours in hospital** (PRN02076, 9 February 2026)
- **Model discharge pathway** (PRN02543, 7 July 2026)

The explainer introduces healthcare professionals to what the models aim to achieve, provides an interactive guide to their use, sets out their limitations, and positions them in the context of winter 2026/27, for which NHS England expects all three to be implemented.

Intended for NHS trust executives, clinical directors, operational managers, health policy leaders, and enterprise architects and informatics leaders.

## Website location

`/resources/explainers/model-uec-pathways/`

Canonical URL: <https://agilehealthinformatics.com/resources/explainers/model-uec-pathways/>

## Files

```text
model-uec-pathways/
├── index.html
└── README.md
```

`index.html` is self-contained, with embedded CSS, vanilla JavaScript and the embedded Agile Health Informatics logo. It loads no external fonts, scripts or images and has no build step. External source links need an internet connection; everything else works offline.

## Page features

- Shared site header, root-relative primary navigation, breadcrumbs, blue hero and footer.
- Persistent light and dark themes using the shared `ahi-theme` localStorage key.
- Responsive contents rail with section highlighting; mobile menu at 760px.
- **The three clocks**: a diagram drawn to linear scale with three lanes, one per model:
  - Model ED: 0 to 12 hours from arrival.
  - Model Acute Pathway: 0 to 72 hours from referral or arrival on the acute receiving area.
  - Model discharge pathway: 0 to 24 hours from admission.
- **Walk the pathway**: a thirteen-stage interactive guide, grouped by model. Stages 1 to 3 come from the Model ED, 4 to 9 from the Model Acute Pathway and 10 to 13 from the Model discharge pathway.
  - Stage 10 (discharge intent from admission) runs alongside Stages 5 to 9.
  - Each stage shows what the standards expect, the entities in the information model that would evidence it, and a winter pressure point.
  - Each stage also offers a question for one of four lenses: boards and executives, clinical directors, operational managers, informatics leads.
  - Arrow keys move between stages.
- **The model underneath**: the conceptual information model in six plain-language groups, a **proposed extension for discharge**, and the top-level business capabilities.
- **Standards lookup**: a searchable and filterable table of 31 requirements:
  - five Model ED elements;
  - the fifteen acute standards;
  - eleven discharge model elements.
  
  Each row shows its model entities and capability, and how it is evidenced: a data report, policy and audit, a national metric, or a baseline review.
- **Limitations** and **Winter 2026/27**, including a table of pressure signals measured as intervals between recorded events.
- Print / save PDF button and print layout; the print output includes every pathway stage in full.
- Skip link, keyboard focus states and reduced-motion support. Main text is readable without JavaScript.

## Proposed extension for discharge

The current conceptual model records the end of an encounter or location stay but holds no discharge records of its own. The explainer proposes the following entities so that the discharge model's expectations can be evidenced. They are shown with dashed outlines on the page and are **not yet in the Sparx EA repository**:

| Entity | Purpose |
| --- | --- |
| `DischargePlan` | Reason for admission, expected date of discharge, intended pathway and destination |
| `DischargeCriterion` | Patient-specific physiological and functional criteria agreed by an expert decision-maker |
| `FunctionalBaseline` | Usual abilities recorded on admission |
| `CriteriaToResideAssessment` | Daily judgement of whether inpatient care is still needed |
| `DischargeReadiness` | Discharge ready date, when criteria to reside are no longer met |
| `DischargePathwayAssignment` | Assigned discharge pathway 0 to 3 |
| `DischargeTask` | Parallel preparation: medicines to take out, therapy, equipment, documentation, transport |
| `Discharge` | The discharge event, with time, pathway and destination |
| `TransferOfCare` | Handover of clinical responsibility to a community service |
| `DischargeDelay` | Reason, named owner, actions and timescales for each delay |
| `CareTransferHubReferral` | Referral of a complex discharge to the care transfer hub |
| `CommunityCapacity` | Community capacity visible to discharge teams |
| `PostDischargeFollowUp` | Follow-up contact after discharge |

The page also suggests capabilities beneath Flow Management and Escalation for criteria-led discharge, discharge delay management, transfer of care co-ordination and discharge lounge operations. If the extension is adopted in the repository, remove the "proposed" styling (`.ent.proposed` and the `pents` and `p` fields in the data) and update the limitations and model sections.

## Suggested resource library entry

Type: **Interactive explainer** (`data-type="explainer"`)

Title: **Model ED, Acute and Discharge Pathways**

> Explore NHS England’s Model ED, Model Acute Pathway and Model discharge pathway as a single system: the time limits they set, the information model beneath them, a thirteen-stage guide for boards, clinicians, operational and informatics leads, their limitations, and what they mean for winter 2026/27.

Suggested tags: `NHS England`, `Urgent and emergency care`, `Discharge`, `Winter 2026/27`.

## Sources and coverage

Evidence reviewed to 18 October 2026:

- NHS England. The Model Emergency Department: high performing urgent and emergency care pathways. PRN02373, 9 February 2026.
- NHS England, Royal College of Physicians, Society for Acute Medicine, British Geriatrics Society. The Model Acute Pathway: standards for care of acutely unwell patients in their first 72 hours in hospital. PRN02076, 9 February 2026.
- NHS England. Self-assessment tool for the Model Acute Pathway: guidance for NHS trusts. 9 February 2026.
- NHS England. Model discharge pathway. PRN02543, 7 July 2026.
- NHS England. Winter planning 2026/27: expectations and assurance. PRN02603.
- Agile Health Informatics conceptual information model and business capability model for the Model ED and Model Acute Pathway (Sparx Enterprise Architect repository, 2026), with the proposed discharge extension described above.

## Editorial treatment and limitations

The explainer interprets the published models through the lens of operational architecture and information modelling. It is not clinical guidance, and the source documents take precedence where they differ.

The information and capability models are an analytical interpretation of the published text, not NHS England publications. They describe what must be recorded and how records relate. They do not describe staffing, demand or capacity, and each trust’s systems will hold these records differently. The bed chain shown (ClinicalDecision → BedRequest → BedAllocation → Bed → PatientTransfer) reflects the current version of the model.

The page also notes the following points about the discharge model:

- It overlaps the acute pathway rather than following it: the same 6 and 14 hour expert review confirms both the clinical plan and discharge intent.
- It sets no new requirements for social care providers, and pathways 1 to 3 depend on partners outside the hospital.
- It refers to a Community Beds Delivery Model and Discharge Ready Date guidance that were pending when it was published.
- It has no self-assessment tool equivalent to the acute pathway's. It relies instead on a baseline against its core elements and two national operational metrics.

No hypothetical patients or fictional scenarios are used. Community hospital discharge and higher-risk cohorts appear in the standards lookup but are not given separate pathway stages.

## Maintenance

- Review after any revision of the three models or the acute pathway self-assessment tool.
- Review again when the following are published:
  - revised ED counting and coding guidance;
  - the Discharge Ready Date guidance;
  - the Community Beds Delivery Model;
  - the consolidated discharge metrics.
- Update the Winter 2026/27 section when NHS England issues winter planning guidance for 2027/28.
- Stage and requirement data are held as JavaScript arrays (`stages` and `rows`) near the end of `index.html`. Stage objects with `dis:true` belong to the discharge group. `pents` (stages) and `p` (rows) hold proposed entities.
- Keep entity names aligned with the Sparx EA repository.

## History

- 18 October 2026: prepared, covering all three models.
