# Screening clinical pathway navigation update

This package contains updated **homepage** `index.html` and `resources.html`, plus the two Endoscopy-style screening navigator pages and their README files.

## Deployment paths

- `index.html` -> `/index.html`
- `resources.html` -> `/resources.html`
- `resources/clinical-pathways/bowel-cancer-screening/index.html` -> same path in website repository
- `resources/clinical-pathways/diabetic-eye-screening/index.html` -> same path in website repository
- Put each navigator's `README.md` beside its `index.html`.

The source homepage and resources HTML are the latest available working copies supplied on 25 October 2026; they contain four additional explainer links that are not yet on the checked GitHub main branch. **Review the diff before replacing your current repository files.** To preserve all changes in your current checkout instead, use the accompanying `apply-navigation-update.py` script on the checkout. It patches existing files in place and leaves their unrelated content intact.

## Collection page

The update script also updates `/resources/clinical-pathways/index.html`, inserting both cards within its existing `.resource-grid`. The `collection-card-snippet.html` is supplied only as a transparent reference and is **not dynamically loaded** by the site.

## Applying safely

From your site repository root:

```bash
python path/to/apply-navigation-update.py .
```

This script updates the three navigation pages in place and backs each up as `*.html.before-screening-navigation.bak` on first application. It does not publish to GitHub. Add the navigator directories from this package, inspect the diff, then remove the `*.before-screening-navigation.bak` backups before staging files for Git. Commit and push through your normal workflow.

## Checks

Both new homepage cards and Resources cards link to root-relative navigator URLs. The collection cards use directory-relative links as in existing collection cards. Existing top-level menus and consent-aware analytics imports remain unchanged. The resource content is draft, non-clinical reference material.
