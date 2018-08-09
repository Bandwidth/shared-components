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

# Developing

To develop locally, run `npm run start`. The docs should then be available at `http://localhost:6060`. Live reloading, etc should work as well. Alternatively, you can develop against Storybook by running `npm run storybook` and visiting `http://localhost:9001`.

Please refer to the [contributing guide](https://github.com/Bandwidth/shared-components/blob/master/.github/CONTRIBUTING.md) and read through the pull request template before submitting a PR!

# License

The source of this library is licensed under the MIT license (see [LICENSE](./LICENSE))

Bandwidth and the BW logo are trademarks of Bandwidth.com, Inc.  Bandwidth reserves all rights to these trademarks, as well as any others that may be included from time to time.
