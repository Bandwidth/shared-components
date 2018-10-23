Steps renders a set of Step items. It will automatically assign numbers to the steps for you. You must assign completed state yourself.

```javascript
const lipsum = require('lorem-ipsum');

<Steps>
  <Steps.Step complete>Step 1</Steps.Step>
  <Steps.Step>Step 2</Steps.Step>
  <Steps.Step>{lipsum({ count: 8 })}</Steps.Step>
</Steps>
```
