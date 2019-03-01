import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import * as styles from './styles';
import DropArea from './DragGroupDropArea';
import ExpandToggle from 'behaviors/ExpandToggle';
import DragItem from './DragGroupItem';
import DragContainer from 'components/DragContainer';

interface DragGroupProps {
  /**
   * Text to render inside the clickable separators which allow
   * new groups to be created.
   */
  separatorContent: React.ReactNode;

  /**
   * Override the outer container visual component
   * Defaults DragGroup.styles.Container
   */
  Container?: any;
  /**
   * Override the visual component which wraps the child items
   * Defaults DragGroup.styles.ItemsContainer
   */
  ItemsContainer?: any;
  /**
   * Override the behavioral component which renders the drop area
   * Defaults DragGroup.DropArea
   */
  DropArea?: any;
  /**
   * Overrides the behavioral component which renders a clickable separator
   * between items.
   * Defaults DragGroup.styles.Separator
   */
  Separator?: any;
  /**
   * Overrides the visual component which renders the toggle-enabled title
   * of a group.
   * Defaults DragGroup.styles.Title
   */
  Title?: any;

  // The following are provided by DragGroups;
  // they cannot be required, but can be expected.

  /**
   * Provides a name for the group, rendered in the title
   */
  name: string;
  /**
   * The type of items which can be dropped in this group.
   */
  itemType: string;
  /**
   * A unique identifier for this group.
   */
  groupId: string;
  /**
   * Provided by parent DragGroups
   * The number of groups in the list
   */
  groupCount: number;
  /**
   * Whether to allow items to be dragged out of this group or not
   */
  allowDrag: boolean;
  /**
   * Whether to allow this group to collapse.
   */
  collapsible: boolean;
  /**
   * A callback to call when a user inserts a group. Called with (itemSplitIndex).
   */
  onSplit: (temSplitIndex: number) => void;
  /**
   * Provided by parent DragGroups
   * A callback to call when an item has been dropped on this group
   */
  onItemDropped: () => void;
  /**
   * A callback to call when this group is removed
   */
  onRemoved: () => void;
  canDrop: boolean;
}

/**
 * A group of items which can be dragged into other `DragGroups` depending
 * on `itemType`. The ordering of items within a group is arbitrary and non-editable.
 * Dragging is not enabled until more than one group is present.
 *
 * > **Note:** You must include [BandwidthProvider](#!/BandwidthProvider)
 * at or near the root of your application to use drag and drop functionality.
 */
class DragGroup extends React.Component<DragGroupProps> {
  static Item = DragItem;
  static Container = DragContainer;

  static defaultProps = {
    separatorContent: 'Click here to add a group',

    name: 'Group',

    allowDrag: true,
    collapsible: true,

    Container: styles.Container,
    ItemsContainer: styles.ItemsContainer,
    DropArea: DropArea,
    Separator: styles.Separator,
    Title: styles.Title,

    itemType: null,
    groupId: null,
    groupCount: null,
    onSplit: () => null,
    onItemDropped: () => null,
    onRemoved: () => null,
  };

  static styles = styles;
  static DropArea = DropArea;

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
    return (
      //@ts-ignore
      childArray
        .reduce(
          (withSeparators, child, idx) => [
            //@ts-ignore
            ...withSeparators,
            <Separator
              className="dragGroupSeparator"
              onClick={() => onSplit(idx)}
              key={`separator${idx}`}
            >
              {separatorContent}
            </Separator>,
            this.shimChild(child, idx),
          ],
          [],
        )
        //@ts-ignore
        // removing first separator
        .slice(1)
    );
  }

  renderTitle = expanded =>
    this.props.allowDrag ? (
      <this.props.Title expanded={expanded} onDelete={this.props.onRemoved}>
        {this.props.name}
      </this.props.Title>
    ) : null;

  render() {
    const {
      Title,
      Container,
      ItemsContainer,
      DropArea,
      itemType,
      groupId,
      canDrop,
      onSplit,
      onRemoved,
      onItemDropped,
      ...rest
    } = this.props;

    return (
      <Container {...rest}>
        <ExpandToggle
          startExpanded
          toggleContent={this.renderTitle}
          isExpanded={!!this.calcOverrideExpanded()}
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
