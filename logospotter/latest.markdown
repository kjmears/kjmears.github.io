---
layout: blog_by_tag
meta: A collection of logo reviews organised by date updated
title: Last updated
date: 2018-02-29

---
{% assign sorted_pages = site.logospotter | sort: 'last_modified_at'  %}
  {% assign reversed = sorted_pages | reverse %}

	{% for review in reversed %}
	{% if review.invisible == null %}

      {% if review.last_modified_at %}
  <div class="Media Media--center">
  <img class="Media-figure" src="/images/logospotter/thumbs/{{ review.image}}" alt="logo thumbnail">
  <p class="Media-body">
  <a href="{{ site.baseurl }}{{ review.url }}">{{ review.title }}</a>
     

  {% assign d = review.last_modified_at | date: "%-d" %}
  <em>
    Updated
      {{ review.last_modified_at | date: "%a" }}
      {% case d %}
        {% when "1" or "21" or "31" %}
          {{ d }}st
        {% when "2" or "22" %}
          {{ d }}nd
        {% when "3" or "23" %}
          {{ d }}rd
        {% else %}
          {{ d }}th
      {% endcase %}
    {{ review.last_modified_at | date: "%b" }}
    {{ review.last_modified_at | date: "%Y" }}
    </em>
    </p>
  </div>
{% endif %}
  
	{% endif %}

 {% endfor %}