Input
=====


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
value|union(string\|number)||No|The value of the input.
onChange|func|() => null|No|Handler for the onchange event.
onBlur|func|() => null|No|Handler for the onblur event.
onFocus|func|() => null|No|Handler for the onfocus event.
disabled|bool|false|No|Controls whether the user can change this element.
required|bool|false|No|Controls whether the element is marked as required for form submission.
id|string|null|No|Adds an id to the element.
className|string|null|No|Adds a class name to the element.
type|string|'text'|No|Sets the type of data expected for this input.
invalid|bool|false|No|Styles this input as being invalid
error|bool|false|No|Styles this input as having an error related to it

A basic styled text input.
