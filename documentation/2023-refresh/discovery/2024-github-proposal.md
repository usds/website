The USDS Website team has completed its research on hosting options for the usds.gov website and recommends that USDS maintain its current hosting on Github based on current operational needs and cost. We have outlined the options we reviewed with the benefits and drawbacks below.

# Recommendation 

#### MAINTAIN GITHUB HOSTING AND BUILD ADDITIONAL TOOLING FOR UPDATING THE WEBSITE


The current hosting solution for GitHub is the least resource intensive of the options reviewed.

* Hosting on GitHub requires no additional funds beyond what USDS pays for GItHub.

* This solution does not require any new Authority to Operate (ATO).

* This solution does not require an additional procurement action.

* A static Jekyll website is lightweight and requires minimal engineering time and is one of the more secure options.

* USDS owns the full solution, minimizing the administrative burden of updating the website.

The drawbacks to the current hosting solution is the method to update the website is clunky compared to a traditional content management system. Rather than try to address this by increasing cost and administrative burden by switching to a traditional content management system, this drawback is best addressed by creating a helper tool to facilitate website updates. This tool would convert markdown files into html and generate pull requests automatically making it simpler to update content on the website.

# How we measured: Operational burden, administrative burden and mitigating risk

The USDS website is the primary way to provide information to potential candidates and is used in the first step of the application process. The USDS website also needs to be able to showcase case studies and victories to candidates, agency stakeholders, and Congressional staff.

The website must be lightweight and easily updated by the Communications team with minimal engineering hours. Additionally, USDS currently has no allocated budget to dedicate to the website.

## Operational

The website should be easy to maintain with minimal staff required for its upkeep.

The website should be updated in a way that is well documented in order to help future USDS staff maintain the website.

Finally, the website should be set up in a way that will make it easier for the communications team to update the site.

## Administrative Burden

Outside of the technical mechanics of maintaining and updating content, the website needs to maintain a low administrative burden for updating the website. Additionally, the website should not require an additional ATO or contracting process.

## Mitigating Risk

Finally, our selection of hosting options should minimize risk to the organization from both a security and administrative perspective.

# Other options reviewed

## White House WordPress instance

The White House has a contract with Automattic for a WordPress instance. This contract allows for 25/4 customer service and incident response. Our research has concluded it is impractical for USDS to be added to the contract. Additionally, it would subject the USDS team to additional administrative burdens to update the sight and we would need to archive the site during the next Presidential transition. 

## Cloud.gov 

Cloud.gov could potentially host the USDS website, but may require an additional ATO as well as budget set aside for the website. USDS could potentially deploy a WordPress or Drupal site onto

Cloud.gov, but would need to dedicate a significant amount of resources to so. A FISMA moderate site starts at $9300/month. In addition to budgetary costs, USDS would need to assign engineers that are familiar with either WordPress or Drupal. Once the website is deployed, USDS would need additional engineering time to ensure all security updates are installed in a timely manner. Our current site is less risky from a security standpoint because it is a simple static site. 

## Cloud.gov Pages 

Cloud.gov also offers a Pages functionality that would enable USDS to produce a static site, but is far more expensive than our current costs. The starting cost for the platform is $35k/year and would cover five custom domains for USDS. If USDS wanted to move other sites over to the platform, the cost would be an additional $21k/year Given the lightweight needs of USDS, this level of functionality is likely overkill.

With either of these options, the need for dedicated staffing resources will not be reduced as they would still be needed to maintain the site.

# Conclusion

## Future Work

USDS should look to deploy or procure a markdown converter tool in order to make the website, handbook, and other USDS sites easier to update as a future project. The team currently has an alpha version of this tool already available that allows the communication team to use a full WYSIWG site to create markdown file that can be uploaded to our Github. Future versions of this tool would allow automatic uploads and editing of current pages, but would require approval from WHIT.

## RECOMMENDATION:

Based on the needs and the organization after comparing with alternate offerings, the team recommends that USDS maintain its current hosting on Github based on current operational needs and cost. Additionally, we recommend further development of the helper tool in order to facilitate future content updates to USDS web properties.
