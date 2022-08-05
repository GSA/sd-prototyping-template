# Prototyping Template

This is a rapid prototyping template based on [Eleventy](https://www.11ty.dev/) and [USWDS](https://designsystem.digital.gov/).

It integrates USWDS via the [uswds-compile tool](https://designsystem.digital.gov/documentation/getting-started/developers/phase-two-compile/).

## Usage

### Setup

First, fork this repository or just make a copy of it to get your prototype site started.

Install `npm` dependencies:

```bash
npm install
```

### Local server

Run the Eleventy built-in dev server and watch for changes at the same time:

```bash
npm start
```

### Prototype development

#### Configuration

You can find some basic site configuration options in [`_data/site.js`](_data/site.js), including the site name, items for the header and footer navigation menus.

#### Content

Just add Markdown files to the root directory to create new pages. There are already a few example files:

* [`about.md`](about.md)
* [`contact.md`](contact.md)
* [`index.md`](index.md)
* [`section.md`](section.md)

#### Stylesheets

* To configure USWDS settings, edit [`sass/_uswds-theme.scss`](sass/_uswds-theme.scss)
* To add custom styles, edit [`sass/_uswds-theme-custom-styles.scss`](sass/_uswds-theme-custom-styles.scss)

If you're already running `npm start` or `npm run uswds:watch`, USWDS will automatically compile changes to these files and output the compiled resources to `/assets/uswds`. Otherwise, you can tell USWDS to compile with `npx gulp compile`.

#### Other assets

You can add custom images, JavaScript, and other assets under the [`assets`](assets) directory.
