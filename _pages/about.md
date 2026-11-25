---
permalink: /
title: ""
redirect_from:
  - /about/
  - /about.html
---
{% assign profile = site.data.profile %}
{% assign cv = site.data.cv %}
<div class="home-layout">
<aside class="profile-card" aria-label="Profile">
 <img class="profile-photo" src="{{ '/assets/images/luyao-niu.webp' | relative_url }}" alt="Luyao Niu seated outdoors among stone ruins" width="512" height="512" fetchpriority="high">
 <h1 class="profile-name">Luyao Niu</h1>
 <p class="profile-role"><span lang="en">PhD Student</span><span lang="zh">博士研究生</span></p>
 <ul class="profile-facts">
  <li>{% include icon.html name="school" %}<span lang="en">University of Southern California</span><span lang="zh">南加州大学</span></li>
  <li>{% include icon.html name="pin" %}<span lang="en">Los Angeles, CA</span><span lang="zh">美国 · 洛杉矶</span></li>
 </ul>
 <nav class="profile-links" aria-label="Contact and profiles">
  <a href="mailto:{{ site.author.email }}" aria-label="Email: {{ site.author.email }}">{% include icon.html name="mail" %}<span class="link-label">Email</span><span class="tip" aria-hidden="true"><strong><span lang="en">Email</span><span lang="zh">邮箱</span></strong><span class="tip-detail"><span lang="en">{{ site.author.email }}</span><span lang="zh">{{ site.author.email }}</span></span></span></a>
  <a href="{{ site.author.googlescholar }}" aria-label="Google Scholar: Publications &amp; citations">{% include icon.html name="scholar" %}<span class="link-label">Scholar</span><span class="tip" aria-hidden="true"><strong><span lang="en">Google Scholar</span><span lang="zh">谷歌学术</span></strong><span class="tip-detail"><span lang="en">Publications &amp; citations</span><span lang="zh">论文与引用</span></span></span></a>
  <a href="{{ site.author.orcid }}" aria-label="ORCID: {{ site.author.orcid | split: '/' | last }}">{% include icon.html name="orcid" %}<span class="link-label">ORCID</span><span class="tip" aria-hidden="true"><strong><span lang="en">ORCID</span><span lang="zh">ORCID</span></strong><span class="tip-detail"><span lang="en">{{ site.author.orcid | split: '/' | last }}</span><span lang="zh">{{ site.author.orcid | split: '/' | last }}</span></span></span></a>
  <a href="https://github.com/{{ site.author.github }}" aria-label="GitHub: @{{ site.author.github }}">{% include icon.html name="github" %}<span class="link-label">GitHub</span><span class="tip" aria-hidden="true"><strong><span lang="en">GitHub</span><span lang="zh">GitHub</span></strong><span class="tip-detail"><span lang="en">@{{ site.author.github }}</span><span lang="zh">@{{ site.author.github }}</span></span></span></a>
  <a href="{{ site.author.researchgate }}" aria-label="ResearchGate: Research profile">{% include icon.html name="rg" %}<span class="link-label">ResearchGate</span><span class="tip" aria-hidden="true"><strong><span lang="en">ResearchGate</span><span lang="zh">ResearchGate</span></strong><span class="tip-detail"><span lang="en">Research profile</span><span lang="zh">研究主页</span></span></span></a>
  {% if site.author.cv %}<a href="{{ site.author.cv | relative_url }}" aria-label="CV: Download PDF">{% include icon.html name="file" %}<span class="link-label">CV</span><span class="tip" aria-hidden="true"><strong><span lang="en">CV</span><span lang="zh">简历</span></strong><span class="tip-detail"><span lang="en">Download PDF</span><span lang="zh">下载 PDF</span></span></span></a>{% endif %}
 </nav>
 <section class="profile-interests" aria-labelledby="interests-title">
  <h2 id="interests-title"><span lang="en">Research interests</span><span lang="zh">研究兴趣</span></h2>
  <ul>{% for item in profile.research %}<li><a href="{{ '/projects/' | relative_url }}#{{ item.id }}"><span lang="en">{{ item.en }}</span><span lang="zh">{{ item.zh }}</span></a></li>{% endfor %}</ul>
 </section>
</aside>

