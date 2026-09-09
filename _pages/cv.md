---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
hide_title: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="cv-toolbar"><h1 class="page__title">Curriculum vitae</h1><button class="academic-button academic-button--outline" type="button" data-print-cv>Print / Save PDF <span aria-hidden="true">↗</span></button></div>
<div class="cv">
  <header class="cv__intro">
    <p class="cv-print-name">{{ site.name }} · {{ site.author.email }}</p>
    <p class="cv__eyebrow">Aerial Robotics · Embodied Autonomy</p>
    <h2 class="cv__headline">Ph.D. Candidate <span>in Aerospace Engineering</span></h2>
    <p class="cv__summary">Building autonomous aerial robots that can <strong>perceive</strong>, <strong>plan</strong>, and <strong>physically interact</strong> with the real world.</p>
    <div class="cv__focus" aria-label="Research focus">
      <span>Aerial Manipulation</span>
      <span>Robot Perception</span>
      <span>Planning &amp; Control</span>
    </div>
    <nav class="cv__contact" aria-label="CV contact links">
      <a href="mailto:{{ site.author.email }}">Email</a>
      <a href="https://github.com/{{ site.author.github }}">GitHub</a>
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}">LinkedIn</a>
    </nav>
  </header>

  <section class="cv__section" aria-labelledby="cv-education">
    <div class="cv__section-heading">
      <span>01</span>
      <h2 id="cv-education">Education</h2>
    </div>
    <div class="cv__timeline">
      <article class="cv__item">
        <p class="cv__date">2024 — Present</p>
        <div class="cv__item-body">
          <h3>Ph.D. in Aerospace Engineering</h3>
          <p class="cv__institution">Penn State University <span>· University Park, PA</span></p>
          <p>Research focus: aerial manipulation, embodied autonomy, robot perception, planning, and control.</p>
        </div>
      </article>
      <article class="cv__item">
        <p class="cv__date">2020 — 2024</p>
        <div class="cv__item-body">
          <h3>B.Eng. in Intelligent Science and Technology</h3>
          <p class="cv__institution">Nankai University <span>· Tianjin, China</span></p>
        </div>
      </article>
    </div>
  </section>

  <section class="cv__section" aria-labelledby="cv-experience">
    <div class="cv__section-heading">
      <span>02</span>
      <h2 id="cv-experience">Experience</h2>
    </div>
    <div class="cv__timeline">
      <article class="cv__item">
        <p class="cv__date">2024 — Present</p>
        <div class="cv__item-body">
          <h3>Research Assistant</h3>
          <p class="cv__institution">Department of Aerospace Engineering, Penn State University</p>
        </div>
      </article>
      <article class="cv__item">
        <p class="cv__date">Spring 2025</p>
        <div class="cv__item-body">
          <h3>Teaching Assistant</h3>
          <p class="cv__institution">Penn State University</p>
          <p>AERSP 304 · System Dynamics and Control</p>
        </div>
      </article>
      <article class="cv__item">
        <p class="cv__date">Fall 2024</p>
        <div class="cv__item-body">
          <h3>Teaching Assistant</h3>
          <p class="cv__institution">Penn State University</p>
          <p>AERSP 313 · Aerospace Analysis</p>
        </div>
      </article>
    </div>
  </section>

  <section class="cv__section" aria-labelledby="cv-publications">
    <div class="cv__section-heading">
      <span>03</span>
      <h2 id="cv-publications">Selected Publications</h2>
    </div>
    <div class="cv__publications">
      {% assign publication_number = 0 %}
      {% for post in site.publications reversed %}
        {% if post.title %}
          {% assign publication_number = publication_number | plus: 1 %}
          <article class="cv-publication">
            <span class="cv-publication__number">{{ publication_number | prepend: '0' | slice: -2, 2 }}</span>
            <div class="cv-publication__body">
              <h3>{% if post.paperurl %}<a href="{{ post.paperurl }}">{{ post.title }}</a>{% else %}{{ post.title }}{% endif %}</h3>
              {% if post.authors %}
                {% assign highlighted_authors = post.authors %}
                {% for author in post.equal_contributors %}
                  {% assign marked_author = author | append: '<sup class="equal-contribution-mark">*</sup>' %}
                  {% assign highlighted_authors = highlighted_authors | replace: author, marked_author %}
                {% endfor %}
                {% assign highlighted_authors = highlighted_authors | replace: 'Y. Jiang', '<strong class="cv-publication__me">Y. Jiang</strong>' %}
                <p class="cv-publication__authors">{{ highlighted_authors }}</p>
                {% if post.equal_contributors %}<p class="cv-publication__equal-note"><span>*</span> Equal contribution</p>{% endif %}
              {% endif %}
              <p class="cv-publication__venue"><i>{{ post.venue }}</i> · {{ post.date | date: "%Y" }}</p>
              <div class="cv-publication__links">
                {% if post.paperurl %}<a href="{{ post.paperurl }}">Paper</a>{% endif %}
                {% if post.projecturl %}<a href="{% unless post.projecturl contains '://' %}{{ base_path }}{% endunless %}{{ post.projecturl }}">Project</a>{% endif %}
                {% if post.codeurl %}<a href="{{ post.codeurl }}">Code</a>{% endif %}
              </div>
            </div>
          </article>
        {% endif %}
      {% endfor %}
    </div>
  </section>

  <section class="cv__section" aria-labelledby="cv-skills">
    <div class="cv__section-heading">
      <span>04</span>
      <h2 id="cv-skills">Technical Skills</h2>
    </div>
    <div class="cv__skill-groups">
      <div class="cv__skill-group">
        <h3>Programming</h3>
        <div class="cv__tags"><span>Python</span><span>C++</span><span>C</span><span>MATLAB</span></div>
      </div>
      <div class="cv__skill-group">
        <h3>Robotics</h3>
        <div class="cv__tags"><span>ROS</span><span>Perception</span><span>Planning</span><span>Control</span></div>
      </div>
      <div class="cv__skill-group">
        <h3>Hardware &amp; Design</h3>
        <div class="cv__tags"><span>SolidWorks</span><span>STM32</span></div>
      </div>
    </div>
  </section>
</div>
