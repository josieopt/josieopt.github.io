---
layout: default
title: Home
---

<!-- Search bar (same style as Posts page) -->
<input type="text" id="searchInput" placeholder="Search posts..." onkeyup="filterPosts()">

<ul id="postList">
  {% for post in site.posts %}
    <li class="post-preview-with-thumb">
      <div class="preview-text">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p>{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
        <a href="{{ post.url }}">Read more →</a>
      </div>
      {% assign first_img = post.content | split:'<img' | slice:1,1 | first %}
      {% if first_img %}
        {% assign img_src = first_img | split:'src="' | last | split:'"' | first %}
        <div class="preview-thumb">
          <img src="{{ img_src }}" alt="Thumbnail for {{ post.title }}">
        </div>
      {% endif %}
    </li>
  {% endfor %}
</ul>

<script src="search.js"></script>
