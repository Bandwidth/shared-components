SubmitButtonField
=================


Props
-----
Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
pristine|bool|false|No|
loading|bool|false|No|
disabled|bool|false|No|
rightIcon|string|null|No|
leftIcon|string|null|No|
children|node||Yes|
pristineContents|node|'Up to Date'|No|

# SubmitButtonField

Shortcut for a submit button field. Use props `pristine`, `loading` and `disabled` to change what gets rendered inside. Pass children for the text to display when the user can submit the form, which will not be shown if `pristine` or `loading` is overriding the contents (pristine means that the form is up-to-date or untouched).

```
<SubmitButtonField pristine={pristine} loading={loading}>Save</SubmitButtonField>
```
