Accordion
=========

Accordion works like a controllable component. Provide the
isCollapsed prop to control it, or don't to let it control itself.

Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
label|node||Yes|
children|node||Yes|
isCollapsed|bool|null|No|
onToggle|func|() => {}|No|

Expands and collapses when the label is clicked. Or, you can provide the `isCollapsed` prop to force open/closed state. You can also provide a hook to `onToggle`. Your `onToggle` function will be called with one parameter, a boolean representing whether the component is currently collapsed at the time it was clicked.

Accepts `label` to define what's rendered in the label.

Also exports `ContentPadding`, which you can use on any content contained inside the accordion to achieve consistent padding.

```
<Accordion label="Hello">
  Some content
</Accordion>
```
