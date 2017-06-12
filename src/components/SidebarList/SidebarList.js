import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
    selectedIndex: PropTypes.number,
    children: PropTypes.node.isRequired,
    hasNextPage: PropTypes.bool,
    hasPreviousPage: PropTypes.bool,
    onNextPageClicked: PropTypes.func,
    onPreviousPageClicked: PropTypes.func,
  };

  static defaultProps = {
    selectedIndex: -1,
    hasNextPage: false,
    hasPreviousPage: false,
    onNextPageClicked: () => null,
    onPreviousPageClicked: () => null,
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
    return (
      <ListContainer>
        {this.renderPrevious()}
        {this.renderItems()}
        {this.renderNext()}
      </ListContainer>
    );
  }
}

SidebarList.usage = `
# SidebarList

Lays out items vertically and provides selection context. Does not do scrolling.

If you pass the \`selectedIndex\` prop, the child component which matches that index will receive an \`active=true\` prop when rendering. Use this to show selected state. Before relying on list selection state, though, consider whether your list shouldn't instead be linked to your router, so that each item is a unique route. If you go that direction, you can have the items be \`<Route/>\` components from React Router, and have them utilize RR's built-in route matching logic to determine rendering appearance.

\`\`\`
<SidebarList selectedIndex={1}>
  <SidebarListItem>One</SidebarListItem>
  <SidebarListItem>Two</SidebarListItem>
</SidebarList>
\`\`\`
`;

SidebarList.Item = Item;
export default SidebarList;
