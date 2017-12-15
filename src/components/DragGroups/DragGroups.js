import React from 'react';
import PropTypes from 'prop-types';
import withDragDropContext from './withDragDropContext';
import Group from './DragGroup';
import Item from './DragItem';
import DragGroupsContainer from './styles/DragGroupsContainer';
import DragLayer from './DragLayer';

class DragGroups extends React.Component {
  static Group = Group;
  static Item = Item;

  static propTypes = {
    children: PropTypes.node.isRequired,
    onItemMoved: PropTypes.func.isRequired,
    onGroupInserted: PropTypes.func.isRequired,
    Container: PropTypes.func,
    groupBaseName: PropTypes.string,
    itemType: PropTypes.string,
    onGroupRemoved: PropTypes.func.isRequired,
  };

  static defaultProps = {
    Container: DragGroupsContainer,
    groupBaseName: 'Group',
    itemType: 'universal',
  };

  renderGroups = () => {
    const {
      children,
      itemType,
      onGroupInserted,
      groupBaseName,
      onGroupRemoved,
    } = this.props;
    const childArray = React.Children.toArray(children);
    return childArray.map((child, idx) =>
      React.cloneElement(child, {
        itemType,
        groupIndex: idx,
        title: `${groupBaseName} ${idx + 1}`,
        onItemDropped: this.handleItemDropped,
        groupCount: childArray.length,
        onGroupInserted: itemIdx => onGroupInserted(idx, itemIdx),
        onGroupRemoved: () => onGroupRemoved(idx),
      }),
    );
  };

  handleItemDropped = ({
    sourceGroupIndex,
    sourceIndex,
    targetGroupIndex = null,
  }) => {
    const { onItemMoved } = this.props;

    onItemMoved({
      from: {
        groupIndex: sourceGroupIndex,
        itemIndex: sourceIndex,
      },
      to: {
        groupIndex: targetGroupIndex,
      },
    });
  };

  render() {
    const { Container } = this.props;

    return (
      <Container>
        {this.renderGroups()}
        <DragLayer />
      </Container>
    );
  }
}

export default withDragDropContext(DragGroups);
