import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import url from "rollup-plugin-url"

const writeoptions = {dest: "output/output.js"}
const urlPlugin = url({
  limit: 10 * 1024, // inline files < 10k, copy files > 10k
  include: ["**/*.svg", "**/*.eot", "**/*.woff2", "**/*.woff", "**/*.ttf"], // defaults to .svg, .png, .jpg and .gif files
  emitFiles: true // defaults to true
})

module.exports = {
  input: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    nodeResolve({
      jsnext: true,
      main: true,
    }),

    commonjs({
        namedExports: {
            // left-hand side can be an absolute path, a path
            // relative to the current directory, or the name
            // of a module in node_modules
            'react-dates': [ 'DateRangePicker','DateRangePickerShape', 'SingleDatePicker', 'SingleDatePickerShape' ],
            'react-dnd': ['DropTarget', 'DragSource', 'DragLayer', 'DragDropContext'],
            'react-collapse':['UnmountClosed', 'Collapse']
          }
    }),
    urlPlugin
  ],
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.es.js',
      format: 'esm',
    },
  ],
  external: [
    'prop-types',
    'react',
    'react-dom',
    'styled-components',
    'recompose',
    'react-router-dom',
    'lodash'
  ],
};
