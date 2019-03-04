```javascript
<div style={{ padding: '30px' }}>
  <Navigation>
    <Link.Wrap to="/">
      <Navigation.Title>Bandwidth App</Navigation.Title>
    </Link.Wrap>
    <Navigation.ItemListStack>
      <Navigation.ItemList.Small>
        <Link.Wrap newTab to="https://bandwidth.com">
          <Navigation.Item>Why Bandwidth</Navigation.Item>
        </Link.Wrap>
        <Link.Wrap newTab to="https://dev.bandwidth.com">
          <Navigation.Item>Docs for Developers</Navigation.Item>
        </Link.Wrap>
        <Link.Wrap to="/login">
          <Navigation.Item>Login</Navigation.Item>
        </Link.Wrap>
      </Navigation.ItemList.Small>
      <Navigation.ItemList>
        <Link.Wrap to="/services">
          <Navigation.Item>Services</Navigation.Item>
        </Link.Wrap>
        <Link.Wrap to="/useCases">
          <Navigation.Item>Use Cases</Navigation.Item>
        </Link.Wrap>
        <Link.Wrap to="/pricing">
          <Navigation.Item>Pricing</Navigation.Item>
        </Link.Wrap>
        <Link.Wrap to="/trial">
          <Navigation.Item>Try for Free</Navigation.Item>
        </Link.Wrap>
      </Navigation.ItemList>
    </Navigation.ItemListStack>
  </Navigation>
  <HeaderBar>
    <Label>Header bar content with some link</Label>
    <Link>Secondary Information</Link>
  </HeaderBar>
</div>
```
