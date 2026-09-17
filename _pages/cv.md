---
permalink: /cv/
title: Curriculum vitae
title_zh: 学术履历
eyebrow: BACKGROUND & EXPERIENCE
description: "Education, research experience, and the work along the way."
description_zh: "教育背景、科研经历与一路积累。"
---
<div class="cv-toolbar"><a class="button button-primary" href="{{ site.author.cv | relative_url }}">{% include icon.html name="file" %}<span lang="en">Download CV</span><span lang="zh">下载简历</span><span class="button-note">PDF</span></a><nav class="section-nav" aria-label="CV sections"><a href="#education"><span lang="en">Education</span><span lang="zh">教育</span></a><a href="#experience"><span lang="en">Experience</span><span lang="zh">经历</span></a><a href="#honors"><span lang="en">Honors</span><span lang="zh">荣誉</span></a><a href="#skills"><span lang="en">Skills</span><span lang="zh">技能</span></a></nav></div>
<div class="prose cv-content" markdown="1">
## <span lang="en">Research focus</span><span lang="zh">研究方向</span> {#research-focus}
<p><span lang="en">{{ site.data.profile.focus.en }}</span><span lang="zh">{{ site.data.profile.focus.zh }}</span></p>
<ul>{% for interest in site.data.profile.research %}<li><span lang="en">{{ interest.en }}</span><span lang="zh">{{ interest.zh }}</span></li>{% endfor %}</ul>
<p><a href="{{ '/projects/' | relative_url }}#{{ site.data.current_research.id }}"><span lang="en">Current topic: {{ site.data.current_research.title_en }}</span><span lang="zh">当前课题：{{ site.data.current_research.title_zh }}</span></a></p>

## <span lang="en">Education</span><span lang="zh">教育经历</span> {#education}
<div lang="en" markdown="1">
- *2026.08 - present*, **Ph.D. student in Transportation Systems Engineering**, University of Southern California (USC).
- *2023.09 - 2026.06*, **M.Sc. in Urban Planning (Smart City & Big Data)**, Peking University. GPA 3.75/4.
- *2019.09 - 2023.06*, **B.Sc. in Traffic Engineering, Minor in Finance**, Beijing Jiaotong University. GPA 3.97/4 · Top 0.5% · Beijing Outstanding Graduate.
</div>
<div lang="zh" markdown="1">
- *2026.08 - 至今*，**交通系统工程博士（在读）**，南加州大学（USC）。
- *2023.09 - 2026.06*，**城市规划硕士（智慧城市与大数据）**，北京大学。GPA 3.75/4。
- *2019.09 - 2023.06*，**交通工程学士，辅修金融学**，北京交通大学。GPA 3.97/4 · 前 0.5% · 北京市优秀毕业生。
</div>

## <span lang="en">Experience</span><span lang="zh">工作 / 实践经历</span> {#experience}

<section id="xiaohongshu" class="experience-entry">
{% assign internship = site.data.experience.xiaohongshu %}
{% for language in internship %}
{% assign entry = language[1] %}
<div lang="{{ language[0] }}">
<h3>{{ entry.role }}</h3>
<p><strong>{{ entry.org }}</strong> · {{ entry.date }}</p>
<ul>{% for bullet in entry.bullets %}<li><strong>{{ bullet[0] }}:</strong> {{ bullet[1] }}</li>{% endfor %}</ul>
</div>
{% endfor %}
</section>

<div lang="en" markdown="1">
- *2024.12 - now*, **Co-founder**, Qianmo Zhilian (Shenzhen) Technology Co., Ltd. — Built *AskNearby*, an LLM-powered smart community platform (RAG + spatio-temporal data). Won the **Gold Award** at the Nanshan District Startup Competition and **3rd Prize** at the Baidu ERNIE Cup.
- *2025.01 - now*, **Research Assistant**, Data Science Dept., Duke Kunshan University — Led research on spatio-temporal data mining, traffic forecasting, and behavior modeling; first-authored work published at *IEEE GLOBECOM*; *Event-CausNet submitted to KDD 2027*.
- *2025.04 - 2026.01*, **LLM Algorithm R&D**, China Academy of Land Surveying and Planning (collaborative) — Led the RAG retrieval module for a policy knowledge base and an LLM-Agent report-generation system that cut drafting time by 90%+.
</div>
<div lang="zh" markdown="1">
- *2024.12 - 至今*，**联合创始人**，阡陌智联（深圳）科技有限公司 —— 创立并主导开发「方元问问」智能社区平台（RAG + 大语言模型 + 时空数据），获深圳市南山区创业大赛**金奖**及百度文心杯**三等奖**。
- *2025.01 - 至今*，**研究助理**，杜克昆山大学数据科学系 —— 主导时空数据挖掘、交通流预测与行为建模研究；一作成果发表于 *IEEE GLOBECOM*；*Event-CausNet 已投稿至 KDD 2027*。
- *2025.04 - 2026.01*，**大语言模型算法研发**，国土勘测规划院（合作项目）—— 主导政策知识库 RAG 检索模块，搭建 LLM-Agent 报告生成系统，将报告初稿编制时间缩短 90%+。
</div>

