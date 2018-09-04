import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import GroupContainer from './styles/DragGroupContainer';
import GroupItemsContainer from './styles/DragGroupItemsContainer';
import DragGroupDropArea from './DragGroupDropArea';
import DragGroupSeparator from './styles/DragGroupSeparator';
import DragGroupTitle from './styles/DragGroupTitle';
import ExpandToggle from '../../behaviors/ExpandToggle';
import DragItem from './DragGroupItem';
import DragContainer from 'components/DragContainer';

/**
 * A group of items which can be dragged into other `DragGroups` depending
 * on `itemType`. The ordering of items within a group is arbitrary and non-editable.
 *
 * > **Note:** You must include [BandwidthProvider](/#!/BandwidthProvider)
 * at or near the root of your application to use drag and drop functionality.
 */
class DragGroup extends React.Component {
  static Item = DragItem;
  static Container = DragContainer;

  static propTypes = {
    /**
     * Text to render inside the clickable separators which allow
     * new groups to be created.
     */
    separatorContent: PropTypes.node,

    /**
     * Override the outer container visual component
     * Defaults DragGroupContainer
     */
    Container: PropTypes.func,
    /**
     * Override the visual component which wraps the child items
     * Defaults DragGroupItemsContainer
     */
    ItemsContainer: PropTypes.func,
    /**
     * Override the behavioral component which renders the drop area
     * Defaults DragGroupDropArea
     */
    DropArea: PropTypes.func,
    /**
     * Overrides the behavioral component which renders a clickable separator
     * between items.
     * Defaults DragGroupSeparator
     */
    Separator: PropTypes.func,
    /**
     * Overrides the visual component which renders the toggle-enabled title
     * of a group.
     * Defaults DragGroupTitle
     */
    Title: PropTypes.func,

    // The following are provided by DragGroups;
    // they cannot be required, but can be expected.

    /**
     * Provides a name for the group, rendered in the title
     */
    name: PropTypes.string,
    /**
     * The type of items which can be dropped in this group.
     */
    itemType: PropTypes.string,
    /**
     * A unique identifier for this group.
     */
    groupId: PropTypes.any.isRequired,
    /**
     * Provided by parent DragGroups
     * The number of groups in the list
     */
    groupCount: PropTypes.number,
    /**
     * Whether to allow items to be dragged out of this group or not
     */
    allowDrag: PropTypes.bool,
    /**
     * Whether to allow this group to collapse.
     */
    collapsible: PropTypes.bool,
    /**
     * A callback to call when a user inserts a group. Called with (groupId, itemSplitIndex).
     */
    onSplit: PropTypes.func,
    /**
     * Provided by parent DragGroups
     * A callback to call when an item has been dropped on this group
     */
    onItemDropped: PropTypes.func,
    /**
     * A callback to call when this group is removed
     */
    onRemoved: PropTypes.func,
  };

  static defaultProps = {
    separatorContent: 'Click here to add a group',

    name: 'Group',

    allowDrag: true,
    collapsible: true,

    Container: GroupContainer,
    ItemsContainer: GroupItemsContainer,
    DropArea: DragGroupDropArea,
    Separator: DragGroupSeparator,
    Title: DragGroupTitle,

    itemType: null,
    groupId: null,
    groupCount: null,
    onSplit: () => null,
    onItemDropped: () => null,
    onRemoved: () => null,
  };

  calcOverrideExpanded = () => {
    const { allowDrag, canDrop, collapsible } = this.props;
    if (!collapsible || !allowDrag || canDrop) {
      return true;
    }

    return null;
  };

  shimChild = (child, index) => {
    const { itemType, allowDrag, groupId } = this.props;

    return React.cloneElement(child, {
      itemType,
      canDrag: allowDrag,
      groupId,
    });
  };

  renderInterspersedSeparators() {
    const { children, Separator, onSplit, separatorContent } = this.props;
    const childArray = React.Children.toArray(children);
    return childArray
      .reduce(
        (withSeparators, child, idx) => [
          ...withSeparators,
          <Separator
            className="dragGroupSeparator"
            onClick={() => onSplit(idx)}
            key={`separator${child.key || idx}`}
          >
            {separatorContent}
          </Separator>,
          this.shimChild(child, idx),
        ],
        [],
      )
      .slice(1); // removing first separator
  }

  renderTitle = expanded =>
    this.props.allowDrag ? (
      <this.props.Title expanded={expanded} onDelete={this.props.onRemoved}>
        {this.props.name}
      </this.props.Title>
    ) : null;

  render() {
    const {
      Container,
      ItemsContainer,
      ExpandContentContainer,
      DropArea,
      itemType,
      groupId,
      canDrop,
      ...rest
    } = this.props;

    return (
      <Container {...rest}>
        <ExpandToggle
          startExpanded
          toggleContent={this.renderTitle}
          isExpanded={this.calcOverrideExpanded()}
          springConfig={{ stiffness: 200, damping: 20 }}
        >
          <DropArea itemType={itemType} groupId={groupId}>
            <ItemsContainer>
              {this.renderInterspersedSeparators()}
            </ItemsContainer>
          </DropArea>
        </ExpandToggle>
      </Container>
    );
  }
}

const dropSource = {
  drop(props) {
    return {
      type: 'items',
      groupId: null,
    };
  },
};

const collect = (connect, monitor) => ({
  canDrop: monitor.canDrop(),
});

export default DropTarget(props => props.itemType, dropSource, collect)(
  DragGroup,
);
