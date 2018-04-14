---
title: Pragmatic Versioning
short_title: Spec
excerpt: Latest released specification
icon:
  name: icon_documents
color: blue
layout: spec
---
{% for spec in site.spec %}{% if spec.version == site.latest %}{{ spec.content }}{% break %}{% endif %}{% endfor %}