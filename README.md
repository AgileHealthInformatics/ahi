# Agile Health Informatics Ltd Website

This repository contains the public website for **Agile Health Informatics Ltd**.

The site is a lightweight static website designed to work directly from GitHub Pages or any conventional static web host. It does not require a build process, package manager, framework or server-side application.

Website: <https://agilehealthinformatics.com/>

## Purpose

The website presents the services, experience and public professional resources of Agile Health Informatics Ltd.

The homepage introduces the practice and provides access to:

- advisory services;
- the public resource library;
- the Health & Care Computing Professional Development Navigator;
- information about Agile Health Informatics Ltd and Dr Tito Castillo; and
- contact and LinkedIn links.

## Main files

The core site pages are expected to sit in the same directory.

```text
index.html
services.html
resources.html
about.html
health_care_computing_professional_development_navigator.html
README.md
```

Additional HTML resources and navigators may also be stored in the same directory.

### `index.html`

The main website homepage.

Its primary navigation contains:

- **Home** → `index.html`
- **Services** → `services.html`
- **Resources** → `resources.html`
- **Professional Development** → `health_care_computing_professional_development_navigator.html`
- **About** → `about.html`
- **Connect** → the contact section on the homepage

The page also includes featured service areas and selected public resources.

### `services.html`

Describes the principal Agile Health Informatics advisory services, including enterprise architecture, health data architecture, interoperability, secure data environments, AI-enabled architecture and transformation readiness.

### `resources.html`

Provides access to the wider public knowledge base, including navigators, reference resources, assessment tools and analytical publications.

### `about.html`

Provides background on Agile Health Informatics Ltd, the practice and its professional experience.

### `health_care_computing_professional_development_navigator.html`

An interactive, self-directed professional development guide for health and care computing.

The navigator helps users:

- explore 13 connected professional capability domains;
- choose a Foundation, Practitioner or Specialist / Leadership perspective;
- select areas of professional interest;
- identify Core, Develop and Explore priorities;
- explore specialist and cross-cutting capabilities;
- review relevant learning and reference resources; and
- generate a personalised, printable professional development plan.

It is a professional development aid rather than a certification, accreditation scheme or formal course.

The companion Markdown description is:

```text
health_care_computing_professional_development_navigator.md
```

If this file is included in the repository, it provides a plain-text explanation of the navigator and instructions for its use.

## Deployment

The website is designed for direct static deployment.

For GitHub Pages, place the required HTML files in the published branch and directory and ensure that `index.html` is at the root of the published site.

No compilation or build step is required.

Because navigation uses relative links, linked files such as:

```text
health_care_computing_professional_development_navigator.html
```

must remain in the same directory as `index.html` unless the corresponding links are changed.

## Local use

The pages can normally be opened directly in a modern browser.

For example:

```text
index.html
```

can be opened from the local filesystem.

A lightweight local web server can also be used when testing the complete site, for example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

This is optional. The site itself has no Python dependency.

## Design and implementation

The site uses:

- semantic HTML5;
- embedded CSS;
- vanilla JavaScript;
- responsive layouts;
- light and dark themes;
- accessible navigation controls;
- print styling; and
- embedded image assets where appropriate.

There are no required external JavaScript frameworks, CSS libraries or content-delivery networks.

The presentation is based on the Agile Health Informatics visual identity:

- blue-grey page background;
- white content surfaces;
- medium and deep blue hierarchy;
- lime accent;
- rounded cards and controls; and
- a responsive sticky header.

## Theme handling

The colour-theme control switches between light and dark presentation.

Where browser storage is available, the selected theme is retained using `localStorage`.

## Responsive navigation

On narrower screens the main navigation collapses behind the menu control.

Any new top-level navigation link should therefore be added inside the existing `siteNav` element so that it participates automatically in both desktop and mobile navigation.

## Adding a new page

For a new top-level resource:

1. Add the HTML file to the same published directory.
2. Use a stable, descriptive filename.
3. Add a relative link from the appropriate website page.
4. Check both desktop and mobile navigation.
5. Verify that the page works when served from GitHub Pages.
6. Avoid changing existing filenames unless all incoming links are also updated.

For evergreen resources, filenames should normally avoid dates and version numbers unless the date or version is material to the resource.

## Professional Development Navigator link

The homepage currently contains the following relative destination:

```text
health_care_computing_professional_development_navigator.html
```

The visible menu label is:

```text
Professional Development
```

This file must therefore be deployed alongside `index.html` for the menu item to resolve correctly.

## Maintenance checks

Before publishing changes, check:

- all top-level navigation links;
- links from the homepage to featured resources;
- mobile-menu behaviour;
- light and dark themes;
- browser console for JavaScript errors;
- relative file paths;
- layout at common mobile and desktop widths;
- embedded images;
- print output where relevant; and
- that the GitHub Pages deployment uses the intended `index.html`.

## Content principles

Public resources should remain:

- professionally presented;
- evidence-led where analysis is involved;
- clear about their scope and limitations;
- vendor-neutral unless a product is specifically being analysed;
- explicit about whether they are guidance, analysis, reference material or an assessment tool; and
- clear where a resource does **not** confer certification, accreditation or professional competence.

## Ownership

**Agile Health Informatics Ltd**  
*creative ideas & solutions*

<https://agilehealthinformatics.com/>
