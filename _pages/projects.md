---
permalink: /projects/
title: Research
title_zh: 研究
eyebrow: FROM FLEETS TO TEAMS TO INDIVIDUAL AGENTS
description: "Where I am heading now, and the work behind it: how collective behavior arises from autonomous agents that act alone, coordinate with one another, and operate as whole fleets."
description_zh: "我现在关注的方向，以及背后的已有工作：自主智能体从独立行动、彼此协作到整支车队运行，群体行为如何形成。"
---
{% assign current = site.data.current_research %}
<section class="current-interests" id="current-interests" aria-labelledby="current-interests-title"><span id="current-projects" class="anchor-alias" aria-hidden="true"></span>
  <div class="section-heading"><h2 id="current-interests-title">{{ current.title_en }}</h2></div>
  <div class="interest-grid">{% for item in current.items %}
    <article class="interest-card" id="{{ item.id }}"><h3>{{ item.en }}</h3><p>{{ item.desc }}</p><span class="topic-methods">{{ item.tags }}</span></article>{% endfor %}
  </div>
</section>
<div class="section-heading work-so-far"><h2>Work so far</h2></div>
<ol class="research-levels" aria-label="Research directions">{% for line in site.data.profile.research %}
  <li><a href="#{{ line.id }}"><span class="level-number">{{ line.number }}</span><span class="level-name">{{ line.level }}</span><span class="level-title">{{ line.en }}</span></a></li>{% endfor %}
</ol>
{% for line in site.data.profile.research %}
<section class="research-line" id="{{ line.id }}" aria-labelledby="{{ line.id }}-title">{% if line.id == 'fleet-optimization-control' %}<span id="mixed-autonomy-coordination" class="anchor-alias" aria-hidden="true"></span>{% endif %}
  <header class="research-line-head">
    <p class="eyebrow"><span>{{ line.number }}</span> · {{ line.level }}</p>
    <h2 id="{{ line.id }}-title"><span lang="en">{{ line.en }}</span><span lang="zh">{{ line.zh }}</span></h2>
    <p class="research-line-desc"><span lang="en">{{ line.desc_en }}</span><span lang="zh">{{ line.desc_zh }}</span></p>
    <span class="topic-methods">{{ line.tags }}</span>
  </header>
  <ul class="line-projects">{% for project in line.projects %}
    <li{% if project.id %} id="{{ project.id }}"{% endif %}><div><strong>{% if project.url %}<a href="{{ project.url | relative_url }}">{{ project.title }}</a>{% else %}{{ project.title }}{% endif %}</strong><span class="row-sub">{{ project.desc }}</span></div><span class="line-project-meta{% if project.url == nil and project.meta == 'In progress' %} is-progress{% endif %}">{{ project.meta }}</span></li>{% endfor %}
  </ul>
</section>
{% endfor %}
