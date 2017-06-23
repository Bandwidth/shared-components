RadioField
==========


Props
-----
Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
choices|union(arrayOf或objectOf)||Yes|
label|string|null|No|
input|shape[object Object]||Yes|
disabled|bool|false|No|
helpText|string|null|No|
required|bool|false|No|
groupLabel||null|No|

# RadioField

RadioField is a fully functional input. It generates its own radio buttons from the options you supply. You can use it manually by passing in a valid `input` prop which contains a `value` and `onChange` handler. It's a controlled component, so it won't update its own value.

```
<RadioField value="a" onChange={handleChange} choices={['a', 'b']} />
```
