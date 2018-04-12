**ToggleButton** is a simple styled button with some extra functionality built-in for handling selection. Control
it by setting `selected`, then use its `onClick` or `onSelect/onDeselect` handlers to implement selection or hook
into the [Selectable](/#!/Selectable) behavior. Set `name` to keep track of which button was pressed when a
click handler fires.

```javascript
<div>
  <ToggleButton selected={true}>On</ToggleButton>
  <ToggleButton selected={false}>Off</ToggleButton>
  <hr />
  <h3>Small</h3>
  <ToggleButton.Small selected={true}>1</ToggleButton.Small>
  <ToggleButton.Small selected={false}>2</ToggleButton.Small>
  <hr />
  <h3>Colorful</h3>
  <ToggleButton.Colorful selected={true}>On</ToggleButton.Colorful>
  <ToggleButton.Colorful selected={false}>Off</ToggleButton.Colorful>
</div>
```
