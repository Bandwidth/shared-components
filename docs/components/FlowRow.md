FlowRow
=======

A Flow.Row defines a horizontal row of FlowItems. FlowRows belong within a Flow component.
Flow will manage their vertical spacing. A Flow.Row manages the horizontal spacing of its children.

Flow.Row has several advanced layout options which make it the most versatile part of the Flow toolkit. Be sure to
check out the prop documentation and the Flow component documentation for more information on how to use the Flow
system.

@class FlowRow
@extends {React.Component}

Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
children|node||Yes|FlowRow children should be either FlowItems or other FlowRows. You can use nested FlowRows to achieve more
powerful layout options.
sizes|array|[]|No|Sizes is an array of numbers which defines the *proportional* size of each child element. By default, FlowRow
makes all children the same size, but this prop will let you customize that sizing.
alignment|custom|'stretch'|No|Alignment changes the way the row aligns its children. Alignment forces children into automatic sizing and
aligns them in whatever direction you specify. Alignment is incompatible with `sizes`.

Flow.Row is designed to be used with 2 children:

```<Flow.Row>
  <Flow.Item>foo</Flow.Item>
  <Flow.Item>bar</Flow.Item>
</Flow.Row>
```

You can still add more than 2 children to Flow.Row and it will try to lay them out gracefully.

```
<Flow.Row>
  <Flow.Item>all</Flow.Item>
  <Flow.Item>the same</Flow.Item>
  <Flow.Item>size</Flow.Item>
</Flow.Row>
```

You can use the `sizes` prop to have more control over item sizes:

```
<Flow.Row sizes={[1, 8]}>
  <Flow.Item>small</Flow.Item>
  <Flow.Item>BIG!</Flow.Item>
</Flow.Row>
```

You can also change the way items are aligned:

```
<Flow.Row alignment="left">
  <Flow.Item>These are on the</Flow.Item>
  <Flow.Item>Left!</Flow.Item>
</Flow.Row>
```

Flow.Row can achieve some pretty complex layouts with nesting and its props:

```
<Flow.Row>
  <Flow.Item>foo</Flow.Item>
  <Flow.Row alignment="left">
    <Flow.Item>these will be</Flow.Item>
    <Flow.Item>pushed up against the center</Flow.Item>
  </Flow.Row>
</Flow.Row>
```
