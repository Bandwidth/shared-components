const path = require('path');
const defaultResolver = require('react-docgen').resolver
  .findAllExportedComponentDefinitions;
const annotationResolver = require('react-docgen-annotation-resolver').default;
const { readdirSync, lstatSync, existsSync } = require('fs');

const isDirectory = s => lstatSync(s).isDirectory();
const isFile = s => lstatSync(s).isFile();
const getDirectories = s =>
  readdirSync(s)
    .map(name => path.join(s, name))
    .filter(isDirectory);
const getFiles = s =>
  readdirSync(s)
    .map(name => path.join(s, name))
    .filter(isFile);

const componentSections = p => {
  return getDirectories(p).map(name => {
    const section = {
      name: path.basename(name),
      components: getFiles(name).filter(
        f => path.basename(f) !== 'index.js' && path.extname(f) === '.js',
      ),
    };
    if (existsSync(path.join(name, 'README.md')))
      section.content = path.join(name, 'README.md');
    return section;
  });
};

module.exports = {
  title: 'Bandwidth Shared React Components',
  styleguideDir: 'docs',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'About',
      sections: [
        {
          name: 'Home',
          content: 'docs/introduction.md',
        },
        {
          name: 'Color',
          content: 'docs/design/color.md',
        },
        {
          name: 'Typography',
          content: 'docs/design/typography.md',
        },
        {
          name: 'Layout',
          content: 'docs/design/layout.md',
        },
      ],
    },
    {
      name: 'Components',
      components: 'src/components/**/[A-Z]*.js',
      // sections: componentSections('./src/components'),
    },
    {
      name: 'Layouts',
      components: 'src/layouts/**/[A-Z]*.js',
      // sections: componentSections('./src/layouts'),
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
      base: '"Overpass", Raleway, "Open Sans", arial, sans-serif',
      monospace: '"Source Code Pro", monospace',
    },
  },
  ignore: ['src/components/**/index.js'],
  require: ['styled-components', path.join(__dirname, 'src')],
  styleguideComponents: {
    Logo: path.join(__dirname, 'tools/styleguide/Logo'),
    Wrapper: path.join(__dirname, 'tools/styleguide/Wrapper'),
    ComponentsList: path.join(__dirname, 'tools/styleguide/ComponentsList'),
    TableRenderer: path.join(__dirname, 'tools/styleguide/TableRenderer'),
    StyleGuideRenderer: path.join(
      __dirname,
      'tools/styleguide/StyleGuideRenderer',
    ),
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
