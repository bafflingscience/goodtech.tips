---
title: "C# Notes for Complete Morons"
date: 2021-01-12T20:22:59-05:00
draft: true
showToc: true
menu:
   docs:
      title: "How to C#"
      parent: "notes"
categories: ["Technology", "Web Development", "How To"]
tags: ["C#", "programming", "web development", ".NET", "Windows", "how-to", "coding", "learning", "self-taught"]
---

# C# Notes

These notes were copied from Microsoft documentation while performing the exercises. 

## Strings and Variables
```c#
Console.WriteLine("Hello World!");

string aFriend = "Bill";
Console.WriteLine(aFriend);

aFriend = "Maira";
Console.WriteLine(aFriend);

Console.WriteLine("Hello " + aFriend);

Console.WriteLine($"Hello {aFriend}");

string firstFriend = "Maira";
string secondFriend = "Sage";
Console.WriteLine($"My friends are {firstFriend} and {secondFriend}");

Console.WriteLine($"The name {firstFriend} has {firstFriend.Length} letters.");
Console.WriteLine($"The name {secondFriend} has {secondFriend.Length} letters.");

string greeting = "    Hello World!  ";
Console.WriteLine($"[{greeting}]");

string trimmedGreeting = greeting.TrimStart();
Console.WriteLine($"[{trimmedGreeting}]");

trimmedGreeting = greeting.TrimEnd();
Console.WriteLine($"[{trimmedGreeting}]");

trimmedGreeting = greeting.Trim();
Console.WriteLine($"[{trimmedGreeting}]");


string sayHello = "Hello World";
Console.WriteLine(sayHello);
sayHello = sayHello.Replace("Hello", "Greetings");
Console.WriteLine(sayHello);

Console.WriteLine(sayHello.ToUpper());
Console.WriteLine(sayHello.ToLower());


string songLyrics = "hello I love you goodbye";
Console.WriteLine(songLyrics.StartsWith("hello")); //true
Console.WriteLine(songLyrics.EndsWith("watermelon")); //false

```

## Integer Math

```c#
// INTEGER MATH
int a = 18;
int b = 6;
int c = a + b;

// int represents Integer, a positive or negative whole number
int f = a - b;
int d = a * b;
int e = a / b;

Console.WriteLine(c);
Console.WriteLine(d);
Console.WriteLine(e);
Console.WriteLine(f);

// Order of Operations
int a = 5;
int b = 4;
int c = 2;
int d = a + b * c;
Console.WriteLine(d); //13

int e = (a + b) * c;
Console.WriteLine(e); //18 

int f = (a + b) - 6 * c + (12 * 4) / 3 + 12;
Console.WriteLine(f); //25

int a = 7;
int b = 4;
int c = 3;
int d = (a + b) / c;
Console.WriteLine(d); //3
```

## Integer Precision and Limits

That last sample showed you that integer division truncates the result. You can get the remainder by using the remainder operator, the % character:
```c#
int a = 7;
int b = 4;
int c = 3;
int d = (a + b) / c;
int e = (a + b) % c;
Console.WriteLine($"quotient: {d}"); // quotient: 3
Console.WriteLine($"remainder: {e}"); // remainder: 2
```
The C# integer type differs from mathematical integers in one other way: the `int` type has minimum and maximum limits.
```c#
int max = int.MaxValue;
int min = int.MinValue;
Console.WriteLine($"The range of integers is {min} to {max}");
// The range of integers is -2147483648 to 2147483647
```
If a calculation produces a value that exceeds those limits, you have an **underflow** or **overflow** condition. The answer appears to wrap from one limit to the other. Add these two lines to the interactive window to see an example.
```c#
int what = max + 3;
Console.WriteLine($"An examle of overflow: {what}");
// An examle of overflow: -2147483647
```
Notice that the answer is very close to the minimum (negative) integer. It's the same as `min + 2`. The addition operation **overflowed** the allowed values for integers. The answer is a very large negative number because an overflow "wraps around" from the largest possible integer value to the smallest.

There are other numeric types with different limits and precision that you would use when the `int` type doesn't meet your needs. Let's explore those types of numbers next.

---

## The `double` type

The `double` numeric type represents a double-precision floating point number. Those terms may be new to you.

A floating point number is useful to represent non-integral numbers that may be very large or small in magnitude. 

Double-precision is a relative term that describes the numbers of binary digits used to store the value. 

Double precision number have twice the number of binary digits as single-precision. 

On modern computers, it is more common to use double precision than single precision numbers. 

Single precision numbers are declared using the `float` keyword. 

