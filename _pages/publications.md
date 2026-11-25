---
permalink: /publications/
title: Publications & talks
title_zh: 论文与报告
redirect_from:
  - /talks/
eyebrow: RESEARCH & SCHOLARSHIP
---
<div class="publications-intro"><a class="text-link" href="{{ site.author.googlescholar }}">Google Scholar {% include icon.html name="external" %}</a></div>
<div class="publication-tools" hidden><div class="filter-group" role="group" aria-label="Filter publications"><button type="button" data-filter="all" aria-pressed="true"><span lang="en">All work</span><span lang="zh">全部</span></button><button type="button" data-filter="journal" aria-pressed="false"><span lang="en">Journal</span><span lang="zh">期刊</span></button><button type="button" data-filter="conference" aria-pressed="false"><span lang="en">Conference</span><span lang="zh">会议</span></button><button type="button" data-filter="preprint" aria-pressed="false"><span lang="en">Manuscripts</span><span lang="zh">研究稿件</span></button></div><label class="search-field">{% include icon.html name="search" %}<span class="sr-only" lang="en">Search publications</span><span class="sr-only" lang="zh">搜索论文</span><input id="publication-search" type="search" placeholder="Search title, author, venue…" autocomplete="off"></label></div>
<p class="results-count" id="results-count" role="status" aria-live="polite"></p>
<h2 class="sr-only"><span lang="en">Publication list</span><span lang="zh">论文列表</span></h2>
{% assign visible_publications = site.data.publications | where_exp: 'paper', "paper.status != 'working'" %}
{% assign publication_years = visible_publications | group_by: 'year' | sort: 'name' | reverse %}
<div class="publication-list">{% for year in publication_years %}{% for paper in year.items %}{% include paper.html paper=paper %}{% endfor %}{% endfor %}</div>
<p id="no-results" class="empty-state" hidden><span lang="en">No matching publications. Try a different search or filter.</span><span lang="zh">没有找到匹配的论文，请尝试其他关键词或筛选条件。</span></p>
{% assign talks = site.data.talks | sort: 'date' | reverse %}
<section class="talks-section" id="talks" aria-labelledby="talks-title">
  <div class="section-heading"><h2 id="talks-title">Talks</h2></div>
  <ul class="row-list">{% for talk in talks %}{% assign tpaper = site.data.publications | where: 'id', talk.paper_id | first %}
    <li class="talk-row" id="talk-{{ talk.paper_id }}"><span class="row-date"><time datetime="{{ talk.date }}">{{ talk.date_en }}</time></span><div><strong>{{ talk.title | default: tpaper.title }}</strong><span class="row-sub">{{ talk.venue }} · {{ talk.location_en }}{% if talk.session_en %} · {{ talk.session_en }}{% endif %}{% if tpaper and tpaper.status != 'working' %} · <a href="#{{ tpaper.id }}">Paper</a>{% endif %}</span></div></li>{% endfor %}
  </ul>
</section>
