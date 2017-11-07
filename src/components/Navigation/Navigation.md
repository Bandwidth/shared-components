```
const theme = require('../../theme').default;
theme.renderDocumentation('Navigation');
```

The header above a page which contains page title and navigation.

```javascript
<Navigation
  title="Bandwidth App"
  links={[
    { to: '/cat', exact: true, content: 'Cat' },
    { to: '/anotherCat', content: 'Another Cat' },
  ]}
  topLinks={[
    { to: '/submitCat', content: 'Submit Cat' },
    { to: '/logout', content: 'Log Out' },
  ]}
/>
```

_Themed Navigation_
```javascript
const theme = require('../../theme').default;

theme.registerVariant('Navigation', 'custom', { background: '#651f45', color: '#fffff2' });
theme.registerVariant('NavigationItem', 'custom', { effectColor: '#00fbb9', activeColor: '#00fbb9' });
const CustomNavigation = theme.variant('custom')(Navigation);

<CustomNavigation
  title="Custom App"
  links={[
    { to: '/cat', exact: true, content: 'Cat' },
    { to: '/anotherCat', content: 'Another Cat' },
  ]}
  topLinks={[
    { to: '/submitCat', content: 'Submit Cat' },
    { to: '/logout', content: 'Log Out' },
  ]}
/>
```

_Sub-Nav_

```javascript
<Navigation.Sub
  links={[
    { to: '/foo', content: 'One' },
    { to: '/bar', content: 'Two' },
  ]}
/>
```
