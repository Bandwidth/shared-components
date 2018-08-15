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
          <DragBox.Item ref={getRef(text)}>
            <ToggleButton
              key={text}
              name={text}
              onClick={toggleItem}
              selected={selected.has(text)}
            >{text}</ToggleButton>
          </DragBox.Item>
        )
    }</Grid>
  }
  />
```
