const fs = require('fs-extra');
const path = require('path');

const PATHS = {
  DOCS: path.resolve(__dirname, '../docs'),
  SCL_DOCS: path.resolve(__dirname, '../packages/shared-components/docs'),
  LAYOUT_DOCS: path.resolve(__dirname, '../packages/layouts/docs'),
};

console.info(`emptying docs directory ${PATHS.DOCS}`);

fs.ensureDirSync(PATHS.DOCS);
fs.emptyDirSync(PATHS.DOCS);

console.info(`copying SCL docs from ${PATHS.SCL_DOCS}`);

// shared components library is the primary docs site
fs.copySync(PATHS.SCL_DOCS, PATHS.DOCS);

console.info(`copying Layouts docs from ${PATHS.LAYOUT_DOCS}`);

// layout has its own subdomain
fs.copySync(PATHS.LAYOUT_DOCS, path.resolve(PATHS.DOCS, 'layouts'));

console.info('done.');
