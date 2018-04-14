---
title: Introduction
excerpt: What is PragVer about?
icon:
  type: fa
  name: fa-paper-plane
color: green
---

In the world of software management there existed a dread place called
"dependency hell". The bigger your system grew and the more packages you
integrated into your software, the more likely you were to find yourself, one
day, in that pit of despair.

In systems with many dependencies, releasing new package versions used to
quickly become a nightmare. If the dependency specifications were too tight, you
were in danger of version lock (the inability to upgrade a package without
having to release new versions of every dependent package). If dependencies were
specified too loosely, you would inevitably be bitten by version promiscuity
(assuming compatibility with more future versions than is reasonable).
Dependency hell was where you were when version lock and/or version promiscuity
prevented you from easily and safely moving your project forward.

As a solution to this problem, [Tom Preston-Werner](http://tom.preston-werner.com)
proposed [**Semantic Versioning**](https://semver.org), a simple set of rules
and requirements that dictated how version numbers are assigned and incremented.
Under that scheme, version numbers and the way they changed conveyed meaning
about the underlying code and what had been modified from one version to the
next. Over the years, **SemVer** has become the *de facto* standard for
describing software versions in many communities.

**Pragmatic Versioning** takes up the torch and tries to solve some of the
issues that many artifact providers experience when they put **SemVer** into
practice. Instead of defining a completely new versioning system, it is built on
top of **Semantic Versioning** by adding a bit more granularity to the
backwards-incompatibility level that can be expressed through a version
identifier.
