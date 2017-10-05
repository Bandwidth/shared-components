```
const theme = require('../../theme').default;
theme.renderDocumentation('Button');
```

The trusty button. Renders a `button` tag with styling. You can add fancy little icons with animations using the `leftIcon` and `rightIcon` props. These icons should be names from the icons list (see `components/helpers/icons`).

Change the color and size with variants.

```javascript
<Button rightIcon="checkmark">Ok</Button>
```

```javascript
<Button.Secondary leftIcon="back">Secondary</Button.Secondary>
```

```javascript
<Button.Small rightIcon="checkmark">Small</Button.Small>
```

```javascript
<Button.Large leftIcon="delete">Large</Button.Large>
```

```javascript
<Button.Danger rightIcon="error" leftIcon="error">Danger!</Button.Danger>
```
