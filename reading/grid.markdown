---
layout: page
title: Reading Grid
meta: Sketchnotes by Kevin Mears
date: 2018-03-04
tags:
---




A grid of book covers


<section>



	{% assign sorted = site.data.books.books2020 | reverse %} {% for book in sorted %}





  <div class="panel">
  <a href="{{ site.baseurl }}{{ post.url }}">
    <img class="panel-img-top" src="https://images-eu.bookshop.org/product-images/images/{{ book.isbn }}.jpg" alt="bookcover{{book.title}}">

  <div class="panel-block">
      <h3 class="panel-title">{{ book.title | truncate:25 }}</h3>
      
		<p class="panel-text">
    	<em>{{ book.author_1 }}</em>
      Finished: {{ book.date_finished | date: "%b %-d" }} 
		</p>


  </div>
</a>
</div>
	{% endfor %}

  </section>