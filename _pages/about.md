---
layout: home
permalink: /
title: "Yufei Jiang"
excerpt: "Ph.D. candidate at Penn State researching aerial manipulation, robot perception, and learning-based planning."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<section class="home-hero" aria-labelledby="intro-title">
  <div class="home-hero__copy">
    <p class="eyebrow">Robotics &amp; Embodied Intelligence</p>
    <h1 id="intro-title">Yufei Jiang</h1>
    <p class="home-hero__position">Ph.D. Candidate in Aerospace Engineering<br><span>Penn State University</span></p>
    <p class="home-hero__statement">Enabling aerial robots to perceive, plan, and interact with the world.</p>
    <p class="home-hero__bio">My research focuses on <strong>aerial manipulation</strong>: moving flying robots beyond observation toward physical interaction. I work at the intersection of perception, planning, control, and learning to build reliable autonomous systems.</p>
    <div class="home-hero__actions">
      <a class="academic-button" href="{{ base_path }}/cv/">View CV <span aria-hidden="true">↗</span></a>
      <a class="academic-button academic-button--outline" href="mailto:{{ site.author.email }}">Get in touch <span aria-hidden="true">↗</span></a>
    <nav class="profile-links" aria-label="Academic and professional profiles">
      <a href="https://github.com/{{ site.author.github }}">GitHub <span aria-hidden="true">↗</span></a>
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}">LinkedIn <span aria-hidden="true">↗</span></a>
      {% if site.author.googlescholar %}<a href="{{ site.author.googlescholar }}">Google Scholar <span aria-hidden="true">↗</span></a>{% endif %}
    </nav>
    </div>
  </div>
  <figure class="home-hero__portrait">
    <img src="{{ base_path }}/images/{{ site.author.avatar }}" alt="Yufei Jiang" width="4000" height="3000" fetchpriority="high">
    <figcaption><span>Penn State University</span>University Park, Pennsylvania</figcaption>
  </figure>
</section>

<section class="home-section" aria-labelledby="research-title">
  <div class="section-heading"><h2 id="research-title">Research interests</h2><span>From hardware to embodied intelligence</span></div>
  <div class="research-grid">
    <article><span class="research-grid__number">01</span><h3>Hardware &amp; whole-body control</h3><p>Designing aerial manipulation hardware and whole-body controllers, including model predictive control (MPC), to coordinate flight and manipulation during physical interaction.</p></article>
    <article><span class="research-grid__number">02</span><h3>Perception &amp; planning</h3><p>Exploring visual and LiDAR perception, diverse environment representations, and model-based and learning-based planning for aerial manipulation in complex environments.</p></article>
    <article><span class="research-grid__number">03</span><h3>Embodied intelligence</h3><p>Exploring how large language models (LLMs) and vision-language-action (VLA) models connect high-level reasoning, task planning, and physical action for intelligent aerial manipulation.</p></article>
  </div>
</section>

{% include news.html %}

<section class="home-section" aria-labelledby="selected-title">
  <div class="section-heading"><h2 id="selected-title">Selected publications</h2><a href="{{ base_path }}/publications/">All publications <span aria-hidden="true">↗</span></a></div>
  <div class="publication-list">
    {% assign selected_publications = site.publications | where: 'selected', true | sort: 'selected_order' %}
    {% for post in selected_publications %}
      {% include publication-card.html publication=post %}
    {% endfor %}
  </div>
  <a class="text-link" href="{{ base_path }}/projects/">Explore the research projects <span aria-hidden="true">→</span></a>
</section>

<section class="home-closing" aria-label="Background and contact">
  <div><p class="eyebrow">Beyond the lab</p><h2>A little more about me</h2><p>Outside research, I enjoy playing badminton, basketball, and tennis. I also love cooking, trying new recipes, and sharing good food with friends. I’m always happy to join a game or swap recipe ideas!</p></div>
  <div><p class="eyebrow">Get in touch</p><h2>Let’s connect.</h2><p>I’m happy to chat about research, collaboration, and professional opportunities. Reach out by email or connect with me on LinkedIn.</p><div class="home-closing__links"><a class="text-link" href="mailto:{{ site.author.email }}">{{ site.author.email }} <span aria-hidden="true">↗</span></a><a class="text-link" href="https://www.linkedin.com/in/{{ site.author.linkedin }}" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a></div></div>
</section>

{% include bibtex-dialog.html %}
