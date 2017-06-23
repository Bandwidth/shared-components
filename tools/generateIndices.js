const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const posix = path.posix;

const contents = [`
/**
 * THIS IS A GENERATED FILE
 *
 * Please see /tools/generateIndices.js to regenerate after structural changes or component additions / deletions
 */

`];
const exportItems = [];

const src = path.resolve(__dirname, '..', 'src');

const appendExports = (dir, subDirs, files) => {
  const relativeToSrc = posix.relative(src, dir);
  const dirName = dir.split(posix.sep).pop();
  if (files.includes('index.js') && dir !== src) {
    exportItems.push({ name: dirName, path: relativeToSrc });
  }

  files.forEach((fileName) => {
    // skip non-javascript files
    if (fileName.split('.').pop() !== 'js') {
      return;
    }

    const name = fileName.replace('.js', '');
    // note: posix.resolve did not work correctly for this. Falling back to manual resolution.
    const relativeFilePath = relativeToSrc + posix.sep + name;
    if (
      (_.upperFirst(fileName) === fileName || ['theme', 'extensions'].includes(dirName)) &&
      name !== dirName
    ) {
      exportItems.push({ name, path: relativeFilePath });
    }
  });
};

const walk = (src) => {
  const filenames = fs.readdirSync(src);
  const dirInfo = filenames.reduce((acc, name) => {
    const filePath = posix.join(src, name);
    if (fs.statSync(filePath).isDirectory()) {
      acc.dirs.push(name);
    } else {
      acc.files.push(name);
    }

    return acc;
  }, { files: [], dirs: [] });

  appendExports(src, dirInfo.dirs, dirInfo.files);

  dirInfo.dirs.forEach((dir) => {
    const absPath = posix.join(src, dir);
    walk(absPath);
  });
}

walk(src, appendExports);

// validate exports
const exportNames = exportItems.map((item) => item.name);
const uniqueNames = _.uniq(exportNames);
if (uniqueNames.length !== exportNames.length) {
  const duplicatedNames = [].concat(exportNames);
  uniqueNames.forEach((name) => duplicatedNames.splice(duplicatedNames.indexOf(name), 1));
  throw new Error(`Exports do not have unique names. Check [${duplicatedNames.join(', ')}].`);
}
if (exportNames.includes('default')) {
  throw new Error('You cannot name a file \'default\'; please rename this file.');
}

exportItems.forEach(({ name, path }) => {
  contents.push(`export { default as ${name} } from './${path}';`)
});

fs.writeFileSync(path.resolve(src, 'index.js'), contents.join('\n'));
