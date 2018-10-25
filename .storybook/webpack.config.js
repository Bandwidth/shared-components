const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  defaultConfig.resolve.modules.push(path.resolve(__dirname, 'src'));

  console.log('DefaultConfig', defaultConfig);
  return defaultConfig;
};

// module.exports = {
//   resolve: {
//     modules: ['node_modules', path.resolve(__dirname, '../src')],
//   },
// };
