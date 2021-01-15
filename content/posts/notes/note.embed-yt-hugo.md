---
Title: "Embed a YouTube Video in your Hugo Blog Post." 
draft: false
showTOC: false
enableEmoji: true
params:
   ShowShareButtons: true
tags: ["Hugo", "static site generator", "static html", "html templates", "YouTube", "embed youtube", "web design", "embed code", "blog", "how-to", "Markdown", "shortcodes"]
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


PS. We live in a wonderous world of imagination

![Alt](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JRjrFWeNOsxJKiZE8wuWuQHaED%26pid%3DApi&f=1 "A picture of a magical land of wondereous imagination")

That is all.