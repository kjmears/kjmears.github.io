---
layout: default
title: 'Articles by tag: blue'
tag: blue
permalink: blue/
---

Logos that are predominantly blue.

{% assign tags =  site.logospotter | map: 'tags' | join: ','  | split: ',' | uniq %}
{% for tag in tags %}
  <h3>{{ tag }}</h3>
  <ul>
  {% for review in site.logospotter %}

    {% if review.tags contains tag %}
      {% if tag == "blue" %}
    <li><a href="{{ site.baseurl }}{{ review.url }}">{{ review.title }}</a></li>
      {% endif %}
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}
