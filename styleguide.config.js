const path = require('path');
const defaultResolver = require('react-docgen').resolver
  .findAllExportedComponentDefinitions;
const annotationResolver = require('react-docgen-annotation-resolver').default;

module.exports = {
  title: 'Bandwidth Shared React Components',
  styleguideDir: 'docs',
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Design',
      sections: [
        {
          name: 'Animation',
          content: 'docs/design/animation.md',
        },
        {
          name: 'Brand',
          content: 'docs/design/brand.md',
        },
        {
          name: 'Color',
          content: 'docs/design/color.md',
        },
        {
          name: 'Layout',
          content: 'docs/design/layout.md',
        },
        {
          name: 'Typography',
          content: 'docs/design/typography.md',
        },
      ],
    },
    {
      name: 'Components',
      components: 'src/components/*/[A-Z]*.js',
    },
    {
      name: 'Layouts',
      components: 'src/layouts/*/[A-Z]*.js',
    },
    {
      name: 'Behaviors',
      components: 'src/behaviors/*/[A-Z]*.js',
    },
    {
      name: 'Animations',
      components: 'src/animations/*/[A-Z]*.js',
    },
  ],
  theme: {
    fontSize: {
      base: 14,
    },
    fontFamily: {
      base: ['Bandwidth'],
    },
  },
  ignore: [
    'src/components/**/index.js',
    'src/components/layout/Flow/fields/**/*.js',
  ],
  require: ['styled-components', path.join(__dirname, 'src')],
  styleguideComponents: {
    Logo: path.join(__dirname, 'tools/styleguide/Logo'),
    Wrapper: path.join(__dirname, 'tools/styleguide/Wrapper'),
    ComponentsList: path.join(__dirname, 'tools/styleguide/ComponentsList'),
    StyleGuideRenderer: path.join(__dirname, 'tools/styleguide/StyleGuideRenderer'),
  },
  /**
   * Fix for styled-components; see
   * https://github.com/styled-components/styled-components/issues/945#issuecomment-339209956
   */
  resolver: (ast, recast) => {
    const annotatedComponents = annotationResolver(ast, recast);
    const defaultComponents = defaultResolver(ast, recast);
    return annotatedComponents.concat(defaultComponents);
  },
  webpackConfig: {
    devtool: 'cheap-module-eval-source-map',
    resolve: {
      modules: ['node_modules'].concat(
        process.env.NODE_PATH.split(path.delimiter).filter(Boolean),
      ),
    },
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['styled-components'],
              presets: ['es2015', 'react', 'stage-0'],
            },
          },
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
      ],
    },
  },
};
