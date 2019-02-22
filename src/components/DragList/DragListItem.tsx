import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { DragContext } from 'components/DragContainer';

interface DragListItemProps {
  children: React.ReactNode;
  /**
   * DragList.Items that interact with each other should share the same type string value.
   */
  itemType: string;
  /**
   * Index of the item. Used for moving items around
   */
  index: number;
  /**
   * Function provided by react-dnd library that previews the drag item
   * @ignore
   */
  connectDragPreview: (image: any, options: object) => void;
  /**
   * Function provided by react-dnd library that connects the drag source
   * @ignore
   */
  connectDragSource: (source: React.ReactNode) => void;
  /**
   * Function provided by react-dnd library that connects the drag source
   * @ignore
   */
  connectDropTarget: (source: React.ReactNode) => React.ReactNode;
  /**
   * Called with (fromIndex, toIndex) when the item is moved to a new position
   */
  onMove: (fromIndex: string, toIndex: string) => void;
  /**
   * If the drag list item is currently being dragged.
   */
  isDragging: boolean;
}

/**
 * Represents an item that can be dragged. Simply render a node inside of it that wraps the drag handle using
 * the `wrapDragHandle` prop automatically passed down by this component.
 *
 * [DragList.Container](#!/DragContainer) can be used as an out of the box solution, but if a different component is required,
 * you can use `DragList.Item.Consumer`, which uses the React context API.
 *
 * @visibleName DragList.Item
 */
class DragListItem extends React.PureComponent<DragListItemProps> {
  static Consumer = DragContext.Consumer;

  componentDidMount() {
    // Use empty image as a drag preview so browsers don't draw it
    // and we can draw whatever we want on the custom drag layer instead.
    this.props.connectDragPreview(getEmptyImage(), {
      // IE fallback: specify that we'd rather screenshot the node
      // when it already knows it's being dragged so we can hide it with CSS.
      captureDraggingState: true,
    });
  }

  wrapDragHandle = dragHandleNode =>
    /**
     * The element passed to connectDragSource must be a plain
     * React element, not a component.
     */
    this.props.connectDragSource(
      <div className="DragListItem--handle">{dragHandleNode}</div>,
    );

  render() {
    const {
      props: {
        connectDropTarget,
        isDragging,
        children,
        onMove,
        connectDragPreview,
        connectDragSource,
        ...rest
      },
      wrapDragHandle,
    } = this;

    return connectDropTarget(
      <div {...rest}>
        <DragContext.Provider value={{ isDragging, wrapDragHandle }}>
          {children}
        </DragContext.Provider>
      </div>,
    );
  }
}

const dragSource = {
  beginDrag(props, monitor, component) {
    const domNode = ReactDOM.findDOMNode(component) as Element;
    const clientRect = domNode.getBoundingClientRect();
    return {
      index: props.index,
      children: props.children,
      dimensions: clientRect,
    };
  },
};

const dropTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = (ReactDOM.findDOMNode(
      component,
    ) as Element).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Time to actually perform the action
    props.onMove(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  },
};

const dragCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
});

const dropCollect = connect => ({
  connectDropTarget: connect.dropTarget(),
});

/**
 * @component
 * @visibleName DragList.Item
 */
export default DragSource(props => props.itemType, dragSource, dragCollect)(
  DropTarget(props => props.itemType, dropTarget, dropCollect)(DragListItem),
);
