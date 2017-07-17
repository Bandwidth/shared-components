Select
======


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
className|string|null|No|Adds a class name to the element.
id|string|null|No|Adds an id to the element.
disabled|bool|false|No|Indicates whether the user can interact with this field.
required|bool|false|No|Indicates whether this field is required for form submission.
noneText|string|'None'|No|Text to show if none is selected
allowNone|bool|true|No|Can the user select 'none'? (Defaults true)
options|array||Yes|A list of selection options. Can be complex objects.
renderOption|func|(option) => {
  if (_.isString(option)) {
    return option;
  }
  if (_.isFunction(option.get)) {
    return option.get('id');
  }
  return option.id || JSON.stringify(option);
}|No|A function which takes an option and renders text for the select. Has
a sane default.
selectOptionValue|func|(option) => {
  if (_.isString(option)) {
    return option;
  }
  if (_.isFunction(option.get)) {
    return option.get('id');
  }
  return option.id || JSON.stringify(option);
}|No|A function which takes an option and computes a single string value to
represent it. Has a sane default.
value|string||No|The currently selected value.
onChange|func||No|Handler for change events on the select. It will be called with the new value
computed from selectOptionValue.

A dropdown input which lets you pick from a list of provided items. Supports default input-style props:

* `input`: supplied by Redux Form's Field component, you can also specify this manually. Should contain `value` and `onChange` at least.
* `label`: a renderable label to go above the component
* `helpText`: some text to be rendered below the component
* `disabled`: disables the component
* `required`: adds a required mark and HTML field validation
* `options`: an array of data
* `renderOption`: a function to transform an option item into some text to show. Defaults to `val => '' + val`
* `selectOptionKey`: a function to transform an option into a **unique** key

```
<Select label="Choose:" required helpText="Make a choice!" options={['a', 'b']}>
```
