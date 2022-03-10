---
layout: category
title: Симуляторы
permalink: /simulator/
pagination: 
  enabled: true
  category: simulator
  permalink: /:num/
---

<ul class="games-list">
    {% for post in site.categories.simulator %}
      <li class="game-card">
        <a href="{{ post.url }}">
          <img src="{{ post.image }}" alt="{{ post.title }}" width="245" height="245">
          <p>{{ post.title }}</p>
        </a>
      </li>
    {% endfor %}
</ul>