---
layout: page
permalink: /people/
title: people
description: Members of the QUASAR Lab.
nav: true
nav_order: 1
_styles: >
  .people-group { margin-top: 2rem; }
  .person { display: flex; gap: 1.5rem; align-items: flex-start; padding: 1.25rem 0; border-bottom: 1px solid var(--global-divider-color); }
  .person:last-child { border-bottom: none; }
  .person-photo { flex: 0 0 140px; width: 140px; height: 140px; border-radius: 8px; object-fit: cover; }
  .person-initials { flex: 0 0 140px; width: 140px; height: 140px; border-radius: 8px; display: flex; align-items: center; justify-content: center;
    font-size: 2.5rem; font-weight: 300; color: var(--global-theme-color); background: var(--global-code-bg-color); }
  .person-name { margin: 0; font-size: 1.25rem; }
  .person-role { margin: 0.15rem 0 0.5rem; color: var(--global-text-color-light); }
  .person-bio p { margin-bottom: 0.5rem; }
  .person-links a { margin-right: 0.9rem; font-size: 1.1rem; }
  @media (max-width: 576px) { .person { flex-direction: column; } }
---

{% for group in site.data.people.groups %}

<div class="people-group">
  <h2>{{ group.title }}</h2>
  {% for p in group.members %}
  <div class="person">
    {% if p.image %}
    <img class="person-photo" src="{{ p.image | prepend: '/assets/img/people/' | relative_url }}" alt="Photo of {{ p.name }}" loading="lazy">
    {% else %}
    {% assign parts = p.name | split: ' ' %}
    <div class="person-initials" aria-hidden="true">{{ parts.first | slice: 0 }}{{ parts.last | slice: 0 }}</div>
    {% endif %}
    <div class="person-info">
      <h3 class="person-name">{{ p.name }}</h3>
      {% if p.role %}<p class="person-role">{{ p.role }}</p>{% endif %}
      {% if p.bio %}<div class="person-bio">{{ p.bio | markdownify }}</div>{% endif %}
      <div class="person-links">
        {% if p.email %}<a href="mailto:{{ p.email }}" title="Email"><i class="fa-solid fa-envelope"></i></a>{% endif %}
        {% if p.website %}<a href="{{ p.website }}" title="Website"><i class="fa-solid fa-globe"></i></a>{% endif %}
        {% if p.scholar %}<a href="https://scholar.google.com/citations?user={{ p.scholar }}" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>{% endif %}
        {% if p.github %}<a href="https://github.com/{{ p.github }}" title="GitHub"><i class="fa-brands fa-github"></i></a>{% endif %}
        {% if p.linkedin %}<a href="https://www.linkedin.com/in/{{ p.linkedin }}" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>{% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>
{% endfor %}
