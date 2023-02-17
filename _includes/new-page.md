---
markdown_only: true
simple_footer: true # change to false if you want big "We Need You" footer

permalink: /page_URL_goes_here 
title: This is the tab title and top-level heading 
---

## This is a second level heading

This is a paragraph, which **can** *be* ***formatted*** with [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

If you are already familiar with markdown, you can skip most of what follows, but *be sure to check the rule about URLs for links and images*.

## Another second level heading

Markdown has many features.

### Unordered lists

- this 
- has 
- bullets

### Ordered lists

1. this  
2. has
3. numbers

### Links

The first paragraph above has an example of a markdown link to a different site. The format is square brackets containing the link text, immediatlely followed by parantheses containing the URL 

For links within USDS, there is a special URL format that is needed to make things work across development, staging and on the live site. The brackets-followed-by-parentheses still applies. Inside those parentheses, the first part of the URL must be double curly braces containing `site.baseurl`

- Yes: [this link]({{ site.baseurl }}/mission) will always be right.
- No: [this link](/mission) will sometimes be broken.
- No: [this link](https://usds.gov/mission) may never break, but it might not be the "version" you want.

### Images

The same format rule applies for image URLs within USDS.

![A sample image]({{ site.baseurl }}/assets/img/usds-logo-horizontal.png)

<!-- This is an HTML comment. This text does not appear in the browser-rendered page, but
it IS VISIBLE in the browser developer tools, so it's not the place for anything sensitive. -->

<!-- Markdown allows you to do a lot without knowing HTML or CSS. But if you do know some, you can use it 
in combination with markdown. An example follows. -->

<img alt="An image using HTML and CSS" src="{{ site.baseurl }}/assets/img/usds-logo-horizontal.png" style="width: 300px; display: block; margin: auto;">