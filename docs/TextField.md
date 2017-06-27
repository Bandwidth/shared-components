TextField
=========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
input|shape[object Object]||Yes|A collection of input props. Passed to input.
disabled|bool|false|No|Indicates whether the user can change this field.
required|bool|false|No|Indicates whether this field is required for form submission.
label|string|null|No|Contents of a label above the field.
id|string|null|No|Adds an id to the input.
className|string|null|No|Adds a class name to the input.
type|string|'text'|No|Indicates the type of text this field accepts.
helpText|string|null|No|Contents of help text below the field.
callout|node|null|No|Optional callout contents when a user hovers the field.
placeholder|string|null|No|Placeholder text to render inside the input.

# TextField

Props:

* `input`: supplied by Redux Form's Field component, you can also specify this manually. Should contain `value` and `onChange` at least.
* `label`: a renderable label to go above the component
* `helpText`: some text to be rendered below the component
* `disabled`: disables the component
* `required`: adds a required mark and HTML field validation
* `callout`: optional flyout to show on hover
