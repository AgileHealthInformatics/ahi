# Federate the meaning. Exchange the measures.

A self-contained interactive explainer demonstrating why a European statistical reporting function may choose **SDMX** while separately governed data dictionary and EHDS dataset-catalogue services retain their own responsibilities. The setting is deliberately **generic European**: no national health service, national statistics office or Member State is identified. All reporting bodies, datasets and values are fictional.

## Open the demonstrator

Open `metadata_federation_ehds_explainer.html` directly in a modern web browser. The page contains its styles, example records and JavaScript. It does not require a backend, external scripts or network access. Reference links to the official standards and law do require connectivity.

## Seven interactive sections

1. **Architecture overview**: separation of dictionary, reporting and HDAB responsibilities, plus a case for SDMX compared with bespoke spreadsheet exchange.
2. **Follow an indicator**: seven-step account of source definitions, statistical governance, SDMX structures, cross-organisation exchange, health dataset descriptions and HDAB secondary-use processes.
3. **Explore the registry**: fictional indicator records, links to source dictionary versions, methods, statistical dataflows and datasets.
4. **Cross-border SDMX exchange**: switch between two fictional providers; validate local codes, apply agreed mappings, review methodological differences, prepare an illustrative SDMX-CSV payload and download it.
5. **EHDS dataset discovery**: illustrative HealthDCAT-AP-oriented dataset descriptions and selected metadata-field completeness checks.
6. **Change and assurance**: simulate a breaking dictionary definition change, identify dependent indicators and document version management implications.
7. **Governance and sources**: independent stewardship of source semantics, statistics, receiving statistical organisations, health data holders and HDABs; FAQs and primary technical/legal sources.

## What the interoperability exercise teaches

Provider Alpha already uses the shared demonstration codes. Provider Beta begins with different local values for area, frequency, indicator, unit and status. The simplified structure check initially rejects these values. A controlled transformation resolves the structural differences, but a separate methodological discrepancy remains. The release button is only enabled once methodology equivalence is explicitly attested in the simulation. This is a teaching aid, **not** a certified SDMX parser or validator. The emitted CSV is an illustrative SDMX-CSV 2.x-shaped message using fictional identifiers. Real exchange would require published DSDs and codelists, schemas, version compatibility checks and counterpart agreements.

## EHDS relationship

- SDMX is a standard for statistical data and metadata exchange across participating statistical organisations. It is **not** prescribed by EHDS as the HDAB dataset catalogue format.
- **HealthDCAT-AP** is the metadata framework required for EHDS dataset descriptions by Commission Implementing Regulation (EU) 2026/2098, applying from **26 March 2029**.
- HDAB dataset discovery, assessment of applications and access governance are separate from statistical reporting and SDMX exchange.
- Publishing an indicator or catalogue description does not grant access to protected health data. No real data is processed or exchanged in the demonstrator.

## Technical and legal references

- [Eurostat · SDMX explained](https://ec.europa.eu/eurostat/web/sdmx-infospace/sdmx-explained)
- [European SDMX registry information](https://cros.ec.europa.eu/dashboard/euro-sdmx-registry)
- [SDMX technical specifications](https://sdmx.org/standards-2/)
- [SDMX-CSV field guide](https://github.com/sdmx-twg/sdmx-csv/blob/master/data-message/docs/sdmx-csv-field-guide.md)
- [Regulation (EU) 2025/327, European Health Data Space](https://eur-lex.europa.eu/eli/reg/2025/327/oj)
- [Commission Implementing Regulation (EU) 2026/2098](https://eur-lex.europa.eu/eli/reg_impl/2026/2098/oj)
- [HealthDCAT-AP specification](https://data.health.europa.eu/healthdcat-ap/releases/latest/)

## Limitations and implementation considerations

All record data are embedded in the HTML. No external application, statistical office, registry or Health Data Access Body is accessed. There is no live SDMX XML/JSON validation, real statistical disclosure control, secure processing environment or HealthDCAT-AP conformance validation. A production service would require authoritative identifier/namespace rules, governed mapping maintenance, persistent versions, metadata profile validation, API and security arrangements, formal statistical QA and organisational service agreements.

The architecture is a generic educational design pattern, not an implementation blueprint for a specific European country.
