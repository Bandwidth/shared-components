RadioButton
===========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
checked|bool||Yes|Whether or not the button is currently selected.
onChange|func||Yes|Called when the checked state of the button changes.
label|string||Yes|Text to render inside the button's label.
content|node|null|No|Content to render inside the main part of the button.
name|string||Yes|A field name for the input.
value|string||Yes|The input value.
className|string|null|No|Adds a class name to the input element.
id|string|null|No|Adds an id to the input element.

Not really meant to be used alone, unless you just want the styling of it. Use RadioGroup to create a group of RadioButtons.
