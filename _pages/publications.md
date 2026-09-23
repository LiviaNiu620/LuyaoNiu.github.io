---
permalink: /publications/
title: Publications
title_zh: 学术论文
eyebrow: RESEARCH & SCHOLARSHIP
description: "Selected publications and manuscripts in transportation, urban AI, and spatio-temporal modeling."
description_zh: "交通、城市人工智能与时空建模领域的论文及研究稿件。"
---
<div class="publications-intro"><p><span lang="en">My name is shown in <strong>bold</strong>. Publication and manuscript statuses are listed separately.</span><span lang="zh">我的名字以<strong>粗体</strong>标注。已发表成果与在审、预印本等状态分别注明。</span></p><a class="text-link" href="{{ site.author.googlescholar }}">Google Scholar {% include icon.html name="external" %}</a></div>
<div class="publication-tools" hidden><div class="filter-group" role="group" aria-label="Filter publications"><button type="button" data-filter="all" aria-pressed="true"><span lang="en">All work</span><span lang="zh">全部</span></button><button type="button" data-filter="journal" aria-pressed="false"><span lang="en">Journal</span><span lang="zh">期刊</span></button><button type="button" data-filter="conference" aria-pressed="false"><span lang="en">Conference</span><span lang="zh">会议</span></button><button type="button" data-filter="preprint" aria-pressed="false"><span lang="en">Manuscripts</span><span lang="zh">研究稿件</span></button></div><label class="search-field">{% include icon.html name="search" %}<span class="sr-only" lang="en">Search publications</span><span class="sr-only" lang="zh">搜索论文</span><input id="publication-search" type="search" placeholder="Search title, author, venue…" autocomplete="off"></label></div>
<p class="results-count" id="results-count" role="status" aria-live="polite"></p>
<h2 class="sr-only"><span lang="en">Publication list</span><span lang="zh">论文列表</span></h2>
{% assign publications_by_year = site.data.publications | sort: 'year' | reverse %}
<div class="publication-list">{% for paper in publications_by_year %}{% include paper.html paper=paper %}{% endfor %}</div>
<p id="no-results" class="empty-state" hidden><span lang="en">No matching publications. Try a different search or filter.</span><span lang="zh">没有找到匹配的论文，请尝试其他关键词或筛选条件。</span></p>
<p class="content-note"><span lang="en">Manuscripts include preprints, submissions, and work in preparation; these are not listed as accepted publications.</span><span lang="zh">研究稿件包含预印本、投稿与撰写中的工作，均不作为已录用成果展示。</span></p>
