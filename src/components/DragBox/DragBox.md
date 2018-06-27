**DragBox** creates an area where the user can drag a box that can then control other types of behavior. It is intended to
be used with the [Selectable](/#!/Selectable) behavior, though it can be used for general purposes. For a out of the box implementation
of **DragBox** with [Selectable](/#!/Selectable), use [DragBox.Select](#!/DragBoxSelect).

**DragBox** uses a render prop, which means that it takes a function that it passes several arguments and uses the result
of that function to perform a render. This allows it to be easily composed with other types of components.

**DragBox** also requires that the `getRef` function be passed down and called in the `ref` property of each React
component that should be selectable. Note that this requires that the component have an instance - it cannot be a
purely functional component.

```javascript
  <Selectable
    render={({
      toggleItem,
      selected
    }) =>
    <DragBox
      onMouseUp={(collisions) =>
        collisions.forEach(toggleItem)
      }
      renderContents={({
        collisions,
        getRef,
      }) =>
      <Grid columns={4}>{
      ["Apple", "Banana", "Lemon", "Watermelon"]
        .map((text) =>
          <ToggleButton.Colorful
            ref={getRef(text)}
            key={text}
            name={text}
            onClick={toggleItem}
            selected={collisions.size > 0 ? selected.has(text) || collisions.has(text) : selected.has(text)}
            hovered={collisions.size > 0 ? selected.has(text) && collisions.has(text) : null}
          >{text}</ToggleButton.Colorful>
        )
      }</Grid>
    }
    />
  }
  />
```
