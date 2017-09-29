Icons let you easily render some of our icons. Pass in the `name` prop to specify which one.

The icon definition file is in `components/helpers/icons.js`

```
<Icon name="checkmark" />
```

_Available Icons:_

```javascript
const icons = require('./icons').map;
const iconItemStyle = { border: '1px solid #f1f1f1', padding: '2px', margin: '2px', display: 'inline-block' };
const IconList = () => (
  <div>
  {
    Object.keys(icons).map((icon) => (
      <span style={iconItemStyle}>{icon}&nbsp;<Icon name={icon} /></span>
    ))
  }
  </div>
);
<IconList />
```

