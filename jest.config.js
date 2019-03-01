module.exports = {
  setupFiles: ['./.jest/setup.js'],
  setupFilesAfterEnv: [
    './node_modules/jest-enzyme/lib/index.js',
    './.jest/setupAfterEnv.js',
  ],
};
