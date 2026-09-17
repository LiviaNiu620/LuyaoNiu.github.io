---
permalink: /projects/
title: Projects
title_zh: 研究项目
eyebrow: IDEAS INTO PRACTICE
description: "Connecting learning, decision-making, and coordination across intelligent systems."
description_zh: "连接智能系统中的学习、决策与协调。"
---
{% assign current = site.data.current_research %}
<nav class="project-topics" aria-label="Research interests">{% for interest in site.data.profile.research %}<a href="#{{ interest.id }}"><span lang="en">{{ interest.en }}</span><span lang="zh">{{ interest.zh }}</span> ↗</a>{% endfor %}</nav>
<section class="research-threads" aria-labelledby="research-threads-title">
 <div class="section-heading"><div><p class="eyebrow"><span lang="en">A DEVELOPING RESEARCH AGENDA</span><span lang="zh">持续发展的研究脉络</span></p><h2 id="research-threads-title"><span lang="en">From understanding to collective outcomes</span><span lang="zh">从理解环境，到塑造集体结果</span></h2></div></div>
 <p class="research-threads-intro"><span lang="en">{{ site.data.profile.focus.en }} My earlier work and current projects inform three connected interests.</span><span lang="zh">{{ site.data.profile.focus.zh }} 已有积累与当前课题，共同支持以下三个相互连接的研究兴趣。</span></p>
 {% for interest in site.data.profile.research %}
 <section class="research-thread" id="{{ interest.id }}">
  <h3><span class="thread-number" aria-hidden="true">{{ interest.number }}</span><span lang="en">{{ interest.en }}</span><span lang="zh">{{ interest.zh }}</span></h3>
  <p><span lang="en">{{ interest.context_en }}</span><span lang="zh">{{ interest.context_zh }}</span></p>
  <div class="thread-links"><span class="thread-links-label"><span lang="en">Related work</span><span lang="zh">相关工作</span></span>{% for link in interest.links %}<a class="text-link" href="{{ link.url }}"><span lang="en">{{ link.en }}</span><span lang="zh">{{ link.zh }}</span>{% include icon.html name="arrow" %}</a>{% endfor %}</div>
 </section>
 {% endfor %}
</section>
<section class="project-detail current-project" id="{{ current.id }}" aria-labelledby="current-project-title">
 <span class="project-index"><span lang="en">A CURRENT TOPIC · USC</span><span lang="zh">当前课题 · USC</span></span>
 <h2 id="current-project-title"><span lang="en">{{ current.title_en }}</span><span lang="zh">{{ current.title_zh }}</span></h2>
 <p class="current-project-question"><span lang="en">{{ current.summary_en }}</span><span lang="zh">{{ current.summary_zh }}</span></p>
 {% for aspect in current.aspects %}<section class="research-aspect" id="{{ aspect.id }}"><h3><span lang="en">{{ aspect.en }}</span><span lang="zh">{{ aspect.zh }}</span></h3><p><span lang="en">{{ aspect.desc_en }}</span><span lang="zh">{{ aspect.desc_zh }}</span></p></section>{% endfor %}
 <p class="research-scope"><span lang="en">{{ current.scope_en }}</span><span lang="zh">{{ current.scope_zh }}</span></p>
</section>
<div class="section-heading project-history-heading"><h2><span lang="en">Further research projects</span><span lang="zh">其他研究项目</span></h2></div>
<div class="project-list" markdown="1">
<section class="project-detail" id="trajectory-reasoning" markdown="1">
<span class="project-index">PROJECT / 01</span>

