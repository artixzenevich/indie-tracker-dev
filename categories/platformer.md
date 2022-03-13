---
layout: category
title: Экшен
permalink: /platformer/
pagination: 
  enabled: true
  category: platformer
  permalink: /:num/
---
<ul class="games-list">
    {% for post in site.categories.platformer %}
      <li class="game-card">
        <a href="{{ post.url }}">
          <img src="{{ post.image }}" alt="{{ post.title }}" width="245" height="245">
          <p>{{ post.title }}</p>
        </a>
      </li>
    {% endfor %}
</ul>