Let's explore. Try the following code in the interactive window and see the result:
```c#
double a = 5;
double b = 4;
double c = 2;
double d = (a + b) / c;
Console.WriteLine(d); // 4.5
```
Notice that the answer includes the decimal portion of the quotient. Try a slightly more complicated expression with doubles:
```c#
double a = 19;
double b = 23;
double c = 8;
double d = (a + b) / c;
Console.WriteLine(d); // 5.25
```
The range of a double value is much greater than integer values. Try the following code in the interactive window:
```c#
double max = double.MaxValue;
double min = double.MinValue;
Console.WriteLine($"The range of double is {min} to {max}");
// he range of double is -1.79769313486232E+308 to 1.79769313486232E+308
```
These values are printed out in scientific notation. The number to the left of the E is the significand. The number to the right is the exponent, as a power of 10.

Just like decimal numbers in math, doubles in C# can have rounding errors. Try this code:
```c#
double third = 1.0 / 3.0;
Console.WriteLine(third);
// 0.333333333333333
```

You know that `0.3` is `3/10` and not exactly the same as `1/3`. Similarly, `0.33` is `33/100`. That's closer to `1/3`, but still not exact.

**Challenge**

Try other calculations with large numbers, small numbers, multiplication, and division using the `double` type. Try more complicated calculations.

---

### Decimal Types

You've seen the basic numeric types in C#: integers and doubles. There's one other type to learn: the decimal type. The decimal type has a smaller range but greater precision than double. Let's take a look:
```c#
decimal min = decimal.MinValue;
decimal max = decimal.MaxValue;
Console.WriteLine($"The range of the decimal type is {min} to {max}");
// The range of the decimal type is -79228162514264337593543950335 to 79228162514264337593543950335
```
Notice that the range is smaller than the `double` type. You can see the greater precision with the decimal type by trying the following code:
```c#
double a = 1.0;
double b = 3.0;
Console.WriteLine(a / b);

decimal c = 1.0M;
decimal d = 3.0M;
Console.WriteLine(c / d);

// 0.333333333333333
// 0.3333333333333333333333333333
```
The `M` suffix on the numbers is how you indicate that a constant should use the `decimal` type.

Notice that the math using the decimal type has more digits to the right of the decimal point.

The `M` indicates the `decimal` type. Otherwise, the compiler assumes the `double` type.

**Challenge**

Now that you've seen the different numeric types, write code that calculates the area of a circle whose radius is 2.50 centimeters. 
Remember that the area of a circle is the radius squared multiplied by PI. 
One hint: .NET contains a constant for PI, `Math.PI` that you can use for that value. `Math.PI`, like all constants declared in the `System.Math` namespace, is a `double` value. For that reason, you should use `double` instead of decimal values for this challenge.

You should get an answer between 19 and 20.

```c#
double r = 2.5;
double area = (r * r) * Math.PI;
Console.WriteLine(area);
// 19.6349540849362
```

## Learn Conditional Logic with Branch and Loop Statements
### The `if` Statement

```c#
int a = 5;
int b = 6;
if (a + b > 10)
    Console.WriteLine("The answer is greater than 10.");
// The answer is greater than 10.
```
Change `int b = 3` and output is `No output`

### `if` {} `else` {}  
```c#
int a = 5;
int b = 3;
if (a + b > 10) 
{
    Console.WriteLine("The answer is greater than 10.");
}
else
{
    Console.WriteLine("The answer is not greater than 10");
}
```

More complicated conditions with `&&`:
```c#
int a = 5;
int b = 3;
int c = 4;
if ((a + b + c > 10 ) && (a == b))
{
    Console.WriteLine("Answer is > 10");
    Console.WriteLine("And first num is eq to second");
}
{
    Console.WriteLine("Answer is < 10");
    Console.WriteLine("And first num is not eq to second");
}
// Answer is < 10
// And first num is not eq to second
```
with `||`
```c#
int a = 5;
int b = 3;
int c = 4;
if ((a + b + c > 10) || (a == b))
{
    Console.WriteLine("The answer is greater than 10");
    Console.WriteLine("Or the first number is equal to the second");
}
else
{
    Console.WriteLine("The answer is not greater than 10");
    Console.WriteLine("And the first number is not equal to the second");
}
// The answer is greater than 10
// Or the first number is equal to the second
```
### Use loops to repeat operations
```c#
int counter = 0;
while (counter < 10)
{
    Console.WriteLine($"Hello. Counter is {counter}");
    counter;
}
/*
Hello World! The counter is 0
Hello World! The counter is 1
Hello World! The counter is 2
Hello World! The counter is 3
Hello World! The counter is 4
Hello World! The counter is 5
Hello World! The counter is 6
Hello World! The counter is 7
Hello World! The counter is 8
Hello World! The counter is 9
*/

```
### `while` loop vs `do` loop
The while loop tests the condition before executing the code following the while. The do ... while loop executes the code first, and then checks the condition. It looks like this:
```c#
int counter = 0;
do
{
  Console.WriteLine($"Hello World! The counter is {counter}");
  counter++;
} while (counter < 10);
/*
Hello World! The counter is 0
Hello World! The counter is 1
Hello World! The counter is 2
Hello World! The counter is 3
Hello World! The counter is 4
Hello World! The counter is 5
Hello World! The counter is 6
Hello World! The counter is 7
Hello World! The counter is 8
Hello World! The counter is 9
*/
```

