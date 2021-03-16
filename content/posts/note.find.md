---
title: "Using the `find` command to find files and folders"
date: 2021-01-13T12:37:13-05:00
draft: false
weight: 2
enableEmoji: true
enableToc: true
params:
   ShowShareButtons: true
categories: ["Technology", "Web Development", "How To"]
tags: ["bash", "zsh", "terminal", "linux", "macOS", "wsl", "debian", "find", "terminal commands", "programming", "how-to", "learn to code", "self-taught", "autodidact", "web development", "system admin", "fzf", "jdupes", "alan resnick", "put it on your desktop"]
summary: "All things are difficult before they're easy"
---
<!--![img](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QQIFwj8TNOIBTR367L92fQHaFi%26pid%3DApi&f=1)
-->
*"All things are difficult before they're easy." -Thomas Fuller*



{{< giphy 9DczRbHVGwVuaKwiQJ >}}

## How to find files using the Terminal

How do you find one file out of the thousands on your computer?
There are more than a few ways, but today we'll focus on the `find` command.

**Example Scenarios**

find all csv files in the current directory and its sub-directories
```
find . -type f -name '*.csv'
```

delete all files ending with .jpg in the current directory, and all files within the directories in the current directories
```
find . -type f -name '*.jpg' -delete
```

find all files starting with "word" and ending in ".txt" OR starting with "word" and ending with ".md"
```
find . -name "word*.txt" -o -name "word*.md"
```

## find files based on Multiple Parameters

find all files in the current directory ending in '.jpg' OR '.png', but not if the file name starts with 'cover'
```
find . -type f \( -name '*.jpg' -or -name '*.png' \) -not -name "cover.*"
```

## Exclusion Filters
find all files beginning with "word" and ending with ".txt" that are over 256k in size. jheeezus!
```
find . -name "word*.txt" -a -size +256k
```

 find all files greater than or equal to 8 kilobytes, except for files beginning with "word" and ending with ".txt"
```
find . \( -size +8k -o -size 8k \) ! -name "word*.txt"
```
find any file starting with "word" that ends with ".txt", omitting anything equal or greater than 8k
```
find . ! \(-size +8k -o 8k \) -name "word*.txt"
```

change all lower case files ending with ".txt" and change them into files that end with "TXT"
```
sudo find . -name "*.txt -exec rename 's/txt/TXT/g' {} \;
```

#### breakdown of some of the commands and flags

execute the rename function
```
find . -name "*.txt" exec rename
```
substitute "txt" with "TXT" globally
```
s/txt/TXT/g
``` 
include all files
```
{}
```
escape the semicolon which ends the exec command
```
\;
```

print the results to testfile.txt
```
find . "*.txt" -fprint testfile.txt
```

### Possible file types are as follows:

| Type | Description |
|--|--|
| `b` | block special |
|`c`| character special |
| `d` | directory |
|`f`| regular file|
|`l` |symbolic link|
|`p`| FIFO|
|`s` |socket|

***Now look at the commands below and notice that the `-d` type is specified.***

find all directories in the pwd and its sub-directories
```
find . -type d
``` 

find all directories in the pwd, its sub-directories, and sort them
```
find . -type d | sort
``` 

As with most commands, use `man find` to view the manual in your terminal.

There are lots more ways to find files, check out [Why did no one tell me about fzf before now?](/posts/notes/note.fzf/)

