import replace from 'rollup-plugin-replace';
// import typescript from 'rollup-plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const NODE_ENV = process.env.NODE_ENV || 'development';
const outputFile =
  NODE_ENV === 'production' ? './dist/prod.js' : './dist/dev.js';

module.exports = {
  input: './compiled/index.js',
  output: [
    {
      file: outputFile,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    nodeResolve({
      customResolveOptions: {
        moduleDirectory: 'compiled',
      },
    }),
    // typescript({
    //   exclude: 'node_modules/**',
    //   extensions: ['.tsx', '.ts', '.js', '.jsx'],
    // }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    }),
    commonjs({
      namedExports: {
        'node_modules/react-collapse/lib/index.js': [
          'Collapse',
          'UnmountClosed',
        ],
        'node_modules/react-dates/index.js': [
          'SingleDatePicker',
          'DateRangePicker',
        ],
        'node_modules/react-dnd/lib/index.js': [
          'DragSource',
          'DragDropContext',
          'DropTarget',
          'DragLayer',
        ],
        'node_modules/react-is/index.js': ['isForwardRef'],
      },
      include: /node_modules/,
    }),
  ],
};
