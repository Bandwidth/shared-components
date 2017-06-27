Summary
=======


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
children|node||Yes|The main content of the summary.
helpText|string|null|No|Optional aside to render explaining the summary.
className|string|null|No|Adds a class name to the container element.
id|string|null|No|Adds an id to the container element.

Summaries are simple data items. They're not meant to be interactive, just informative. Supports adding a little help text with the `helpText` property.

```
<Summary helpText="This is usually bar">Foo</Summary>
```
