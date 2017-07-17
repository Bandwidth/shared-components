RadioGroup
==========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
choices|union(arrayOf\|objectOf)||Yes|An array of choice objects or strings to create buttons from.
name|string||Yes|A field name for this input.
value|string||Yes|The currently selected value.
onChange|func||Yes|Called when the input value changes.
disabled|bool|false|No|Indicates whether the user can change the input.
required|bool|false|No|Indicates whether the value is required for form input.
className|string|null|No|Adds a class name to the group container element.
id|string|null|No|Adds an id to the group container element.

RadioGroup is a fully functional input. It generates its own radio buttons from the options you supply. You can use it manually by passing in `value` and `onChange` props. It's a controlled component, so it won't update its own value.

```
<RadioGroup value="a" onChange={handleChange} choices={['a', 'b']} />
```
