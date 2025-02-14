This a case study draft from December 2024 that was not published, but could be used in the future.

Building APIs that saved field agents and court staff 650,000+ hours of processing time & ~$6M across agencies
The NTA Filer and Doc Status APIs are effectively bridging the gap between two federal agencies
The Department of Homeland Security and The Department of Justice

Background

The number of cases pending before the U.S. immigration courts system has more than has more than tripled since the start of fiscal year 2017, significantly straining the system on processing necessary documentation for noncitizens placed into Section 240 of the Immigration and Nationality Act removal proceedings.

To help relieve this pressure, the U.S Digital Service (USDS), the Department of Homeland Security (DHS), and the Department of Justice (DOJ)’s Executive Office for Immigration Review (EOIR) partnered to create new efficiencies to facilitate interagency communications and speed case processing.

Challenge

Certain noncitizens who are subject to removal from the U.S. may be provided the opportunity to appear before an immigration judge and seek relief from removal. To initiate these proceedings, DHS must issue a Notice to Appear (NTA) to the noncitizen and file the NTA with the immigration court. A delay in serving and filing the NTA can negatively impact the immigration court process by significantly delaying proceedings, which in turn impacts the noncitizen’s ability to apply for relief or protection from removal, such as asylum or work authorizations. Additionally, noncitizens need the NTA for their appearance before a judge for case adjudication.

Before our partnership, DHS created, served, and filed NTAs using multiple systems through a largely manual process that was slow and vulnerable to errors and delays. For example, if the EOIR court clerks identified a mistake in the NTA, the NTA would be rejected and sent back to DHS, creating a backlog for DHS and EOIR staff that took several days (or longer) to resolve. Errors caused by the manual process delayed noncitizens’ ability to receive timely information on their cases, and extended the time to be granted relief or issued an order of removal.

Overall, agents and officers were spending thousands of hours per year on these manual administrative tasks, diverting their focus from their frontline missions.

Solution

The USDS, DHS, and DOJ’s EOIR pursued the vision of automating the filing of the NTA in immigration court, resulting in the NTA Filer. This tool automates DHS operational Component submissions of NTAs to the EOIR. DHS Component systems can now directly upload NTAs to EOIR through a system-to-system application programming interface (API)—a mechanism that enables software components to communicate. The API is designed to improve transparency, streamline NTA filing and document corrections, and identify trends for training and system updates.

The team also developed a system of validation checks to detect common errors in NTA submissions and offer immediate feedback. The validation mechanism executes around 20 rules, each implementing a specific set of checks that simulate a court clerk reviewing a document submission before proceedings are formally initiated.
To make NTA correction more transparent and efficient, the USDS team also created a Document Status API that enables a secure connection for sharing relevant data, such as status and rejection information, between EOIR and DHS components via the Unified Immigration Portal. An API dashboard displays the status of critical documents and indicates whether a document has been reviewed, accepted, or rejected by a court clerk.
Between June 2023 and December 2024, NTAs for nearly 1.4 million noncitizens were filed using this automated technology.

Impact
Since the introduction of the NTA Filer in June 2023, over half of the NTAs have been filed using the new API. Notably, the implementation of validation rules has substantially decreased the NTA rejection rate to less than 2%, marking a substantial reduction from the previous method. This underscores the efficiencies gained by the NTA Filer adoption and increases the likelihood that the NTA will be accepted promptly.
Further, the NTA Filer reduces the time between serving the NTA to a noncitizen and filing it with the court. It allows the same field agent or officer to file the NTA in unison with its creation, preventing the case from resulting in a failure to prosecute (FTP).
Through this work, DHS and DOJ have saved hundreds of thousands of hours of staff time avoiding tedious manual rework and downstream document corrections, and reducing the waiting time for noncitizens to receive the final disposition of their case. Furthermore, the new streamlined process has improved operational effectiveness for both DOJ and DHS.

By the numbers [side bar]

650,000+ HOURS SAVED 
of DHS field agent + court staff time filing and correcting rejected NTA’s	20+ PORTS OF ENTRY
across the country have adopted the automated Filer	NEARLY 1.4 MILLION noncitizens 
cases processed through this streamlined effort.


Notable quotes

-	 “It's a lot more streamlined and easier to use. No need to move between our secondary processing systems and ECAS.”

-	“Eliminates the back-and-forth between DHS agents filing an insufficient NTA and immigration court staff rejecting an NTA for incorrect or missing information.” … “Significantly improves the likelihood that an NTA will be properly accepted by EOIR in the first instance and reduces the potential for cases to be closed as FTP.”  

