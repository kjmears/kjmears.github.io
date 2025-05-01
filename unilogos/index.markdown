---
layout: blog_by_tag
meta: A roundup of University logos
date: 2018-12-30
title: About the project
---
An occasional project to collect logos used by UK Universities. 

I thought it would be interesting, educational and enjoyable to gather examples and research a little more about the logos and the particular demands of designing for this sector. If you're curious about University logos by sector perhaps you'd like to see [view them by region][regions]. If your're looking for Universities that share their Brand guidelines, [I've a list for you.][brand]. Maybe a [Gallery of thumbnails][thumbs] is more your thing.

Perhaps you're interested in those who have [animals][animals] in their logo? Please have a browse around, and if you have any tips or comments [get in touch on twitter]({{ site.author.twitter }}).

### Recently updated

{% assign sorted_pages = site.unilogos | sort: 'last_modified_at'  %}
  {% assign reversed = sorted_pages | reverse %}

	{% for review in reversed %}
	{% if review.invisible == null %}

      {% if review.last_modified_at %}
  <ul class="unlist">
  <li>
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
    </li>
  </ul>
{% endif %}
  

	{% endif %}

	{% endfor %}

### A note on Copyright

Rights to the images used on this site remain with their respective owners, and are reproduced here solely for the purpose of understanding and review, as allowed for under UK copyright legislation. If you wish to use copyrighted material from this site for purposes of your own that go beyond 'fair use', you must obtain permission from the copyright owner.

Further Information can be found at [The UK Copyright Service](http://www.copyrightservice.co.uk/copyright/p09_fair_use)

[regions]: /unilogos/regions/
[brand]: /unilogos/brand/
[thumbs]: /unilogos/gallery
[animals]: /unilogos/animal