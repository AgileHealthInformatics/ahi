# Diabetic Eye Screening Pathway Navigator

Location: `/resources/clinical-pathways/diabetic-eye-screening/`

Built from the supplied **NHS England Diabetic Eye Screening Clinical Pathway Catalogue** workbook, reviewed 27 October 2026. Contains **44** pathway definitions, **7** groups, **12** source records and **20** discovery questions. All **24 original workbook fields** remain embedded and can be inspected under each definition or exported in JSON/CSV.

## Interface

Replicates the interaction architecture and styling of `/resources/clinical-pathways/endoscopy/`: Navigate (left-hand grouped explorer and breadcrumb journey), Pathway map (SVG relationships), Evidence and impact (source-to-definition traceability), Variants (local implementation questions) and Stakeholder views (role-centred information requirements).

## Assurance and limitations

- Reference descriptions are draft and unapproved. This page is not clinical guidance, not an authorised HPDS publication and not a validated local pathway.
- Candidate pathway relationships are analytical navigation suggestions assembled for this demonstrator. They are not independently evidenced transitions.
- The source workbook records national programme documents and local discovery questions. National guidance must be checked before operational use.
- Local systems, service boundaries and site participation are unvalidated.
- Source references are at document level; do not imply recommendation-level evidence.
- Only an England reference is present. The Variants view records validation questions rather than invented cross-jurisdiction variants.
- Analytics is loaded through the existing `/assets/js/analytics.js` consent-aware script and `/assets/css/analytics-consent.css`.

## Accessibility and publishing

Accessible tab controls, labelled search and filters, keyboard-operated map nodes, responsive two-column desktop/stacked mobile layout, print rules, theme toggle using `ahi-theme` and privacy settings link. Add a card to `/resources/clinical-pathways/`; optionally add to `/resources.html` and the homepage announcements.
