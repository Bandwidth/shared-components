The header above a page which contains page title and navigation.

Navigation provides several sub-components which can be used to construct complex nested controls.

```javascript
<Navigation>
  <Link.Wrap to="/">
    <Navigation.Title>
      Bandwidth App
    </Navigation.Title>
  </Link.Wrap>
  <Navigation.ItemListStack>
    <Navigation.ItemList.Small>
      <Link.Wrap newTab to="https://bandwidth.com">
        <Navigation.Item active>
          Why Bandwidth
        </Navigation.Item>
      </Link.Wrap>
      <Link.Wrap newTab to="https://dev.bandwidth.com">
        <Navigation.Item>
          Docs for Developers
        </Navigation.Item>
      </Link.Wrap>
      <Link.Wrap to="/login">
        <Navigation.Item>
          Login
        </Navigation.Item>
      </Link.Wrap>
    </Navigation.ItemList.Small>
    <Navigation.ItemList>
      <Link.Wrap to="/services" exact>
        <Navigation.Item>
          Services
        </Navigation.Item>
      </Link.Wrap>
      <Link.Wrap to="/useCases">
        <Navigation.Item>
          Use Cases
        </Navigation.Item>
      </Link.Wrap>
      <Link.Wrap to="/pricing">
        <Navigation.Item>
          Pricing
        </Navigation.Item>
      </Link.Wrap>
      <Link.Wrap to="/trial">
        <Navigation.Item>
          Try for Free
        </Navigation.Item>
      </Link.Wrap>
    </Navigation.ItemList>
  </Navigation.ItemListStack>
</Navigation>
```

## A note on active state

For proper Navigation usage, you must show which navigation item matches the current page. **It is up to your code** to do this.

The easiest way to do it is to use a routing solution like React Router and implement a [custom Link](/shared-components/#!/Link) using React Router's [`<NavLink>`](https://reacttraining.com/react-router/web/api/NavLink), which applies a className to its element when the route is active.

For your convenience, the `Navigation.Item` component will show the active styling if its parent has the `active` class. Thus, we can just wrap it with a customized NavLink and it will work.

```js static
import { NavLink } from 'react-router-dom';
import { Link } from '@bandwidth/shared-components';

const CustomLinkImplementation = ({ children, to, newTab, appearFocused, icon, ...rest }) => (
  <NavLink to={to} activeClassName="active" {...rest}>
    {children}
  </NavLink>
);

// NOTE: use Link.Wrap, which doesn't apply any styles!
export const NavWrapLink = props => <Link.Wrap as={CustomLinkImplementation} {...props} />;
```

```js
const { NavLink } = require('react-router-dom');

const CustomLinkImplementation = ({ children, to, newTab, appearFocused, icon, ...rest }) => (
  <NavLink to={to} activeClassName="active" {...rest}>
    {children}
  </NavLink>
);

const NavWrapLink = props => <Link.Wrap as={CustomLinkImplementation} {...props} />;

<Navigation>
  <NavWrapLink to="/">
    <Navigation.Title>
      React Router Demo
    </Navigation.Title>
  </NavWrapLink>
  <Navigation.ItemList>
    <NavWrapLink to="/" exact>
      <Navigation.Item>
        This page
      </Navigation.Item>
    </NavWrapLink>
    <NavWrapLink to="/Link">
      <Navigation.Item>
        Another page
      </Navigation.Item>
    </NavWrapLink>
  </Navigation.ItemList>
</Navigation>
```

If you're not using React Router, you can also supply an `active` prop to the `Navigation.Item` directly.

Dark Navigation
```javascript
<Navigation.Dark>
  <Link.Wrap to="/">
    <Navigation.Title>
      Bandwidth App
    </Navigation.Title>
  </Link.Wrap>
  <Navigation.ItemListStack>
    <Navigation.ItemList.Small>
      <Link.Wrap newTab to="https://bandwidth.com">
        <Navigation.Item>
          Why Bandwidth
        </Navigation.Item>
      </Link.Wrap>
      <Link.Wrap newTab to="http://dev.bandwidth.com">
        <Navigation.Item>
          Docs for Developers
        </Navigation.Item>
      </Link.Wrap>
      <Link.Wrap to="/login">
        <Navigation.Item>
          Login
        </Navigation.Item>
      </Link.Wrap>
    </Navigation.ItemList.Small>
    <Navigation.ItemList>
      <Link.Wrap to="/services" exact>
        <Navigation.Item>
          Services
        </Navigation.Item>
      </Link.Wrap>
      <Link.Wrap to="/useCases">
        <Navigation.Item>
          Use Cases
        </Navigation.Item>
      </Link.Wrap>
      <Link.Wrap to="/pricing">
        <Navigation.Item>
          Pricing
        </Navigation.Item>
      </Link.Wrap>
      <Link.Wrap to="/trial">
        <Navigation.Item>
          Try for Free
        </Navigation.Item>
      </Link.Wrap>
    </Navigation.ItemList>
  </Navigation.ItemListStack>
</Navigation.Dark>
```

Sub-nav
```javascript
<Navigation.Sub>
  <Navigation.ItemList>
    <Link.Wrap to="/voice" exact>
      <Navigation.Item>
        Voice
      </Navigation.Item>
    </Link.Wrap>
    <Link.Wrap to="/messaging">
      <Navigation.Item>
        Messaging
      </Navigation.Item>
    </Link.Wrap>
    <Link.Wrap to="/numberManagement">
      <Navigation.Item>
        Number Management
      </Navigation.Item>
    </Link.Wrap>
    <Link.Wrap to="/e911">
      <Navigation.Item>
        9-1-1
      </Navigation.Item>
    </Link.Wrap>
  </Navigation.ItemList>
</Navigation.Sub>
```
Sub-nav dark
```javascript
<Navigation.Sub.Dark>
  <Navigation.ItemList>
    <Link.Wrap to="/voice" exact>
      <Navigation.Item>
        Voice
      </Navigation.Item>
    </Link.Wrap>
    <Link.Wrap to="/messaging">
      <Navigation.Item>
        Messaging
      </Navigation.Item>
    </Link.Wrap>
    <Link.Wrap to="/numberManagement">
      <Navigation.Item>
        Number Management
      </Navigation.Item>
    </Link.Wrap>
    <Link.Wrap to="/e911">
      <Navigation.Item>
        9-1-1
      </Navigation.Item>
    </Link.Wrap>
  </Navigation.ItemList>
</Navigation.Sub.Dark>
```

### Unconventional content

You may need to tweak components a bit in order to fit them into a Navigation context.
```javascript
<Navigation>
  <Navigation.ItemListStack>
    <Navigation.ItemList>
      <Navigation.Item>
        <Toggle description="Super Mode" />
      </Navigation.Item>
      <Link.Wrap newTab to="https://dev.bandwidth.com">
        <Navigation.Item>
          Docs for Developers
        </Navigation.Item>
      </Link.Wrap>
      <Link.Wrap to="/login">
        <Navigation.Item>
          Login
        </Navigation.Item>
      </Link.Wrap>
    </Navigation.ItemList>
  </Navigation.ItemListStack>
  <Link.Wrap to="/">
    <Navigation.Title>
      Bandwidth App
    </Navigation.Title>
  </Link.Wrap>
</Navigation>
```
