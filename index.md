---
layout: default
title: Home
---

<input type="text" id="searchInput" placeholder="Search posts..." onkeyup="filterPosts()">

<ul id="postList">
  {% for post in site.posts %}
    <li class="post-preview">
      <a href="{{ post.url }}">
        {% if post.content contains 'img' %}
          {{ post.content | split:'<img' | last | split:'>' | first | prepend:'<img' | append:'>' }}
        {% endif %}
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt }}</p>
      </a>
    </li>
  {% endfor %}
</ul>

<script src="search.js"></script>
