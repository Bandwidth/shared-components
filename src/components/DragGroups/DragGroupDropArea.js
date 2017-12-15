import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import DragGroupDropAreaContent from './styles/DragGroupDropAreaContent';

class DragGroupDropArea extends React.Component {
  static propTypes = {
    itemType: PropTypes.string.isRequired,
    groupIndex: PropTypes.number.isRequired,
    Content: PropTypes.func,
  };

  static defaultProps = {
    Content: DragGroupDropAreaContent,
  };

  render() {
    const { connectDropTarget, Content, canDrop, isOver } = this.props;
    return connectDropTarget(
      <div>
        <Content canDrop={canDrop} isOver={isOver} />
      </div>,
    );
  }
}

const dropSource = {
  drop(props) {
    return {
      type: 'group',
      groupIndex: props.groupIndex,
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
