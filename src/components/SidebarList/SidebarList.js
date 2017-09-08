import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';
import ShowMore from './ShowMore';
import Item from './SidebarListItem';

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gutter};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.grayDark};
  }
`;

class SidebarList extends React.Component {
  static propTypes = {
    /**
     * Optional: indicate which item should be considered active.
     */
    selectedIndex: PropTypes.number,
    /**
     * List items. An 'active' prop will be passed to the item that matches selectedIndex.
     */
    children: PropTypes.node.isRequired,
    /**
     * Indicates whether the list should show that it has a next page.
     */
    hasNextPage: PropTypes.bool,
    /**
     * Indicates whether the list should show that it has a previous page.
     */
    hasPreviousPage: PropTypes.bool,
    /**
     * Called when the button to load the next page is clicked.
     */
    onNextPageClicked: PropTypes.func,
    /**
     * Called when the button to load the previous page is clicked.
     */
    onPreviousPageClicked: PropTypes.func,
    /**
     * Adds a class name to the containing list element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the containing list element.
     */
    id: PropTypes.string,
  };

  static defaultProps = {
    selectedIndex: -1,
    hasNextPage: false,
    hasPreviousPage: false,
    onNextPageClicked: () => null,
    onPreviousPageClicked: () => null,
    className: null,
    id: null,
  };

  renderPrevious = () => {
    const { hasPreviousPage, onPreviousPageClicked } = this.props;
    if (hasPreviousPage) {
      return <ShowMore onClick={onPreviousPageClicked}>Show Previous</ShowMore>;
    }

    return null;
  };

  renderNext = () => {
    const { hasNextPage, onNextPageClicked } = this.props;
    if (hasNextPage) {
      return <ShowMore onClick={onNextPageClicked}>Show Next</ShowMore>;
    }

    return null;
  };

  renderItems = () => {
    const { selectedIndex } = this.props;

    return React.Children.toArray(this.props.children)
      .filter((child) => child !== null)
      .map(
        (listItem, idx) => React.cloneElement(listItem, { key: idx, active: idx === selectedIndex }),
      );
  };

  render() {
    const { className, id } = this.props;
    return (
      <ListContainer className={className} id={id}>
        {this.renderPrevious()}
        {this.renderItems()}
        {this.renderNext()}
      </ListContainer>
    );
  }
}

export default sharedComponent(`
Lays out items vertically and provides selection context. Does not do scrolling.

If you pass the \`selectedIndex\` prop, the child component which matches that index will receive an \`active=true\` prop when rendering. Use this to show selected state. Before relying on list selection state, though, consider whether your list shouldn't instead be linked to your router, so that each item is a unique route. If you go that direction, you can have the items be \`<Route/>\` components from React Router, and have them utilize RR's built-in route matching logic to determine rendering appearance.

\`\`\`
<SidebarList selectedIndex={1}>
  <SidebarListItem>One</SidebarListItem>
  <SidebarListItem>Two</SidebarListItem>
</SidebarList>
\`\`\`
`, { Item, Container: ListContainer })(SidebarList);