### `for` loop

```c#
for(int counter = 0; counter < 10; counter++)
{
    Console.WriteLine($"Hello. Counter is {counter}");
}
```
This does the same work as the while loop and the do loop you've already used. 
The for statement has three parts that control how it works.

The first part is the for ***initializer***: 
`int counter = 0;` declares that counter is the loop variable, and sets its initial value to 0.

The middle part is the for ***condition***: 
`counter < 10` declares that this for loop continues to execute as long as the value of counter is less than 10.

The final part is the for ***iterator***: 
`counter++` specifies how to modify the loop variable after executing the block following the for statement. Here, it specifies that counter should be incremented by 1 each time the block executes.

Experiment with these yourself. Try each of the following:

    Change the initializer to start at a different value.
    Change the condition to stop at a different value.

When you're done, let's move on to write some code yourself to use what you've learned.

There's one other looping statement that isn't covered in this tutorial: the `foreach` statement. The `foreach` statement repeats its statement for every item in a sequence of items. It's most often used with collections, so it is covered in the next tutorial.

### Nested Loops
 while, do, or for loop can be nested inside another loop to create a matrix using the combination of each item in the outer loop with each item in the inner loop. Let's do that to build a set of alphanumeric pairs to represent rows and columns.

One for loop can generate the rows:
```c#
for (int row = 1; row < 11; row++
{
    Console.WriteLine($"The row is {row}");
}
```
Another loop can generate the columns:
```c#
for (char column = 'a'; column < 'k'; column++)
{
    Console.WriteLine($"The column is {column}");
}
```
You can nest one loop inside the other to form pairs:
```c#
for (int row = 1; row < 11; row++)
{
  for (char column = 'a'; column < 'k'; column++)
  {
    Console.WriteLine($"The cell is ({row}, {column})");
  }
}
/*
The cell is (1, a)
The cell is (1, b)
The cell is (1, c)
The cell is (1, d)
The cell is (1, e)
The cell is (1, f)
The cell is (1, g)
The cell is (1, h)
The cell is (1, i)
The cell is (1, j)
The cell is (2, a)
The cell is (2, b)
The cell is (2, c)
The cell is (2, d)
The cell is (2, e)
The cell is (2, f)
The cell is (2, g)
The cell is (2, h)
The cell is (2, i)
The cell is (2, j)
The cell is (3, a)
The cell is (3, b)
The cell is (3, c)
The cell is (3, d)
The cell is (3, e)
The cell is (3, f)
The cell is (3, g)
The cell is (3, h)
The cell is (3, i)
The cell is (3, j)
The cell is (4, a)
The cell is (4, b)
The cell is (4, c)
The cell is (4, d)
The cell is (4, e)
The cell is (4, f)
The cell is (4, g)
The cell is (4, h)
The cell is (4, i)
The cell is (4, j)
The cell is (5, a)
The cell is (5, b)
The cell is (5, c)
The cell is (5, d)
The cell is (5, e)
The cell is (5, f)
The cell is (5, g)
The cell is (5, h)
The cell is (5, i)
The cell is (5, j)
The cell is (6, a)
The cell is (6, b)
The cell is (6, c)
The cell is (6, d)
The cell is (6, e)
The cell is (6, f)
The cell is (6, g)
The cell is (6, h)
The cell is (6, i)
The cell is (6, j)
The cell is (7, a)
The cell is (7, b)
The cell is (7, c)
The cell is (7, d)
The cell is (7, e)
The cell is (7, f)
The cell is (7, g)
The cell is (7, h)
The cell is (7, i)
The cell is (7, j)
The cell is (8, a)
The cell is (8, b)
The cell is (8, c)
The cell is (8, d)
The cell is (8, e)
The cell is (8, f)
The cell is (8, g)
The cell is (8, h)
The cell is (8, i)
The cell is (8, j)
The cell is (9, a)
The cell is (9, b)
The cell is (9, c)
The cell is (9, d)
The cell is (9, e)
The cell is (9, f)
The cell is (9, g)
The cell is (9, h)
The cell is (9, i)
The cell is (9, j)
The cell is (10, a)
The cell is (10, b)
The cell is (10, c)
The cell is (10, d)
The cell is (10, e)
The cell is (10, f)
The cell is (10, g)
The cell is (10, h)
The cell is (10, i)
The cell is (10, j)
*/
```

