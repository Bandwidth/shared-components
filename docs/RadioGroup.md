RadioGroup
==========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
choices|union(arrayOf\|objectOf)||Yes|
name|string||Yes|
value|string||Yes|
onChange|func||Yes|
disabled|bool|false|No|
required|bool|false|No|

RadioGroup is a fully functional input. It generates its own radio buttons from the options you supply. You can use it manually by passing in `value` and `onChange` props. It's a controlled component, so it won't update its own value.

```
<RadioGroup value="a" onChange={handleChange} choices={['a', 'b']} />
```
