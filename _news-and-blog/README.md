# Blog post support added late 2023

## This README

This document can be in the `_blog_posts` directory because it's excluded from the build in `/_config.yml`.
Additional instruction for new features should be added this way.

## How blogs differ from other layout sections.

The "Carousel" view in the News and Blog page is controlled completely inside the blog post md. The blogs entries to be
displayed are controlled by `carousel_show: true` (or false). The order is controlled by the filename
which is currently date timestamp prefix formatted like `2023-06-04-` the sort is lexical alphabetical reversed,
so `YYYY-MM-DD` sorts newer entries to the bottom. 

There is no limit to the number that can be rendered in the News and Blog page other than the number of blogs posts that
have `carousel_show: true` in them.

>[!NOTE]  
> If you're adding a new blog and including it in the News and Blog carousel view, then you will need to edit and 
> existing blog post and set it to `carousel_show: false` to remove that one to keep the list size consistent.

### Images
Putting images in a subdirectory alongside the blog markdown page allows 

## Template example:
```markdown
---
# Page template info (DO NOT EDIT)
layout: default
blog_page: true

# Carousel (Edit this)
carousel_title: "Meeting veterans where they are with accessible mobile tech"
carousel_summary: "This Veterans Day, we’re honoring our current and former service members by highlighting a collaboration between the Department of Veterans Affairs and the U.S. Digital Service."
# partial path to image
carousel_image: news-and-blog/2022-11-10-meeting-veterans-where-they-are-with-accessible-mobile-tech-img/carousel_cmJyOg.jpg
# accessibility text for image
carousel_image_alt_text: "U.S. Air Force Senior Airman Jamar Jackson, a United States Air Force Honor Guard ceremonial guardsman, marches in the Veterans Day Parade in New York, Nov. 11, 2018"
# should show on news and blog page. ordered by date prefix in filename
carousel_show: true

# Blog detail page (Edit this)
title: "Meeting veterans where they are with accessible mobile tech"
dateline_str: "Nov 10, 2022"
readtime_str: "5"
byline_str: "U.S. Digital Service"
permalink: news-and-blog/meeting-veterans-where-they-are-with-accessible-mobile-tech
---

# markdown document here
```

## Template starter

```markdown
---
# Page template info (DO NOT EDIT)
layout: default
blog_page: true

# Carousel (Edit this)
carousel_title: "___"
carousel_summary: "___"
# partial path to image
carousel_image: news-and-blog/___
# accessibility text for image
carousel_image_alt_text: "___"
# should show on news and blog page. ordered by date prefix in filename
carousel_show: true

# Blog detail page (Edit this)
title: "U.S. Digital Service"
dateline_str: ""
permalink: news-and-blog/___
---

```

