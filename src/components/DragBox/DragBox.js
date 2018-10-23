import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import mapValues from 'lodash.mapvalues';
import partition from 'lodash.partition';
import filter from 'lodash.filter';
import throttle from 'lodash.throttle';
import pick from 'lodash.pick';
import noop from 'lodash.noop';

import DragBoxSelect from './DragBoxSelect';
import DragBoxRect from './styles/DragBoxRect';
import DragBoxDiv from './styles/DragBoxDiv';

// Minimum size for the dragbox to become active and prevent click through. This value is based on feel - it helps
// avoid missed clicks on buttons when moving the mouse inaccurately.
// TODO: We should probably turn on drag box once this size is met and not turn it off until
// the mouse button is released
const MIN_SIZE_DRAGBOX = 16;

//Empty class to attach ref to.
class DragBoxItem extends React.Component {
  render() {
    return this.props.children;
  }
}

/**
 * **DragBox** creates an area where the user can drag a box that can then control other types of behavior. It is intended to
 * be used with the [Selectable](/#!/Selectable) behavior, though it can be used for general purposes. For a prebuilt implementation
 * of **DragBox** with [Selectable](/#!/Selectable), use [DragBox.Select](#!/DragBoxSelect).
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

  state = {
    mouseDown: false,
    start: null,
    end: null,
    collisions: new Set(),
    scrollLeft: 0,
    scrollTop: 0,
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
      <DragBoxRect
        style={{
          left,
          top,
          width,
          height,
        }}
      />
    ),
  };

  static Item = DragBoxItem;

  getScrollElement = () =>
    (this.props.scrollSelector &&
      window.document.querySelector(this.props.scrollSelector)) ||
    window.document.documentElement;

  getScroll = () => pick(this.getScrollElement(), ['scrollLeft', 'scrollTop']);

  attachScrollSelector = () => {
    const el = this.getScrollElement();
    el.addEventListener('scroll', this.throttledScroll);
    window.document.addEventListener('mousemove', this.onMouseMove);
    window.document.addEventListener('mouseup', this.onMouseUp);
  };

  detachScrollSelector = () => {
    const el = this.getScrollElement();
    el.removeEventListener('scroll', this.throttledScroll);
    window.document.removeEventListener('mousemove', this.onMouseMove);
    window.document.removeEventListener('mouseup', this.onMouseUp);
  };

  // Add scroll delta to our mouse position if the scroll context element
  // is not already the window.
  getMousePosition = (ev, customScroll = null) => {
    if (this.getScrollElement() === window.document.documentElement) {
      return { x: ev.pageX, y: ev.pageY };
    }
    return this.addScroll({ x: ev.pageX, y: ev.pageY }, customScroll);
  };

  // We can't get the new mouse position on scroll, so we determine the scroll delta
  // and recalculate the mouse position from that. Use throttledScroll instead of using this function directly.
  __handleScroll = ev => {
    const {
      state: {
        scrollLeft: lastScrollLeft,
        scrollTop: lastScrollTop,
        end: lastEnd,
      },
    } = this;
    const { scrollLeft, scrollTop } = this.getScroll();
    // If the mouse is being held down as we scroll, we need to adjust the rectangle
    const end = lastEnd
      ? {
          x: lastEnd.x + (scrollLeft - lastScrollLeft),
          y: lastEnd.y + (scrollTop - lastScrollTop),
        }
      : null;
    this.setState({ end, scrollLeft, scrollTop });
    this.checkChildrenBoxCollisions();
  };

  // Scrolling is throttled so that we avoid doing costly collision calculations
  // and rerenders on every frame. Instead, we limit it to 20 times a second,
  // which still gives high visual fidelity.
  throttledScroll = throttle(this.__handleScroll, 50);

  addScroll = ({ x, y }, customScroll = null) => ({
    x: x + (customScroll || this.state).scrollLeft,
    y: y + (customScroll || this.state).scrollTop,
  });

  onMouseDown = ev => {
    const {
      props: { onMouseDown },
      getMousePosition,
    } = this;
    // Left click
    if (ev.button !== 0) return;
    this.attachScrollSelector();
    // When we start dragging, it's possible that we dragged a bunch
    // and now our scroll state is invalid. We update the scroll state
    // while using the new scroll state to calculate the mouse positions
    const { scrollLeft, scrollTop } = this.getScroll();
    this.setState({
      scrollLeft,
      scrollTop,
      mouseDown: true,
      start: this.getMousePosition(ev, { scrollLeft, scrollTop }),
      end: this.getMousePosition(ev, { scrollLeft, scrollTop }),
    });
    this.props.onMouseDown();
  };

  onMouseUp = ev => {
    if (!this.state.mouseDown) {
      return;
    }
    if (ev.button !== 0) return;
    this.detachScrollSelector();
    this.props.onMouseUp(this.state.collisions);
    this.setState({
      mouseDown: false,
      start: null,
      end: null,
      collisions: new Set(),
    });
  };

  onMouseMove = ev => {
    if (!this.state.mouseDown) {
      return;
    }
    ev.preventDefault();
    this.setState({ end: this.getMousePosition(ev) });
    this.checkChildrenBoxCollisions();
  };

  calcRect = () => {
    const {
      state: { start, end, scrollLeft, scrollTop },
    } = this;
    if (!start || !end) return {};
    const parent = this.dragElement;
    return {
      x: Math.min(start.x, end.x) - scrollLeft,
      y: Math.min(start.y, end.y) - scrollTop,
      width: Math.abs(start.x - end.x),
      height: Math.abs(start.y - end.y),
    };
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
      state: { mouseDown },
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
      onMouseDown,
      renderRect,
      renderContents,
      calcRect,
      renderItem,
      props: { disablePointerEventsWhileDragging, children },
    } = this;
    const rect = calcRect();
    return (
      <DragBoxDiv
        ref={refDragElement}
        onMouseDown={onMouseDown}
        disablePointerEvents={
          disablePointerEventsWhileDragging && this.shouldDrawRect(rect)
        }
      >
        {renderRect(rect)}
        {renderContents()}
      </DragBoxDiv>
    );
  }
}

DragBox.Select = DragBoxSelect;

export default DragBox;
