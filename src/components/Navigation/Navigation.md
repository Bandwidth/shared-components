The header above a page which contains page title and navigation.

Navigation provides several sub-components which can be used to construct complex nested controls.

```javascript
<Navigation>
  <Anchor to="/">
    <Navigation.Title>
      Bandwidth App
    </Navigation.Title>
  </Anchor>
  <Navigation.ItemListStack>
    <Navigation.ItemList.Small>
      <Anchor newTab to="https://bandwidth.com">
        <Navigation.Item>
          Why Bandwidth
        </Navigation.Item>
      </Anchor>
      <Anchor newTab to="https://dev.bandwidth.com">
        <Navigation.Item>
          Docs for Developers
        </Navigation.Item>
      </Anchor>
      <Anchor to="/login">
        <Navigation.Item>
          Login
        </Navigation.Item>
      </Anchor>
    </Navigation.ItemList.Small>
    <Navigation.ItemList>
      <Anchor to="/services" exact>
        <Navigation.Item>
          Services
        </Navigation.Item>
      </Anchor>
      <Anchor to="/useCases">
        <Navigation.Item>
          Use Cases
        </Navigation.Item>
      </Anchor>
      <Anchor to="/pricing">
        <Navigation.Item>
          Pricing
        </Navigation.Item>
      </Anchor>
      <Anchor to="/trial">
        <Navigation.Item>
          Try for Free
        </Navigation.Item>
      </Anchor>
    </Navigation.ItemList>
  </Navigation.ItemListStack>
</Navigation>
```

Dark Navigation
```javascript
<Navigation.Dark>
  <Anchor to="/">
    <Navigation.Title>
      Bandwidth App
    </Navigation.Title>
  </Anchor>
  <Navigation.ItemListStack>
    <Navigation.ItemList.Small>
      <Anchor newTab to="https://bandwidth.com">
        <Navigation.Item>
          Why Bandwidth
        </Navigation.Item>
      </Anchor>
      <Anchor newTab to="http://dev.bandwidth.com">
        <Navigation.Item>
          Docs for Developers
        </Navigation.Item>
      </Anchor>
      <Anchor to="/login">
        <Navigation.Item>
          Login
        </Navigation.Item>
      </Anchor>
    </Navigation.ItemList.Small>
    <Navigation.ItemList>
      <Anchor to="/services" exact>
        <Navigation.Item>
          Services
        </Navigation.Item>
      </Anchor>
      <Anchor to="/useCases">
        <Navigation.Item>
          Use Cases
        </Navigation.Item>
      </Anchor>
      <Anchor to="/pricing">
        <Navigation.Item>
          Pricing
        </Navigation.Item>
      </Anchor>
      <Anchor to="/trial">
        <Navigation.Item>
          Try for Free
        </Navigation.Item>
      </Anchor>
    </Navigation.ItemList>
  </Navigation.ItemListStack>
</Navigation.Dark>
```

Sub-nav
```javascript
<Navigation.Sub>
  <Navigation.ItemList>
    <Anchor to="/voice" exact>
      <Navigation.Item>
        Voice
      </Navigation.Item>
    </Anchor>
    <Anchor to="/messaging">
      <Navigation.Item>
        Messaging
      </Navigation.Item>
    </Anchor>
    <Anchor to="/numberManagement">
      <Navigation.Item>
        Number Management
      </Navigation.Item>
    </Anchor>
    <Anchor to="/e911">
      <Navigation.Item>
        9-1-1
      </Navigation.Item>
    </Anchor>
  </Navigation.ItemList>
</Navigation.Sub>
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
      <Anchor newTab to="https://dev.bandwidth.com">
        <Navigation.Item>
          Docs for Developers
        </Navigation.Item>
      </Anchor>
      <Anchor to="/login">
        <Navigation.Item>
          Login
        </Navigation.Item>
      </Anchor>
    </Navigation.ItemList>
  </Navigation.ItemListStack>
  <Anchor to="/">
    <Navigation.Title>
      Bandwidth App
    </Navigation.Title>
  </Anchor>
</Navigation>
```
