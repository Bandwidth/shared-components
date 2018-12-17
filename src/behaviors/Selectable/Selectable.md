#### Toggle example:

```javascript
<Selectable
  render={({ toggleItem, selected }) =>
    ['Toggle me', 'Toggle me too'].map(text => (
      <Toggle
        key={text}
        onChange={ev => toggleItem(text)}
        checked={selected.has(text)}
        description={text}
      />
    ))
  }
/>
```

#### Accordion example:

```javascript
<Selectable
  render={({ toggleItem, selected }) =>
    ['Accordion 1', 'Accordion 2'].map(text => (
      <Accordion
        key={text}
        onToggle={ev => toggleItem(text)}
        isExpanded={selected.has(text)}
        label={text}
      />
    ))
  }
/>
```

#### Exclusive example:

```javascript
<Selectable
  exclusive
  render={({ toggleItem, selected }) =>
    ['There', 'Can', 'Only', 'Be', 'One'].map(text => (
      <Toggle
        key={text}
        onChange={ev => toggleItem(text)}
        checked={selected.has(text)}
        description={text}
      />
    ))
  }
/>
```