## <span lang="en">Multimodal Trajectory Abductive Reasoning via LLM Distillation & Neuro-Symbolic Inference</span><span lang="zh">基于 LLM 知识蒸馏与神经符号推理的多模态轨迹语义溯因框架</span>
<div lang="en" markdown="1">
*Master's thesis · Independent · Ongoing*
- Built a short-/long-term collaborative trajectory representation: encoding each trip from grid–temporal, POI-semantic, and kinematic views, while extracting stable individual spatio-temporal preferences from history, fused via a dynamic gating mechanism.
- Designed a teacher–student cross-modal alignment: the teacher generates multi-level soft labels from structured evidence cards, and a Soft Prompt Projector maps trajectory vectors into the student LLM's embedding space.
- Translated key time-geography constraints into learnable symbolic rules, with constraint losses during training and post-hoc verification at inference to ensure physical consistency.
- Evaluated on real-world Shenzhen trajectory data for intent inference, interpretability, and semantic consistency.
</div>
<div lang="zh" markdown="1">
*硕士学位论文 · 独立研究 · 进行中*
- **多视图轨迹表征学习**：从网格时序、POI 语义、运动学特征多视角编码当前出行，并从历史轨迹提取个体稳定的时空偏好，通过动态门控机制自适应融合长短期信息。
- **Teacher–Student 跨模态对齐**：教师模型基于结构化证据卡片生成多层次软标签，再经 Soft Prompt Projector 将轨迹向量映射到学生大语言模型的嵌入空间。
- **神经符号约束推理**：将时间地理学关键约束转化为可学习符号规则，训练阶段以约束损失内化时空常识，推理阶段经后校验与反馈修订过滤不合理假设。
- **评估**：在深圳真实轨迹数据上评估出行意图推断、可解释性与语义一致性。
</div>


</section>

<section class="project-detail" id="event-causnet" markdown="1">
<span class="project-index">PROJECT / 02</span>

## <span lang="en">Event-CausNet: Event-aware Traffic Forecasting with LLMs & Causal Inference</span><span lang="zh">Event-CausNet：融合 LLM 与因果推断的事件感知交通预测框架</span>
<div lang="en" markdown="1">
*Lead author · Submitted to KDD 2027*
- Used LLMs to extract severity, risk, impact weight, event count, and spatial proximity from unstructured event reports, combined with a spatio-temporal decay mechanism.
- Estimated Average Treatment Effects via propensity-score matching (stratified by event & time) to build a queryable multi-dimensional causal knowledge base.
- Designed a Dilated-TCN + causal-attention + causal-adjustment network; gracefully degrades to standard forecasting for non-event samples.
- Evaluated traffic forecasts on the BjTT dataset across multiple prediction horizons.
</div>
<div lang="zh" markdown="1">
*一作 · 投稿至 KDD 2027*
- **LLM 事件表征构建**：从非结构化事件文本提取严重程度、风险等级、影响权重、事件数量与空间邻近度，结合时空衰减机制构建可用于预测的事件表征。
- **因果推断校准**：基于倾向得分匹配，在事件与时段分层条件下估计事件对交通流的平均处理效应，形成可查询的多维因果知识库。
- **事件感知预测网络**：由 Dilated TCN、因果感知注意力与因果调整模块组成；对非事件样本可自动退化为常规预测模式。
- **评估**：在 BjTT 数据集上开展多预测时域的交通预测评估。
</div>

<a class="resource-link" href="https://arxiv.org/abs/2511.12769"><span lang="en">Read preprint</span><span lang="zh">阅读预印本</span> ↗</a>
</section>

<section class="project-detail" id="asknearby" markdown="1">
<span class="project-index">PROJECT / 03</span>

## <span lang="en">AskNearby: LLM-based Community Information Retrieval & Recommendation</span><span lang="zh">方元问问：基于 LLM 的社区信息检索与个性化推荐系统</span>
<div lang="en" markdown="1">
*Project lead · ACM SIGSPATIAL GeoAI'25 (Oral)*
- Built a multi-layer RAG pipeline for community scenarios: knowledge-graph retrieval → semantic-vector recall → geographic/spatial-context filtering.
- Built a cognitive-map recommendation model encoding users' neighborhood familiarity, preferences, and current context for personalized ranking.
- Deployed in Nantou Old Town and University Town (Shenzhen); significantly outperformed general LLM and map-based baselines; won the Baidu ERNIE Cup 3rd Prize and the Nanshan Startup Gold Award.
</div>
<div lang="zh" markdown="1">
*项目负责人 · ACM SIGSPATIAL GeoAI'25（Oral）*
- **多层检索链路**：面向社区场景，依次经社区知识图谱结构化检索、向量语义召回、地理距离与空间上下文约束过滤。
- **个性化推荐建模**：构建认知地图推荐模型，将用户对周边空间的熟悉度、兴趣偏好与当前场景上下文纳入排序。
- **落地效果**：「方元问问」已在深圳南头古城与大学城真实部署，检索准确率与推荐质量显著优于通用 LLM 与传统地图方案；获百度文心杯三等奖、南山区创业大赛金奖及创业基金支持。
</div>

