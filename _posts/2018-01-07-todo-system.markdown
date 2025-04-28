---
layout: post
title: "Todo list system"
summary: "How I use the TODO.txt 'system' to get things done."
date: "2018-01-07"
category: blog
published: true
tags:
  - thoughts

meta: "Article outlining my todo.txt method."
---

Before I talk about my use of the the tool, I'd best introduce it. I use [Todo.txt][todo] which is a simple concept.

> The todo.txt format is a simple set of rules that make todo.txt both human and machine-readable. The format supports priorities, creation and completion dates, projects and contexts. That's all you need to be productive.

From that premise the tools are just ways to manage text files (synched across machines) that conform to the todo.txt rules. My most used tool are the command line tools, but I also use an Android app, and an iOS app. My system is biased to me being sat at a computer when working and I find that a decent fit. You can find good write ups on the Todo.txt site and links to more resources if I haven't scared you off with talk of the Terminal.

## How I’m using it

It’s taken me a long while to feel comfortable with the application of a GTD style workflow, but with the application of the most barebones system I’m starting to feel comfortable with my method. I’m writing this post to clarify some decisions I’ve made in the last few months about how I was doing things and how I’ve made some simple rules to bring some order to my todo list and how I interact with it. Hoping that writing it down helps me stick with it, and perhaps it may be of interest to you, dear reader.

## The Current State of things

To explain how I'm approaching my todo list, let's first have a look at a selection from the list.

```
33 2017-11-25 dashboard improvments https://github.com/uniglam/chimera +loop @issue
34 2017-11-26 Put up pictures  @diy
36 2017-12-04 form elements do not have associated labels https://github.com/uniglam/general/issues/73 +a11y @issue
40 2017-12-07 begin planning designguide work +designguide @pm
37 2017-12-07 check out https://24ways.org/2017/lint-the-web-forward-with-sonarwhal/ +performance @research
39 2017-12-07 watch some vscode videos https://code.visualstudio.com/docs/getstarted/introvideos +setup @research
42 2017-12-13 Check staff listing  @issue  +staff https://github.com/uniglam/pretoria/issues/33
44 2017-12-31 write article about todo list +mearso @writing due:2018-01-10
45 2018-01-01 Get glasses tightened  @admin +life
46 2018-01-02 read article https://24ways.org/2017/refactoring-your-way-to-a-design-system/ +design-system @research
47 2018-01-04 create cookie documentation in designguide +designguide @documentation
48 2018-01-04 fix induction timetables in styleguide +styleguide @issue https://github.com/uniglam/styleguide/issues/271
49 2018-01-08 Add foam roller routine to fit note @exercise +life
51 2018-01-10 add update to basecamp on day work +data-lab @pm
53 2018-01-15 write about carousels in design guide +designguide @writing

```

When viewing the list in the terminal, it's set up to be nicely highlighted and a little easier to read, but the basic information is

- the date of the task
- some text(where I try to be clear and use verbs)
- sometimes a url is relevant
- a tag - defined by preceeding with +
- a context - (more of which later)
- an optional due date

And that's it. Simple enough, and I've been using it that way for about 4-5 years to a greater or lesser degree. When I complete a task it get's marked as done according to the todo.txt syntax and automatically archived to a done.txt file. I have done.txt files for the last few years, and they reflect the sporadic nature my use of the system. If I was really masochistic I could review them and learn something about myself!

## Better organisation

As I've been slowly getting more comfortable with the discipline and format it started to become clear that when writing summaries and focusing on particlar tasks then it might be a good idea to level up a little on the tools used to view my list. One of my motivations was for a better system to remember where all the days went and how I spent them when writing [weeknotes][weeknotes], which in turn was a response to feelings of anxiety and frustration about whether I could be working better (definitely yes) and how to feel more on top of my work and my skills(here's hoping). Just your everyday run of the mill knowledge worker anxiety.

### Tags

