# Blog post support added late 2023

## This README

This document can be in the `_blog_posts` directory because it's excluded from the build in `/_config.yml`.
Additional instruction for new features should be added this way.

## How blogs differ from other layout sections.

The "Carousel" view in the News and Blog page is controlled completely inside the blog post md. The blogs entries to be
displayed are controlled by `carousel_show: true` (or false). The order is controlled by the filename
which is currently date timestamp prefix formatted like `2023.06.04-` the sort is lexical alphabetical reversed,
so `YYYY.MM.DD` sorts newer entries to the bottom. 

There is no limit to the number that can be rendered in the News and Blog page other than the number of blogs posts that
have `carousel_show: true` in them.

>[!NOTE]  
> If you're adding a new blog and including it in the News and Blog carousel view, then you will need to edit and 
> existing blog post and set it to `carousel_show: false` to remove that one to keep the list size consistent.

## Template example:
```markdown
---
# Page template info (DO NOT EDIT)
layout: default
blog_page: true

# Carousel (Edit this)
carousel_title: "Tackling the Climate Crisis with Open Source"
carousel_summary: "Every one of us has the right to breathe clean air, drink clean water, eat safe, nourishing food, and live free from the threat of climate disasters wrecking our neighborhoods and livelihoods. …"
# partial path to image
carousel_image: images/blog_posts/2022.04.27/carousel_yRIkbHQAf1wyYusyCAOcvA.jpg
# accessibility text for image
carousel_image_alt_text: "Image showing power windmills nestled in rolling green hills"
# should show on news and blog page. ordered by date prefix in filename
carousel_show: true

# Blog detail page (Edit this)
title: "U.S. Digital Service"
dateline_str: "Apr 27, 2022 - 5 min read"
permalink: blog/tackling-the-climate-crisis-with-open-source
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
carousel_title: ""
carousel_summary: "…"
# partial path to image
carousel_image: images/blog_posts/
# accessibility text for image
carousel_image_alt_text: ""
# should show on news and blog page. ordered by date prefix in filename
carousel_show: true

# Blog detail page (Edit this)
title: "U.S. Digital Service"
dateline_str: ""
permalink: blog/
---

```

