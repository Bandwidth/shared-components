# bandwidth-shared-components
Shared Component Library for Bandwidth React Apps

## [Documentation](http://dev.bandwidth.com/shared-components)

# How to use this library

Install the library as an NPM module. `npm i --save @bandwidth/shared-components styled-components`

> `styled-components` is a peer dependency and required for usage

Add the `BandwidthProvider` to the root of your React component structure:

```javascript
import { BandwidthProvider } from '@bandwidth/shared-components';

...

<BandwidthProvider>
  <MyApp />
</BandwidthProvider>
```

Now you can start including the components in your code. Require them by name from the module root:

```javascript
import { Button } from '@bandwidth/shared-components'`;
```

## Loading Fonts

As of `v6.x`, this library no longer loads fonts for you. You must include them in your project yourself.

For your convenience, we've provided a `fonts/fonts.css` file in the NPM package. You can use it to quickly bootstrap both our brand font (Overpass) and icon font. For instance, if you're using Webpack, you can do:

```
import '@bandwidth/shared-components/fonts/fonts.css`;
```

anywhere in your project to load the fonts automatically.

Other project types will need to determine how to include the appropriate font files. We provide our icon font files in the `/fonts` directory, which you may copy as needed. You can [get Overpass from Google Fonts](https://fonts.google.com/specimen/Overpass).

# Developing

To develop locally, run `npm run start`. The docs should then be available at `http://localhost:6060`. Live reloading, etc should work as well. Alternatively, you can develop against Storybook by running `npm run storybook` and visiting `http://localhost:9001`.

Please refer to the [contributing guide](https://github.com/Bandwidth/shared-components/blob/master/.github/CONTRIBUTING.md) and read through the pull request template before submitting a PR!

# Publishing the Docs

Our docs live on the `gh-pages` branch. Publishing them is easy - just run the `npm run deploy` command. It will manage switching branches, copying files and pushing for you.

# License

The source of this library is licensed under the MIT license (see [LICENSE](./LICENSE))

Bandwidth and the BW logo are trademarks of Bandwidth.com, Inc.  Bandwidth reserves all rights to these trademarks, as well as any others that may be included from time to time.
