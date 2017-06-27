ToggleField
===========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
input|shape[object Object]|{
  value: 'false',
}|No|A collection of input props. Passed to the input.
label|string|null|No|Contents of a label on the field.
id|string|null|No|Adds an id to the input.
className|string|null|No|Adds a class name to the input.

# ToggleField

A toggle-based field. See BinaryField for prop types.

```
<ToggleField input={{ value: 'true', onChange=this.onChange }} label="Yes?" disabled />
```
