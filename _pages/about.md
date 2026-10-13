---
permalink: /
title: ""
redirect_from:
  - /about/
  - /about.html
---
{% assign profile = site.data.profile %}
<section class="hero" aria-labelledby="hero-name">
 <div class="hero-copy">
  <h1 id="hero-name">Luyao Niu</h1>
  <p class="hero-role"><span lang="en">{{ profile.role.en | replace: ' · ', ', ' }}</span><span lang="zh">{{ profile.role.zh | split: ' · ' | reverse | join: '' }}</span></p>
  <p class="personal-motto">{{ site.data.life.motto }}</p>
  <p class="hero-statement"><span lang="en">{{ profile.intro.en }}</span><span lang="zh">{{ profile.intro.zh }}</span></p>
  <p class="hero-bio"><span lang="en">{{ profile.bio.en }}</span><span lang="zh">{{ profile.bio.zh }}</span></p>
  <p class="hero-background"><span lang="en">Previously, I studied Smart City & Big Data at <a href="https://www.pku.edu.cn/">Peking University</a>, following a B.Sc. in Traffic Engineering at <a href="https://en.bjtu.edu.cn/">Beijing Jiaotong University</a>.</span><span lang="zh">此前，我在<a href="https://www.pku.edu.cn/">北京大学</a>学习智慧城市与大数据，本科就读于<a href="https://www.bjtu.edu.cn/">北京交通大学</a>交通工程专业，辅修金融学。</span></p>
  <div class="hero-actions"><a class="button button-primary" href="{{ site.author.googlescholar }}">{% include icon.html name="scholar" %} Google Scholar {% include icon.html name="external" %}</a>{% if site.author.cv %}<a class="button button-secondary" href="{{ site.author.cv | relative_url }}">{% include icon.html name="file" %}<span lang="en">Curriculum vitae</span><span lang="zh">学术简历</span><span class="button-note">PDF</span></a>{% endif %}<a class="button button-secondary" href="mailto:{{ site.author.email }}">{% include icon.html name="mail" %}<span lang="en">Email me</span><span lang="zh">发邮件</span></a></div>
 </div>
 <figure class="hero-portrait"><img src="{{ '/assets/images/luyao-niu.webp' | relative_url }}" alt="Luyao Niu seated outdoors among stone ruins" width="512" height="512" fetchpriority="high"><figcaption><span lang="en">A little curiosity, a different perspective.</span><span lang="zh">多一点好奇，多一种看世界的方式。</span></figcaption></figure>
</section>
<section class="research-section" aria-labelledby="research-heading"><div class="section-label"><h2 id="research-heading"><span lang="en">Research interests</span><span lang="zh">研究兴趣</span></h2><span class="label-note"><span lang="en">From understanding to collective outcomes</span><span lang="zh">从理解环境到集体结果</span></span></div><div class="research-grid">{% for item in profile.research %}<a class="research-item" href="{{ '/projects/' | relative_url }}#{{ item.id }}"><span class="research-stop" aria-hidden="true"></span><h3><span lang="en">{{ item.en }}</span><span lang="zh">{{ item.zh }}</span>{% include icon.html name="external" %}</h3><p><span lang="en">{{ item.desc_en }}</span><span lang="zh">{{ item.desc_zh }}</span></p><span class="research-tags">{{ item.tags }}</span></a>{% endfor %}</div></section>
{% assign current = site.data.current_research %}
<section class="current-research" aria-labelledby="current-research-heading">
 <div class="current-research-title"><p class="eyebrow"><span lang="en">RESEARCH IN PROGRESS</span><span lang="zh">研究进行时</span></p><h2 id="current-research-heading"><span lang="en">{{ current.title_en }}</span><span lang="zh">{{ current.title_zh }}</span></h2></div>
 <div class="current-research-copy"><ul class="current-title-list">{% for topic in current.items %}<li><a href="{{ '/projects/' | relative_url }}#{{ topic.id }}"><span lang="en">{{ topic.en }}</span><span lang="zh">{{ topic.zh }}</span></a></li>{% endfor %}</ul></div>
</section>
<div class="home-columns">
 {% assign visible_publications = site.data.publications | where_exp: 'paper', "paper.status != 'working'" %}
 {% assign publication_years = visible_publications | group_by: 'year' | sort: 'name' | reverse %}
 <section class="selected-research" aria-labelledby="selected-heading"><div class="section-heading"><div><p class="eyebrow">SELECTED WORK</p><h2 id="selected-heading"><span lang="en">Selected publications</span><span lang="zh">代表论文</span></h2></div><a class="text-link" href="{{ '/publications/' | relative_url }}"><span lang="en">All publications</span><span lang="zh">全部论文</span>{% include icon.html name="arrow" %}</a></div>{% for year in publication_years %}{% for paper in year.items %}{% if paper.featured %}{% include paper.html paper=paper featured=true %}{% endif %}{% endfor %}{% endfor %}</section>
 <aside class="news-section" aria-labelledby="news-heading"><div class="section-heading"><div><p class="eyebrow">RECENT UPDATES</p><h2 id="news-heading"><span lang="en">News & notes</span><span lang="zh">近期动态</span></h2></div></div><ol class="news-list">{% for news in profile.news %}<li><time datetime="{{ news.date | replace: '.', '-' }}">{{ news.date }}</time><a href="{{ news.url | relative_url }}"><span lang="en">{{ news.en }}</span><span lang="zh">{{ news.zh }}</span>{% include icon.html name="external" %}</a></li>{% endfor %}</ol><a class="aside-link" href="{{ '/talks/' | relative_url }}"><span lang="en">Talks & presentations</span><span lang="zh">学术报告与展示</span>{% include icon.html name="arrow" %}</a></aside>
</div>
<section class="education-section" aria-labelledby="education-heading"><div class="section-heading"><div><p class="eyebrow">THE JOURNEY</p><h2 id="education-heading"><span lang="en">Education</span><span lang="zh">教育经历</span></h2></div><a class="text-link" href="{{ '/cv/' | relative_url }}"><span lang="en">Full curriculum vitae</span><span lang="zh">完整履历</span>{% include icon.html name="arrow" %}</a></div><div class="education-grid">{% for item in profile.education %}<div class="education-item"><span class="school-mark">{{ item.short }}</span><div><p class="education-date">{{ item.date }}</p><h3><span lang="en">{{ item.en }}</span><span lang="zh">{{ item.zh }}</span></h3><p><span lang="en">{{ item.degree_en }}</span><span lang="zh">{{ item.degree_zh }}</span></p></div></div>{% endfor %}</div></section>
