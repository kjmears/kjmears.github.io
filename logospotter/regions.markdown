---
layout: blog_by_tag
meta: A collection of logo reviews
title: Logos by region
date: 2018-02-26
invisible: 1
---
Deciding to group logos by region(and country) made me wonder about existing regions. Sure enough, the [ONS](https://www.ons.gov.uk/methodology/geography/geographicalproducts/namescodesandlookups/namesandcodeslistings/namesandcodesforadministrativegeography) use regions, and after navigating some pretty detailed and technical articles I found what are called GSS Geographical Codes.

<h2>England by region</h2>

{% assign tags =  site.logospotter | map: 'tags' | join: ','  | split: ',' | uniq %}

<h3>South West</h3>

{% for tag in tags %}

{% for review in site.logospotter %}
  {% if review.tags contains tag %}
    {% if tag == "southwest" %}

<div class="Media Media--center">
<img class="Media-figure" src="/images/logospotter/thumbs/{{ review.image}}" alt="logo thumbnail">
<p class="Media-body"><a href="{{ site.baseurl }}{{ review.url }}">{{ review.title }}</a></p>
</div>
    {% endif %}
  {% endif %}
  {% endfor %}
{% endfor %}

<h3>South East</h3>

{% for tag in tags %}

  {% for review in site.logospotter %}
    {% if review.tags contains tag %}
      {% if tag == "southeast" %}
  <div class="Media Media--center">
  <img class="Media-figure" src="/images/logospotter/thumbs/{{ review.image}}" alt="logo thumbnail">
  <p class="Media-body"><a href="{{ site.baseurl }}{{ review.url }}">{{ review.title }}</a></p>
  </div>
      {% endif %}
    {% endif %}
  {% endfor %}

{% endfor %}

<h3>West Midlands</h3>

{% for tag in tags %}

  {% for review in site.logospotter %}
    {% if review.tags contains tag %}
      {% if tag == "westmidlands" %}
  <div class="Media Media--center">
  <img class="Media-figure" src="/images/logospotter/thumbs/{{ review.image}}" alt="logo thumbnail">
  <p class="Media-body"><a href="{{ site.baseurl }}{{ review.url }}">{{ review.title }}</a></p>
  </div>
      {% endif %}
    {% endif %}
  {% endfor %}
{% endfor %}

<h3>East Midlands</h3>

{% for tag in tags %}

  {% for review in site.logospotter %}
    {% if review.tags contains tag %}
      {% if tag == "eastmidlands" %}
  <div class="Media Media--center">
  <img class="Media-figure" src="/images/logospotter/thumbs/{{ review.image}}" alt="logo thumbnail">
  <p class="Media-body"><a href="{{ site.baseurl }}{{ review.url }}">{{ review.title }}</a></p>
  </div>
      {% endif %}
    {% endif %}
  {% endfor %}
{% endfor %}

<h3>London</h3>

{% for tag in tags %}

  {% for review in site.logospotter %}
    {% if review.tags contains tag %}
      {% if tag == "london" %}
  <div class="Media Media--center">
  <img class="Media-figure" src="/images/logospotter/thumbs/{{ review.image}}" alt="logo thumbnail">
  <p class="Media-body"><a href="{{ site.baseurl }}{{ review.url }}">{{ review.title }}</a></p>
  </div>
      {% endif %}
    {% endif %}
  {% endfor %}
{% endfor %}

<h3>Yorks & Humber</h3>

{% for tag in tags %}

  {% for review in site.logospotter %}
    {% if review.tags contains tag %}
      {% if tag == "yorkshumber" %}
  <div class="Media Media--center">
  <img class="Media-figure" src="/images/logospotter/thumbs/{{ review.image}}" alt="logo thumbnail">
  <p class="Media-body"><a href="{{ site.baseurl }}{{ review.url }}">{{ review.title }}</a></p>
  </div>
      {% endif %}
    {% endif %}
  {% endfor %}
{% endfor %}

<h3>North East</h3>

{% for tag in tags %}

  {% for review in site.logospotter %}
    {% if review.tags contains tag %}
      {% if tag == "northeast" %}
  <div class="Media Media--center">
  <img class="Media-figure" src="/images/logospotter/thumbs/{{ review.image}}" alt="logo thumbnail">
  <p class="Media-body"><a href="{{ site.baseurl }}{{ review.url }}">{{ review.title }}</a></p>
  </div>
      {% endif %}
    {% endif %}
  {% endfor %}
{% endfor %}

<h3>North West</h3>

{% for tag in tags %}

  {% for review in site.logospotter %}
    {% if review.tags contains tag %}
      {% if tag == "northwest" %}
  <div class="Media Media--center">
  <img class="Media-figure" src="/images/logospotter/thumbs/{{ review.image}}" alt="logo thumbnail">
  <p class="Media-body"><a href="{{ site.baseurl }}{{ review.url }}">{{ review.title }}</a></p>
  </div>
      {% endif %}
    {% endif %}
  {% endfor %}
{% endfor %}

<h3>East</h3>

{% for tag in tags %}

  {% for review in site.logospotter %}
    {% if review.tags contains tag %}
      {% if tag == "east" %}
  <div class="Media Media--center">
  <img class="Media-figure" src="/images/logospotter/thumbs/{{ review.image}}" alt="logo thumbnail">
  <p class="Media-body"><a href="{{ site.baseurl }}{{ review.url }}">{{ review.title }}</a></p>
  </div>
      {% endif %}
    {% endif %}
  {% endfor %}
{% endfor %}

<h3>Wales</h3>

{% for tag in tags %}

  {% for review in site.logospotter %}
    {% if review.tags contains tag %}
      {% if tag == "wales" %}
  <div class="Media Media--center">
  <img class="Media-figure" src="/images/logospotter/thumbs/{{ review.image}}" alt="logo thumbnail">
  <p class="Media-body"><a href="{{ site.baseurl }}{{ review.url }}">{{ review.title }}</a></p>
  </div>
      {% endif %}
    {% endif %}
  {% endfor %}
{% endfor %}

<h3>Scotland</h3>

{% for tag in tags %}

  {% for review in site.logospotter %}
    {% if review.tags contains tag %}
      {% if tag == "scotland" %}
  <div class="Media Media--center">
  <img class="Media-figure" src="/images/logospotter/thumbs/{{ review.image}}" alt="logo thumbnail">
  <p class="Media-body"><a href="{{ site.baseurl }}{{ review.url }}">{{ review.title }}</a></p>
  </div>      {% endif %}
    {% endif %}
  {% endfor %}
{% endfor %}

<h3>Irish</h3>

{% for tag in tags %}

  {% for review in site.logospotter %}
    {% if review.tags contains tag %}
      {% if tag == "irish" %}
  <div class="Media Media--center">
  <img class="Media-figure" src="/images/logospotter/thumbs/{{ review.image}}" alt="logo thumbnail">
  <p class="Media-body"><a href="{{ site.baseurl }}{{ review.url }}">{{ review.title }}</a></p>
  </div>      {% endif %}
    {% endif %}
  {% endfor %}
{% endfor %}