Looking back at some of my previous lists I realized that I was using tags and contexts pretty loosely, which might be an advantage for some, but if I wanted to be able to review and report on what I've been doing then I realized I needed a bit more structure. To make it useful I needed to tweak the way I was using tags. I previously used a combination of whatever i thought would be useful when searching through the list. To make things more structured I changed that to a system where a single tag is now used to indicate what project the task belongs to - not a rock solid solution, where a task is relevant to more than one project, but the pay off in simplicity is worth it.

### Contexts

The other part of the system that needed adjusting was the contexts.

In the traditional [GTD][gtd] system the contexts are the first part of deciding what task to do next, such as `@office`, `@home` - the idea being that this narrows the list of possible next actions, which are then further refined for you to tackle. [Sven Fechner][contexts] explains well why the original idea of contexts is a bit old-fashioned now. (his response and solution, doesn’t work for me, but it was a good explanation of the issue). I’ve struggled with the contexts for years and looking through some of my archived yearly todo lists (yes, I do that) I can see a not very helpful domination of the `@office` context.  So it was obvious I needed something more relevant to me. Once I'd decided to make tags map to projects then I thought activity contexts would give me another view on the tasks. The idea is that a task broadly falls into an category of activity and adding that context to a task makes it easier to find relevant tasks.


```
@admin
@dev
@diy
@documentation
@email
@home
@issue
@pm
@research
@writing
```

This list is pretty fluid - for example I often use a `@pr` context for Pull Requests, but I currently don’t have any tasks with that context at the moment.

Being able to look through my todo list through the lens of contexts with [another action][actions] has been a big step forward. Thinking of them as activities has made it easier for me to write actionable tasks and pick and choose which things to tackle according to how much time or energy I have at any given moment. It’s certainly helped me feel bring some much needed focus when I’m unsure about what I should or could be working on next.

`t contextview` gives me the something like

```
===== Contexts =====

--- admin ---
45 2018-01-01 send email

--- dev ---
21 2017-11-14 fix something +mearso  

--- diy ---
34 2017-11-26 Put up pictures   

--- documentation ---
07 2017-09-20 write about how design guide works +designguide   due:2017-09-26
18 2017-09-20 write accessibility statement for design guide +designguide  

--- exercise ---
49 2018-01-08 Play football  +life

--- writing ---
44 2017-12-31 write article about todo list +mearso   due:2018-01-10

```

(shortened) - but you get the idea.

## In Practice

My list has been hovering around the 50 task mark for the last few months as things get added and done, and a way to have different views on that to find things has been crucial to my increased use of the list. One thing I’ve found myself doing which might be a bit counter-intuitive, but has helped me to put faith in the list, has been to retrospectively add tasks and complete when I’ve done something that I hadn’t planned but does deserve to be logged. I’ve also noticed that I’m not averse to deleting a task if I’m realistic with myself and decide that it isn’t going to get done - but I do find it’s good to have it in the list first and then make a conscious decision.

I've also found that I'm getting better at writing tasks that are sufficiently defined to be useful - trying to write them so that it's clear when it's done and doesn't cover too much activity so that it hangs around. If that happens then it probably needs breaking into other tasks. As a nice tangent - breaking tasks up into smaller chunks then makes it easier to relate them to similar checklists in the team planning tools that we use.

Now that I had a desire to get an overview of my activity I used the pretty clever [Birdseye plugin for todo.txt][birdseye] which trawls through my done tasks and gives me the following (in a lovely terminal window - if you're looking for a fancy GUI, you'll be disappointed)

### Birdseye

