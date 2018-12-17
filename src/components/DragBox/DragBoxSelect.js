import React from 'react';
import PropTypes from 'prop-types';

/**
 *  **DragBoxSelect** is a specialized usage of [DragBox](#!/DragBox) that is also accessible via `DragBox.Select`. It is
 *  provided as a convenience as it is a commonly used group of components. All properties available in both
 *  [Selectable](#!/Selectable) and [DragBox](#!/DragBox) are passed into the `renderContents`
 *  render prop for **DragBoxSelect**.
 * @visibleName DragBox.Select
 */
class DragBoxSelect extends React.Component {
  static propTypes = {
    /**
     * Callback invoked when the mouse is clicked in the **DragBoxSelect** area
     */
    onMouseDown: PropTypes.func,
    /**
     * Callback invoked when the mouse is released in the **DragBoxSelect** area.
     * Passed the **Set** of collision keys as its argument.
     */
    onMouseUp: PropTypes.func,
    /**
     * Callback invoked when the **DragBoxSelect** box set of collisions changes.
     * Called with an object that has two keys, `added` and `removed`, each
     * with an array of items that were just added or removed respectively
     * to the collision set.
     */
    onCollisionChange: PropTypes.func,
    /**
     * Callback invoked when the **DragBoxSelect** box collides with new items
     * that it wasn't colliding with at the previous mouse position.
     * Called with an array of items that have just been collided with.
     */
    onCollisionBegin: PropTypes.func,
    /**
     * Callback invoked when the **DragBoxSelect** box stops colliding with items
     * that it was colliding with at the previous mouse position.
     * Called with an array of items that have just stopped colliding.
     */
    onCollisionEnd: PropTypes.func,
    /**
     * Render prop to render contents inside **DragBoxSelect**.
     * Supports all callbacks that **DragBoxSelect** itself supports as well as the following props:
     *
     * *collisions*: The **Set** of keys that are currently being collided with
     *
     * *getRef*: A function that should be passed into the `ref` property of each child
     * that can be selected by **DragBoxSelect**. It should be called with a unique key
     * for each component. For example, `<button ref={getRef("uniquekey")} key="uniquekey" />`.
     */
    renderContents: PropTypes.func,
    /**
     * Render prop to render the draggable rectangle. It is passed an object with the left, top, width, and height of
     * the rectangle to be drawn should return the component to render.
     */
    renderRect: PropTypes.func,
  };

  renderDragBox = selectableProps => {
    const {
      props: { renderContents, ...rest },
    } = this;
    return (
      <DragBox
        {...this.props}
        onCollisionBegin={items => items.forEach(selectableProps.toggleItem)}
        onCollisionEnd={items => items.forEach(selectableProps.toggleItem)}
        renderContents={dragBoxProps =>
          renderContents({
            ...dragBoxProps,
            ...selectableProps,
          })
        }
        {...rest}
      />
    );
  };

  render() {
    return <Selectable render={this.renderDragBox} />;
  }
}

export default DragBoxSelect;
