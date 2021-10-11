---
title: Your branch is ahead of 'origin/main' by 1 commit.
date: 2021-10-10
draft: true
categories: ["Web Development", "how-to"]
tags: ["git", "git push", "troubleshooting", "how-to", "git status"]
summary: "What to do when you see this shit."
---

You've cloned some trash you wrote back when you still gave a damn about this world, and now you've made some modifications in order to accurately reflect your current state of mind, which is utterly hopeless.

You do the little thing:
```bash
git add .; git commit -m "changes I made and the message about this commit"
```

You check it with `git status`, and the response is:

```txt
On branch main
    Your branch is ahead of 'origin/main' by 1 commit.
    (use "git push" to publish your local commits)
```