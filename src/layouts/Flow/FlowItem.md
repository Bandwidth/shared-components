Flow.Item can be used without any customization just for its layout benefits in the Flow system:

```
<Flow.Item>
  Foo
</Flow.Item>
```

You can also add standardized label and help text:

```
<Flow.Item label="describes the item" helpText="explanation of the item">
  Foo
</Flow.Item>
```

By default, a Flow.Item's content is limited to a set pixel size. You can turn this off with \`flexibleContent\`:

```
<Flow.Item flexibleContent>
  <div style={{ height: '1000px' }} />
</Flow.Item>
```

Sometimes you may want to render more stuff in an item. You can use \`moreContent\` to put any arbitrary JSX below the item's help text.

```
<Flow.Item moreContent={(<SomeOtherStuff />)}>
  Main Content
</Flow.Item>
```
