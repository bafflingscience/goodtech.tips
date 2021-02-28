# Sass

## Statements

### Universal Statements

These statements can be used anywhere in a Sass stylesheet

- Variable declarations, `$var: avariable`
- Flow control at-rules, `@if and @each`
- The `@error`, `@warn`, `@debug` rules.

### CSS Statements

These statements produce CSS. They can be used anywhere except within a `@function`

- Style rules, like `h1`
- CSS at-rules, `@media`, and `@font-facec`
- Mixins using `@include`
- The `@at-root` rule.

### Top-Level Statements

These statements can only be used at the top level of a stylesheet or nested within a CSS statement at the top level:

- Module loads, using `@use`
- Imports, `@import`
- Mixin definitions, using `@mixin`
- Function definitions using `@function`

### Other Statements

- Property declarations like `width: 100px` may only be used within style rules and some CSS at-rules
- The `@extend` rule may only be used within style rules

## Expressions

**An expression is anything that goes on the right-hand side of a property or variable declaration**. Each expression produces a value. Any valid CSS property value is also a Sass expression, but Sass expressions are much more powerful than plain CSS values. They're passed as arguments to mixins and functions, used for control flow with the `@if` rule, and manipulated using arithmetic. We call Sass's expression syntax SassScript.

#### Literals

The simples expressions represent static values:

- Numbers
- Strings
- Colors
- Booleans
- Null
- Lists: may be separated by spaces or commas, which may be enclosed in square brackets, or not. like `1.5em 1em 0 2em, Helvetica, Arial, san-serif,` or `[coll-start]`.
- Maps: associate key value pairs, like `("background": red, "foreground": pink)`.

#### Operations

Sass defines syntax for a number of operations

- `==and!=` are used to check if two values are the same.
- `+,=,*,%` do math things
- `<,<=,?,>=` compare things
- `and, or, not` Sass considers every value 'true' except for 'false' and 'null'.
- `+, -, /` concatenate strings
- `( and )` can explicitly control the precedence order of operations.

#### Other Expressions

- Variables, `$var`
- Function calls, `nth($list, 1)` or `var(--main-bg-color)`, which may call Sass core library functions or user-defined functions, or which may be compiled directly to CSS
- Special functions, `calc(1px + 100%)` or `url(https://myapp.com/assets/logo.png)`, that have their own unique parsing rules.
- The parent selector, `&`
- The value `!important`, which is parsed as an unquoted string.



### Comments

`/* */` - Multiple line comments (Loud comments), are compiled to CSS

`//` - Single line comment (Silent comments), are not compiled to CSS 

By default, multi-line comments are stripped from the CSS in **compressed mode**. If a comment begins with `/!`, though, it will always be included in the CSS output.

## Documentation Comments

