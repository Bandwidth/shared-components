AnchorField
===========

DEPRECATED

A form field which renders a link.

@class AnchorField
@extends {React.Component}

Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
disabled|bool|false|No|Deprecated: has no effect.
label|string|null|No|The content of the label above the anchor.
id|string|null|No|Adds an id to the anchor element.
className|string|null|No|Adds a class name to the anchor element.
helpText|string|null|No|Content of the help text below the anchor.
to|string|'#'|No|The location the anchor should link to.
onClick|func|() => null|No|Handler for when the anchor element is clicked.
exact|bool|false|No|Anchors can render differently when they match the current route. This indicates whether that match is exact.
children|node|'Anchor'|No|Content of the anchor element.
callout|node|null|No|An optional callout to show when hovering the field.

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
