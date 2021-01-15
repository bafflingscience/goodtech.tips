---
title: "Bash Scripting for Absolutely Hopeless Fools"
linktitle: "Bashes"
date: 2021-01-14T01:17:21-05:00
draft: false
menu:
   docs:
      title: "How to Bash"
      parent: "notes"
enableEmoji: true
showToc: true
params:
   ShowShareButtons: true
tags: ["bash", "terminal", "shell", "linux", "unix", "bash scripting", "chmod", "executable", "sudo", "$PATH", "echo", "how to"]
---

{{< emoji ":thumbsup:" >}}

{{< emoji ":smile:" >}}

{{< emoji ":moneybag:" >}}

{{< emoji ":dollar:" >}}

{{< emoji ":chart_with_upwards_trend:" >}}

A smorgasbord of bash scripting fundamentals for beginners. These are literally my notes, so I would recommend the Table of Contents.

### Sc®ip†n

## Create an Executable Shell Script

1. make a file that will be recognized as a script. Do this by 
   beginning with `#!/bin/bash`

2. make your file executable by changing the file permissions with 
   `chmod +x ytpl.sh`

3. make your file findable by placing it in the $PATH.  
   first, check the $PATH with: 
   `echo $PATH` which will output something like: 
   ```txt
   file/paths/where/computer/will/look/for/executable/files/:/usr/local/bin:
   /usr/bin/:each/path/in/$PATH/is/separated/by/a/colon:/usr/dev/opt
   ```

4. if you created your file and saved it here: 
   `~/Documents/filename.txt`, you will not be able to run 
   the file because the path to your file is not in the 
   variable $PATH and will not be found.

5. find the location of an executable program with `which` 
   and type: 
   ```bash
   which sudo
   ``` 
   The Output will be something like: 
   ```txt
   /usr/bin/sudo
   ```
    but if you use aliases, it is better to use the `type` 
   command: 
   ```bash
   type python3
   ```
   Output:
   ```bash
   python3 is hashed (/usr/local/bin/python3)
   ```

6. Add your file to $PATH by explicitly appending the 
   file's directory to $PATH:
   ```bash
   PATH=$PATH:/path/to/directory/where/file/lives/
   ```

7. You can think of `$PATH` like a street address: 
      ```bash
      /200/Main/St/Jacksonville/NC
      ``` 
      without the address, there 
      is no way for you to connect with your mail man.
      and what is life without the mail man? not much of a life at all. 
![Alt](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.yp8SPRaFDa94mHIPXAkGDQHaFg%26pid%3DApi&f=1 "Mail Man with hands in the air, celebrating")


### Script to display values of variables `$0-$9`

We'll call it `poparam` save it to` /usr/local/bin/bash`

> ``/usr/local/bin/bash/poparam`

```bash
#!/bin/bash

echo "
\$0 = $0
\$1 = $1
\$2 = $2
\$3 = $3
\$4 = $4
\$5 = $5
\$6 = $6
\$7 = $7
\$8 = $8
\$9 = $9
"
```

After making the file executable with `chmod +x poparam`, run the script by typing `poparam` and you will get the following output

```bash
$0 = /usr/local/bin/poparam
$1 =
$2 =
$3 =
$4 =
$5 =
$6 =
$7 =
$8 =
$9 =
```

If you add an argument by typing `poparam a b c d`, you'll get the following

```bash
$0 = /home/me/bin/poparam 
$1 = a
$2 = b
$3 = c
$4 = d 
$5 = 
$6 = 
$7 = 
$8 = 
$9 =
```

**note** *You can actually access more than nine parameters using parameter expansion. To specify a number greater than nine, surround the number in braces, as in* *${10}**,* *${55}**,* *${211}**, and so on.*

### 

### Determining the Number of Arguments

Adding `$#` which will return the number of arguments

```bash
#listing without new lines to save space
echo "
Number of arguments: $#
\$0 = $0 \$1 = $1 \$2 = $2 \$3 = $3 \$4 = $4 \$5 = $5 \$6 = $6 \$7 = $7 \$8 = $8 \$9 = $9 "
```

