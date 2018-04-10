Expands and collapses when the label is clicked. Or, you can provide the `isCollapsed` prop to force open/closed state. You can also provide a hook to `onToggle`. Your `onToggle` function will be called with one parameter, a boolean representing whether the component is currently collapsed at the time it was clicked.

Accepts `label` to define what's rendered in the label.

Also exports `ContentPadding`, which you can use on any content contained inside the accordion to achieve consistent padding.
```javascript
<Accordion label="Hello">
  Some content
</Accordion>
```

_Small_

```javascript
const Button = require('../Button').default;
<Accordion.Small label="Small!">
  Some content<br />
  <Button>A normal Button</Button>
</Accordion.Small>
```

_Start open_
```javascript
<Accordion label="Hello" startExpanded>
  Some content
</Accordion>
```

_Disabled_
```javascript
<Accordion label="Disabled" disabled>
  Content
</Accordion>
```

_Disabled, start expanded_
```javascript
<Accordion label="Disabled" startExpanded disabled>
  Visible content
</Accordion>
```

_Small disabled_
```javascript
<Accordion.Small label="Small disabled" disabled>
  Some content
</Accordion.Small>
```
