```
const theme = require('../../theme').default;
theme.renderDocumentation('Form');
```

The primary purpose of the `Form` is to style contained components based on validation state.

Using a `Form` also allows usage of the `Form.Column` component inside with proper styling.

It's recommended to put a `Flow` component within a `Form` to lay out fields.

```javascript
const Flow = require('../../layouts/Flow').default;
const Input = require('../Input').default;

<Form>
  <Flow>
    <Flow.Row>
      <Flow.Item label="Field">
        <Input />
      </Flow.Item>
      <Flow.Item label="Invalid field">
        <Input type="email" value="Foo" />
      </Flow.Item>
    </Flow.Row>
    <Flow.Row>
      <Flow.Item alignment="left">
        <Checkbox checked description="More fields" />
      </Flow.Item>
      <Flow.Item label="Password field" helpText="Help text">
        <Input type="password" value="Foo" />
      </Flow.Item>
    </Flow.Row>
    <Flow.Row>
      <Flow.Item>
        The submit button is disabled and grayed out because a field is invalid
      </Flow.Item>
    </Flow.Row>
    <Flow.Row alignment="right">
      <Flow.Item>
        <Button.Submit>Submit</Button.Submit>
      </Flow.Item>
    </Flow.Row>
  </Flow>
</Form>
```
