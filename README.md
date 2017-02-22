US Digital Service Website
==========================

This repo is for our public-facing site, which is hosted on
[https://usds.gov](https://usds.gov). This site is the main funnel for USDS
recruiting and outreach.

The site is built on the [U.S. Web Design
Standards](https://playbook.cio.gov/designstandards/) and uses Jekyll to
generate static pages.

[Instructions for rookies learning how to edit the website can be found here](https://github.com/usds/usds/blob/master/comms/website-instructions.md).

Setup
---
1. If you're using a Mac, install homebrew (see http://brew.sh/)
2. After installing git (`brew install git`), `cd` to the directory where you
   want to check-out the site, and then clone it (`git clone
   https://github.com/usds/website.git`)
3. Install rvm (`\curl -sSL https://get.rvm.io | sudo bash -s stable`), make
   your current user a member of the rvm group, and then install a new version
   of ruby (`rvm install 2.3.1`)
4. Install the `bundler` gem, then use bundler to install other project
   dependencies (`gem install bundler && bundle install`)

Running
---
1. In the directory you checked out the website into, run `jekyll serve` to
   start the webserver
2. Navigate to http://localhost:4000 in your browser to see your changes

