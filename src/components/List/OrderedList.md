```
const theme = require('../../theme').default;
theme.renderDocumentation('OrderedList');
```

A basic numbered list. Fill with `Item` elements.

```javascript
<OrderedList>
  <OrderedList.Item>Foo</OrderedList.Item>
  <OrderedList.Item>Bar</OrderedList.Item>
  <OrderedList>
    <OrderedList.Item>Baz</OrderedList.Item>
    <OrderedList.Item>Corge</OrderedList.Item>
    <OrderedList>
      <OrderedList.Item>It</OrderedList.Item>
      <OrderedList.Item>Keeps</OrderedList.Item>
      <OrderedList.Item>Going</OrderedList.Item>
    </OrderedList>
  </OrderedList>
</OrderedList>
```
