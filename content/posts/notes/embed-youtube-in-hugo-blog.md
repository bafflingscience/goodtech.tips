---
Title: "Display a YouTube Video in Markdown" 
draft: true
showTOC: false
enableEmoji: true
params:
   ShowShareButtons: true
tags: []
---

## We live in a [world of imagination](https://davidclegg.dev)

![img](/imagination.jpg)

# Display a YouTube Video in a Markdown Blog
## Embed a YouTube video in your Hugo blog.
Do I use html tags?
```
<video>NO!</video>
``` 

Do I use the embed code?
```
<iframe width="960" height="540" src="https://www.youtube.com/embed/s1CZfoYGASs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="false"></iframe>
```

No Again you Stupid Idiot! 

You must use [shortcodes](https://gohugo.io/content-management/shortcodes/) you silly silly person.

The shortcode for a youtube video embed is nice and short:
![img](/shortcode-youtube.png)

Which will result in the video being embedded like this
{{< youtube s1CZfoYGASs >}}
I found that video on [thiscolossal.com](https://thiscolossal.com)