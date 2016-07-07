---
layout: workshop
title: Workshops

---

<div class="row">
	{% for post in site.categories.workshops %}

			<h2 class="media-heading"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title | truncate:25 }}</a></h2>
			<p>{{ post.excerpt | strip_html | truncatewords:7 }}<a href="{{ site.baseurl }}{{ post.url }}"> Read more</a></p>

	{% endfor %}

</div>
