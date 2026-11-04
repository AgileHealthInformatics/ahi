# EHDS Direct Care Sharing Explorer

An interactive, standards-informed demonstrator of cross-border primary-use health record sharing under the European Health Data Space (EHDS).

## Contents

`index.html` is the demonstrator. It includes a guided workflow and synthetic records for:

- Patient Summary
- ePrescription and eDispensation
- Laboratory results and reports
- Medical imaging study and report
- Hospital discharge report

Each example identifies its category and published guidance basis, and offers a downloadable synthetic JSON representation. The walkthrough illustrates patient identification, exchange routing, national contact points, clinical receipt and use, with explicit limits around identity matching, permissions and professional interpretation.

## Standards status

The page distinguishes Regulation (EU) 2025/327 and Annex I data categories from published eHealth Network content guidance and the EEHRxF technical specifications. It references the versions stated in the demonstrator: Patient Summary Release 3.4, ePrescription/eDispensation Release 3.1, Laboratory Result Release 1.2, Medical Imaging Release 1.1 and Hospital Discharge Report Release 1.1. Final category-level EEHRxF technical specifications are due by 26 March 2027, so the examples make no claim of final wire-format conformance.

## Runtime and deployment

The demonstrator uses embedded CSS and vanilla JavaScript and has no framework, build step or CDN dependency. Place the directory at `/resources/explainers/ehds-direct-care-sharing/` in the AHI site. It uses the site's shared navigation and consent integration, including `/assets/css/analytics-consent.css`, `/assets/js/analytics.js`, and the Privacy settings link. Keep those references aligned with the site's shared implementation. The HTML does not add its own Google Analytics tag.

## Privacy and limitations

All people, organisations, identifiers, clinical content and events are synthetic. Interactions run in the browser; no live service is called and no record is transmitted. The JSON examples are teaching representations, not certified exchange payloads, clinical advice or an official validator result. National implementation choices and applicable patient rights must be assessed against the relevant law and deployment context.

## References

- Regulation (EU) 2025/327: <https://eur-lex.europa.eu/eli/reg/2025/327/oj/eng>
- Patient Summary guideline: <https://health.ec.europa.eu/publications/ehn-guideline-patient-summary_en>
- ePrescription and eDispensation guideline: <https://health.ec.europa.eu/publications/eprescription-and-edispensation-authorised-medicinal-products-guidelines-electronic-exchange-health_en>
- Laboratory Result guideline: <https://health.ec.europa.eu/publications/ehn-laboratory-result-guidelines_en>
- Medical Imaging guideline: <https://health.ec.europa.eu/publications/ehn-guidelines-medical-imaging-studies-and-reports_en>
- Hospital Discharge Report guideline: <https://health.ec.europa.eu/publications/ehn-guidelines-hospital-discharge-report_en>
