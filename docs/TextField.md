TextField
=========


Props
-----
Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
input|shape[object Object]||Yes|
disabled|bool|false|No|
required|bool|false|No|
label|string|null|No|
id|string|null|No|
type|string|'text'|No|
helpText|string|null|No|
callout|node|null|No|
placeholder|string|null|No|

# TextField

Props:

* `input`: supplied by Redux Form's Field component, you can also specify this manually. Should contain `value` and `onChange` at least.
* `label`: a renderable label to go above the component
* `helpText`: some text to be rendered below the component
* `disabled`: disables the component
* `required`: adds a required mark and HTML field validation
* `callout`: optional flyout to show on hover
