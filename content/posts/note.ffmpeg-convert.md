---
title: "How to convert a video format in bash with ffmpeg"
date: 2021-02-27T22:58:00-05:00
draft: true
tags: ["ffmpeg", "youtube-dl", "bash", "zsh", "terminal", "python", "video", "convert", "comedy"]
categories: ["How To", "Technology", "Bash"]
summary: "A simple guide on how to perform some basic video conversion tasks with `ffmpeg`"
---

Let's assume you have an video file in `mkv` format and you want to convert it to `mp4`.

If you are reading this, it is likely that you have no idea what you are doing, and may worry about destroying your video file. But alas, I would not send you down a destructive path such as this my dear fellow, hence all tasks performed will be non-destructive in every which way but loose.

By copying the existing video and audio streams and placing them into a file. This will leave the existing video file unchanged. 

 The ability to use `ffmpeg` assumes that `ffmpeg` is already installed and working. To test this out, type `ffmpeg --version`. If you see the version and not an error, then you should be good to go. If you do see an error, come on back after you figure out what's going on.

Enough chit chat, let's convert a video.

Here is the command:
```bash
ffmpeg -i smutxxx.mkv -c copy smutxxx.mp4 
```

Here is a breakdown of the command:
`ffmpeg` you know the thing...

`-i smutxxx.mkv` input the video file 'smutxxx.mkv'

`-c copy` create a copy of 'smutxxx.mkv'

`smutxxx.mp4` video file to be copied as 'smutxxx.mp4'

Check out your work and bask in the glory of making a thing from another thing. 

You don't have to save the file in the same folder. Like most bash commands, you can write the full file path to save it wherever you like, for example:

```bash
ffmpeg -i smellyfeetxxx.mkv -c copy ./Videos/notxxx/notfootfetishvidz/smellyfeetxxx.mp4
```

Pretty easy right.

Ffmpeg is a huge tool and I haven't even scratched the surface of its capabilities. 

As always, the best place to get more information on a command line tool like `ffmpeg` is to type `man ffmpeg`.
Once you learn to read and understand the `man` pages, you'll be a true legend of the terminal and all of life's rewards will soon follow.

