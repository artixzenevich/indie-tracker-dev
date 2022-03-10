---
layout: category
title: Все игры
permalink: /all/
pagination: 
  enabled: true
  permalink: /:num/
---
<div class="content">     
  <h2>Все игры</h2>
  <ul class="games-list">
    {% for post in site.categories.all %}
      <li class="game-card">
        <a href="{{ post.url }}">
          <img src="{{ post.image }}" alt="{{ post.title }}" width="200" height="200">
          <p>{{ post.title }}</p>
        </a>
      </li>
    {% endfor %}
  </ul>
</div>