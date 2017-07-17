CheckboxField
=============

DEPRECATED

@class CheckboxField
@extends {React.Component}

Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
input|shape[object Object]|{
  value: 'false',
}|No|A collection of input-related properties. All passed to the input.
label|string|null|No|Contents of the label above the input.
id|string|null|No|Adds an id to the input element.
className|string|null|No|Adds a class name to the input element.

# CheckboxField

A checkbox-based field. See BinaryField for prop types.

```
<CheckboxField input={{ value: 'true', onChange=this.onChange }} label="Yes?" disabled />
```
