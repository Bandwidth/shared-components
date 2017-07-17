FileField
=========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
input|shape[object Object]||Yes|A collection of input properties. Passed to input.
label|string|null|No|Content of the label above the field.
helpText|string|null|No|Content of the help text below the field.
required|bool|false|No|Indicates that this field is required for form submission.
disabled|bool|false|No|Indicates whether the user can change this field.
callout|node|null|No|Adds a callout when the user hovers the field.
id|string|null|No|Adds an id to the input element.
className|string|null|No|Adds a class name to the input element.

# FileField

A file input component (meant to be used with Redux Form) which accepts drag-and-drop.
