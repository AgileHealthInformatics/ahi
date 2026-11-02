# National PEWS: From Early Warning to Accountable Response

An independent interactive educational and architectural explainer, prepared for Agile Health Informatics Ltd on 2 November 2026.

## Public path and publication status

- Resource: `/resources/explainers/national-pews/index.html`
- Intended URL: https://agilehealthinformatics.com/resources/explainers/national-pews/
- The site is not modified until the accompanying installer is run in a local checkout and those changes are committed and deployed.

## Purpose and boundaries

The explainer uses NHS England's published 2023 general-inpatient paediatric early warning charts to explain age bands, numerical score bands, independent concerns and specific clinical triggers. Score 0 does not itself trigger a score-based escalation, but independent criteria may still require urgent action. The age selector links to charts and is **not** a scoring calculator.

The 2026 ED extension is described as a distinct clinical operating context. The ED-to-ward handover and failure demonstrations are **synthetic process models**. They neither calculate ED PEWS nor prescribe an ED clinical response interval. Clinical deadlines must be taken from the currently approved setting-specific chart or local procedure.

The proposed persistent escalation record, ownership model, interoperability mappings and assurance controls are independent architectural inferences, not an NHS-endorsed specification or a medical device.

## Seven sections

1. **Understanding the standard:** Four age-band chart links and explicit calculation limitation.
2. **Escalation:** Score 0, Low, Medium, High and Emergency bands; distinct carer concern, nurse/clinician concern and selected chart-specific triggers. The highest relevant trigger governs. No free-text classification.
3. **Digital workflow:** Comparison of existing chart documentation with proposed operational state, plus seven steps and four scenarios: successful response, unacknowledged notification, missed clinical review deadline, and unresolved transfer. The status display never treats notification delivery as accepted clinical responsibility.
4. **Care settings:** Ward-versus-ED scope plus ED-to-ward handover transitions between information received, responsibility accepted and obligation continued. Receiving data does not transfer responsibility.
5. **Architecture:** Six-layer capability stack, illustrative HL7 FHIR resource mapping (Observation, Task, CommunicationRequest, Provenance, AuditEvent) and a synthetic escalation record that changes with the scenario. FHIR mapping is candidate architecture, not official PEWS implementation guidance.
6. **Implementation assurance:** Twenty independently proposed controls, with Not assessed / Satisfied / Not satisfied / Not applicable statuses, evidence reference, reviewer and comments. Progress counts assessed controls, not 'passes'. The page flags satisfied claims lacking evidence. CSV export, copy summary and printable assessment view operate in the browser only.
7. **Provenance:** Official inpatient charts, national programme and ED guidance, RCPCH statement of 2 November 2026, public contract commissioning reference C318012, NHS DCB0129/DCB0160 guidance and independent interpretation legend.

## Clinical and governance warnings

**Not for clinical use.** The page does not calculate a paediatric score, interpret a real child’s condition, provide decision support, certify conformance, or replace local clinical safety work. The published inpatient charts already contain escalation fields, nurse/clinician notification and arrival, and structured medical plan requirements. The added distinction is the **persistent digital work obligation**.

Clinical review deadlines and proposed electronic notification/acknowledgement control deadlines are intentionally distinct. Synthetic clock times are used to illustrate process failure, not to define new clinical thresholds. In an ED-to-ward transfer, an inherited locally defined clinical review requirement must remain in force according to the approved handover process.

The checklist is an assurance aid only. Its selections are not validated, and neither positive selection nor a filled evidence reference proves conformance. Actual manufacturer and deployment safety activities under DCB0129/DCB0160 must be performed independently as applicable.

Never enter real patient-identifiable information, confidential hazard log content or staff identifiers into the interactive fields. Assessments are held in browser memory only, but exported CSV files or copied text must still be handled appropriately by their users.

## Technology and website integration

Self-contained HTML, embedded CSS and vanilla JavaScript with no remote front-end library. It reuses the Agile Health Informatics colours, standard site navigation, mobile menu, `ahi-theme` preference, print and reduced-motion styles. The local installer substitutes the actual embedded company logo taken from the current `resources.html` website header, standard six-link navigation, tablet/mobile menu and theme preference.

Analytics integration uses the existing consent-aware site assets `/assets/css/analytics-consent.css` and `/assets/js/analytics.js`. These paths resolve on the deployed website; standalone `file://` preview will not load them. No assessment data are sent to analytics by the explainer itself.

The homepage 'New content' section is scoped to November 2026 in the installer; previous entries remain available in `resources.html`. Inspect the changes before committing.

## Article link

The companion commentary is titled **A Warning Score Is Not a Response**. Its publication date and authoritative URL are not presently verified; the explainer mentions it without inventing a live link. Once published, add the verified URL and publication date to the **About this analysis** panel in Section 07.

## Verification checklist

- Confirm chart-specific and ED claims against the latest approved national sources and local operational rules.
- Check that numerical score zero does not get mislabelled Low and that independent carer and clinician concern can override it.
- Run each workflow failure to the end; failures must remain explicitly unresolved.
- Confirm transfer of data does not transfer ownership until acceptance.
- Check that the synthetic information record tracks owner, delivery, acknowledgement, clinical review and outcome.
- Check assessed-status counts, evidence warnings, CSV field content and print assessment.
- Test keyboard controls, mobile menu, 390px/680px/980px widths, light/dark mode, print, reduced motion and visible focus.
- Check IDs, JavaScript errors, external sources, privacy links, and analytics consent behaviour after deployment.

Automated browser interaction checks were executed locally against the standalone HTML using Chromium and a document-content harness. A deployed site-level end-to-end test, including real shared analytics assets and HTTPS, remains to be performed.


## Header and navigation update (2 November 2026)

The earlier standalone HTML package contained a **placeholder A-shaped SVG logo** which the optional installer attempted to replace from the local website. This has been corrected: `index.html` now embeds the **actual WebP logo** used in the live Agile Health Informatics website, without requiring installation-time replacement. The `site-header` markup uses the existing brand lock-up, complete six-item navigation, colour-theme button and responsive menu behaviour found in `resources.html`. The original PEWS explainer sections and interactions are unchanged.
