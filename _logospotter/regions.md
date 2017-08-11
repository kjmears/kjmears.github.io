---
layout: default
meta: A collection of logo reviews
title: Logos by region
invisible: 1
---
Deciding to group logos by region(and country) made me wonder about existing regions. Sure enough, the [ONS](https://www.ons.gov.uk/methodology/geography/geographicalproducts/namescodesandlookups/namesandcodeslistings/namesandcodesforadministrativegeography) use regions, and after navigating some pretty detailed and technical articles I found what are called GSS Geographical Codes.

<h2>England by region</h2>

<h3>North East</h3>

<ul>
{% for post in site.tags.northeast %}
      <a href="{{ post.url | prepend: site.baseurl }}" class="img">
         <img src="./images/thumbs/{{ post.image}}" alt="" />
     </a>
  {% endfor %}
</ul>

<h3>North West</h3>

<ul>
{% for post in site.tags.northwest %}
      <a href="{{ post.url | prepend: site.baseurl }}" class="img">
         <img src="./images/thumbs/{{ post.image}}" alt="" />
     </a>
  {% endfor %}
</ul>

<h3>Yorks and Humber</h3>

<ul>
{% for post in site.tags.yorkshumber %}
      <a href="{{ post.url | prepend: site.baseurl }}" class="img">
         <img src="./images/thumbs/{{ post.image}}" alt="" />
     </a>
  {% endfor %}
</ul>



<h3>East Midlands</h3>

<ul>
{% for post in site.tags.eastmidlands %}
      <a href="{{ post.url | prepend: site.baseurl }}" class="img">
         <img src="./images/thumbs/{{ post.image}}" alt="" />
     </a>
  {% endfor %}
</ul>


<h3>West Midlands</h3>

<ul>
{% for post in site.tags.westmidlands %}
      <a href="{{ post.url | prepend: site.baseurl }}" class="img">
         <img src="./images/thumbs/{{ post.image}}" alt="" />
     </a>
  {% endfor %}
</ul>

<h3>East of England</h3>

<ul>
{% for post in site.tags.east %}
      <a href="{{ post.url | prepend: site.baseurl }}" class="img">
         <img src="./images/thumbs/{{ post.image}}" alt="" />
     </a>
  {% endfor %}
</ul>

<h3>London</h3>

<ul>
{% for post in site.tags.london %}
      <a href="{{ post.url | prepend: site.baseurl }}" class="img">
         <img src="./images/thumbs/{{ post.image}}" alt="" />
     </a>
  {% endfor %}
</ul>

<h3>South East</h3>

<ul>
{% for post in site.tags.southeast %}
      <a href="{{ post.url | prepend: site.baseurl }}" class="img">
         <img src="./images/thumbs/{{ post.image}}" alt="" />
     </a>
  {% endfor %}
</ul>


<h3>South West</h3>

<ul>
{% for post in site.tags.southwest %}
      <a href="{{ post.url | prepend: site.baseurl }}" class="img">
         <img src="./images/thumbs/{{ post.image}}" alt="" />
     </a>
  {% endfor %}
</ul>

<h2>Scotland</h2>

<ul>
{% for post in site.tags.scotland %}
      <a href="{{ post.url | prepend: site.baseurl }}" class="img">
         <img src="./images/thumbs/{{ post.image}}" alt="" />
     </a>
  {% endfor %}
</ul>

<h2>Wales</h2>

<ul>
{% for post in site.tags.wales %}
      <a href="{{ post.url | prepend: site.baseurl }}" class="img">
         <img src="./images/thumbs/{{ post.image}}" alt="" />
     </a>
  {% endfor %}
</ul>

<h2>Northern Ireland</h2>

<ul>
{% for post in site.tags.irish %}
      <a href="{{ post.url | prepend: site.baseurl }}" class="img">
         <img src="./images/thumbs/{{ post.image}}" alt="" />
     </a>
  {% endfor %}
</ul>
