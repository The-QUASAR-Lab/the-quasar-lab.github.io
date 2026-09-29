---
layout: page
permalink: /people/
title: People
description: Members of the QUASAR Lab.
nav: true
nav_order: 1
_styles: >
  .people-group { margin-top: 2rem; }
  .people-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2rem 2.5rem; margin-top: 1rem; }
  .person { display: flex; gap: 1.1rem; align-items: flex-start; }
  .person-photo, .person-initials { flex: 0 0 115px; width: 115px; height: 140px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); }
  .person-photo { object-fit: cover; }
  .person-initials { display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 300;
    color: var(--global-theme-color); background: var(--global-code-bg-color); }
  .person-info { min-width: 0; }
  .person-name { margin: 0 0 0.35rem; font-size: 1.2rem; color: var(--global-theme-color); }
  .person-meta { margin: 0; font-style: italic; font-size: 0.9rem; color: var(--global-text-color-light); overflow-wrap: anywhere; }
  .person-list { margin: 0.5rem 0 0; padding-left: 1.1rem; font-size: 0.9rem; }
  .person-list li { margin: 0 0 0.15rem; }
  .person-links { margin-top: 0.4rem; }
  .person-links a { margin-right: 0.8rem; }
  @media (max-width: 768px) { .people-grid { grid-template-columns: 1fr; } }
---

{% for group in site.data.people.groups %}

<div class="people-group">
  <h2>{{ group.title }}</h2>
  <div class="people-grid">
  {% for p in group.members %}
    <div class="person">
      {% if p.image %}
      <img class="person-photo" src="{{ p.image | prepend: '/assets/img/people/' | relative_url }}" alt="Photo of {{ p.name }}" loading="lazy">
      {% else %}
      {% assign parts = p.name | split: ' ' %}
      <div class="person-initials" aria-hidden="true">{{ parts.first | slice: 0 }}{{ parts.last | slice: 0 }}</div>
      {% endif %}
      <div class="person-info">
        <h3 class="person-name">{% if p.website %}<a href="{{ p.website }}">{{ p.name }}</a>{% else %}{{ p.name }}{% endif %}</h3>
        {% if p.role %}<p class="person-meta">{{ p.role }}{% if p.joined %}, joined {{ p.joined }}{% endif %}</p>{% endif %}
        {% if p.email %}<p class="person-meta">email: <a href="mailto:{{ p.email | downcase }}">{{ p.email | downcase }}</a></p>{% endif %}
        {% if p.education or p.interests or p.bio %}
        <ul class="person-list">
          {% for degree in p.education %}<li>{{ degree }}</li>{% endfor %}
          {% if p.interests %}<li>{{ p.interests }}</li>{% endif %}
          {% if p.bio %}<li>{{ p.bio | markdownify | remove: '<p>' | remove: '</p>' }}</li>{% endif %}
        </ul>
        {% endif %}
        {% if p.scholar or p.github or p.linkedin %}
        <div class="person-links">
          {% if p.scholar %}<a href="https://scholar.google.com/citations?user={{ p.scholar }}" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>{% endif %}
          {% if p.github %}<a href="https://github.com/{{ p.github }}" title="GitHub"><i class="fa-brands fa-github"></i></a>{% endif %}
          {% if p.linkedin %}<a href="https://www.linkedin.com/in/{{ p.linkedin }}" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>{% endif %}
        </div>
        {% endif %}
      </div>
    </div>
  {% endfor %}
  </div>
</div>
{% endfor %}
