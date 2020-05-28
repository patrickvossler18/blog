---
layout: page
permalink: /publications/
title: publications and manuscripts
description: 
years: [2020]
---


{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography --query @*[year={{y}}]* %}
{% endfor %}
