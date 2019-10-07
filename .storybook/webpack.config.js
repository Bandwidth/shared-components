const path = require('path');

module.exports = ({ config }) => {
  // Extend defaultConfig as you need.

  config.resolve.modules.push(path.resolve(__dirname, '..', 'src'));

  return config;
};
