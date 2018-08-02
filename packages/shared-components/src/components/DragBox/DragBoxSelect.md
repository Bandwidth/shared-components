**DragBoxSelect** is a specialized usage of [DragBox](/#!/DragBox) that is also accessible via `DragBox.Select`. It is
provided as a convenience as it is a commonly used group of components. All properties available in both
[Selectable](/#!/Selectable) and [DragBox](/#!/DragBox) are passed into the `renderContents`
render prop for **DragBoxSelect**.

```javascript
  <DragBox.Select
    renderContents={({
      toggleItem,
      selected,
      collisions,
      getRef,
    }) =>
    <Grid columns={4}>{
      ["Apple", "Banana", "Lemon", "Watermelon"]
        .map((text) =>
          <ToggleButton
            ref={getRef(text)}
            key={text}
            name={text}
            onClick={toggleItem}
            selected={selected.has(text)}
          >{text}</ToggleButton>
        )
    }</Grid>
  }
  />
```