## <span lang="en">Honors and Awards</span><span lang="zh">荣誉奖项</span> {#honors}
<div lang="en" markdown="1">
**Personal honors**
- Baosteel Outstanding Student Award (500 recipients nationwide / year), 2022.12
- National Scholarship (highest undergraduate honor in China, top 1%), 2020.12
- First-class Academic Scholarship (top 3%), 2020.12
- Beijing Outstanding Graduate

**Competition awards**
- **First Prize**, National University Traffic Science & Technology Competition, 2022.07
- **Second Prize**, China MathorCup Mathematical Modeling Competition, 2022.04
- **Third Prize**, China College Mathematics Competition, 2020.04
- **Third Prize**, Baidu ERNIE Cup AI Entrepreneurship Competition, 2024.09
- **Gold Award**, Nanshan District Innovation & Entrepreneurship Competition
</div>
<div lang="zh" markdown="1">
**个人荣誉**
- 宝钢奖学金（全国每年 500 名），2022.12
- 国家奖学金（中国本科生最高荣誉，前 1%），2020.12
- 一等学业奖学金（前 3%），2020.12
- 北京市优秀毕业生

**竞赛获奖**
- 全国交通科技大赛**一等奖**，2022.07
- 全国 MathorCup 数学建模竞赛**二等奖**，2022.04
- 全国大学生数学竞赛**三等奖**，2020.04
- 百度「文心杯」AI 创业大赛**三等奖**，2024.09
- 南山区创新创业大赛**金奖**
</div>

## <span lang="en">Skills</span><span lang="zh">技能</span> {#skills}
<div lang="en" markdown="1">
- **Languages**: Mandarin Chinese (native); English (fluent, TOEFL iBT 101); Spanish (conversational).
- **Programming & Data**: Python (NumPy, PyTorch, scikit-learn, GeoPandas, NetworkX), C, MATLAB, R, SQL.
- **Methods**: Optimization, Machine/Deep Learning, Reinforcement Learning, Causal Inference, LLMs (Prompt Engineering, RAG).
</div>
<div lang="zh" markdown="1">
- **语言**：中文（母语）；英语（流利，TOEFL iBT 101）；西班牙语（会话级）。
- **编程与数据**：Python（NumPy、PyTorch、scikit-learn、GeoPandas、NetworkX）、C、MATLAB、R、SQL。
- **研究方法**：优化、机器学习 / 深度学习、强化学习、因果推断、大语言模型（Prompt Engineering、RAG）。
</div>

## <span lang="en">Extracurricular</span><span lang="zh">课外活动</span> {#activities}
<div lang="en" markdown="1">
- *2021.06 - 2023.06*, **President, Student Union**, Beijing Jiaotong University — Led university-wide student affairs and brand events reaching 80,000+ participants.
- *2022.01 - 2022.04*, **Volunteer**, Beijing 2022 Winter Olympics (National Indoor Stadium) — Personnel management & venue operations; named *Outstanding Volunteer*.
</div>
<div lang="zh" markdown="1">
- *2021.06 - 2023.06*，**校学生会执行主席**，北京交通大学 —— 统筹全校学生活动，协调 15+ 院系学生组织，主导品牌活动覆盖 80,000+ 人次。
- *2022.01 - 2022.04*，**志愿者**，北京 2022 冬奥会（国家体育馆）—— 负责人员调度与场馆运营，获「北京冬奥会优秀志愿者」称号。
</div>

</div>
