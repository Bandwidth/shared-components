SubmitButtonField
=================


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
pristine|bool|false|No|Indicates that the form has not been touched yet. Will disable submission.
loading|bool|false|No|Indicates that the form is loading something. Will disable submission.
disabled|bool|false|No|Indicates that the user cannot submit the form.
rightIcon|string|null|No|Glyph name for an icon to pop out of the right side of the button on hover.
leftIcon|string|null|No|Glyph name for an icon to pop out of the left side of the butotn on hover.
children|node||Yes|Contents of the button.
pristineContents|node|'Up to Date'|No|Alternate optional contents of the button when 'pristine' is true.
id|string|null|No|Adds an id to the button.
className|string|null|No|Adds a class name to the button.

# SubmitButtonField

Shortcut for a submit button field. Use props `pristine`, `loading` and `disabled` to change what gets rendered inside. Pass children for the text to display when the user can submit the form, which will not be shown if `pristine` or `loading` is overriding the contents (pristine means that the form is up-to-date or untouched).

```
<SubmitButtonField pristine={pristine} loading={loading}>Save</SubmitButtonField>
```
