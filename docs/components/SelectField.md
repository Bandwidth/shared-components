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
disabled|bool|false|No|Indicates whether the user can interact with this field.
required|bool|false|No|Indicates whether this field is required for form submission.
helpText|string|null|No|Contents of the help text below the field.
selectOptionKey|func|(option) => option.key || option.id || '' + option|No|Generates a React component iteration key from an object.
callout|node|null|No|Optional callout contents if the user hovers the field.
id|string||No|Adds an id to the input element.
className|string||No|Adds a class name to the input element.

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
