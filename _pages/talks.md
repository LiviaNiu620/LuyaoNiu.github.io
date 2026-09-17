---
permalink: /talks/
title: Talks & presentations
title_zh: 报告与展示
eyebrow: IDEAS IN CONVERSATION
description: "Sharing research across communities in geography, AI, and transportation."
description_zh: "在地理、人工智能与交通领域的学术交流。"
---
<div class="talk-list">
{% assign talk_ids = 'asknearby,mf-attnbilstm,regional-integration,transport-policy' | split: ',' %}
{% for id in talk_ids %}{% assign paper = site.data.publications | where: 'id', id | first %}<article class="talk"><div class="talk-date"><span>{{ paper.year }}</span><span class="oral-badge"><span lang="en">Oral presentation</span><span lang="zh">口头报告</span></span></div><div><p class="eyebrow">{{ paper.venue }}</p><h2>{{ paper.title }}</h2><a class="text-link" href="{{ '/publications/' | relative_url }}#{{ paper.id }}"><span lang="en">Publication details</span><span lang="zh">论文详情</span>{% include icon.html name="arrow" %}</a></div></article>{% endfor %}
</div>
