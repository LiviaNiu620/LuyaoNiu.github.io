---
permalink: /cv/
title: Curriculum vitae
title_zh: 学术履历
eyebrow: BACKGROUND & EXPERIENCE
description: "Education, research, experience, awards, and academic service."
description_zh: "教育、研究、经历、奖项与学术服务。"
---
{% assign profile = site.data.profile %}
{% assign experience = site.data.experience.items %}
{% assign cv = site.data.cv %}
<div class="cv-toolbar">
  <a class="button button-primary" href="{{ site.author.cv | relative_url }}">{% include icon.html name="file" %}<span lang="en">Download CV</span><span lang="zh">下载简历</span><span class="button-note">PDF</span></a>
  <nav class="section-nav" aria-label="CV sections">
    <a href="#education"><span lang="en">Education</span><span lang="zh">教育</span></a>
    <a href="#experience"><span lang="en">Experience</span><span lang="zh">经历</span></a>
    <a href="#awards-service"><span lang="en">Awards & service</span><span lang="zh">奖项与服务</span></a>
  </nav>
</div>

<section class="cv-section cv-research-focus" id="research-focus" aria-labelledby="research-focus-title">
  <p class="eyebrow"><span lang="en">RESEARCH INTERESTS</span><span lang="zh">研究兴趣</span></p>
  <h2 id="research-focus-title"><span lang="en">Learning, decision-making, and coordination in intelligent systems</span><span lang="zh">智能系统中的学习、决策与协调</span></h2>
  <p><span lang="en">{{ profile.focus.en }}</span><span lang="zh">{{ profile.focus.zh }}</span></p>
  <ul class="research-interest-list">{% for interest in profile.research %}<li><span lang="en">{{ interest.en }}</span><span lang="zh">{{ interest.zh }}</span></li>{% endfor %}</ul>
  <a class="text-link" href="{{ '/projects/' | relative_url }}#{{ site.data.current_research.id }}"><span lang="en">Current topic: {{ site.data.current_research.title_en }}</span><span lang="zh">当前课题：{{ site.data.current_research.title_zh }}</span>{% include icon.html name="arrow" %}</a>
</section>

<section class="cv-section" id="education" aria-labelledby="education-title">
  <p class="eyebrow"><span lang="en">EDUCATION</span><span lang="zh">教育经历</span></p>
  <h2 id="education-title"><span lang="en">Education</span><span lang="zh">教育经历</span></h2>
  <div class="cv-education-list">
    {% for school in profile.education %}
    <article class="cv-education-entry">
      <span class="school-mark">{{ school.short }}</span>
      <div><p class="cv-entry-date">{{ school.date }}</p><h3><span lang="en">{{ school.en }}</span><span lang="zh">{{ school.zh }}</span></h3><p><span lang="en">{{ school.degree_en }}</span><span lang="zh">{{ school.degree_zh }}</span></p></div>
    </article>
    {% endfor %}
  </div>
</section>

<section class="cv-section" id="experience" aria-labelledby="experience-title">
  <p class="eyebrow"><span lang="en">PROFESSIONAL EXPERIENCE</span><span lang="zh">工作与实践经历</span></p>
  <h2 id="experience-title"><span lang="en">Experience</span><span lang="zh">工作与实践经历</span></h2>
  <div class="cv-experience-list">
    {% for item in experience %}
    <article class="cv-experience-entry" id="{{ item.id }}">
      <div class="cv-entry-heading"><div><h3><span lang="en">{{ item.en.role }}</span><span lang="zh">{{ item.zh.role }}</span></h3><p class="cv-entry-org"><span lang="en">{{ item.en.org }}</span><span lang="zh">{{ item.zh.org }}</span></p></div><p class="cv-entry-date"><span lang="en">{{ item.en.date }}</span><span lang="zh">{{ item.zh.date }}</span></p></div>
      <ul>{% for bullet in item.en.bullets %}<li><strong lang="en">{{ bullet[0] }}:</strong><span lang="en"> {{ bullet[1] }}</span></li>{% endfor %}{% for bullet in item.zh.bullets %}<li><strong lang="zh">{{ bullet[0] }}：</strong><span lang="zh">{{ bullet[1] }}</span></li>{% endfor %}</ul>
    </article>
    {% endfor %}
  </div>
</section>

<section class="cv-section" id="awards-service" aria-labelledby="awards-service-title">
  <p class="eyebrow"><span lang="en">RECOGNITION & CONTRIBUTION</span><span lang="zh">奖项与学术服务</span></p>
  <h2 id="awards-service-title"><span lang="en">Awards & service</span><span lang="zh">奖项与学术服务</span></h2>
  <div class="cv-recognition-grid">
    <div class="cv-awards">
      {% for group in cv.awards %}
      <section class="cv-award-group"><h3><span lang="en">{{ group.group_en }}</span><span lang="zh">{{ group.group_zh }}</span></h3><ul>{% for item in group.items %}<li><span lang="en">{{ item.en }}</span><span lang="zh">{{ item.zh }}</span></li>{% endfor %}</ul></section>
      {% endfor %}
    </div>
    <aside class="cv-service" aria-label="Academic service">
      <p class="eyebrow"><span lang="en">ACADEMIC SERVICE</span><span lang="zh">学术服务</span></p>
      {% for item in cv.service %}<h3><span lang="en">{{ item.role_en }}</span><span lang="zh">{{ item.role_zh }}</span></h3><p><span lang="en">{{ item.venues_en }}</span><span lang="zh">{{ item.venues_zh }}</span></p>{% endfor %}
    </aside>
  </div>
</section>

<section class="cv-section" id="activities" aria-labelledby="activities-title">
  <p class="eyebrow"><span lang="en">COMMUNITY</span><span lang="zh">校园与社会服务</span></p>
  <h2 id="activities-title"><span lang="en">Leadership & service</span><span lang="zh">校园与社会服务</span></h2>
  <div class="cv-activity-list">
    <article><h3><span lang="en">President, Student Union</span><span lang="zh">校学生会执行主席</span></h3><p class="cv-entry-date"><span lang="en">Jun. 2021 - Jun. 2023</span><span lang="zh">2021.06 - 2023.06</span></p><p><span lang="en">Beijing Jiaotong University — Led university-wide student affairs and brand events reaching 80,000+ participants.</span><span lang="zh">北京交通大学 —— 统筹全校学生活动，协调 15+ 院系学生组织，主导品牌活动覆盖 80,000+ 人次。</span></p></article>
    <article><h3><span lang="en">Volunteer, Beijing 2022 Winter Olympics</span><span lang="zh">北京 2022 冬奥会志愿者</span></h3><p class="cv-entry-date"><span lang="en">Jan. 2022 - Apr. 2022</span><span lang="zh">2022.01 - 2022.04</span></p><p><span lang="en">National Indoor Stadium — Personnel management and venue operations; named Outstanding Volunteer.</span><span lang="zh">国家体育馆 —— 负责人员调度与场馆运营，获北京冬奥会优秀志愿者称号。</span></p></article>
  </div>
</section>
