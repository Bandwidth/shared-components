```javascript
const lipsum = require('lorem-ipsum');

<Step.Group>
  <Step complete>Step 1</Step>
  <Step>Step 2</Step>
  <Step>{lipsum({ count: 8 })}</Step>
</Step.Group>;
```
