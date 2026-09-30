---
permalink: /life/
title: Beyond research
title_zh: 研究之外
eyebrow: A LITTLE MORE HUMAN
description: "Drums, rock music, live shows, and a good book."
description_zh: "架子鼓、摇滚、现场，以及一本好书。"
---
<section class="life-intro" aria-label="Life beyond research">
  <p class="life-motto">Curiosity.<br>Imagination.<br>Exploration.<br><em>And—let’s dance!</em></p>
  <div class="life-intro-copy"><p><span lang="en">{{ site.data.life.intro_en }}</span><span lang="zh">{{ site.data.life.intro_zh }}</span></p><a class="text-link" href="mailto:{{ site.author.email }}"><span lang="en">Send me a song, a book, or a hello</span><span lang="zh">分享一首歌、一本书，或打个招呼</span>{% include icon.html name="arrow" %}</a></div>
</section>
<div class="life-grid">
{% for interest in site.data.life.interests %}
<section class="life-interest life-{{ interest.id }}" aria-labelledby="life-{{ interest.id }}-title">
  <div class="life-art" aria-hidden="true"><span class="life-art-word">{{ interest.word }}</span><span class="life-art-lines"></span><span class="life-index">{{ interest.number }} / OFF THE CLOCK</span></div>
  <h2 id="life-{{ interest.id }}-title"><span lang="en">{{ interest.en }}</span><span lang="zh">{{ interest.zh }}</span></h2>
  <p><span lang="en">{{ interest.desc_en }}</span><span lang="zh">{{ interest.desc_zh }}</span></p>
</section>
{% endfor %}
</div>
