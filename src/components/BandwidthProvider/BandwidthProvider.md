Including this provider at the root of your app will define some global styling, provide the theme, and set up needed contexts for interactions like drag and drop.

Just include it near the top of your tree:

```javascript static
import { BandwidthProvider } from '@bandwidth/shared-components';

<BandwidthProvider>
  <MyApp />
</BandwidthProvider>
```

You can customize the root element type with the `StyleRoot` prop, or provide a different theme by utilizing the `ThemeProvider` prop.
