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