<div class="home-main">
 <section class="home-section" id="about" aria-labelledby="about-title">
  <h2 id="about-title"><span lang="en">About</span><span lang="zh">关于我</span></h2>
  <p><span lang="en">I am a PhD student in Transportation Systems Engineering at the <a href="https://www.usc.edu/">University of Southern California</a>, advised by Prof. Ruolin Li in the SIAS Lab.</span><span lang="zh">我是<a href="https://www.usc.edu/">南加州大学</a>交通系统工程方向的博士研究生，师从 Ruolin Li 教授，就读于 SIAS Lab。</span></p>
  <p><span lang="en">{{ profile.bio.en }}</span><span lang="zh">{{ profile.bio.zh }}</span></p>
  <p><span lang="en">Previously, I studied Smart City &amp; Big Data at <a href="https://www.pku.edu.cn/">Peking University</a>, following a B.Sc. in Traffic Engineering at <a href="https://en.bjtu.edu.cn/">Beijing Jiaotong University</a>.</span><span lang="zh">此前，我在<a href="https://www.pku.edu.cn/">北京大学</a>学习智慧城市与大数据，本科就读于<a href="https://www.bjtu.edu.cn/">北京交通大学</a>交通工程专业，辅修金融学。</span></p>
 </section>

 <section class="home-section" id="news" aria-labelledby="news-title">
  <h2 id="news-title"><span lang="en">News</span><span lang="zh">近期动态</span></h2>
  <ol class="news-list">{% for news in profile.news %}<li><time datetime="{{ news.date | replace: '.', '-' }}">{{ news.date }}</time><p><span lang="en">{{ news.en }}</span><span lang="zh">{{ news.zh }}</span> <a class="row-link" href="{{ news.url | relative_url }}" aria-label="Details">{% include icon.html name="arrow" %}</a></p></li>{% endfor %}</ol>
 </section>

 {% assign visible_publications = site.data.publications | where_exp: 'paper', "paper.status != 'working'" %}
 {% assign publication_years = visible_publications | group_by: 'year' | sort: 'name' | reverse %}
 <section class="home-section" id="publications" aria-labelledby="selected-title">
  <div class="home-section-head"><h2 id="selected-title"><span lang="en">Selected publications</span><span lang="zh">代表论文</span></h2><a class="text-link" href="{{ '/publications/' | relative_url }}"><span lang="en">All {{ visible_publications.size }}</span><span lang="zh">全部 {{ visible_publications.size }} 篇</span>{% include icon.html name="arrow" %}</a></div>
  <div class="pub-list">{% for year in publication_years %}{% for paper in year.items %}{% if paper.featured %}{% include pub-compact.html paper=paper %}{% endif %}{% endfor %}{% endfor %}</div>
 </section>

 <section class="home-section" id="education" aria-labelledby="education-title">
  <h2 id="education-title"><span lang="en">Education</span><span lang="zh">教育经历</span></h2>
  <ul class="row-list">{% for item in profile.education %}<li class="education-item"><span class="row-date">{{ item.date }}</span><div><strong><span lang="en">{{ item.en }}</span><span lang="zh">{{ item.zh }}</span></strong><span class="row-sub"><span lang="en">{{ item.degree_en }}</span><span lang="zh">{{ item.degree_zh }}</span></span></div></li>{% endfor %}</ul>
 </section>

 <section class="home-section" id="experience" aria-labelledby="experience-title">
  <div class="home-section-head"><h2 id="experience-title"><span lang="en">Experience</span><span lang="zh">工作经历</span></h2><a class="text-link" href="{{ '/cv/' | relative_url }}#experience"><span lang="en">Details</span><span lang="zh">详情</span>{% include icon.html name="arrow" %}</a></div>
  <ul class="row-list">{% for item in site.data.experience.items %}<li><span class="row-date"><span lang="en">{{ item.en.date }}</span><span lang="zh">{{ item.zh.date }}</span></span><div><strong><span lang="en">{{ item.en.role }}</span><span lang="zh">{{ item.zh.role }}</span></strong><span class="row-sub"><span lang="en">{{ item.en.org | split: ' · ' | first }}</span><span lang="zh">{{ item.zh.org | split: ' · ' | first }}</span></span></div></li>{% endfor %}</ul>
 </section>

 <section class="home-section" id="honors" aria-labelledby="honors-title">
  <div class="home-section-head"><h2 id="honors-title"><span lang="en">Selected honors</span><span lang="zh">主要荣誉</span></h2><a class="text-link" href="{{ '/cv/' | relative_url }}#awards-service"><span lang="en">All honors</span><span lang="zh">全部荣誉</span>{% include icon.html name="arrow" %}</a></div>
  <ul class="plain-list">{% assign honors = cv.awards | first %}{% for item in honors.items limit: 4 %}<li><span lang="en">{{ item.en }}</span><span lang="zh">{{ item.zh }}</span></li>{% endfor %}</ul>
 </section>

</div>
</div>
