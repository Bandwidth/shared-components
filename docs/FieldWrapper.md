FieldWrapper
============


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
disabled|bool|false|No|Indicates whether the user can interact with the field.
required|bool|false|No|Indicates whether the field is required for form submission.
label|string|null|No|Content of the label above the field.
helpText|string|null|No|Content of the help text below the field.
callout|node|null|No|Content of the callout displayed when the user hovers the field.
children|node||Yes|The field input itself.
id|string|null|No|Adds an id to the field wrapper container.
className|string|null|No|Adds a class name to the field wrapper container.
type||'text'|No|

# FieldWrapper

Mainly used by other input classes. It adds the label and help text above and below its children.

```
<FieldWrapper label="foo" helpText="bar">
  <TextBox />
</FieldWrapper>
```
