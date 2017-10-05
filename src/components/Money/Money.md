```
const theme = require('../../theme').default;
theme.renderDocumentation('Money');
```

The Money component renders a monetary value with a color and sign to indicate positive or negative. It formats decimal values and adds a $ to the beginning, so just pass in the raw number/string value for \`value\`. Use the \`showSign\` prop to turn off the plus/minus sign.

```javascript
<div>
  <Money value="0.33224" />
  <Money value="-2.38" />
  <Money value="0" />
</div>
```
