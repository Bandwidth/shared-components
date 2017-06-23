BinaryField
===========


Props
-----
Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
input|shape[object Object]|{
  value: 'false',
}|No|
label|string|null|No|
id|string|null|No|
Input|func||Yes|
Label|func||Yes|

# BinaryField

This is really more of a base class for inputs which switch between two values (see: Toggle and Checkbox).

Props:

* `input`: supplied by Redux Form's Field component, you can also specify this manually. Should contain `value` and `onChange` at least.
* `label`: a renderable label to go above the component
* `helpText`: some text to be rendered below the component
* `disabled`: disables the component
* `required`: adds a required mark and HTML field validation
