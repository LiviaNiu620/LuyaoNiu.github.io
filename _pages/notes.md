---
permalink: /notes/
title: Notes
title_zh: 随笔
description: "Short notes on research, papers I'm reading, and ideas in progress. Comments are welcome."
---
{% if site.posts.size > 0 %}
<ul class="row-list note-list">{% for post in site.posts %}
  <li><span class="row-date"><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%b %-d, %Y' }}</time></span><div><a class="note-link" href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a><span class="row-sub">{{ post.description | default: post.excerpt | strip_html | truncate: 170 }}</span></div></li>{% endfor %}
</ul>
{% else %}
<p class="notes-empty">The first notes are on the way.</p>
{% endif %}
{% include comments.html term="Guestbook" title="Guestbook" intro="Questions, ideas, or just saying hello? Leave a message below (a GitHub account is needed). For anything private, email me." %}
