import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import GroupContainer from './styles/DragGroupContainer';
import DragItem from './DragItem';
import GroupItemsContainer from './styles/DragGroupItemsContainer';
import DragGroupDropArea from './DragGroupDropArea';
import DragGroupSeparator from './styles/DragGroupSeparator';
import DragGroupTitle from './styles/DragGroupTitle';
import ExpandToggle from '../../behaviors/ExpandToggle';

class DragGroup extends React.Component {
  static propTypes = {
    Container: PropTypes.func,

    ItemsContainer: PropTypes.func,
    DropArea: PropTypes.func,
    Separator: PropTypes.func,
    separatorContent: PropTypes.node,
    Title: PropTypes.func,

    // provided by DragGroups; cannot be required, but can be expected.
    name: PropTypes.string,
    itemType: PropTypes.string,
    groupIndex: PropTypes.number,
    groupCount: PropTypes.number,
    onGroupInserted: PropTypes.func,
    onItemDropped: PropTypes.func,
    onGroupRemoved: PropTypes.func,
  };

  static defaultProps = {
    Container: GroupContainer,
    ItemsContainer: GroupItemsContainer,
    DropArea: DragGroupDropArea,
    Separator: DragGroupSeparator,
    separatorContent: 'Click here to add a group',
    Title: DragGroupTitle,

    name: null,
    itemType: null,
    groupIndex: null,
    groupCount: null,
    onGroupInserted: () => null,
    onItemDropped: () => null,
    onGroupRemoved: () => null,
  };

  createItemDropHandler = index => (dropType, targetGroupIndex) => {
    this.props.onItemDropped({
      sourceGroupIndex: this.props.groupIndex,
      sourceIndex: index,
      targetGroupIndex: targetGroupIndex,
      dropType,
    });
  };

  shimChild = (child, index) => {
    const { itemType, groupCount } = this.props;

    return React.cloneElement(child, {
      itemType,
      onDrop: this.createItemDropHandler(index),
      canDrag: groupCount > 1,
    });
  };

  renderInterspersedSeparators() {
    const {
      children,
      Separator,
      name,
      onGroupInserted,
      separatorContent,
    } = this.props;
    const childArray = React.Children.toArray(children);
    return childArray.reduce(
      (withSeparators, child, idx) => [
        ...withSeparators,
        this.shimChild(child, idx),
        <Separator
          onClick={() => onGroupInserted(idx + 1)}
          key={`separator${child.key || idx + 1}`}
        >
          {separatorContent}
        </Separator>,
      ],
      [
        <Separator onClick={() => onGroupInserted(0)} key="finalSeparator">
          {separatorContent}
        </Separator>,
      ],
    );
  }

  renderTitle = expanded => (
    <DragGroupTitle expanded={expanded} onDelete={this.props.onGroupRemoved}>
      {this.props.title}
    </DragGroupTitle>
  );

  render() {
    const {
      Container,
      ItemsContainer,
      DropArea,
      itemType,
      groupIndex,
      canDrop,
    } = this.props;

    return (
      <Container>
        <ExpandToggle startExpanded toggleContent={this.renderTitle}>
          <div style={{ height: canDrop ? '0' : 'auto' }}>
            <ItemsContainer>
              {this.renderInterspersedSeparators()}
            </ItemsContainer>
          </div>
        </ExpandToggle>
        <DropArea itemType={itemType} groupIndex={groupIndex} />
      </Container>
    );
  }
}

const dropSource = {
  drop(props) {
    return {
      type: 'items',
      groupIndex: null,
    };
  },
};

const collect = (connect, monitor) => ({
  canDrop: monitor.canDrop(),
});

export default DropTarget(props => props.itemType, dropSource, collect)(
  DragGroup,
);
