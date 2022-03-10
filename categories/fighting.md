---
layout: category
title: Файтинги
permalink: /fighting/
pagination: 
  enabled: true
  category: fighting
  permalink: /:num/
---

<ul class="games-list">
    {% for post in site.categories.fighting %}
      <li class="game-card">
        <a href="{{ post.url }}">
          <img src="{{ post.image }}" alt="{{ post.title }}" width="245" height="245">
          <p>{{ post.title }}</p>
        </a>
      </li>
    {% endfor %}
</ul>