### Combine Branches & Loops
Now that you've seen the if statement and the looping constructs in the C# language, see if you can write C# code to find the sum of all integers 1 through 20 that are divisible by 3. Here are a few hints:

The `%` operator gives you the remainder of a division operation.
The `if` statement gives you the condition to see if a number should be part of the sum.
The `for` loop can help you repeat a series of steps for all the numbers 1 through 20.

Try it yourself. Then check how you did. As a hint, you should get 63 for an answer.

```c#
int sum = 0;
for (int number = 1; number < 21; number++)
{
    if (number % 3 == 0)
    {
        sum = sum + number;
    }
}
Console.WriteLine($"The sum is {sum}");
// The sum is 63
```
## Learn to manage data collections using the generic list type
### Create Lists
```c#
var names = new List<string> {"Dipshit", "Ana", "Felipe"};
foreach (var name in names)
{
    Console.WriteList($"Hello {name.ToUpper()}");
}
// Hello DIPSHIT!
// Hello ANA!
// Hello FELIPE!
```
The code to display names makes use of the string interpolation feature. When you precede a string with the $ character, you can embed C# code in the string declaration. The actual string replaces that C# code with the value it generates. In this example, it replaces the `{name.ToUpper()}` with each name, converted to capital letters, because you called the `String.ToUpper` method.


### Modify list contents

The collection you created uses the `List<T>` type. 
This type stores sequences of elements. You specify the type of the elements between the angle brackets.

One important aspect of this `List<T>` type is that it can grow or shrink, enabling you to add or remove elements. You can see the results by modifying the contents after you've displayed its contents.

The List<T> enables you to reference individual items by index as well. You access items using the [ and ] tokens. Add the following code below what you've already written and try it:

You're not allowed to access past the end of the list. You can check how long the list is using the Count property.

In C#, indices start at 0, so the largest valid index is one less than the number of items in the list.

```c#
var names = new List<string> {"Dipshit", "Ana", "Felipe"};
foreach (var name in names)
{
    Console.WriteLine($"Hello {name.ToUpper()}");
}

Console.WriteLine();
names.Add("Maria");
names.Add("Bill");
names.Remove("Ana");
foreach (var name in names)
{
    Console.WriteLine($"Hello {name.ToUpper()}!");
}

Console.WriteLine($"My name is {names[0]}.");
Console.WriteLine($"I've added {names[2]} and {names[3]} to the list.");
/*
Hello DIPSHIT
Hello ANA
Hello FELIPE

Hello DIPSHIT!
Hello FELIPE!
Hello MARIA!
Hello BILL!

My name is Dipshit.
I've added Maria and Bill to the list.
The list has 4 people in it.
*/
```

### Search and Sort Lists

Our samples use relatively small lists, but your applications may often create lists with many more elements, sometimes numbering in the thousands. To find elements in these larger collections, you need to search the list for different items. The IndexOf method searches for an item and returns the index of the item. If the item isn't in the list, IndexOf returns -1. Try it to see how it works.

```c#
var names = new List<string> {"Dipshit", "Ana", "Felipe"};
foreach (var name in names)
{
    Console.WriteLine($"Hello {name.ToUpper()}");
}

Console.WriteLine();
names.Add("Maria");
names.Add("Bill");
names.Remove("Ana");
foreach (var name in names)
{
    Console.WriteLine($"Hello {name.ToUpper()}!");
}

Console.WriteLine($"My name is {names[0]}.");
Console.WriteLine($"I've added {names[2]} and {names[3]} to the list.");

Console.WriteLine($"The list has {names.Count} people in it.");

var index = names.IndexOf("Felipe");
if (index != -1)
  Console.WriteLine($"The name {names[index]} is at index {index}");

var notFound = names.IndexOf("Not Found");
Console.WriteLine($"When an item is not found, IndexOf returns {notFound}");

names.Sort();
foreach (var name in names)
{
    Console.WriteLine($"Hello {name.ToUpper()}!");
}
/*
Hello DIPSHIT
Hello ANA
Hello FELIPE

Hello DIPSHIT!
Hello FELIPE!
Hello MARIA!
Hello BILL!
My name is Dipshit.
I've added Maria and Bill to the list.
The list has 4 people in it.
The name Felipe is at index 1
When an item is not found, IndexOf returns -1
Hello BILL!
Hello DIPSHIT!
Hello FELIPE!
Hello MARIA!
*/
```
[Search and Sort Lists](https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/intro-to-csharp/list-collection?tutorial-step=3&source=docs)