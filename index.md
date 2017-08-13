---
layout: home
title: Kevin Mears - I like to draw.
meta: "Large collection of Sketchnotes"
keywords:
  - sketchnotes
  - drawing
  - Illustrator
  - Wales
  - logos
---

Hello I'm Kevin Mears.

I work as a web designer at the University of South Wales. I especially like to draw sketchnotes of talks, video, meeting, lectures amongst other things, and you can find lots of those on this site. You'll also sometimes see the results of me tweaking, testing and investigating on this site, in the grand tradition of sites as places to learn and try out ideas. You may enjoy, one of my more long standing projects - a collection and review of UK university logos, in the **[Logospotter][logos]** section.

Get in touch at [Twitter](https://www.twitter.com/mearso)

<section>
    {% for post in site.data.promos %}
      {% include panel.html %}
    {% endfor %}
</section>

<section>
    {% for post in site.posts %}
      {% if post.homepage %}
        {% include panel.html %}
      {% endif %}
    {% endfor %}
</section>

[logos]: /logospotter
