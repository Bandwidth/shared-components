**Selectable** is a general purpose behavior that keeps track of items that have been selected. It uses a render prop and
passes in the set of currently selected items as well as functions to select or deselect additional items. Items are
tracked by a key value that is passed into the `selectItem` and `deselectItem` functions and tracked in the `selected` **Set**.
Since **Selectable** uses a render prop, it can easily be used in conjunction with a wide range of components.
It is primarily useful in cases where selection state is ephemeral and doesn't trigger application state changes.

#### Toggle example:
```javascript
  <Selectable
    render={({
      toggleItem,
      selected
    }) => (
      ["Toggle me", "Toggle me too"].map((text) =>
      <Toggle
        key={text}
        onChange={ev => toggleItem(text)}
        value={selected.has(text)}
        description={text}
      />
    )
  )}
  />
```

#### Accordion example:
```javascript
  <Selectable
    render={({
      toggleItem,
      selected
    }) => (
      ["Accordion 1", "Accordion 2"].map((text) =>
      <Accordion
        key={text}
        onToggle={ev => toggleItem(text)}
        isExpanded={selected.has(text)}
        label={text}
      />
    )
  )}
  />
```

#### Exclusive example:
```javascript
  <Selectable
    exclusive
    render={({
      toggleItem,
      selected
    }) => (
      ["There", "Can", "Only", "Be", "One"].map((text) =>
      <Toggle
        key={text}
        onChange={ev => toggleItem(text)}
        value={selected.has(text)}
        description={text}
      />
    )
  )}
  />
```
