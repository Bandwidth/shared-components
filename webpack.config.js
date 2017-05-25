const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('config');

const TARGET = [undefined, 'development', 'dev', 'test'].includes(process.env.NODE_ENV) ? 'development' : 'production';
const LIFECYCLE_EVENT = process.env.npm_lifecycle_event;
const THIRD_PARTY_DEPENDENCIES = /node_modules/;

const commonConfig = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/',
  },

  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: 'cat__[local]_[path]',
            },
          },
          'postcss-loader',
        ],
      },
      {
        resource: {
          test: /\.js$/,
          exclude: /.*node_modules((?!@bandwidth\/shared-components).)*$/,
        },
        use: [
          {
            loader: 'babel-loader',
            options: {
              // plugins: ['styled-components'],
              presets: ['react', 'es2015', 'stage-0'],
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|webp|ico)$/,
        use: 'file-loader',
      },
      {
        test: /\.(svg|woff|woff2|eot|otf|ttf)$/,
        use: 'file-loader',
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),

    new webpack.DefinePlugin({
      ENV: JSON.stringify(TARGET),
      CONFIG: JSON.stringify(config),
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      inject: 'body',
      filename: 'index.html',
      favicon: './src/favicon.ico',
    }),
  ],

  target: 'web',
};

if (LIFECYCLE_EVENT === 'start') {
  console.info(`webpack >>> host ${process.env.NODE_ENV}`);
  module.exports = merge.smart(commonConfig, {
    entry: [
      'webpack-dev-server/client?https://localhost:4001',
      'webpack/hot/dev-server',
      path.join(__dirname, 'src/app.js'),
    ],

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      publicPath: '/',
    },

    module: {
      rules: [
        {
          resource: {
            test: /\.js$/,
            or: [
              { exclude: THIRD_PARTY_DEPENDENCIES },
              {
                and: [
                  { include: SHARED_COMPONENTS },
                  { exclude: THIRD_PARTY_DEPENDENCIES },
                ],
              },
            ],
          },
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['react', ['es2015', { modules: false }], 'stage-0'],
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],

    devtool: '#source-maps',
  });
} else {
  console.info(`webpack >>> ${process.env.NODE_ENV} build`);
  module.exports = merge.smart(commonConfig, {
    entry: [path.join(__dirname, 'src/app.js')],

    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true,
        },
        compress: {
          screw_ie8: true,
          warnings: false,
        },
        comments: false,
        sourceMap: true,
      }),
    ],

    devtool: 'cheap-module-source-map',
  });
}
