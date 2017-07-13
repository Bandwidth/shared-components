FlowItem
========

Flow.Item is an individual element in the Flow system. It annotates the provided
content with a label, help text, and ensures correct layout with sibling elements when used properly inside
a Flow.Row. Flow.Item includes some advanced props like `moreContent` and `flexibleContent` to further
customize the way it looks and behaves.

@class FlowItem
@extends {React.Component}

Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
label|node|null|No|A label for this item. May be a Label instance or a string.
helpText|node|null|No|Help text for this item. May be a HelpText instance or a string.
children|node|null|No|Contents of this item. This goes between the label and the help text.
moreContent|node|null|No|More contents for this item. This goes below the help text and extends the size
of the component.
flexibleContent|bool|false|No|Allows the main content to grow larger than the default fixed size.
alignment|enum('stretch'\|'left'|'right')|'stretch'|No|Aligns the various elements within the item to a particular side.
error|bool|false|No|Whether this item should render a visual error state.
id|string|null|No|An id to add to the item container element.
className|string|null|No|A class name to add to the item container element.

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

By default, a Flow.Item's content is limited to a set pixel size. You can turn this off with `flexibleContent`:

```
<Flow.Item flexibleContent>
  <div style={{ height: '1000px' }} />
</Flow.Item>
```

Sometimes you may want to render more stuff in an item. You can use `moreContent` to put any arbitrary JSX below the item's help text.

```
<Flow.Item moreContent={(<SomeOtherStuff />)}>
  Main Content
</Flow.Item>
```
