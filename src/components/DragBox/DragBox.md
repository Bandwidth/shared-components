```javascript
class Container extends React.Component {
  render() {
    return this.props.children;
  }
}

<Selectable
  render={({ toggleItem, selected }) => (
    <DragBox
      onMouseUp={collisions => collisions.forEach(toggleItem)}
      renderContents={({ collisions, ref }) => (
        <Grid columns={4}>
          {['Apple', 'Banana', 'Lemon', 'Watermelon'].map(text => (
            <DragBox.Item>
              <ToggleButton.Colorful
                data-drag-box-key={text}
                innerRef={ref}
                key={text}
                name={text}
                onClick={toggleItem}
                selected={
                  collisions.size > 0
                    ? selected.has(text) || collisions.has(text)
                    : selected.has(text)
                }
                hovered={
                  collisions.size > 0
                    ? selected.has(text) && collisions.has(text)
                    : null
                }
              >
                {text}
              </ToggleButton.Colorful>
            </DragBox.Item>
          ))}
        </Grid>
      )}
    />
  )}
/>;
```
