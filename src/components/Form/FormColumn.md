```
const theme = require('../../theme').default;
theme.renderDocumentation('FormColumn');
```

`FormColumn` (accessible as `Form.Column`) is designed to create vertical column layouts inside `Form`.

```javascript
const Flow = require('../../layouts/Flow').default;

<Form>
  <Form.Column>
    <Flow>
      <Flow.Row>
        <Flow.Item><Input /></Flow.Item>
        <Flow.Item><Input /></Flow.Item>
      </Flow.Row>
      <Flow.Row>
        <Flow.Item><Input /></Flow.Item>
        <Flow.Item><Input /></Flow.Item>
      </Flow.Row>
    </Flow>
  </Form.Column>
  <Form.Column>
    <Flow>
      <Flow.Row>
        <Flow.Item><Input /></Flow.Item>
        <Flow.Item><Input /></Flow.Item>
      </Flow.Row>
      <Flow.Row>
        <Flow.Item><Input /></Flow.Item>
        <Flow.Item><Input /></Flow.Item>
      </Flow.Row>
      <Flow.Row>
        <Flow.Item><Input /></Flow.Item>
        <Flow.Item><Input /></Flow.Item>
      </Flow.Row>
    </Flow>
  </Form.Column>
</Form>
```
