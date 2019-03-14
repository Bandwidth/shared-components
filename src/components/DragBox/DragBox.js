import React from 'react';
import PropTypes from 'prop-types';
import partition from 'lodash.partition';
import throttle from 'lodash.throttle';
import pick from 'lodash.pick';
import noop from 'lodash.noop';

import DragBoxSelect from './DragBoxSelect';
import * as styles from './styles';

// Minimum size for the dragbox to become active and prevent click through. This value is based on feel - it helps
// avoid missed clicks on buttons when moving the mouse inaccurately.
// TODO: We should probably turn on drag box once this size is met and not turn it off until
// the mouse button is released
const MIN_SIZE_DRAGBOX = 16;

/**
 * **DragBox** creates an area where the user can drag a box that can then control other types of behavior. It is intended to
 * be used with the [Selectable](#!/Selectable) behavior, though it can be used for general purposes. For a prebuilt implementation
 * of **DragBox** with [Selectable](#!/Selectable), use [DragBox.Select](#!/DragBoxSelect).
 *
 * **DragBox** uses render props, which means that it takes functions that it passes several arguments and uses the result
 * of that function to perform renders. This allows it to be easily composed with other types of components.
 *
 * **DragBox** requires that the `getRef()` function be passed down and called in the `ref` property of each React
 * component that should be selectable. Note that this requires that the component have an instance - it cannot be a
 * purely functional component. **DragBox.Item** is provided as a simple wrapper component for this purpose.
 */
class DragBox extends React.Component {
  static propTypes = {
    /**
     * Callback invoked when the mouse is clicked in the **DragBox** area
     */
    onMouseDown: PropTypes.func,
    /**
     * Callback invoked when the mouse is released in the **DragBox** area.
     * Passed the **Set** of collision keys as its argument.
     */
    onMouseUp: PropTypes.func,
    /**
     * Callback invoked when the **DragBox** box set of collisions changes.
     * Called with an object that has two keys, `added` and `removed`, each
     * with an array of items that were just added or removed respectively
     * to the collision set.
     */
    onCollisionChange: PropTypes.func,
    /**
     * Callback invoked when the **DragBox** box collides with new items
     * that it wasn't colliding with at the previous mouse position.
     * Called with an array of items that have just been collided with.
     */
    onCollisionBegin: PropTypes.func,
    /**
     * Callback invoked when the **DragBox** box stops colliding with items
     * that it was colliding with at the previous mouse position.
     * Called with an array of items that have just stopped colliding.
     */
    onCollisionEnd: PropTypes.func,
    /**
     * Render prop to render contents inside **DragBox**.
     * Supports all callbacks that **DragBox** itself supports as well as the following props:
     *
     * *collisions*: The **Set** of keys that are currently being collided with
     *
     * *getRef*: A function that should be passed into the `ref` property of each child
     * that can be selected by **DragBox**. It should be called with a unique key
     * for each component. For example, `<button ref={getRef("uniquekey")} key="uniquekey" />`.
     */
    renderContents: PropTypes.func,
    /**
     * Render prop to render the draggable rectangle. It is passed an object with the left, top, width, and height of
     * the rectangle to be drawn should return the component to render.
     */
    renderRect: PropTypes.func,
    /**
     * The selector for the element to attach the scroll listener to. Defaults to page body. Do not change after initial call.
     */
    scrollSelector: PropTypes.string,
    /**
     * Disables mouse events (such as hover) on children while dragging.
     */
    disablePointerEventsWhileDragging: PropTypes.bool,
  };

  static defaultProps = {
    onMouseDown: noop,
    onMouseUp: noop,
    onCollisionChange: noop,
    onCollisionBegin: noop,
    onCollisionEnd: noop,
    renderContents: noop,
    scrollSelector: null,
    disablePointerEventsWhileDragging: false,
    renderRect: ({ left, top, width, height }) => (
      <styles.Rect
        style={{
          left,
          top,
          width,
          height,
        }}
      />
    ),
  };

  state = {
    mouseDown: false,
    start: null,
    end: null,
    collisions: new Set(),
  };

  // Checks the collisions with the draggable box against the children. The collision deltas are then used
  // to invoke callbacks that consumers can bind to.
  checkChildrenBoxCollisions = () => {
    const {
      props: { onCollisionBegin, onCollisionEnd, onCollisionChange },
      state: { collisions },
    } = this;
    const collisionBox = this.calcRect();
    // Divide all clickable refs into two arrays based on whether they are colliding or not.
    const itemElements = this.dragElement.querySelectorAll(
      '[data-drag-box-key]',
    );
    const [collidingNodes, notCollidingNodes] = partition(
      itemElements,
      node => {
        const childRect = node.getBoundingClientRect();
        // We are looking for intersections of the edges of the rectangle.
        return (
          this.checkBoxCollision(childRect, collisionBox) &&
          !this.checkBoxContains(childRect, collisionBox)
        );
      },
    );

    const colliding = collidingNodes.map(node =>
      node.getAttribute('data-drag-box-key'),
    );
    const notColliding = notCollidingNodes.map(node =>
      node.getAttribute('data-drag-box-key'),
    );

    // Pull out elements that haven't changed their collision state.
    const added = colliding.filter(key => !collisions.has(key));
    const removed = notColliding.filter(key => collisions.has(key));

    //Update collisions set
    added.forEach(i => collisions.add(i));
    removed.forEach(i => collisions.delete(i));

    //Invoke callbacks if necessary
    if (added.length > 0) {
      onCollisionBegin(added);
    }
    if (removed.length > 0) {
      onCollisionEnd(removed);
    }
    if (added.length > 0 || removed.length > 0) {
      onCollisionChange({ added, removed });
    }
    this.setState({ collisions });
  };

