import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-right: ${({ theme }) => theme.list.border};
  overflow-y: auto;
  overflow-x: visible;

  /* TODO: extract this into something reusable */
  &::-webkit-scrollbar {
    width: 2px;
    height: 0.5em;
    position: absolute;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gutter};
  }
`;

class List extends React.Component {
  static propTypes = {
    selectedIndex: PropTypes.number,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    selectedIndex: -1,
  };

  renderItems = () => {
    const { selectedIndex } = this.props;

    return React.Children.map(
      this.props.children,
      (listItem, idx) => React.cloneElement(listItem, { key: idx, active: idx === selectedIndex }),
    );
  };

  render() {
    return (
      <ListContainer>
        {this.renderItems()}
      </ListContainer>
    );
  }
}

List.usage = `
# List

Lays out items vertically and provides selection context. Does not do scrolling.

If you pass the \`selectedIndex\` prop, the child component which matches that index will receive an \`active=true\` prop when rendering. Use this to show selected state. Before relying on list selection state, though, consider whether your list shouldn't instead be linked to your router, so that each item is a unique route. If you go that direction, you can have the items be \`<Route/>\` components from React Router, and have them utilize RR's built-in route matching logic to determine rendering appearance.

\`\`\`
<List selectedIndex={1}>
  <ListItem>One</ListItem>
  <ListItem>Two</ListItem>
</List>
\`\`\`
`;

export default List;
