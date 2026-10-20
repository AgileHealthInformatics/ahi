# Website analytics and consent

GA4 Measurement ID: `G-EF8ZF37K5H`. This public identifier is not a secret.

## Files and behaviour

- `/assets/js/analytics.js`: basic consent implementation, host allow-list and tag loading.
- `/assets/css/analytics-consent.css`: scoped light/dark, mobile and print styling.
- `/privacy.html`: public privacy notice using the existing site header and footer.
- Every public HTML page includes the two shared assets and footer privacy links.
- Analytics only starts after explicit acceptance on HTTPS at `agilehealthinformatics.com`
  or `www.agilehealthinformatics.com`. Local copies, HTTP and other hosts do not send analytics.
- Both acceptance and rejection last 180 days, in origin-specific localStorage.
  Clearing storage or expiry prompts again. Storage unavailable means current-page choice only.
- Rejecting disables collection, expires accessible `_ga` / `_ga_*` cookies and reloads
  an already-tracked page to remove Google's running listeners. Other open tabs respond
  to preference changes. The current page reload can reset unsaved resource controls.
- Google Signals and advertising personalisation signals are disabled in the tag.
- The initial page location/referrer omit query strings and fragments. Enhanced
  measurement may still collect link URLs or other parameters: do not place personal
  information in URLs or enable search/form capture without reviewing its data.
- GA cookie lifetime is capped at 180 days, without sliding renewal. The tag supplies
  `content_group` from the resource category, or `corporate` for other pages.
- No session replay or custom interaction capture is included. Configure standard
  enhanced measurement in GA4; add bespoke events only after selecting useful actions.
- Consent controls are a non-modal region: page navigation remains available, settings
  opened explicitly receive focus, and closing returns focus to their trigger.

## Required account checks before merging/publishing

These cannot be configured through GitHub and have NOT been verified by this change.

1. Confirm the ID belongs to the intended website's web stream.
2. Enable enhanced measurement for page views, scrolls, outbound clicks and file downloads.
   Disable automatic site search and form interactions initially. Enable video only if needed.
   Disable browser-history page-view tracking if resource state changes would otherwise
   introduce unwanted page events. Review Google tag automatic-event settings as well.
3. Keep Google Signals, user-provided data collection and advertising personalisation off.
   Do not link advertising products or enable extra data sharing without reviewing the notice.
4. Set detailed event retention to 14 months, reset on new activity off. The privacy notice
   labels this as intended configuration until confirmed; replace that wording with the
   confirmed setting before publishing. Aggregate reports are not governed by this limit.
5. Review the privacy notice, Google's processing terms and the published LinkedIn contact
   route. Replace it with a preferred privacy contact if one is available.
6. Review and merge the pull request to the branch used by GitHub Pages. No deployment
   settings, DNS or CNAME changes are required.
7. After Pages deploys, accept analytics in a fresh browser and check GA4 Realtime.
   Confirm a page view, outbound click and download click, then test rejection/withdrawal.
   Normal reports can take 24–48 hours. Requests can be blocked by browser extensions.

## New pages

Include these once before `</head>`:

```html
<link rel="stylesheet" href="/assets/css/analytics-consent.css">
<script src="/assets/js/analytics.js" defer></script>
```

Add the following within the footer (the link works as a privacy-page fallback without JS):

```html
<div class="ahi-privacy-links">
  <a href="/privacy.html">Privacy notice</a>
  <a href="/privacy.html#analytics-settings" data-ahi-privacy-settings>Privacy settings</a>
</div>
```

Do not add Google's standard tag separately: it bypasses this consent flow and may double count.

Run `python3 tools/site-maintenance/check_analytics.py`. The GitHub Actions coverage
check runs this on pull requests and pushes to main. It does not publish anything.

## Validation and limitations

Browser consent tests are in `tools/site-maintenance/test_analytics.cjs`. They require
Node.js and Playwright with Chromium installed; run from the repository root:

```sh
node tools/site-maintenance/test_analytics.cjs
```

The tests serve files through intercepted browser requests using the production hostname,
with all external requests blocked or mocked. No test visits go to real Google Analytics.
They verify tag gating and queue configuration, not Google's processing or account settings.

The existing `verify_site.py` reports 31 local-link findings on the original repository
commit, including Jekyll redirect URLs and missing paths. Compare with that baseline;
this analytics work does not repair unrelated links. PDF requests made directly, downloaded
copies used offline, blocked scripts and rejected consent are not measured by this tag.
No historical visits can be recovered.

## Reporting

Use Pages and screens (page path), Traffic acquisition, Landing page and Events. Compare
resource categories using Content group. A `file_download` event represents a link click,
not completed transfer or reading. Do not sum page-level user counts as a unique site total.
Search Console setup and saved GA4 dashboard configuration remain separate account tasks.

References: [Google basic consent mode](https://developers.google.com/tag-platform/security/guides/consent?consentmode=basic),
[enhanced measurement](https://support.google.com/analytics/answer/9216061?hl=en),
[data retention](https://support.google.com/analytics/answer/7667196),
[ICO guidance](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/).

### Validation performed for this change

- Coverage check: 40 public HTML pages, zero errors.
- JavaScript syntax and whitespace checks passed.
- Browser suite: 11 checks passed in Chromium with all external traffic intercepted.
- Desktop and mobile privacy/consent screenshots reviewed in light and dark themes.
- Existing site verifier: same 31 local-link findings as the original commit; no new findings.
- Actual GA4 ingestion, enhanced-measurement settings and retention remain unverified
  until the account checks and post-deployment Realtime test are completed.

The browser suite also accepts `AHI_CHROMIUM_PATH` for an existing Chromium executable
and `AHI_SCREENSHOT_DIR` for optional local screenshots.
