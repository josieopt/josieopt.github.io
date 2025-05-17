---
layout: default
title: Home
---

<input type="text" id="searchInput" placeholder="Search posts..." onkeyup="filterPosts()">

<ul id="postList">
  {% for post in site.posts %}
    <li class="post-preview">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
      <a href="{{ post.url }}">Read more →</a>
    </li>
  {% endfor %}
</ul>

<script src="search.js"></script>
