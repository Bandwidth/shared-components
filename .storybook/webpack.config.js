const TsConfigPathsPlugin = require('awesome-typescript-loader')
  .TsConfigPathsPlugin;

const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  defaultConfig.resolve.modules.push(path.resolve(__dirname, '..', 'src'));

  defaultConfig.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'awesome-typescript-loader',
  });
  defaultConfig.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];
  defaultConfig.resolve.plugins = [
    new TsConfigPathsPlugin({
      tsconfig: 'tsconfig.json',
      compiler: 'typescript',
    }),
  ];

  return defaultConfig;
};
