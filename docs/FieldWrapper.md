FieldWrapper
============


Props
-----
Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
disabled|bool|false|No|
required|bool|false|No|
label|string|null|No|
helpText|string|null|No|
callout|node|null|No|
children|node||Yes|
id||null|No|
type||'text'|No|

# FieldWrapper

Mainly used by other input classes. It adds the label and help text above and below its children.

```
<FieldWrapper label="foo" helpText="bar">
  <TextBox />
</FieldWrapper>
```
