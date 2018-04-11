Flow.Item can be used without any customization just for its layout benefits in the Flow system:

```
const Flow = require('./index').default;
<Flow.Item>
  Foo
</Flow.Item>
```

You can also add standardized label and help text:

```
const Flow = require('./index').default;
<Flow.Item label="describes the item" helpText="explanation of the item">
  Foo
</Flow.Item>
```

By default, a Flow.Item's content is limited to a set pixel size. You can turn this off with `flexibleContent`:

```
const Flow = require('./index').default;
<Flow.Item flexibleContent>
  <div style={{ height: '100px' }}>Hello</div>
</Flow.Item>
```

Sometimes you may want to render more stuff in an item. You can use `moreContent` to put any arbitrary JSX below the item's help text.

```
const Flow = require('./index').default;
<Flow.Item moreContent={(<h1>Hello</h1>)} helpText="The help text is here">
  Main Content
</Flow.Item>
```
