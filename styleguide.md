---
title: Style Guide
---

### Text Files

- The file encoding must be [**UTF-8**](https://en.wikipedia.org/wiki/UTF-8).
- Line endings must be **Unix-style** (LF), as opposed to Windows-style (CRLF)
  or Macintosh-style (CR). Git should handle this automatically for you via the
  project `.gitattributes` file.
- **Trailing white space should be removed** from the end of lines.
- Lines should **word-wrap** at a non-strict 120 character length limit.
  Exceptions can be made for things like readability.

### Documentation Format

- All documentation must be written in
  [**Markdown format**](https://en.wikipedia.org/wiki/Markdown) adhering to
  [**CommonMark specification**](http://commonmark.org/).
- [**Kramdown**](https://kramdown.gettalong.org/) extensions may be used.
- Specification files must contain a YAML
  [**front matter block**](https://jekyllrb.com/docs/frontmatter/).

### Content Principles

- **Approachability**: Don't assume reader has prior knowledge.
- **Brevity**: Keep it simple, link to outside content for deeper dives.
- **Curation**: Amplify community best practices vs. any individual's point of
  view.