<a class="resource-link" href="https://arxiv.org/abs/2512.02502"><span lang="en">Read preprint</span><span lang="zh">阅读预印本</span> ↗</a>
</section>

<section class="project-detail" id="st-proc" markdown="1">
<span class="project-index">PROJECT / 04</span>

## <span lang="en">ST-ProC: Graph-Prototypical Semi-Supervised Travel Mode Identification</span><span lang="zh">ST-ProC：面向稀疏标签场景的图原型半监督学习框架</span>
<div lang="en" markdown="1">
*Lead author · Preprint*
- Proposed a speed-preserving normalization (separate location/speed channels) and a dual-stream adaptive encoder with per-trajectory gated fusion.
- Under label rates as low as 5%, combined graph regularization, prototypical anchoring, and margin-aware pseudo-labeling to suppress noise propagation.
- On the GeoLife benchmark, outperformed strong baselines by **21.5%**; ablations confirmed each module's contribution.
</div>
<div lang="zh" markdown="1">
*一作 · 预印本*
- **表征设计**：提出速度保持归一化策略，对位置与速度通道分别处理；设计双流自适应编码器，按轨迹动态门控融合两路特征。
- **半监督框架**：在标签率低至 5% 的场景下，通过图正则化建模拓扑关系、原型锚定约束表征结构、边界感知伪标签筛选抑制噪声传播。
- **结果**：在 GeoLife 基准上较强基线提升 **21.5%**，消融实验验证各模块有效性。
</div>

<a class="resource-link" href="https://arxiv.org/abs/2511.13702"><span lang="en">Read preprint</span><span lang="zh">阅读预印本</span> ↗</a>
</section>

<section class="project-detail" id="mf-attnbilstm" markdown="1">
<span class="project-index">PROJECT / 05</span>

## <span lang="en">MF-AttnBiLSTM: Time-series Forecasting via Hybrid Signal Decomposition</span><span lang="zh">MF-AttnBiLSTM：基于混合信号分解的时序预测模型</span>
<div lang="en" markdown="1">
*Lead author · IEEE GLOBECOM 2025 (Oral)*
- Designed a decompose-then-predict framework: moving average for trend, DFT (top-K frequencies) for periodicity, decoupling trend/period/noise.
- Built a dual-stream BiLSTM + multi-head attention network modeling trend and period dynamics separately, then fusing predictions.
- Achieved SOTA MAE/SMAPE/RMSE on PeMS04 / PeMS07, with strong robustness on non-stationary stations.
</div>
<div lang="zh" markdown="1">
*一作 · IEEE GLOBECOM 2025（Oral）*
- **信号分解**：decompose-then-predict 框架——移动平均提取趋势，对去趋势残差施加 DFT 保留 top-K 频率重建周期信号，实现趋势/周期/噪声三分量解耦。
- **双流建模**：双流 BiLSTM + 多头注意力，分别建模趋势与周期分量的时序动态并融合预测。
- **结果**：在 PeMS04/PeMS07 上 MAE/SMAPE/RMSE 均达 SOTA，非平稳站点场景下鲁棒性尤为突出。
</div>


</section>

<section class="project-detail" id="other-projects" markdown="1">
<span class="project-index">PROJECT / 06</span>

## <span lang="en">Other Projects</span><span lang="zh">其他项目</span> {#other-projects-heading}
<div lang="en" markdown="1">
- **User-Equilibrium / System-Optimum Traffic Assignment** — personalized route sets via SP survey + discrete choice; validated on the Beijing network. *First Prize, National University Traffic Technology Competition.*
- **Multi-Agent Coordination for Unmanned Warehouses** — hierarchical scheduling (Colored TSP + MILP + A*), MCTS-based zoning, and DRL collision avoidance. *Second Prize, China MathorCup.*
</div>
<div lang="zh" markdown="1">
- **用户均衡 / 系统最优交通分配** —— 基于 SP 调查与离散选择构建个性化备选路径集，在北京路网仿真验证。*全国交通科技大赛一等奖。*
- **无人仓多智能体协同与避障** —— 分层调度（彩色 TSP + MILP + A*）、基于 MCTS 的动态分区、基于深度强化学习的避障策略。*全国 MathorCup 二等奖。*
</div>


</section>
</div>
