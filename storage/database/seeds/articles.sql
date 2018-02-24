INSERT INTO articles(
  slug,
  title,
  content,
  author_id
  ) values(
  'post-1',
  'Test 1',
  '# head 1
# Highlight.js

[![Build Status](https://travis-ci.org/isagalaev/highlight.js.svg?branch=master)](https://travis-ci.org/isagalaev/highlight.js)

Highlight.js is a syntax highlighter written in JavaScript. It works in
the browser as well as on the server. It works with pretty much any
markup, doesn’t depend on any framework and has automatic language
detection.

## Getting Started

The bare minimum for using highlight.js on a web page is linking to the
library along with one of the styles and calling

```html
<link rel="stylesheet" href="/path/to/styles/default.css">
<script src="/path/to/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
```

This will find and highlight code inside of `<pre><code>` tags; it tries
to detect the language automatically. If automatic detection doesn’t
work for you, you can specify the language in the `class` attribute:

```html
<pre><code class="html">...</code></pre>
```

**UU**',
  1
);

INSERT INTO articles(
  slug,
  title,
  content,
  author_id
  ) values(
  'post-2',
  'Test 2',
  '## head 2
`Block 2`
Test
__I__
**UU**
  ',
  2
);

INSERT INTO articles(
  slug,
  title,
  content,
  author_id
  ) values(
  'post-3',
  'Test 3',
  '### HEAD 3
```python
Block 3
TESTSTST
```
Test
_I_**UU**',
  2
);

