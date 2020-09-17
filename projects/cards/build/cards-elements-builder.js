const fs = require('fs-extra');
const concat = require('concat');
const del = require('del');

(async function build() {
  const files = ['./dist/cards/runtime.js', './dist/cards/polyfills.js', './dist/cards/main.js'];

  await del(['elements/cards.js']);
  await fs.ensureDir('elements');
  await concat(files, 'elements/cards.js');
})();
