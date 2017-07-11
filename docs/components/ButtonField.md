ButtonField
===========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
children|node||Yes|Contents of the button.
onClick|func|() => null|No|Handler for a click event on the button.
disabled|bool|false|No|Indicates whether the user can interact with this field.
label|string|null|No|Content of the label above the button.
id|string|null|No|Adds an id to the button element.
className|string|null|No|Adds a class name to the button element.
type|string|'text'|No|Sets the type of the button.
helpText|string|null|No|Contents of the help text below the button.
leftIcon|string|null|No|Glyph name for the icon that pops in from the left of the button on hover.
rightIcon|string|null|No|Glyph name for the icon that pops in from the right of the button on hover.

# ButtonField

Kind of like a Button, but with a label above and help text below. Add them with `label` and `helpText` properties. This makes it more at home in a form. It's highly recommended to use ButtonField in a form, even if you don't use label or help text, since it lays out better.
