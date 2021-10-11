---
title: "Part 3 - The Greatest Firefox Add-On of All Time."
date: 2021-03-02T23:58:03-05:00
draft: true
tags: ["Firefox", "Add-Ons", "browser add-ons", "tab managers", "productivity tools", "best browser tools", "tabs tree", "bookmarks", "bookmark manager", "Sidebery"]
summary: "The Sidebery tab tree and bookmark sidebar tool is not just another Firefox add-on, it's The Add-On."
description: "Browser Extensions and Add-Ons."
---

Sidebery [on GitHub](https://github.com/mbnuqw/sidebery)
From the description page:

**About this extension**
Sidebery provides the list of tabs structured in a tree and bookmarks within the customizable panels. It aims to be fast, beautiful* and configurable. Some of the key features:

- Vertical tabs layout (flat or tree)
You can use a simple flat list of tabs or tree structure. Tree layout allows you to fold sub-tries, creates groups with a custom name to organize open pages.

- Bookmarks panel
Simple catalogs of your bookmarks. You can drag and drop links or tabs to create bookmarks and vice-versa. Basic operations: open in new window / sort / create / edit / delete.

Other bookmarks features:
- Automatically delete an open bookmark from "Other Bookmarks" folder.
- Highlight open bookmarks and activate its tab instead of opening new on clicking.

- Tabs panels
Configurable panels will help you sort your tabs.

- Containers management
You can set "Include" and "Exclude" url-rules, proxy config and UserAgent header for each container.

- Customizable context menu
Sidebery allows you to change the context menu for tabs and bookmarks. You can enable/disable/move different options, create sub-menus/separators.

- Multi-selection with right mouse button
You can select multiple tabs or bookmarks only with the mouse - push right mouse button and then move the cursor to adjust selection range.
(note: This feature is not working with the native context menu.)

Also, you can use ctrl+click/shift+click method or use keyboard shortcuts.

- Customizable styles
Sidebery provides full control of styles for sidebar and group page via variables and custom CSS.
note: css selectors can be changed in the next version

- Snapshots
You can setup auto snapshots that will keep info about open windows and tabs.


Privacy policy

    Sidebery keeps all data that needed to correct work on the user's machine and doesn't send any kind of data to the outside.



Source code

    Source code can be found here: https://github.com/mbnuqw/sidebery



Permissions

    - Read and modify bookmarks - needed for bookmarking the tabs and bookmarks panel functionality.
    - Control browser proxy settings - needed for proxy configuration per container and it can be used only with granted optional permission "Websites Data".
    - Access recently closed tabs - needed for the "Undo close tab" function.
    - Access browser tabs - needed to get info and control tabs.



Optional permissions

    - Websites Data - Required for next features:
        - Context menu option for cleaning cookies
        - Proxy and url rules of containers
        - Page-screenshots for the group page and windows selection panel
        - Changing the User-Agent per container- Hiding tabs - Required for next features:
        - Hiding tabs on inactive panels
        - Hiding folded tabs- Clipboard write - Context menu option for copying urls of tabs and bookmarks
    - Web requests blocking - Changing the User-Agent per container

Note: You can deny these permissions at any time on the settings page.


Usage

    - Open Sidebery
        Shortcut ctrl+E (default) or click on Sidebery button.

    - Create new tab
        ctrl+T - In default container.
        ctrl+space - In active panel.
        ctrl+shift+space - after active tab.
        Also "Middle click on panel", "Left click on panel's icon" and other configurable methods...

    - Switch between containers
        alt+Comma(<) - to previous panel
        alt+Period(>) - to next panel
        Scroll on navigation strip - (optional)
        Horizontal scroll - (optional)

    - Switch between tabs
        ctrl+PgUp/PgDown - firefox's defaults
        alt+Up/Down + alt+space - select tab and activate it
        Scroll - (optional)

    - Expand/Fold parent tab
        Click on favicon of target tab.

    - Expand/Fold tabs or bookmarks while dragging elements
        Move mouse cursor to pointer's triangle.

    - Select all descendants of tab
        Right click on favicon.

    - Close whole tabs branch
        Right click on close button.

    - Switch panel while dragging elements
        Move mouse cursor to panel's icon.
