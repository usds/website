---
# Page template info (DO NOT EDIT)
layout: default
blog_page: true

# Carousel (Edit this)
carousel_title: "Core principles of product launches in government"
carousel_summary: "Releasing software at small scale first provides an understanding of the way people will interact with products and helps identify pain points before full release to the general public."
# partial path to image
carousel_image: /news-and-blog/2024-11-20-core-principles-of-product-launches-in-government /product-launches-in-gov.jpg
# accessibility text for image
carousel_image_alt_text: "A laptop is open with one person using the trackpad mouse and one person pointing to the screen"
# should show on news and blog page. ordered by date prefix in filename
carousel_show: true
# Blog detail page (Edit this)
title: "Core principles of product launches in government"
dateline_str: "Nov 20, 2024"
readtime_str: "8"
byline_str: "Pooja Shaw"
permalink: /news-and-blog/core-principles-of-product-launches-in-government 
---

Every day, hundreds of millions of Americans rely on digital products that underpin critical government services. Over the past ten years, the federal government has made significant strides in following successful software development practices. As highlighted in [U.S. Digital Services playbook](https://playbook.usds.gov/){:target="blank"}, it is critical that government continue to leverage and build on these practices in order to deliver the services and experiences that Americans deserve.

One of these critical practices is releasing new software products or product enhancements at small scale before general availability. This is a standard practice in industry, and is increasingly gaining traction as a standard practice in government. One well-recognized example of this practice is a “beta” release. Releasing software at small scale first allows us to understand the way people will interact with products and helps us identify pain points, such as uncovering bugs or issues in a production environment through real-world use before full release to the general public.

Often in government, products that the public see and use are actually multiple technology systems that interact not only with each other, but with other agency systems and non-government systems, increasing the complexity of the software. This complexity makes a phased rollout even more important when agencies are creating new products and services, or modernizing existing ones. 

Federal government stakeholders are sometimes hesitant to follow this best practice because of perceived potential risk or equity concerns. There is a fear if we take a phased approach rather than making the product available to the public all at once, it will be inequitable. However, many federal agencies have demonstrated that it is possible to both maintain transparency and public trust, while following a beta or phased rollout approach to ensure we deliver a product that works as intended to the public. 

In this blog, we will demonstrate how to incorporate this practice across government, as well as showcase examples where a phased rollout was successfully implemented.

### Implementing a phased rollout:

#### Follow a “crawl, walk, run” approach
Finding bugs and issues is a common and expected part of software development. We want to test with tens or hundreds of users to identify and remedy any bugs or issues early before it is used by thousands or millions of people. 

A phased approach includes:

- **Internal testing in a pre-production environment:** Most agencies already have established practices for members internal to the federal government or a vendor to test on a pre-production version of the software. These remain critical steps in the process, and agencies should continue to follow these practices. However, they are not a substitute for having real world users test a new product or enhancement in a production environment, which is why the next step of *phased rollout in production* is critical. 
- **Phased rollout in production:** The core principle here is to start with a small number of users,      identify and resolve issues, and then progressively scale up. There is no magic number for how to approach *crawl, walk, run*, the overarching goal is to learn from real users to identify and fix issues before expanding to larger populations. One commonly used approach for this is a phased beta test, where the product is released to progressively larger groups of users before general release. 
  - An agency may, for example, choose to make the product available first to hundreds of users, identify and fix issues. Then thousands, identify and fix issues. Then more and so on. 
  - How do you know when you’re ready to progress from a small number of users to more? See **Use Metrics** below. 

- **Post-release monitoring:** While not the focus of this particular blog post, it is important to remember that tracking whether your product is working as intended for your end users doesn't end once it is released at scale. The feedback loop to monitor, fix bugs and make enhancements, and continue to monitor is a continuous process in the life of a product (more on that in [the Playbook](https://playbook.usds.gov/){:target="blank"}). 

#### Get direct feedback from real-world users interacting with the product  
Prior to starting a phased rollout in production, all testing has happened in an internal, controlled environment. It is expected that you will encounter new bugs as more members of the public use the product and there are more real world use cases – i.e., people trying to use the product in different ways, multiple demographics, varying browsers and devices, performance in production as users interact with inter-connected systems. 

For example, in a government product that has dependencies and linked accounts across different family members in a single household, there are many permutations that will only become evident with real-world users in production. This is why we don’t want to jump from hundreds of users straight to millions, and a phased approach is key.

User feedback is always valuable, but especially during the “crawl and walk” phases, its invaluable for teams to go out into the field and sit beside users as they use the product. This allows us to observe firsthand what is working well, and what challenges users experience that weren’t anticipated based on the internal testing. 

#### Use metrics, and evaluate “end to end”
At each step in the phased rollout process, it is critical to use a consistent set of metrics to evaluate performance. It is important to pre-define metrics and target performance before starting the beta or phased rollout process so teams can align on expectations before making critical go/no-go decisions to expand. 

When determining metrics, it is also important to make sure you look end-to-end. For example, in government, a website or a digital product is often just the “front door” to a critical benefit or service for the public. Government teams need to measure not just the standard website metrics, but also whether we are delivering the intended outcome to the person that used the website to access the government service. This often requires close coordination with departments that may sit outside of the product development/technical group, but is critical to ensure the product is working to deliver the service.

This is an illustrative example of potential metrics for a website that has an online application that a user completes to determine eligibility and receive a government service or benefit:

- Website performance: Uptime, error rates, etc. 
- End-to-end user “funnel,” for example:
  - User started online form or application
  - User completed online form or application
  - Government processed user-submitted form (there are often multiple sub-steps and dependencies within this, including information exchange with other government agencies or non-government entities)
  - Eligible users received the product or service they applied for
- Tracking of known bugs, severity, and plans to fix
- User feedback: Volume of user issues from call center/similar channels, qualitative summary and trends of issues reported by users

Each product will have its own set of metrics, and they should be tracked in a consistent manner across the phased rollout process described above – pre-production testing, phased rollout in production, monitoring in general availability. It is standard to set acceptable thresholds for key metrics that can be used as gates in progressing in the phased rollout process – e.g., <X% error rates are acceptable. 



#### Identifying beta users
It is **crucial to be transparent** with the public that an agency plans to run phased release process for a new product or enhancement. While there are multiple ways to identify early users for a beta program or phased rollout, here are some common approaches:

- **Limited availability of the product or enhancement:** A publicly available website where the service is only available to use during certain times of day, or up to a certain capacity. In this instance, the product is not targeted to certain types of users during the limited availability periods. 

- **Partner with non-governmental agencies (e.g., non-profits, community-based organizations):** A common practice for government agencies to identify beta users is to partner with non-profits or other similar entities that work with the target populations, including organizations that work with typically underserved or low-resource members of the target population. In this instance, users may access the new product or enhancement through an “invitation” before it is widely available to the general public. 


### Recent examples of phased rollouts in government  

In recent years, many critical government products and services have moved away from “big bang launches” and towards phased rollouts. The product launches highlighted below are prime examples where the agencies clearly and transparently set expectations with the American public and informed the users that they would start small with the product release in order to deliver the best outcomes. USDS was proud to partner with agencies on these examples. 

#### Example 1: The Department of State - Online Passport Renewal

**Context**:
Millions of Americans each year renew their passports, and until recently, Americans would have to visit an office or mail in paperwork to complete this process. The Department of State initiated an effort to make online passport renewal available to eligible Americans to allow them to more easily access passport services. 

**Demonstration of core principles:**
Prior to general availability, the Department of State launched a beta program for online passport renewal. The Department transparently and clearly set expectations with the American public that they were running a beta release, and that they would limit the number of daily applications as a part of this process: *“During the next several months, we plan to continue to limit the number of applications accepted each day so we can monitor the system’s performance in real time,” the State Department said. “This beta release during which we are limiting the daily applications is an important and standard part of the software development process.”*

In September 2024, following the beta release,[ the Department of State formally announced](https://www.state.gov/announcing-online-passport-renewal/){:target="blank"} general availability of the new online passport renewal system. 

#### Example 2: The Social Security Administration (SSA) – Improving SSA.gov

**Context:**
The Social Security Administration’s (SSA) website is visited by [180 million people annually seeking](https://www.usds.gov/impact-report/2024/ssa/) information and services, making it the second-most visited federal website*.* Due to the complex nature of SSA’s programs, it was sometimes frustrating to find clear and understandable information. SSA recognized the importance of modernizing its website to meet the expectations and the evolving needs of the public, and initiated an effort to improve SSA.gov.

**Demonstration of core principles:**
SSA, in partnership with USDS, worked to establish a foundation for continuous improvement, which involved a redesign and relaunch of SSA.gov. 

SSA first [launched a beta](https://www.usds.gov/projects/ssa) of the redesigned website in April 2022. During this process, SSA got direct feedback from members of the public, and [as demonstrated in this case study](https://www.usds.gov/projects/ssa), the team also tracked key metrics that included website performance metrics, user “funnel” from start of an activity to completion, and customer satisfaction. 

Following the beta, in December 2022, SSA launched the new version of the site with an initial set of pages and features that serve as a foundation while SSA continues to redesign and launch new sections.

#### Applying these principles to a new product launch or enhancement 
The goal of a phased rollout is to have a process to clearly understand how a range of users experience the product and remedy significant issues discovered in production in a controlled manner, prior to general availability. 
It is normal and expected that it may take several months to plan for a phased product rollout, and that it may require close partnership with departments across the agency outside of the technology teams (e.g., communications, legal, policy, legislative affairs, customer support and other program operations.) Start to plan for the rollout of your new product release or enhancement early in the product development lifecycle.

We know it can be daunting to launch a new critical product that will be used by millions of Americans. These core principles and examples are a reminder it is possible for agencies to follow a phased rollout approach, while maintaining transparency and public trust, in order to deliver products that work for the American public. 

