const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// for serve history fallback
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');

module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',

  entry: [require.resolve('./polyfills'), path.join(__dirname, './index.js')],
  output: {
    path: path.resolve(__dirname, '..'),
    filename: 'bundle.js',
  },

  resolve: {
    alias: {
      '@bandwidth/shared-components': path.resolve(__dirname, '../../src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['last 2 versions'],
                  },
                },
              ],
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/transform-runtime',
              '@babel/proposal-object-rest-spread',
              '@babel/proposal-class-properties',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|webp|ico|svg|woff2?|eot|otf|ttf)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      inject: 'body',
      filename: 'index.html',
    }),
    new webpack.NamedModulesPlugin(),
  ],

  serve: {
    content: [__dirname],
    add: (app, middleware, options) => {
      app.use(convert(history()));
    },
  },
};
