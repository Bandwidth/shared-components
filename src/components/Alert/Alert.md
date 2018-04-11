Alerts control their own color based on `type`.

```javascript
<Alert type="info">
  Hello, world
</Alert>
```

A long alert:
```javascript
const lipsum = require('lorem-ipsum');
<Alert type="info">
  {lipsum({ count: 8 })}
</Alert>
```

```javascript
<Alert type="info" textOnly>
  Hello, world
</Alert>
```

```javascript
<Alert type="success">
  Hello, world
</Alert>
```

```javascript
<Alert type="error">
  Hello, world
</Alert>
```

```javascript
<Alert.Small>A small alert</Alert.Small>
```
