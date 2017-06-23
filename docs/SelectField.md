SelectField
===========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
input|shape[object Object]||Yes|Input props, expected to be passed by redux-form
options|array|[]|No|All possible values
renderOption|func|(val) => '' + val|No|Function to render the display of a value
allowNone|bool|true|No|Can the user select 'none' ?
noneText|string|'None'|No|Text to show if none is selected
label|string|null|No|Adds a label above the select
disabled|bool|false|No|
required|bool|false|No|
helpText|string|null|No|
selectOptionKey|func|(option) => option.key || option.id || '' + option|No|
callout|node|null|No|

# SelectField

A dropdown input which lets you pick from a list of provided items. Supports default input-style props:

* `input`: supplied by Redux Form's Field component, you can also specify this manually. Should contain `value` and `onChange` at least.
* `label`: a renderable label to go above the component
* `helpText`: some text to be rendered below the component
* `disabled`: disables the component
* `required`: adds a required mark and HTML field validation
* `options`: an array of data
* `renderOption`: a function to transform an option item into some text to show. Defaults to `val => '' + val`
* `selectOptionKey`: a function to transform an option into a **unique** key
* `callout`: optional flyout to show on hover

```
<SelectField label="Choose:" required helpText="Make a choice!" options={['a', 'b']}>
```
