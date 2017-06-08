# bandwidth-shared-components
Shared Component Library for Bandwidth React Apps

# How to use this library

Install the library as an NPM module. Something like `"@bandwidth/shared-components": "v0.4.2"` in your `package.json`.

In your project, configure your Webpack to **not** compile this library with Babel. In Catapult UI, it looks something like this:

```javascript
module: {
  rules: [
    {
      resource: {
        test: /\.js$/,
        or: [
          { exclude: /node_modules/ },
          {
            and: [
              { include: /shared-components/ },
              { exclude: /node_modules/ },
            ],
          },
        ],
      },
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', { modules: false }],
              'react',
              'stage-0',
            ],
            plugins: [
              'styled-components',
            ],
          },
        },
      ],
    },
  ],
},
```

Now you can start including the components in your code. Require them by traversing the directory structure of the module:

```javascript
import Button from 'bandwidth-shared-components/components/inputs/Button`;
```

If you want to make this easier, you can alias the module in Webpack:

```javascript
resolve: {
  modules: ['node_modules'],
  alias: {
    shared: '@bandwidth/shared-components',
  },
  extensions: ['.js', '.jsx'],
},
```

With this alias, you could just type:

```javascript
import Button from 'shared/components/inputs/Button';
```

# Additional Components

Besides the components listed in our design system, this library contains a few extras:

* Header/SubHeader: different sized header texts
* Gutter: a div with a gutter-styled background
* Money: takes a currency value and renders it with special effects and proper formatting
* NewBadge: a little badge indicating a new item
* Code/MethodTag: a colored HTTP method verb tag

# License

The source of this library is licensed under the MIT license (see [LICENSE](./LICENSE))

Bandwidth and the BW logo are trademarks of Bandwidth.com, Inc.  Bandwidth reserves all rights to these trademarks, as well as any others that may be included from time to time.
