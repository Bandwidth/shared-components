The trusty button. Renders a `button` tag with styling. You can add fancy little icons with animations using the `leftIcon` and `rightIcon` props. These icons should be names from the icons list (see `components/helpers/icons`).

Change the color and size with variants.

```javascript
<Button rightIcon="checkmark">Ok</Button>
```

Size comparisons

```javascript
<div>
  <Button.Large>Primary Large</Button.Large>
  <Button>Primary Medium</Button>
  <Button.Small>Primary Small</Button.Small>
</div>
```

```javascript
<Button.Secondary leftIcon="back">Secondary</Button.Secondary>
```

```javascript
<Button.Danger rightIcon="error" leftIcon="error">Danger!</Button.Danger>
```
