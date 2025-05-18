---
layout: default
title: Posts
---

<input type="text" id="searchInput" placeholder="Search posts..." onkeyup="filterPosts()">

<ul id="postList" class="post-archive-list">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small class="post-date">{{ post.date | date: "%b %-d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>

<script src="/search.js"></script>

