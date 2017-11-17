An simple example

```javascript
<Navigation
  title="Example App"
  links={[
    {
      to: '#foo',
      content: 'Foo',
    },
    {
      to: '#bar',
      content: 'Bar',
    },
    {
      to: '#corge',
      content: 'Corge',
    }
  ]}
  logoLocation="#home"
/>
```

An example with 'top links', the smaller group of links above the main navigation

```javascript
<Navigation
  title="Example App"
  links={[
    {
      to: '#foo',
      content: 'Foo',
    },
    {
      to: '#bar',
      content: 'Bar',
    },
    {
      to: '#corge',
      content: 'Corge',
    }
  ]}
  topLinks={[
    {
      to: '#baz',
      content: 'Baz',
    },
    {
      to: '#thud',
      content: 'Thud',
    },
  ]}
  logoLocation="#home"
/>
```
