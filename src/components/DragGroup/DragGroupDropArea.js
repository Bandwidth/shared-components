import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import DragGroupDropAreaContent from './styles/DragGroupDropAreaContent';

/**
 * The droppable area of a DragGroup. Connected to react-dnd.
 * Renders its children when idle, but if a dragging operation is
 * ongoing, its default Content presenter will render a
 * drop zone box.
 *
 * You may reference this component if you choose to override it
 * in DragGroup, otherwise it is not needed. See DragGroup docs.
 */
class DragGroupDropArea extends React.Component {
  static propTypes = {
    itemType: PropTypes.string.isRequired,
    groupId: PropTypes.number.isRequired,
    Content: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    Content: DragGroupDropAreaContent,
  };

  render() {
    const {
      connectDropTarget,
      Content,
      canDrop,
      isOver,
      children,
    } = this.props;
    return connectDropTarget(
      <div>
        <Content canDrop={canDrop} isOver={isOver}>
          {children}
        </Content>
      </div>,
    );
  }
}

const dropSource = {
  drop(props) {
    return {
      type: 'group',
      groupId: props.groupId,
    };
  },
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  canDrop: monitor.canDrop(),
  isOver: monitor.isOver(),
});

export default DropTarget(props => props.itemType, dropSource, collect)(
  DragGroupDropArea,
);
