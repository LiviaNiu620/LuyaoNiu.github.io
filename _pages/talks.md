---
permalink: /talks/
title: Talks & presentations
title_zh: 报告与展示
eyebrow: IDEAS IN CONVERSATION
description: "Sharing research, meeting people, and continuing the conversation."
description_zh: "分享研究、结识同行，也让讨论继续。"
---
<figure class="talks-photo"><img src="{{ '/assets/images/life/presentation.webp' | relative_url }}" alt="Luyao Niu wearing a conference badge" width="1279" height="1706" loading="lazy"><figcaption><span lang="en">Sharing ideas, one conversation at a time.</span><span lang="zh">分享想法，让交流发生。</span></figcaption></figure>
<div class="talk-list">
{% assign talks = site.data.talks | sort: 'date' | reverse %}
{% for talk in talks %}
{% assign paper = site.data.publications | where: 'id', talk.paper_id | first %}
<article class="talk" id="talk-{{ talk.paper_id }}">
  <div class="talk-date"><time datetime="{{ talk.date }}"><span lang="en">{{ talk.date_en }}</span><span lang="zh">{{ talk.date_zh }}</span></time><p class="talk-location"><span lang="en">{{ talk.location_en }}</span><span lang="zh">{{ talk.location_zh }}</span></p><span class="oral-badge"><span lang="en">Oral presentation</span><span lang="zh">口头报告</span></span></div>
  <div><p class="eyebrow">{{ talk.venue }}</p><h2>{{ paper.title }}</h2><a class="text-link" href="{{ '/publications/' | relative_url }}#{{ paper.id }}"><span lang="en">Publication details</span><span lang="zh">论文详情</span>{% include icon.html name="arrow" %}</a></div>
</article>
{% endfor %}
</div>
