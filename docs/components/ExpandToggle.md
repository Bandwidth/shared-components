ExpandToggle
============

A prototypical accordion element with no styling. Renders one element which can be
clicked to toggle expanded state, and an expandable content area.

Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
id|string|null|No|Sets the id of the containing collapsible element
className|string|null|No|Sets the className of the containing collapsible element
onToggle|func|() => null|No|Callback for toggle events
toggleContent|node||Yes|Content to render within the toggle area. You may optionally pass a function,
which will be called with the current toggle on/off state.
isExpanded|bool|null|No|Override ('control') toggling behavior, disabling default internal toggle state
children|node||Yes|Content to render inside the collapsible area
startExpanded|bool|false|No|Whether to start expanded

```
<ExpandToggle
  toggleContent={<Label>Click me</Label>}
  startExpanded={false}
>
  Stuff!
</ExpandToggle>

<ExpandToggle
  isExpanded={true}
  toggleContent={<Label>Won't do anything</Label>}
>
  This one won't toggle, expand state is overridden to true!
</ExpandToggle>
```
