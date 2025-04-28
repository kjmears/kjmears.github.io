---
layout: default
type: home
category: sketchnotes
title: Big list of my sketchnotes
meta: Sketchnotes by Kevin Mears
date: 2018-03-04
tags:
  - sketchnotes
  - scribing
  - Wales
---


I've been drawing sketchnotes for several years and have been lucky enough to see lots of fascinating speakers. Taking notes in this way works well for me, and the people I share them with seem to find them useful too.

Most of my sketchnotes have been done [live][live], which I've found the most useful for me, though sketchnoting from [videos][video] is also fun. An alternative to browsing the thumbnails is to take a look at the searchable list of [speakers][speakers]

You might like to read a little about how [I got started][blog] that I wrote for World Sketchnote Day - I've also managed to collect some of my thoughts about sketchnoting into a little ebook that is [available][book] for the price of a coffee!


	{% for post in site.categories.sketchnotes %}
  <ul>
    <li>
      <a href="{{post.url}}" title="{{post.title}}">
		    {{ post.title }}
      </a>
      </li>
      </ul>
	{% endfor %}


[live]: /sketchnotes/live
[video]: /sketchnotes/video
[speakers]: /speakers
[blog]:/blog/world-sketchnote-day-2016.html
[book]: https://payhip.com/b/uvS3