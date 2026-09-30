---
permalink: /projects/
title: Research in progress
title_zh: 研究进行时
eyebrow: QUESTIONS I KEEP COMING BACK TO
description: "Coordination, information, and behavior in intelligent mobility systems."
description_zh: "智能出行系统中的协调、信息与行为。"
---
{% assign current = site.data.current_research %}
<section id="current-projects" class="current-topics" aria-labelledby="current-topics-title">
  <span id="mixed-autonomy-coordination" class="anchor-alias" aria-hidden="true"></span>
  <div class="section-heading"><div><p class="eyebrow"><span lang="en">CURRENT QUESTIONS</span><span lang="zh">当前问题</span></p><h2 id="current-topics-title"><span lang="en">{{ current.title_en }}</span><span lang="zh">{{ current.title_zh }}</span></h2></div></div>
  <div class="topic-grid">{% for topic in current.items %}<article class="topic-card" id="{{ topic.id }}"><span class="topic-number">0{{ forloop.index }}</span><h3><span lang="en">{{ topic.en }}</span><span lang="zh">{{ topic.zh }}</span></h3><p><span lang="en">{{ topic.desc_en }}</span><span lang="zh">{{ topic.desc_zh }}</span></p><span class="topic-methods">{{ topic.methods }}</span></article>{% endfor %}</div>
</section>
<section class="research-threads" aria-labelledby="research-threads-title">
  <div class="section-heading"><div><p class="eyebrow"><span lang="en">A CONNECTED RESEARCH AGENDA</span><span lang="zh">相互连接的研究脉络</span></p><h2 id="research-threads-title"><span lang="en">Learning. Decisions. Coordination.</span><span lang="zh">学习、决策与协调</span></h2></div></div>
  {% for interest in site.data.profile.research %}
  <section class="research-thread" id="{{ interest.id }}"><h3><span class="thread-number" aria-hidden="true">{{ interest.number }}</span><span lang="en">{{ interest.en }}</span><span lang="zh">{{ interest.zh }}</span></h3><p><span lang="en">{{ interest.desc_en }}</span><span lang="zh">{{ interest.desc_zh }}</span></p><span class="topic-methods">{{ interest.tags }}</span></section>
  {% endfor %}
</section>
<section class="project-history" aria-labelledby="project-history-title">
  <div class="section-heading"><h2 id="project-history-title"><span lang="en">Foundations & earlier work</span><span lang="zh">研究基础与已有工作</span></h2><a class="text-link" href="{{ '/publications/' | relative_url }}"><span lang="en">Papers & manuscripts</span><span lang="zh">论文与研究稿件</span>{% include icon.html name="arrow" %}</a></div>
  <article class="project-detail" id="trajectory-reasoning"><h3><span lang="en">Understanding travel behavior from trajectories</span><span lang="zh">从轨迹理解出行行为</span></h3><p><span lang="en">My master's work explored travel intention and behavioral representation using mobility traces and language models.</span><span lang="zh">硕士阶段的研究围绕出行轨迹与语言模型，探索出行意图和行为表征。</span></p><span class="topic-methods">Trajectory learning · Behavioral representation · LLM reasoning</span></article>
  {% assign paper_ids = 'event-causnet,asknearby,st-proc,mf-attnbilstm' | split: ',' %}
  {% for id in paper_ids %}{% assign paper = site.data.publications | where: 'id', id | first %}
  <article class="project-detail" id="{{ id }}"><h3>{{ paper.title }}</h3>{% if paper.summary_en %}<p><span lang="en">{{ paper.summary_en }}</span><span lang="zh">{{ paper.summary_zh }}</span></p>{% endif %}<a class="text-link" href="{{ '/publications/' | relative_url }}#{{ id }}"><span lang="en">Paper & resources</span><span lang="zh">论文与资源</span>{% include icon.html name="arrow" %}</a></article>
  {% endfor %}
  <article class="project-detail" id="other-projects"><span id="other-projects-heading" class="anchor-alias" aria-hidden="true"></span><h3><span lang="en">Routing & multi-agent systems</span><span lang="zh">路径决策与多智能体系统</span></h3><p><span lang="en">Earlier projects studied traffic assignment and coordination in unmanned warehouses, connecting individual decisions with shared system constraints.</span><span lang="zh">此前的项目涉及交通分配与无人仓协同，关注个体决策与系统共同约束之间的联系。</span></p><span class="topic-methods">Network optimization · Multi-agent scheduling</span></article>
</section>
