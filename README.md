# Bandwidth UI Shared Tools

Contains multiple NPM packages we use at Bandwidth to build powerful, consistent, and engaging user experiences.

Code is located under `/packages`. The `shared-components` package is published to NPM at `@bandwidth/shared-components`, and the `layouts` package is published to `@bandwidth/layouts`.

Installing both libraries as NPM modules: `npm i --save @bandwidth/shared-components styled-components`

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

If you want to use layouts, you can also install `@bandwidth/layouts`. Add the `RootLayout` to your application root as well:

```js
import { BandwidthProvider } from '@bandwidth/shared-components';
import { RootLayout } from '@bandwidth/layouts';

...

<BandwidthProvider>
  <RootLayout>
    <MyApp />
  </RootLayout>
</BandwidthProvider>
```

# Developing

See the README.md in each package for instructions on developing for that package.

# License

The source of this library is licensed under the MIT license (see [LICENSE](./LICENSE))

Bandwidth and the BW logo are trademarks of Bandwidth.com, Inc.  Bandwidth reserves all rights to these trademarks, as well as any others that may be included from time to time.
