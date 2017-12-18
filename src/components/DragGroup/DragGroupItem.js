import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import DragItemContainer from './styles/DragItemContainer';

class DragItem extends React.Component {
  static propTypes = {
    /**
     * Must be exactly one node. The children will be passed a
     * `wrapDragHandle` prop which MUST be used to wrap the draggable
     * portion of the child content inside the child's render function
     */
    children: PropTypes.node.isRequired,

    /**
     * Called with (fromGroupId, toGroupId) when the item is moved
     * between groups.
     */
    onMove: PropTypes.func.isRequired,

    /**
     * Provided by parent DragGroup
     * Indicates the current parent's group id.
     */
    groupId: PropTypes.func,
  };

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
    this.props.connectDragSource(
      <div
        style={{
          cursor: '-webkit-grab',
          display: this.props.canDrag ? 'block' : 'none',
        }}
      >
        {dragHandleNode}
      </div>,
    );

  render() {
    const {
      connectDragSource,
      connectDragPreview,
      isDragging,
      children,
    } = this.props;

    return (
      <DragItemContainer isDragging={isDragging}>
        {React.cloneElement(React.Children.only(children), {
          wrapDragHandle: this.wrapDragHandle,
        })}
      </DragItemContainer>
    );
  }
}

const itemSource = {
  beginDrag(props, monitor, component) {
    const domNode = ReactDOM.findDOMNode(component);
    const clientRect = domNode.getBoundingClientRect();
    return {
      children: props.children,
      dimensions: clientRect,
    };
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    if (dropResult.type === 'group') {
      props.onMove(props.groupId, dropResult.groupId);
    }
  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
});

export default DragSource(props => props.itemType, itemSource, collect)(
  DragItem,
);
