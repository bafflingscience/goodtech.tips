---
Title: "How To Embed a YouTube Video in a Hugo Blog Post"
date: 2021-01-14T12:37:13-05:00
draft: false
showTOC: false
enableEmoji: true
params:
   ShowShareButtons: true
categories: ["Technology", "Web Development", "How To"]
tags: ["Hugo", "static site generator", "static html", "html templates", "YouTube", "embed youtube", "web design", "embed code", "blog", "how-to", "Markdown", "shortcodes"]
summary: "Using Hugo Static Site Generator's Shortcodes to embed YouTube videos on your website."
---

## Using Shortcodes in Markdown to Display Videos
Do I use html tags?
```
<video>NO!</video>
``` 

Do I use the embed code?
```
<iframe width="960" height="540" src="https://www.youtube.com/embed/s1CZfoYGASs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="false"></iframe>
```
I'm sorry to say, but you are quite wrong.

You must use [shortcodes](https://gohugo.io/content-management/shortcodes/) you silly bastard.

The shortcode for a YouTube video embed is nice and short:
![Alt](/posts/images/shortcode-youtube.png "Image of a the shortcode to embed a YouTube video in a markdown file")

Which will result in the video being embedded like this:
{{< youtube s1CZfoYGASs >}}
The video is from [thiscolossal.com](https://thiscolossal.com)

That is all.
