ButtonField
===========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
children|node||Yes|
onClick|func|() => null|No|
disabled|bool|false|No|
label|string|null|No|
id|string|null|No|
type|string|'text'|No|
helpText|string|null|No|
leftIcon|string|null|No|
rightIcon|string|null|No|

# ButtonField

Kind of like a Button, but with a label above and help text below. Add them with `label` and `helpText` properties. This makes it more at home in a form. It's highly recommended to use ButtonField in a form, even if you don't use label or help text, since it lays out better.
