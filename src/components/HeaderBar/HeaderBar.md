A horizontal 'header bar' for use between the navigation menu and the main content on any page.

```javascript
<div style={{ padding: '30px' }}>
  <Navigation>
    <Link to="/">
      <Navigation.Title>Bandwidth App</Navigation.Title>
    </Link>
    <Navigation.ItemListStack>
      <Navigation.ItemList.Small>
        <Link newTab to="https://bandwidth.com">
          <Navigation.Item>Why Bandwidth</Navigation.Item>
        </Link>
        <Link newTab to="https://dev.bandwidth.com">
          <Navigation.Item>Docs for Developers</Navigation.Item>
        </Link>
        <Link to="/login">
          <Navigation.Item>Login</Navigation.Item>
        </Link>
      </Navigation.ItemList.Small>
      <Navigation.ItemList>
        <Link to="/services" exact>
          <Navigation.Item>Services</Navigation.Item>
        </Link>
        <Link to="/useCases">
          <Navigation.Item>Use Cases</Navigation.Item>
        </Link>
        <Link to="/pricing">
          <Navigation.Item>Pricing</Navigation.Item>
        </Link>
        <Link to="/trial">
          <Navigation.Item>Try for Free</Navigation.Item>
        </Link>
      </Navigation.ItemList>
    </Navigation.ItemListStack>
  </Navigation>
  <HeaderBar>
    <Label>Header bar content with some link</Label>
    <Anchor>You messaging URI</Anchor>
  </HeaderBar>
</div>
```
