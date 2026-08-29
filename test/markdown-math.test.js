const assert = require('node:assert/strict');
const path = require('node:path');
const { test } = require('node:test');

const config = require('../docs/.vuepress/config');
const vuepressEntry = require.resolve('vuepress');
const createMarkdown = require(require.resolve('@vuepress/markdown', {
  paths: [path.dirname(vuepressEntry)]
}));

test('renders inline and block formulas as KaTeX HTML', () => {
  assert.equal(typeof config.markdown.extendMarkdown, 'function');

  const md = createMarkdown({
    ...config.markdown,
    afterInstantiate: config.markdown.extendMarkdown
  });
  const { html } = md.render('Inline: $a^2 + b^2 = c^2$\n\n$$\n\\frac{1}{2}\n$$');

  assert.match(html, /katex/);
  assert.match(html, /mfrac/);
});
