SubmitButton
============


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
onClick|func|() => null|No|Adds a click handler to the button


