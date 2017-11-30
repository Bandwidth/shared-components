Steps renders a set of Step items. It will automatically assign numbers to the steps for you. You must assign completed state yourself.

```javascript
const lipsum = require('lorem-ipsum');

<Steps>
  <Step complete>Step 1</Step>
  <Step>Step 2</Step>
  <Step>{lipsum({ count: 8 })}</Step>
</Steps>
```
