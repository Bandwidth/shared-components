TextAreaField
=============


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
input|shape[object Object]||No|A collection of input props. Passed to input.
disabled|bool|false|No|Indicates whether a user can change this field.
required|bool|false|No|Indicates whether this field is required for form submission.
label|string|null|No|Contents of a label above the field.
id|string|null|No|Adds an id to the textarea.
className|string|null|No|Adds a class name to the textarea.
helpText|string|null|No|Contents of help text below the field.
callout|node|null|No|Optional callout contents to show when the user hovers the field.

# TextAreaField

An input component that renders a large field for entering long text.

Props:

* `input`: supplied by Redux Form's Field component, you can also specify this manually. Should contain `value` and `onChange` at least.
* `label`: a renderable label to go above the component
* `helpText`: some text to be rendered below the component
* `disabled`: disables the component
* `required`: adds a required mark and HTML field validation
* `callout`: optional flyout to show on hover

```
<TextAreaField input={input} label="big text" helpText="write a lot here" required />
```
