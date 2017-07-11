RadioField
==========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
choices|union(arrayOf\|objectOf)||Yes|A list of strings or rendered nodes to render as the choices.
label|string|null|No|Contents of the label above the field.
input|shape[object Object]||Yes|A collection of input properties. Passed to the input.
disabled|bool|false|No|Indicates whether the user can interact with this field.
helpText|string|null|No|Contents of the help text below the field.
required|bool|false|No|Indicates whether this field is required for form submission.
id|string|null|No|Adds an id to the radio group element.
className|string|null|No|Adds a class name to the radio group element.
groupLabel||null|No|

# RadioField

RadioField is a fully functional input. It generates its own radio buttons from the options you supply. You can use it manually by passing in a valid `input` prop which contains a `value` and `onChange` handler. It's a controlled component, so it won't update its own value.

```
<RadioField value="a" onChange={handleChange} choices={['a', 'b']} />
```
