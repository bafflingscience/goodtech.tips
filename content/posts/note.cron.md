---
Title: Time for Cron 
date: 2022-04-27
weight: 1
draft: true
showTOC: true
categories: ["bash"]
tags: ["bash", "cron", "cmd", "cli", "automation", "time", "sysadmin", "Linux"]
summary: How to edit crontabs to create automated functions on Linux.
---

# It's time for crontabs

edit the crontab
`env EDITOR=nvim crontab-e`

**Format**

`MIN HOUR DOM MON DOW CMD`

which stands for: `Minute, Hour, Day of Month, Month, Day of Week, Command`

**Syntax**
`15 13 * 3 3 USERNAME /path/to/command arg1 arg2`
OR
`A B C D E USERNAME /root/backup.sh`

Explanation of above cron syntax:
  - A: Minutes range: 0 – 59
  - B: Hours range: 0 – 23
  - C: Days range: 0 – 31
  - D: Months range: 0 – 12
  - E: Days of the week range: 0 – 7. Starting from Monday, 0 or 7 represents Sunday
  - USERNAME: replace this with your username
  - /path/to/command – The name of the script or command you want to schedule

Cron uses 3 operator symbols which allow you to specify multiple values in a field
  - Asterisk `*` specifies all possible values for a field
  - The comma `,` specifies a list of values
  - Dash `-` specifies a range of values
  - Separator `/` specifies a step value

current crontab schedule
  - 0000
  - 0700
  - 1400
  - 2100

Current crontab job
`47 */1 * * * /usr/local/bin/yttCulture;/usr/local/bin/yttComedy;/usr/local/bin/yttUFO;/usr/local/bin/yttDaily 2> /tmp/cron_test.txt`

Updated to this. 
`17 */1 * * * /usr/local/bin/yttCulture;
/usr/local/bin/yttComedy;
/usr/local/bin/yttUFO;
/usr/local/bin/yttDaily 2> /tmp/cron.errors.txt;
cd /Volumes/fourtb/Video/channels;
find . -type -f \( -name '*.jpg' -or -name '*.webp' \) -delete \
2> /Volumes/fourtb/Video/channels/find_fails.txt`

cron daemon that runs scripts on a set schedule
`crontab` maintain crontab files for individual users

`/usr/lib/cron` path to cron `jobs`, `spool`, `tabs`, `tmp` (Mac)

[11 Cron Scheduling Task Examples in Linux](https://www.tecmint.com/11-cron-scheduling-task-examples-in-linux/)
[How to Create and Manage Cron Jobs on Linux](https://www.tecmint.com/create-and-manage-cron-jobs-on-linux/)


**Cron Job Examples**
The first step to running cron commands is installing your crontab with the command
`$ crontab -e`p

Run `/root/backup.sh` at 3am every day
`0 3 * * * /root/backup.sh`

Run `script.sh` at 4:30 pm on the second of every month
`30 16 2 * * /path/to/script.sh`

Run /scripts/phpscript.php at 10 pm during the week
`0 22 * * 1-5 /scripts/phpscript.php`

Run `perlscript.pl` at 23 minutes after midnight, 2am and 4am, everyday
`23 0-2/2 * * * /path/to/perlscript.pl`

Run linuxcommand at 04:05 every Sunday
`5 4 * * sun /path/to/linuxcommand`

**Cron Options**
List cron jobs
`crontab -l`
or
`crontab -u username -l`

Delete all crontab jobs
`crontab -r`

Delete cron job for a specific user
`crontab -r -u username`

**String Variables in Crontab**
  - `@hourly` Run once every hour i.e. `0 * * * *`
  - `@midnight` Run once every day i.e. `0 0 * * *`
  - `@daily` same as midnight
  - `@weekly` Run once every week, i.e. `0 0 * * 0`
  - `@monthly` Run once every month i.e. `0 0 1 * *`
  - `@annually` Run once every year i.e. `0 0 1 1 *`
  - `@yearly` same as `@annually`
  - `@reboot` Run once at every startup

Backup daily example

`@daily /path/to/backup/script.sh`
----

**My Cron Tabs**
Open nvim and create new crontab in `/usr/lib/cron/tabs`
`env EDITOR=nvim crontab-e`

Run cron 20 min after the hour from 0-24 hours, every 7th hour for the following four scripts
`20 0-24/7 * * * /usr/local/bin/yttCulture;/usr/local/bin/yttComedy;/usr/local/bin/yttUFO;/usr/local/bin/yttDaily`
