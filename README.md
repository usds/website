# USDS website

The USDS website is built with:

- [Jekyll](https://jekyllrb.com/) via the [github-pages gem](https://rubygems.org/gems/github-pages)
  - See [current dependencies](https://pages.github.com/versions/) for GitHub Pages
- [U.S. Web Design System v3 (USWDS)](https://designsystem.digital.gov/)

Before getting started, install the following on your system:

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/), best set up on version 2.7 for Jekyll
- [NPM](https://github.com/npm/cli)
- Docker

## Deployment steps
see [How to use staging environment](https://github.com/usds/website-management#how-to-use-the-usds-website-staging-environment)

## Install and run a development environment

### Initial setup
We recommmend that you use a Docker container to run the site as a development environment because of dependency and version collisions. This allows the site to run in a contained place, minimizing setup issues.

```
docker build -t usds-website . --no-cache
```

### Run locally, with and without live reload
Run this command to have a local version on `http://localhost:4080`.
```
docker run -p 4080:4000  --name usdsweb usds-website
```

If you want to make changes and have them update on the running container
we need to map the active source code in to the container with a volume mount and
expose the port for livereload. This should ensure that changes you make are being
mapped to the /app director and refresh on the running container. Note the volume mount syntax
for `pwd` might be different on Windows or a non Bash shell. 
```
docker run -p 4080:4000  -p 35729:35729 -v $(pwd):/app --name usdsweb usds-website
```  

### Development environment for sharing on cloud.gov
Builds staging Jekyll site using `JEKYLL_ENV=staging`. Staging builds are used for temporary testing on cloud.gov. Do not deploy a staging build to GitHub pages.

Staging sites are one-off, per-user builds in a cloud.gov sandbox. Handy for testing and gathering feedback.

To create a cloud.gov staging build:
1. `npm run build-staging`
1. Log in to cloud.gov cli, `cf`  (TODO: details here)
1. `cf push`

#### Create a cloud.gov account and configure Cloud Foundry
If you haven't used cloud.gov before, you'll want to set up

1. [Determine if you have access to cloud.gov](https://cloud.gov/docs/getting-started/accounts/) and follow instructions to [sign up](https://cloud.gov/docs/getting-started/setup/).
2. Log in to your cloud.gov dashboard and install and configure [Cloud Foundry](https://cloud.gov/docs/getting-started/setup/).

A successful push will print a staging url next to `routes`, ex: `website-staging-foo-bar-ab.app.cloud.gov`. Visit the staging url to preview your build.

### Visual regression tests

To compare current actual screenshots with the established base images: `npm run visual-regression`.

When pages are intentionally changed, refresh the base images with `npm run visual-refresh`. This creates/updates base images and a `sitemap.json file`. Commit these along with the page changes.

A GitHub workflow automatically runs the regression script when a pull request targeting the `staging` branch is created or updated. A summary of results will appear as a comment on the PR. If a refresh is needed, users can activate the refresh script by manually running the `Visual regression tesing` Action and providing the PR number. New/updated base images will be added to the PR.

## Maintenance

### USWDS and custom styles
We use USWDS version 3. Most of the styles are built off of v2.12.0, but the underlying framework is v3. The `scss` is in `assets/stylesheets/uswds`, with the entry of `index.scss`. `uswds-settings.scss` has custom variables and `styles.scss` has custom scss.

#### Change theme settings

Custom USWDS theme settings are declared in `assets/stylesheets/uswds/_uswds-theme-*.scss`. Use these files to [add or remove utilities, edit variables, or change how the design system builds](https://designsystem.digital.gov/documentation/settings/).

After updating, make a [new build or restart your localhost](#running-and-building) to see any changes.

#### Updating USWDS
To update a major version of `uswds`, consult their documentation. The `package.json` settings will allow for minor and patch updates as a matter of course.

### Content updates

#### Uploading images
- [/images](https://github.com/usds/website/tree/master/images): This folder contains *editorial photos* and other images for People cards and pages, Project cards and pages, event logos for the Events cards and page, and other areas that are likely to change semi-frequently.
- [/assets/img](https://github.com/usds/website/tree/master/assets/img): Site assets and evergreen images such as page banners/headers and vector graphics should be placed in the assets/img folder here. The images in this folder typically will not be subject to change.

#### Adding Content
* [How to add people](https://github.com/usds/website/wiki/Adding-People-(carousel-and-pages))
* [How to add projects](https://github.com/usds/website/wiki/Adding-projects-(carousel-and-pages))
* [How to add a new page without HTML](https://github.com/usds/website/wiki/Adding-a-simple-page)
