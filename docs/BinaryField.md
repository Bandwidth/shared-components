BinaryField
===========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
input|shape[object Object]|{
  value: 'false',
}|No|A collection of input-related properties. All passed to the input.
label|string|null|No|Content of the label above the input.
id|string|null|No|Adds an id to the input element.
className|string|null|No|Adds a class name to the input element.
Input|func||Yes|The component to render the input with.
Label|func||Yes|The component to render the input label with (generally the graphical representation of a binary input).

# BinaryField

This is really more of a base class for inputs which switch between two values (see: Toggle and Checkbox).

Props:

* `input`: supplied by Redux Form's Field component, you can also specify this manually. Should contain `value` and `onChange` at least.
* `label`: a renderable label to go above the component
* `helpText`: some text to be rendered below the component
* `disabled`: disables the component
* `required`: adds a required mark and HTML field validation
