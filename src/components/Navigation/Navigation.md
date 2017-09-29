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
const theme = require('../../theme').default.extend({});
const createThemeProvider = require('react-studs').createThemeProvider;

theme.registerVariant('Navigation', 'custom', { background: '#AA512F', color: 'black' });
theme.registerVariant('NavigationItem', 'custom', { effectColor: '#DDBC89', activeColor: '#DDBC89' });
const CustomNavigation = theme.variant('custom')(Navigation);

const ThemeProvider = createThemeProvider(theme);
<ThemeProvider>
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
</ThemeProvider>
```
