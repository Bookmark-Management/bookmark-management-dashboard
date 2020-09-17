const fs = require('fs-extra');
const concat = require('concat');
const del = require('del');

(async function build() {
  const files = ['./dist/manage-groups/runtime.js', './dist/manage-groups/polyfills.js', './dist/manage-groups/main.js'];

  await del(['elements/manage-groups.js']);
  await fs.ensureDir('elements');
  await concat(files, 'elements/manage-groups.js');
})();
