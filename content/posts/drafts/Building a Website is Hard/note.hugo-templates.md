---
title: "Hugo Templates"
date:
draft: true
tags: ["hugo", "golang", "go templates", "gohugo html templates", "go template syntax"]
summary: "Hugo templates for the rest of us"
---

[Go Templates](https://gohugo.io/templates/introduction/) are HTML files with the addition of variables and functions. Go Template variables and functions are accessible within `{{}}`.

### Access a Predefined Variable
A predefined variable could be a variable already existing scope (like the `.Title` example in the *Variables* section below) or a custom variable (like the `$address` example in the same section).

```go
{{ .Title }}
{{ $address }}
```
Parameters for functions are separated using spaces. The general syntax is:
```go
{{ FUNCTION ARG1 ARG2 .. }}
```
The following example calls the `add` function with inputs `1` and `2`:
```go
{{ add 1 2 }}
```
### Methods and Fields are Accessed via dot Notation
Accessing the Page Parameter `bar` defined in a piece of content's [font matter]().
```go
{{ .Params.bar }}
```
### Parentheses Can be Used to Group Items Together
```go
{{ if or (isset .Params "alt") (isset .Params "caption") }} Caption {{ end }}
```

## Variables
Each Go Template gets a data object. In Hugo, each template is passed a `Page`. In the below example, `.Title` is one of the elements accessible in that `Page` variable.

With the `Page` being the default scope of a template, the `Title` element in current scope `(. -"the dot")` is accessible simply by the dot-prefix `(.Title)`:
```go
<title>{{ .Title }}</title>
```
Values can also be stored in custom variables and referenced later:
> The custom variables need to be prefixed with `$`.
```go
{{ $address := "123 Street Rd." }}
{{ $address }}
```
Variables can be re-defined using the new `=` operator.

The example below prints "Var is Hugo Home" on the home page, and "Var is Hugo Page" on all other pages:
```go
{{ $var := "Hugo Page" }}
{{ if .IsHome }}
    {{ $var = "Hugo Home" }}
{{ end }}
Var is {{ $var }}
```

## Functions
Go Templates only ship with a few basic functions but also provide a mechanism for applications to extend the original set.

[Hugo template functions]() provide additional functionality specific to building websites. Functions are called by using their name followed by the required parameters separated by spaces. Template functions cannot be added without recompiling Hugo.

**Adding Numbers:**
```html
{{ add 1 2 }}
<!-- prints 3 -->
```
**Comparing Numbers:**
```html
{{ lt 1 2 }}
<!-- prints true (since 1 is less than 2) -->
```
Note that both examples make use of Go Template's [math functions]().

## Includes
When including another template, you will need to pass it the data that it would need to access.

> To pass along the current context, please remember to include a trailing dot.

The templates location will always be starting at the `layouts/` directory within Hugo.

## Partial
The `partial` function is used to include partial templates using the syntax `{{ partial "<PATH>/<PARTIAL>.<EXTENSION>" . }}`.

Example of including a `layouts/partials/header.html` partial:
```html
{{ partial "header.html" . }}
```
## Template
The `template` function is sued for calling [internal templates](). The syntax is:
 `{{ template "_internal/<TEMPLATE>.<EXTENSION>" . }}`.
 > The available internal templates can be found [here](https://github.com/gohugoio/hugo/tree/master/tpl/tplimpl/embedded/templates)

 Example of including the internal `opengraph.html` template:
 ```html
{{ template "_internal/opengraph.html" . }}
 ```
 
 ## Logic
 Go Templates provide basic iteration and conditional logic.

### Iteration
The Go Templates make heavy use of `range` to iterate over a map, array, or slice. The following are different examples of how to use `range`.

**Using Context ( . ):**
```html
{{ range $array }}
    {{ . }} <!-- The . represents an element in an $array -->
{{ end }}
```
**Declaring a variable name for an array element's value:**
```html
{{ range $elem_val := $array }}
    {{ $elem_val }}
{{ end }}
```
**Declaring variable names for an array element's index and value:**
For an array or slice, the first declared variable will map to each element's index.
```html
{{ range $elem_index, $elem_val := $array }}
    {{ $elem_index }} -- {{ $elem_val }}
{{ end }}
```
**Declaring variable names for a map element's key and value**
For a map, the first declared variable will map to each map element's key.
```html
{{ range $elem_key, $elem_val := $map }}
    {{ $elem_key }} -- {{ $elem_val }}
{{ end }}
```
**Conditional on empty map, array, or slice**
If the map, array, or slice passed into the range is zero-length then the else statement is evaluated.
```html
{{ range $array }}
    {{ . }}
{{else}}
    <!-- This is only evaluated if $array is empty -->
{{ end }}
```
### Conditionals
`if`, `else`, `with`, `or`, and `and` provide the framework for handling conditional logic in Go Templates. Like `range`, each statement is closed with `{{ end }}`.

Go Templates treat the following values as false:
- `false` (boolean)
- 0 (integer)
- any zero-length array, slice, map, or string

**`with`**
It is common to write "if something exists, do this" kind of statements using `with`.
> `with` rebinds the context `.` within its scope (like in `range`).
It skips the block if the variable is absent, or if it evaluates to "false" as explained above:
```html
{{ with .Params.title }}
    <h4>{{ . }}</h4>
{{ end }}
```
**`with .. else`**
Below snippet uses the "description" front-matter parameter's value if set, else uses the default `.Summary` [Page variable]():
```html
{{ with .Param "description" }}
    {{ . }}
{{ else }}
    {{ .Summary }}
{{ end }}
```
See the [`.Param` function](https://gohugo.io/functions/param/)

**`if`**
An alternative (and more verbose) way of writing `with` is using `if`. Here, the `.` does not get rebinded.
```html
{{ if (isset .Params "description") }}
    {{ index .Params "description" }}
{{ else }}
    {{ .Summary }}
{{ end }}
```
**`if .. else if .. else`**
Unlike `with`, `if` can contain `else if` clauses too.
```html
{{ if (isset .Params "description") }}
    {{ index .Params "description" }}
{{ else if (isset .Params "summary") }}
    {{ index .Params "summary" }}
{{ else }}
    {{ .Summary }}
{{ end }}
```
**`and` & `or`**
```html
{{ if (and (or (isset .Params "title") (isset .Params "caption")) (isset .Params "attr")) }}
```

## Pipes
With Pipes, you have the ability to tack actions one after another. 
Each pipeline's output becomes the input of the following pipe.
Essential for chaining together function calls.
Only work with a single value and that value becomes the last parameter of the next pipeline.

### `shuffle`
The following two examples are functionally identical:
```html
{{ shuffle (seq 1 5) }}
```
```html
{{ (seq 1 5) | shuffle }}
```
### `index`
The following accesses the page parameter called "disqus_url" and escapes the HTML. The examplealso uses [`index` function](), which is build into Go Templates:
```html
{{ index .Params "disqus_url" | html }}
```
### `or` with `isset`
```html
{{ if or (or (isset .Params "title") (isset .Params "caption")) (isset .Params "attr") }}
Here is Things
{{ end }}
```
## Context (aka "the dot")
The most easily overlooked concept to understand about Go Templates is that `{{ . }}` always refers to the current context.
- In the top level of your template, this will be the data set made available to it.
- Inside of an iteration, however, it will have the value of the current item in the loop; i.e,, `{{ . }}` will no longer refer to the data available to the entire page.

If you need to access page-level data (e.g.. page params set in font matter) from within the loop, you will likely want to do one of the following:

### 1. Define a Variable Independent of Context
```html
{{ $title := .Site.Title }}
<ul>
{{ range .Params.tags }}
    <li>
        <a href="/tags/{{ . | urlize }}">{{ . }}</a>
        - {{ $title }}
    </li>
{{ end }}
</ul>
```
> Notice how we have entered the loop (i.e. range), the value of `{{ . }}` has changed. We have defined a variable outside of the loop (`{{$title}}`) that we've assigned a value so that we have access to the value from within the loop as well.

### 2. Use `$.` to Access the Global Context
`$` has special significance in your templates. `$` is set to the starting value of `.` ("the dot") by default. This is a [documented feature of Go text/template](). This means you have access to the global context from anywhere. Here is an equivalent example of the preceding code block but now using `$` to grab `.Site.Title` from the global context:

```html
<ul>
{{ range .Params.tags }}
    <li>
        <a href="/tags/{{ . | urlize }}">{{ . }}</a>
    </li>
{{ end }}
</ul>
```

## Whitespace `{{- White mutha fuckin' space -}}`
```html
<div>
    {{ .Title }}
</div>
```
Which will output:
```html
<div>
    Goodbye Cruel World!
</div>
```
Leveraging the `-` in the following example will remove the extra white space surrounding the `.Title` variable and remove the newline:

```html
<div>
    {{- .Title -}}
</div>
```
Which outputs:
```html
<div>Goodbye Cruel World!</div>
```
Go considers the following characters whitespace:
- space
- horizontal tab
- carriage return
- newline



