const replace = require('rollup-plugin-replace');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');

const NODE_ENV = process.env.NODE_ENV || 'development';
const outputFile =
  NODE_ENV === 'production' ? './dist/prod.js' : './dist/dev.js';
const outputModule =
  NODE_ENV === 'production' ? './dist/prod.esm.js' : './dist/dev.esm.js';

module.exports = {
  input: './src/index.js',
  output: [{
    file: outputFile,
    format: 'cjs',
  }, {
    file: outputModule,
    format: 'esm',
  }],
  external: id => /^react|react-dom|styled-components/.test(id),
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    nodeResolve(),
    commonjs(),
  ],
};
