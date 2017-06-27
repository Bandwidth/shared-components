Input
=====


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
value|union(string\|number)||No|The value of the input.
onChange|func|() => null|No|Handler for the onchange event.
onBlur|func|() => null|No|Handler for the onblur event.
disabled|bool|false|No|Controls whether the user can change this element.
required|bool|false|No|Controls whether the element is marked as required for form submission.
id|string|null|No|Adds an id to the element.
className|string|null|No|Adds a class name to the element.
type|string|'text'|No|Sets the type of data expected for this input.

A basic styled text input.
