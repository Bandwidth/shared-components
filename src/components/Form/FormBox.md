```
const theme = require('../../theme').default;
theme.renderDocumentation('FormBox');
```

`FormBox` (accessible from `Form.Box`) is the styled border around a standalone form.

```javascript
const Flow = require('../../layouts/Flow').default;
const Input = require('../Input').default;

<Form.Box>
  <Form>
    <Flow>
      <Flow.Row>
        <Flow.Item><Input /></Flow.Item>
        <Flow.Item><Button>Ok</Button></Flow.Item>
      </Flow.Row>
    </Flow>
  </Form>
</Form.Box>
```
