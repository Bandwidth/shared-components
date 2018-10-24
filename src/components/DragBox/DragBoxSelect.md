```javascript
<DragBox.Select
  renderContents={({ toggleItem, selected, collisions, ref }) => (
    <Grid columns={4}>
      {['Apple', 'Banana', 'Lemon', 'Watermelon'].map(text => (
        <DragBox.Item>
          <ToggleButton
            innerRef={ref}
            key={text}
            name={text}
            onClick={toggleItem}
            selected={selected.has(text)}
          >
            {text}
          </ToggleButton>
        </DragBox.Item>
      ))}
    </Grid>
  )}
/>
```
