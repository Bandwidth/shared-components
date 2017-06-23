TextAreaField
=============


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
input|shape[object Object]||No|
disabled|bool|false|No|
required|bool|false|No|
label|string|null|No|
id|string|null|No|
helpText|string|null|No|
callout|node|null|No|

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
