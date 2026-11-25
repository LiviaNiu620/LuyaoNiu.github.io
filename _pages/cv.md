---
permalink: /cv/
title: Curriculum vitae
title_zh: 学术履历
description: "Education, experience, academic service, and honors."
description_zh: "教育、经历、学术服务与荣誉。"
redirect_from:
  - /service/
---
{% assign profile = site.data.profile %}
{% assign experience = site.data.experience.items %}
{% assign cv = site.data.cv %}
{% if site.author.cv %}<p class="cv-download"><a class="pill" href="{{ site.author.cv | relative_url }}">{% include icon.html name="file" %} Download CV (PDF)</a></p>{% endif %}
<div class="cv-compact">

<section class="cv-block" id="education" aria-labelledby="education-title">
  <h2 id="education-title">Education</h2>
  <ul class="row-list">{% for school in profile.education %}
    <li class="cv-education-entry"><span class="row-date">{{ school.date }}</span><div><strong>{{ school.en }}</strong><span class="row-sub">{{ school.degree_en }}</span></div></li>{% endfor %}
  </ul>
</section>

<section class="cv-block" id="experience" aria-labelledby="experience-title">
  <h2 id="experience-title">Experience</h2>
  <ul class="row-list">{% for item in experience %}
    <li class="cv-experience-entry" id="{{ item.id }}"><span class="row-date">{{ item.en.date }}</span><div><strong>{{ item.en.role }}</strong><span class="row-sub">{{ item.en.org }}</span>{% if item.en.bullets.size > 0 %}<ul class="cv-bullets">{% for bullet in item.en.bullets %}<li><b>{{ bullet[0] }}:</b> {{ bullet[1] }}</li>{% endfor %}</ul>{% endif %}</div></li>{% endfor %}
  </ul>
</section>

<section class="cv-block" id="academic-service" aria-labelledby="service-title">
  <h2 id="service-title">Academic service</h2>
  <dl class="service-inline">{% for group in cv.service %}<div><dt>{{ group.role_en }}</dt><dd>{% for venue in group.venues %}{{ venue }}{% unless forloop.last %}<span class="sep">; </span>{% endunless %}{% endfor %}</dd></div>{% endfor %}</dl>
</section>

<section class="cv-block" id="awards-service" aria-labelledby="awards-title">
  <h2 id="awards-title">Honors &amp; awards</h2>
  <div class="cv-awards">{% for group in cv.awards %}
    <div class="cv-award-group"><h3>{{ group.group_en }}</h3><ul class="plain-list">{% for item in group.items %}<li>{{ item.en }}</li>{% endfor %}</ul></div>{% endfor %}
  </div>
</section>

<section class="cv-block" id="programs" aria-labelledby="activities-title">
  <span id="activities" class="anchor-alias" aria-hidden="true"></span>
  <h2 id="activities-title">Leadership &amp; activities</h2>
  <ul class="row-list">
    <li><span class="row-date">Jun. 2021 – Jun. 2023</span><div><strong>President, Student Union</strong><span class="row-sub">Beijing Jiaotong University — led university-wide student affairs and events reaching 80,000+ participants.</span></div></li>
    <li><span class="row-date">Jan. – Apr. 2022</span><div><strong>Volunteer, Beijing 2022 Winter Olympics</strong><span class="row-sub">National Indoor Stadium — personnel management and venue operations; named Outstanding Volunteer.</span></div></li>{% for program in cv.programs %}
    <li class="cv-program"><span class="row-date">{{ program.date }}</span><div><strong>{{ program.en }}</strong><span class="row-sub">{{ program.org_en }} — {{ program.desc_en }}</span></div></li>{% endfor %}
  </ul>
</section>

</div>