The result:

```bash
~ poparam a b c d

Number of arguments: 4
$0 = /home/me/bin/posit-param 
$1 = a
$2 = b
$3 = c
$4 = d
$5 =
$6 =
$7 =
$8 =
$9 =
```

###  `shift`  - Getting Access to Many Arguments

The `shift` command causes all parameters to move down one each time it is executed.

We'll make a new script called `poparama` and use the shift command.

```bash
#!/bin/bash

count=1
while [[ $# -gt 0 ]]; do
echo "Argument $count = $1" count=$((count + 1))
shift
done
```

The result:

```bash
~ poparama a b c d
Argument 1 = a
Argument 2 = b
Argument 3 = c
Argument 4 = d
```



```bash
vim args.sh
#!/bin/bash
echo "This is $0"

chmod +x args.sh
`args.sh`
outputs:
This is /home/user/bin/args.sh
```

```bash
#!/bin/bash
echo "This is $0"
echo "This is $1"
echo "This is $2"
---
output is 
This is /home/user/bin/args.sh
This is
---
`args.sh jilm`
output is:
This is /home/user/bin/args.sh
This is jilm
---
`args.sh jilm flip`
output is:
This is /home/user/bin/args.sh
This is jilm
This is flip
---
By adding 
echo "This is $10"
---
`args.sh jilm flip`
output is:
This is /home/user/bin/args.sh
This is jilm
This is jilm0
This is flip
---
By changing (delimiting) "This is $10" to "This is {$10}"
---
`args.sh jilm flip`
output is:
This is /home/user/bin/args.sh
This is jilm
This is 	 (blank because there are not 10 arguments)
This is flip
---


```

``



## 1-Hello Bash Scripting

```bash
# will show you all the shells
cat /etc/shells
/bin/sh
/bin/bash # this is the one we want
/bin/rbash
/bin/dash
/usr/bin/screen
```

That is how every script must begin

```bash
``#!/bin/bash`
file saved as totallyscript.sh
$ ls -la
.
..
totallyscript.sh
# the script is still not executable. 
# So we do this:
chmod +x totallyscript.sh
```

Now to Execute the file, just type `./totallyscript.sh`

### Comparison Operators

 Bash scripts use a unique set of comparison operators:

```bash
        Equal: -eq | = | ==
        Not equal: -ne | !=
        Less than or equal: -le | <=
        Less than: -lt | <
        Greater than or equal: -ge | >=
        Greater than: -gt | >
        Is null: -z
        Is not null: -n
        And: &&
        Or: ||
```

https://blog.100tb.com/scripting-if-comparison-operators-in-bash

```bash
for (( l=0; i<=10; i++ ))
do
if [ $i -eq 3 ] || [ $i -eq 7]
then
continue
fi
echo $i
done
```

### Test File Operators

```bash
-e Does a file exist

-f test if a file

-d test if a directory

-L test if a symbolic link

-N if a file was modified after it was last read

-O if the current user owns the file

-G if the file’s group id matches the current user’s

-s test if a file has a size greater than 0

-r test if the file has read permission

-w test if the file has write permission

-x test if the file has execute permission
```



### Conditional Statements using Comparison Operators

root@user$ /user/Documents/totallyscript.sh

```bash
#! /bin/bash

COUNT=10
if [ $COUNT -eq 10] # can also be written as: | if (( $COUNT = 10 ))
then
echo "it's true"
elif [ $COUNT -gt | -eq 11 ] # or (($COUNT >= 11))
else "FAAAALSE! HAHAHAH!! HAHAHA!! WRONG AGAIN!!! ANOTHER ONE BITES THE DUST!!"
fi
 # where before it was
COUNT=10

```

When using the Ascii Comparison Operators, the parameters of the conditional are formatted differently:
To be continued.....

In the meantime, here is a nice long video:

### Bash Scripting Full Course 3 Hours   

{{< youtube e7BufAVwDiM >}}
