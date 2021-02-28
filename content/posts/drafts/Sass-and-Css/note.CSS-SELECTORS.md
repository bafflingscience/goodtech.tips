---
title: "css selectors ~ the style therein."
draft: false
date: 2021-02-27T12:49:10-05:00
tags: ["css", "css selectors"]
summary: "do you select the selectors or does the selector select you?"
---
*the style [therein](https://www.wordnik.com/words/therein)*
as told by Mozilla. 

I make no claims of original content on this page. 
I typed the page into this note, and am sharing it here for the sake of providing useful information to those who may benefit.

The act of plagiarism [notwithstanding](https://www.wordnik.com/words/notwithstanding), I have no plagiaristic intentions.

# [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#combinators#combinators)

## Basic Selectors

### Universal Selector

Selects all elements. Optionally, it may be restricted to a specific namespace or to all namespaces.

Syntax: `* ns|* *|*`

Example: `*` will match all the elements of the document

### Type Selector

Selects all elements that have the given node name/

Syntax: `element-name`

Example: input will match any `<input>` element.

### Class Selector

Selects all elements that have the given `class` attribute

Syntax: `.classname`

Example: `.index` will match any element that has a class of "index"

### ID Selector

Selects an element based on the value of its `id` attribute. There should only be one element with a given ID in a document.

Syntax: `#idname`

Example: `#toc` will match the element that has the ID "toc".

### Attribute Selector

Selects all elements that have the given attribute. 

Syntax: `[attr] [attr=value] [attr~=value] [attr|=value] [attt^=value] [attr$=value] [attr*=value]`

Example: `[autoplay]` will match all elements that have the `autoplay` attribute set (to any value)

---

## Grouping Selectors

### Selector List

The `,` is a grouping method, it selects all the matching nodes.

Syntax: `A, B`

Example: `div, span` will match both `<span>` and `<div>` elements.

### Combinators

#### **Descendant Combinator**

The ` `(space) combinator selects nodes that are descendants of the first element.

Syntax: `A B`

Example: `div span` will match all `<span>` elements that are inside a `<div>` element.

#### **Child Combinator**

The `>` combinator selects nodes that are direct children of the first element.

Syntax: `A > B`

Example: `ul > li` will match all `<li>` elements that are nested directly inside a `<ul>`

element.

#### **General Sibling Combinator**

The `~` combinator selects siblings. This means that the second element follows the first (though not necessarily immediately), and both share the same parent.

Syntax: `A ~ B`

Example: `p ~ span` will match all `<span>` elements that follow a `<p>`, immediately or not.

#### Adjacent Sibling Combinator

The `+` cocmbinator selects adjacent siblings. This means that the second element directly follows the first, and both share the same parent.

Syntax: `A + B`

Example: `h2 + p` will match all `<p>` elements that directly follow an `<h2>`

#### Column Combinator

The `||` combinator selects nodes which belong to a column.

Syntax: `A || B`

Example: `col || td` will match all `<td>` elements that belong to the scope of `<col>`

### Psuedo

#### Psuedo Classes

The `:` pseudo allow the selection of elements based on state information that is not contained in the document tree.b 

Example: `a:visited` will match all `<a>` elements that have been visited by the user.

#### Psuedo Elements

The `::` psuedo represent entities that are not included in HTML.

Example: `p::first-line` will match the first line of all `<p>` elements



[Next Up](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors/Using_the_:target_pseudo-class_in_selectors)

