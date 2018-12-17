```js
<div>
  <Accordion label="Hello">Some content</Accordion>
  <Accordion label="Hello Again">More content</Accordion>
</div>
```

#### Small

```js
<Accordion.Small label="Small!">
  Some content
  <br />
  <Button>A normal Button</Button>
</Accordion.Small>
```

#### Exclusive

```js
<Selectable
  exclusive
  render={({ toggleItem, selected }) => (
    <React.Fragment>
      <Accordion
        onToggle={ev => toggleItem('First')}
        isExpanded={selected.has('First')}
        label="First"
      />
      <Accordion
        onToggle={ev => toggleItem('Second')}
        isExpanded={selected.has('Second')}
        label="Second"
      />
    </React.Fragment>
  )}
/>
```
