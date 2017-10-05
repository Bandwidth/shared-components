const path = require('path');

module.exports = {
  title: 'Bandwidth Shared React Components',
  styleguideDir: "docs",
  sections: [
    {
      name: 'Components',
      components: 'src/components/**/[A-Z]*.js',
    },
    {
      name: 'Flow',
      components: 'src/layouts/Flow/**/[A-Z]*.js',
    },
    {
      name: 'Panes',
      components: 'src/layouts/Pane/**/[A-Z]*.js',
    },
  ],
  theme: {
    fontSize :{
      base: 14
    },
    fontFamily: {
      base: ['Bandwidth']
    }
  },
  require: [
    'styled-components'
  ],
  styleguideComponents: {
    Logo: path.join(__dirname, 'tools/styleguide/Logo'),
    Wrapper: path.join(__dirname, 'tools/styleguide/Wrapper')
  },
  webpackConfig: {
    devtool: 'cheap-module-eval-source-map',
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'react', 'stage-0']
              }
            }
        },
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
          test: /\.(jpg|jpeg|png|webp|ico)$/,
          use: 'file-loader',
        },
        {
          test: /\.(svg|woff|woff2|eot|otf|ttf)$/,
          use: 'file-loader',
        },
      ]
    }
  }
};
