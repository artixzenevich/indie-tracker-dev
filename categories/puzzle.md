---
layout: category
title: Головоломки
permalink: /puzzle/
pagination: 
  enabled: true
  category: puzzle
  permalink: /:num/
---

<ul class="games-list">
    {% for post in site.categories.puzzle %}
      <li class="game-card">
        <a href="{{ post.url }}">
          <img src="{{ post.image }}" alt="{{ post.title }}" width="245" height="245">
          <p>{{ post.title }}</p>
        </a>
      </li>
    {% endfor %}
</ul>