  // Checks if b1 collides with b2
  // prettier-ignore
  checkBoxCollision = (b1, b2) =>
    (b1.x < b2.x + b2.width) &&
    (b1.x + b1.width > b2.x) &&
    (b1.y < b2.y + b2.height) &&
    (b1.height + b1.y > b2.y);

  // Checks if b1 contains b2
  // prettier-ignore
  checkBoxContains = (b1, b2) =>
    (b1.x <= b2.x) &&
    (b2.x <= b1.x + b1.width) &&
    (b1.x <= b2.x + b2.width) &&
    (b2.x + b2.width <= b1.x + b1.width) &&
    (b1.y <= b2.y) &&
    (b2.y <= b1.y + b1.height) &&
    (b1.y <= b2.y + b2.height) &&
    (b2.y + b2.height <= b1.y + b1.height);

  handleMouseDown = ev => {
    if (ev.button !== 0) return;
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
    this.setState({
      mouseDown: true,
      start: { x: event.clientX, y: event.clientY },
      end: { x: event.clientX, y: event.clientY },
    });
  };

  handleMouseUp = ev => {
    document.removeEventListener('mousemove', this.handleMouseUp);
    document.removeEventListener('mouseup', this.handleMouseUp);
    if (!this.state.mouseDown || ev.button !== 0) return;
    this.props.onMouseUp(this.state.collisions);
    this.setState({
      mouseDown: false,
      start: null,
      end: null,
      collisions: new Set(),
    });
  };

  handleMouseMove = ev => {
    if (!this.state.mouseDown) {
      return;
    }
    ev.preventDefault();
    this.setState({ end: { x: ev.clientX, y: ev.clientY } });
    requestAnimationFrame(this.checkChildrenBoxCollisions);
  };

  calcRect = () => {
    const {
      state: { start, end },
    } = this;
    if (!start || !end)
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
    return {
      x: Math.min(start.x, end.x),
      y: Math.min(start.y, end.y),
      width: Math.abs(start.x - end.x),
      height: Math.abs(start.y - end.y),
    };
  };

  shouldDrawRect = rect => {
    const {
      state: { mouseDown },
    } = this;
    return (
      mouseDown && (rect.width + 1) * (rect.height + 1) >= MIN_SIZE_DRAGBOX
    );
  };

  renderRect = rect => {
    const {
      props: { renderRect },
      shouldDrawRect,
    } = this;
    if (!shouldDrawRect(rect)) return;
    return renderRect({
      left: rect.x,
      top: rect.y,
      width: rect.width,
      height: rect.height,
    });
  };

  // Keep track of collidable child refs; ref functions are called with null when they are unmounted.
  getRef = key => el => {
    if (el !== null) {
      el.setAttribute('data-drag-box-key', key);
    }
  };

  itemRef = el => {
    if (el === null) {
      return;
    }

    const key = el.getAttribute('data-drag-box-key');
    if (!key) {
      throw new Error(
        "You used the `ref` mode for DragBox, but did not provide a `data-drag-box-key` attribute to the referenced element. This is not allowed. If you can't provide a custom data prop to the element, please use the `getRef(key)` mode",
      );
    }
  };

  renderContents = () => {
    const {
      props: {
        onCollisionChange,
        onCollisionBegin,
        onCollisionEnd,
        onMouseUp,
        onMouseDown,
        renderContents,
      },
      state: { collisions },
      getRef,
      itemRef,
    } = this;
    return renderContents({
      onMouseDown,
      onMouseUp,
      onCollisionChange,
      onCollisionBegin,
      onCollisionEnd,
      collisions,
      getRef,
      ref: itemRef,
    });
  };

  refDragElement = el => (this.dragElement = el);

  render() {
    const {
      refDragElement,
      handleMouseDown,
      renderRect,
      renderContents,
      calcRect,
      props: {
        disablePointerEventsWhileDragging,
        children,
        onCollisionChange,
        onCollisionBegin,
        onCollisionEnd,
        onMouseDown,
        ...rest
      },
    } = this;
    const rect = calcRect();
    return (
      <styles.Div
        ref={refDragElement}
        onMouseDown={handleMouseDown}
        disablePointerEvents={
          disablePointerEventsWhileDragging && this.shouldDrawRect(rect)
        }
        {...rest}
      >
        {renderRect(rect)}
        {renderContents()}
      </styles.Div>
    );
  }
}

DragBox.Select = DragBoxSelect;

export default DragBox;
