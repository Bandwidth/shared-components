CodeContainer
=============


Props
-----
Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
children|node||Yes|
header|node|null|No|

When you want to make a big block of code which contains multiple elements (including non-code labels), this component can wrap everything with a nice consistent background and foreground.

Also allows a header to be rendered above.

```
<CodeContainer header={someHeaderNode}>
  <Code>some thing;</Code>
  <h3>a label for next thing</h3>
  <Code>some other thing;</Code>
</CodeContainer>
```