When writing style libraries using Sass, you can use comments to document the [mixins](https://sass-lang.com/documentation/at-rules/mixin), [functions](https://sass-lang.com/documentation/at-rules/function), [variables](https://sass-lang.com/documentation/variables), and [placeholder selectors](https://sass-lang.com/documentation/style-rules/placeholder-selectors) that your library provides, as well as the library itself. These are comments are read by the [SassDoc](http://sassdoc.com/) tool, which uses them to generate beautiful documentation. Check out [the Susy grid engine](http://oddbird.net/susy/docs/index.html)’s documentation to see it in action!

Documentation comments are silent comments, written with three slashes (`///`) directly above the thing you’re documenting. SassDoc parses text in the comments as [Markdown](https://www.markdownguide.org/getting-started), and supports many useful [annotations](http://sassdoc.com/annotations/) to describe it in detail.

- [SCSS](https://sass-lang.com/documentation/syntax/comments#example-3-scss)
- [Sass](https://sass-lang.com/documentation/syntax/comments#example-3-sass)

```scss
/// Computes an exponent.
///
/// @param {number} $base
///   The number to multiply by itself.
/// @param {integer (unitless)} $exponent
///   The number of `$base`s to multiply together.
/// @return {number} `$base` to the power of `$exponent`.
@function pow($base, $exponent)
  $result: 1
  @for $_ from 1 through $exponent
    $result: $result * $base

  @return $result
```

## Variables

Sass variables are assigned with `$`.

Variables make it possible to reduce repetition, do complex math, configure libraries, and other stuff.

A variable declaration is written `$variable: expression`. Variables can be declared anywhere. To use a variable, just include it in a value.

```scss
$base-color: #c58y
$border-dark: rgba($base-color, 0.88)

.alert
    border: 1px solid $border-dark
```

## CSS Variables vs Sass Variables

- Sass variables are all compiled by Sass. CSS variables are included in the CSS output.
- CSS variables can have different values for different elements, but Sass variables only have one value at a time.
- Sass variables are imperative, which means if you use a variable and then change its value, the earlier use will stay the same. 
- CSS variables are declarative, which means if you change the value, it'll affect both earlier uses and later uses.

```scss
$variable: value 1
.rule-1
    value: $variable

$variable: value 2
.rule-2
    value: $variable
```

## @use

[Sass Module System Update | Down with `@import`](https://www.youtube.com/watch?v=tLqqi5gyxQg)

[sassy](https://sass-lang.com/documentation/at-rules/use#configuration)

Fuck `@import`, globalist illuminati scum.

@use only executes a stylesheet and includes its stylesheet once.

**Partials**

If stylesheet begins with `_` or `-`, then `@use` will evaluate the stylesheet as private

`@use` loads `mixins`, `functions`, and `variables` from other Sass stylesheets, and combines CSS from multiple stylesheets together. Stylesheets loaded by `@use` are called "modules". Sass also provides `build-in modules` full of useful functions.

The simplest `@use` rule is written `@use "url"`, which loads the module at the given URL. Any styles loaded this way will be included exactly once in the compiled CSS output, no matter how many times those styles are loaded.

!! A stylesheet's `@use` rules must come before any rules other than `@forward`, including `style rules`. However, you can declare variables before `@use` rules to use when `configuring modules`.

```scss
// foundation/_code.sass
code
	padding: .25em
	line-height: 0
```

```scss
// foundation/_lists.sass
ul, ol
	text-alighn: left

	& &
		padding:
			bottom: 0
			left: 0
```

```scss
// style.sass
@use 'foundation/code'
@use 'foundation/lists'
```

## Loading Members

You can access variables, functions, and mixins from another module by writing `<namespace>.<variable>`, `<namespace>.<function>()`, or `@include <namespace>.<mixin>()`. By default, the namespace is just the last component of the module's URL.

```scss
@use "colors";

.element {
    background-color: colors.$body-bg;
}
```

Members (variables, functions, and mixins) loaded with `@use` are only visible in the stylesheet that loads them. Other stylesheets will need to write their own `@use` rules if they also want to access them. This helps make it easy to figure out exactly where each member is coming from. If you want to load members from many files at once, you can use the `@forward` rule to forward them all from one shared file.

Because `@use` adds namespaces to member names, it’s safe to choose very simple names like `$radius` or `$width` when writing a stylesheet. This is different from the old [`@import` rule](https://sass-lang.com/documentation/at-rules/import), which encouraged that users write long names like `$mat-corner-radius` to avoid conflicts with other libraries, and it helps keep your stylesheets clear and easy to read!

```scss
// src/_corners.sass
$radius: 3px
    
@mixin rounded
	border-radius: $radius 
```

## @mixin

Vendor prefixes like -webkit-transform, -ms-transform are a good use of `@mixin`s.

```scss
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}
.box { @include transform(rotate(30deg)); }
```

To create a `@mixin` you give it a name. The one above is named 'transform'. Also shown is the use of the variable `$property`, inside the parentheses. So we can pass in any transform we like. After you create your mixin, you can then use it as a css declaration starting with `@include` followed by the name of the mixin.

## Extend / Inheritance

`@extend` lets you share a set of CSS properties from one selector to another. It helps keep your Sass DRY. 

A `'Placeholder'` class is a special type of class that only prints when it is extended by `@extend`, and can help keep your compiled CSS neat and clean.

```scss
/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

What the above code does is tells `.message`, `.success`, `.error`, and `.warning` to behave just like `%message-shared`. That means anywhere that `%message-shared` shows up, `.message`, `.success`, `.error`, & `.warning` will too. The magic happens in the generated CSS, where each of these classes will get the same CSS properties as `%message-shared`. This helps you avoid having to write multiple class names on HTML elements.

You can extend most simple CSS selectors in addition to placeholder classes in Sass, but using placeholders is the easiest way to make sure you aren't extending a class that's nested elsewhere in your styles, which can result in unintended selectors in your CSS.

Note that CSS `%equal-heights` isn't generated, because `%equal-heights` is never extended.

## Operators

Doing math in your CSS is very helpful. Sass has a handful of standard math operators like `+`, `-`, `*`, `/`, and `%`. In our example we're going to do some simple math to calculate widths for an `aside` & `article`.

```scss
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```

We've created a very simple fluid grid, based on 960px. Operations in Sass let us do something like take pixel values and convert them into percentages without much hassle.

## Style Rules

### Nesting

Sass will automatically combine the outer rule's selector with the inner rule's

Don't nest too deep though, it takes more bandwidth to serve your CSS and it takes more work for the browser to render it. 

```scss
nav
  ul
    margin: 0
	padding: 0
	list-style: none

li
  display: inline-block

a
  display: block
  padding: 6px 12px
  text-decoration: none
```

#### Selector Combinators

You can nest selectors that use [combinators ](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#combinators#combinators) as well. You can put the combinator at the end of the outer selector, at the beginning of the inner selector, or even all on its own in between the two.

```scss
ul >
  li
    list-style-type: none

h2
  + p
	border-top: 1px solid gray

p
 ~
  span
	opacity: 0.8
```

### Interpolation

A property's name can include interpolation, which makes it possible to dynamically generate properties as needed. you can even interpolate the entire property name!

```scss
@mixin prefix($property, $value, $prefixes)
    @each $prefix in $prefixes
    -#{$prefix}-#{property}: $value
.gray
  @include prefix(filter, grayscale(50%), moz webkit)
```

### Nesting

Many CSS properties start with the same prefix that acts as a kind of namespace. For example, `font-family, font-size`, and `font-weight` all start with `font-`. Sass makes this easier and less redundant by allowing property declarations to be nested. The outer property names are added to the inner, separated by a hyphen.

```scss
.enlarge
  font-size: 14px
  transition:
    property: font-size
    duration: 4s
	delay: 2s
	
  &:hover
	font-size: 36px
```



### Property Declarations

### Parent Selector

### Placeholder Selectors

