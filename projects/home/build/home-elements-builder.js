const fs = require('fs-extra');
const concat = require('concat');
const del = require('del');

(async function build() {
  const files = ['./dist/home/runtime.js', './dist/home/polyfills.js', './dist/home/main-es2015.js'];

  await del(['elements/home.js']);
  await fs.ensureDir('elements');
  await concat(files, 'elements/home.js');
})();
