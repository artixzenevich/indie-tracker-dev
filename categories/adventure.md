---
layout: category
title: Экшен
permalink: /adventure/
pagination: 
  enabled: true
  category: adventure
  permalink: /:num/
---
<ul class="games-list">
    {% for post in site.categories.adventure %}
      <li class="game-card">
        <a href="{{ post.url }}">
          <img src="{{ post.image }}" alt="{{ post.title }}" width="245" height="245">
          <p>{{ post.title }}</p>
        </a>
      </li>
    {% endfor %}
</ul>
