Coming soon, here's some colors in the meantime:

```javascript
const baseGet = require('../../src/extensions/themeGet').default;
const withTheme = require('styled-components').withTheme;

const get = key => baseGet(`colors.${key}`);

const colors = [
  'primary.default',
  'primary.dark',
  'primary.light',
  'primary.alternate',
  'positive.default',
  'positive.dark',
  'positive.light',
  'accents[0].default',
  'negative.default',
  'negative.dark',
  'negative.light',
  'accents[1].default',
  'gray.light',
  'gray.default',
  'gray.dark',
];

const Colors = withTheme(({ theme }) => (
  <div style={{ width: '100%', height: '400px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
    {colors.map(color => <div key={color} style={{ flex: '1', flexBasis: '200px', margin: '0', background: get(color)({ theme }) }} />)}
  </div>
));

<Colors />
```
