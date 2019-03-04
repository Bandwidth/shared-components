**Basic Links**

```js
<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px',
  }}
>
  <Link to="/local/route">Local route text link</Link>
  <Link to="https://google.com">Remote text link</Link>
  <Link icon="unicorn" to="/foo">
    Iconic link
  </Link>
  <Link icon="cat" to="/bar" />
  <Link.Wrap to="/foo">Invisible wrap link</Link.Wrap>
  <Link onClick={() => alert('clicked')}>Link with click handler</Link>
</div>
```

### Customize how `Link` is rendered

Link is designed to be flexible and style a user-defined Link component. By default, it ships with the standard HTML `<a>` element. You can provide your own implementation using the `as` prop.

#### 1. Implement a component which takes the correct props

An implementation component will be passed all props provided to `<Link>` from the outside. The `newTab` prop which indicates whether the link has been detected as being to a location outside the current app may be different from the one you pass in, if an external link is detected.

```js static
// note: something like this is of course not very useful.
const CustomLinkImplementation = ({
  children,
  to,
  newTab,
  appearFocused,
  icon,
  ...rest
}) => <div onClick={() => (window.location.href = to)}>{children}</div>;
```

#### 2. Pass your component as a prop to `Link`

```js static
const CustomLink = withProps({ as: CustomLinkImplementation })(Link);
```

### Use with React Router

To use `Link` with React Router's `Link`, you need to provide a custom implementation. Define a `Link` component within your local project which passes a component that satisfies the `LinkImplementation` contract:

```js static
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@bandwidth/shared-components';
import { withProps } from 'recompose';

const RouterLinkImplementation = ({
  children,
  external,
  appearFocused,
  icon,
  ...rest
}) => <RouterLink {...rest}>{children}</RouterLink>;

export default withProps({ as: RouterLinkImplementation })(Link);
```

You can use this React-Router-powered Link for both internal and external links. It will automatically apply the appropriate props to force the React Router Link component to route externally if it detects a URL with a protocol (`http(s)://`)

### More Link Styles

**Text Link Styles**

```js
<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px',
  }}
>
  <Link.Negative to="/foo">Negative local route link</Link.Negative>
  <Link.Negative to="https://google.com">Negative remote link</Link.Negative>
  <Link.Positive to="/foo">Positive local route link</Link.Positive>
  <Link.Positive to="https://google.com">Positive remote link</Link.Positive>
  <Link.Dark to="/foo">Dark local route link</Link.Dark>
  <Link.Dark to="https://google.com">Dark remote link</Link.Dark>
  <div style={{ background: '#004658', margin: 'auto', padding: '5px' }}>
    <Link.Inverted to="/foo">Inverted local route link</Link.Inverted>
  </div>
  <div
    style={{
      background: '#004658',
      margin: 'auto',
      padding: '5px 25px 5px 5px',
    }}
  >
    <Link.Inverted to="https://google.com">Inverted remote link</Link.Inverted>
  </div>
  <Link appearFocused to="/foo">
    Controlled focus-styled link
  </Link>
</div>
```

**Icon Link Styles**

```js
<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px',
  }}
>
  <Link.Negative icon="moderator" to="/foo">
    Negative local route link
  </Link.Negative>
  <Link.Negative icon="delete" to="https://google.com">
    Negative remote link
  </Link.Negative>
  <Link.Positive icon="api" to="/foo">
    Positive local route link
  </Link.Positive>
  <Link.Positive icon="help" to="https://google.com">
    Positive remote link
  </Link.Positive>
  <Link.Dark icon="expensive2" to="/foo">
    Dark local route link
  </Link.Dark>
  <Link.Dark icon="courses" to="https://google.com">
    Dark remote link
  </Link.Dark>
  <div style={{ background: '#004658', margin: 'auto', padding: '5px' }}>
    <Link.Inverted icon="loginRounded" to="/foo">
      Inverted local route link
    </Link.Inverted>
  </div>
  <div style={{ background: '#004658', margin: 'auto', padding: '5px' }}>
    <Link.Inverted icon="file" to="https://google.com">
      Inverted remote link
    </Link.Inverted>
  </div>
  <Link appearFocused icon="attention" to="/foo">
    Controlled focus-styled link
  </Link>
</div>
```
