This page will serve as the central collab and notes area for this effort.

# What is our goal with this effort?

## Improve current site
1. Achieve WCAG AA accessibility rating
1. Fix staging site deployment
1. Fix tech debt

Bonus
* Upgrade underlying tech from Jekyll to Gatsby to reuse existing static site code

## Discovery sprint
Answer a specific question that will help the website thrive over the long term.

### Steps
1. Understand pain points and team priorities (initially done at kickoff)
2. Very specific question to answer
3. Have a hypothesis
4. Decide how to staff
5. Create a research plan with a timeline
  * Target research participants
  * Research question(s)
  * Desired outcomes

# Resources directly related to our work
**Slack channel**: #website-refresh-fall22

## Mural board
https://app.mural.co/t/usdigitalservice0135/m/usdigitalservice0135/1672774407639/cfa0ba36ef019a28c549bd98f3fd02dfcd485b71?sender=cf733c6d-cca3-4a00-919f-561716f98b23

## Project board
https://github.com/orgs/usds/projects/77/views/1


# What is our process for taking in and prioritizing work?

## Research opportunities
* Usability for comms team + recommendations for how to build something that will work for them within our tooling constraints
* What sort of content strategy would be most effective to recruit great talent?

# Work that could go into this effort
## Feature requests from comms
### Priority A: Improving accessibility 
Running list of things we should ideally improve, flagged by Martha W.

#### Design + engineering
* add alt tags to all images
* make any PDFs into static webpages instead (D&I report, Impact Report, one-sheet) - you could keep the option to download the PDF but yes, bring the content into HTML
* double-check the carousels for a11y if you intend to keep them, I cannot tab to them so I’m not altogether sure they are compliant

#### Comms + content
* be explicit that we want disabled folks to apply, make them feel welcomed
* add detailed info about the interview process and what accommodations are available, make it very easy to find this info up-front
* add info about how medical insurance works, this is a huge issue for disabled folks and is a determining factor for even considering to apply
* add info about remote work, this is a huge issue for disabled folks who may need to work from home

### Priority B: General site improvements
1. Navigation
  * How do we refine top nav/IA?
1. Footer
  * Based on analytics, what do people engage with in the footer menu? 
  * How do we optimize footer content?
  * Update the social media icons (Alison can replace these)
1. CTA
  * Main CTA is currently driving users to Apply
  * Possibility of adding a secondary CTA? Perhaps a “Learn More” sign up page to capture contact info/newsletter sign up
1. Homepage
* current hero image gives the impression that we are still in the pre-covid times
* How do we showcase our hybrid model right now?
* Do we add an image slider to showcase a series of photos that relate to 6 USDS values?
1. People page
* Add leadership profiles with the same questionnaire
* Ability to view leadership team
* Can we have additional categories to the top of people profiles? ie filter people profiles by COP
1. Our Mission Page 
* USDS Origin Story: revised layout perhaps to a timeline concept
* Use more visuals to illustrate who we were and where we are
1. Projects page
* Functionality of the projects listed is fine, however we are open to  to new functionality and layout. Do we show a broader project overview instead of the card style layout?
* Can we add subhead style to project pages?
1. Press/USDS in the News
* Should logos be in full color or move to featuring headlines instead of logos?
#### General questions
* Can we embed video?
* What is the long game for [USDS.gov](http://usds.gov/) maintenance plan support from engineering/design?

## Work discovered during discovery process
* Rewrite site in something more maintainable
> * Establish a standard for rolling out small static sites and then use it
> * Explore [techfar hub](https://github.com/usds/techfar-hub-website-v3) and j40 to see what's reusable
* Upgrade USWDS from 2.x.x to 3.x.x
* Document workflows
* Upgrade documentation for:
  * Engineers
  * Content creators
* Uptime monitoring for both usds.gov and usds.gov/apply (salesforce iframe)
* How to handle downtime for salesforce (see: Lisa having to put a notice up and remove the iframe manually)
* gh is not a cms, it's a public repo. Do we want staging deployments and branches being publicly accessible? 
  * check out `c19-state-report` repo
  * If it's public, are there ways to hide secrets? are there secrets to hide?
* Make cloud.gov staging site deploy work
* Document and verify workflow
* If not upgrade, tend to install and dependency management in this version so installation works better for everyone
  * Containerize so it can just run in Docker and not deal with local stuff

# Limiters
* Tooling. What are we able to use? What has an ATO? What should have an ATO soon?
* Willingness to create something more usable

# Meeting Notes
## Dec 2022
* Introduction (12/16) 
# Resources
Slack channel: #website-refresh-fall22
* [Incoming post](https://usds.slack.com/archives/CEU5XJYTH/p1664900418642209)
* [Archive of comms feature requests](https://github.com/orgs/usds/projects/40/views/8?filterQuery=is%3Aopen+usds.gov)
* Landscape analysis and content brainstorming [Mural](https://app.mural.co/t/dhsds5073/m/dhsds5073/1674055489260/648f61f81b1ea8ed9e799820ff114498387fa987?sender=allycemoncton7287). 
