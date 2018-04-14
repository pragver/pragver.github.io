---
title: Why?
excerpt: Why use PragVer?
icon:
  name: icon_question_alt
color: pink
---

Thanks to [**Semantic Versioning**](https://semver.org), the idea of using
version identifiers to communicate intentions to the consumers of artifacts has
become widely accepted. It relieved consumers of the "dependency hell" and
allowed for an automatic handling of dependencies.

However, some artifact providers felt that SemVer was not flexible enough to
express finer-grained levels of backwards-incompatibility, it wasn't specially
suited for more complex releasing cycles, or even that it discouraged rapid
development and fast iteration.

**Pragmatic Versioning** accepts that sometimes relatively frequent
backwards-incompatible changes are required as a normal part of the evolution of
an artifact, and doesn't treat these phases as an exception in which versioning
conventions should be dismissed. Instead of that, the providers have an
additional semantic number available to express not simply
backwards-incompatibility but a wider type of potentially conflicting
modifications, that can be used to modulate the releases in a more meaningful
way.
