# Data Dictionary and Metadata Registry Explainer

## Purpose

This interactive resource explains how a data dictionary, metadata registry, data catalogue, terminology service, reference-data service and data contract work together. It follows healthcare examples from a plain-language definition through governed metadata, discovery and use in an exchange.

The examples and registry entries are illustrative. They do not describe a live organisation, product or production registry.

## Website location

Place the resource at:

```text
/resources/explainers/data-dictionary-metadata-registry/
```

The page is self-contained and uses embedded CSS, inline SVG and vanilla JavaScript. It includes the Agile Health Informatics header, root-relative navigation, the shared colour theme control and footer.

## Navigation updates

The companion site-root files add the explainer in two places:

- `site-root/index.html`: the homepage's **New content** cards.
- `site-root/resources.html`: the resource library under **Explainers and web reports**.

Use these updates with the current site source. The homepage and resource-library copies were based on the latest available site-page copies and should be reconciled with any newer edits before replacing repository files.

## Interaction and accessibility

The page provides section navigation, search and filters, selectable registry and catalogue records, role-specific dictionary views, worked data contracts and explanatory FAQs. Controls are labelled, keyboard-operable and visibly focused. Without JavaScript, all explanatory sections remain visible. The page supports the `ahi-theme` local-storage setting, reduced motion and print styles.

## Maintenance

Update the illustrative data and explanatory text in `index.html`. Keep the description and canonical URL current if the page is moved. Check the homepage and resource-library links after any URL change.
