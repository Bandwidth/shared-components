Just include it near the top of your tree:

```javascript static
import { BandwidthProvider } from '@bandwidth/shared-components';

<BandwidthProvider>
  <MyApp />
</BandwidthProvider>
```

You can customize the root element type with the `StyleRoot` prop, or provide a different theme by passing it into the `customTheme` prop.
