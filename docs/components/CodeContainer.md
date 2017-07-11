CodeContainer
=============


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
children|node||Yes|Multiple CodeBlock elements to render in one frame.
header|node|null|No|An optional header element to place above the frame.
className|string|null|No|A class name to add to the container element.
id|string|null|No|An id to add to the container element.

When you want to make a big block of code which contains multiple elements (including non-code labels), this component can wrap everything with a nice consistent background and foreground.

Also allows a header to be rendered above.

```
<CodeContainer header={someHeaderNode}>
  <Code>some thing;</Code>
  <h3>a label for next thing</h3>
  <Code>some other thing;</Code>
</CodeContainer>
```
