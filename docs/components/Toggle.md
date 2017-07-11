Toggle
======


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
className|string|null|No|Adds a class name to the input element.
id|string|null|No|Adds an id to the input element.
value|bool|false|No|The value of the toggle.
required|bool|false|No|Whether the toggle is required for form submission.
disabled|bool|false|No|Whether the user is prevented from interacting with the toggle.
description|node|null|No|A description to display next to the toggle.
onChange|func|() => null|No|Callback for the onChange event of the input.

A simple toggle input.

```
<Toggle value={false} label="Foo" />
```