```
TODO.TXT Bird's Eye View Report
==========================================

Projects with Open TODOs
------------------------------------------
*  90% [========= ] +data-lab (3 todos)
    0% [          ] +loop (7 todos)
   25% [==        ] +designguide (6 todos)
   50% [=====     ] +unilogos (5 todos)
    0% [          ] +performance (4 todos)
   92% [========= ] +funnelback (4 todos)
   55% [=====     ] +a11y (4 todos)
   91% [========= ] +styleguide (3 todos)
   62% [======    ] +mearso (3 todos)
   40% [====      ] +life (3 todos)
   60% [======    ] +staff (2 todos)
   86% [========  ] +foxtail (2 todos)
   88% [========  ] +django (2 todos)
   85% [========  ] +unilife (1 todos)
   94% [========= ] +setup (1 todos)
   66% [======    ] +recruitmentportal (1 todos)
   90% [========= ] +powerbi (1 todos)
   92% [========= ] +fox (1 todos)
    0% [          ] +design-system (1 todos)

Contexts with Open TODOs
------------------------------------------
* @research (9 todos)
  @issue (19 todos)
  @writing (10 todos)
  @pm (6 todos)
  @documentation (3 todos)
  @admin (2 todos)
  @exercise (1 todos)
  @email (1 todos)
  @diy (1 todos)
  @dev (1 todos)

Completed Projects (No open TODOs)
------------------------------------------
  +youtube (0 todos)
  +xcri (0 todos)
  +wufoo (0 todos)
  +writing (0 todos)
  +workshop (0 todos)
  +wordpress (0 todos)
  +word (0 todos)
  +wiki (0 todos)
  +weeknotes (0 todos)

  * Projects and contexts with an asterisk next to them denote prioritized tasks.
Project with prioritized tasks are listed first, then sorted by number of open todos.

```
(I've shortened the completed projects output, which consists of every project I've ever created a todo for. It could be an interesting starting point to reflect on how I name and categorize things if I ever wanted to. But for this post it's not necessary to see it all.) The overall view this gives me helps me keep an eye on what I'm working on and to see which tags I’ve used and what work they correspond to. Also interesting to me are the things that aren’t in the list - where I’m procrastinating and skirting around putting things that should be counted in the list.

### Summaries

I find it ridiculously hard to recall detail when sitting down at the end of the week to write a note of what I did so thought the todo list would be an obvious place to look. I’ve started using a [yet another plugin][xp] that enables me to

> XP prints the tasks completed on each day starting (x) number of days ago. You may also omit days on which no tasks were completed.

Which gives me a handy reminder of what I've done, and a little boost to realize that time hasn't drifted away and I have actually achieved a reasonable amount in a period.

```
==========================
Friday : 2018-01-12
==========================
x 2018-01-12 2017-12-07 fix windows docker +setup @dev
x 2018-01-12 2018-01-12 create PR for fix @pr +django
x 2018-01-12 2018-01-12 iterate design of course search +styleguide @design
x 2018-01-12 2018-01-12 prepare for induction timetables meeting +induction-timetables @meeting
x 2018-01-12 2018-01-12 induction timetables meeting +induction-timetables @meeting
==========================
Monday : 2018-01-15
==========================
x 2018-01-15 2018-01-15 close call +django @support
x 2018-01-15 2018-01-15 email about logo @email
x 2018-01-15 2018-01-14 Book courier for bike  @admin +life t:2018-01-16 due:2018-01-16
x 2018-01-15 2017-10-06 Generate visuals for simplified course search +courses due:2018-01-09 @design
```

## Issues

Overall, it's a big improvement on how I was using the todo list, but I still have some other issues that I’m not sure how to accommodate with this system.

Tasks that I’ve completed but aren't live or accepted yet aren't well represented in such a done or not done system - logic says that making something live is a separate task, but I’m wary of getting too granular with tasks. I don’t want to spend all day refining and polishing the todo list into a work of art. It is meant to be a means to an end after all.

[todo]: http://todotxt.org/
[weeknotes]: /weeknotes
[birdseye]: https://github.com/todotxt/todo.txt-cli/wiki/Todo.sh-Add-on-Directory#birdseye-your-productivity-report
[gtd]: https://gettingthingsdone.com/
[actions]: https://github.com/inkarkat/todo.txt-cli-ex
[xp]: https://github.com/todotxt/todo.txt-cli/wiki/Todo.sh-Add-on-Directory#xp--print-a-readable-guide-of-your-accomplishments
[contexts]: https://simplicitybliss.com/a-fresh-take-on-contexts-6e17adea4b93
