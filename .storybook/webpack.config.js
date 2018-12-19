const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  defaultConfig.resolve.modules.push(path.resolve(__dirname, '..', 'src'));

  return defaultConfig;
};
