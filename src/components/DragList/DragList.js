import React from 'react';
import PropTypes from 'prop-types';
import get from 'extensions/themeGet';
import styled from 'styled-components';
import DragListItem from './DragListItem';
import DragContainer from 'components/DragContainer';

const StyledDiv = styled.div`
  & > * + * {
    margin-top: var(--spacing-medium);
  }
`;

/**
 * A list of items that can be dragged and reordered.
 * Use a list of [DragList.Item](/#!/DragListItem) as children.
 * [DragList.Container](/#!/DragContainer) is provided
 * as a convenient way to display items in the drag list.
 */
class DragList extends React.PureComponent {
  static Item = DragListItem;
  static Container = DragContainer;

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return <StyledDiv>{this.props.children}</StyledDiv>;
  }
}

export default DragList;
