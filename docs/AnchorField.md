AnchorField
===========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
disabled|bool|false|No|
label|string|null|No|
id|string|null|No|
helpText|string|null|No|
to|string|'#'|No|
onClick|func|() => null|No|
exact|bool|false|No|
children|node|'Anchor'|No|
callout|node|null|No|

# AnchorField

Wait, an anchor isn't an input! But using this component in your form will help any links lay out consistently with other form inputs. Plus, you get to add a label and help text.

Props:

* `to`: where the anchor goes. Leave blank if you want to use onClick instead
* `onClick`: handler for when the user clicks the anchor
* `exact`: children will receive an 'active' prop if the anchor matches the current location. This indicates that match must be exact, not partial.
* `label`: a renderable label to go above the component
* `helpText`: some text to be rendered below the component
* `disabled`: disables the component
* `callout`: optional flyout to show on hover
