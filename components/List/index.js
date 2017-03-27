import React from 'react';
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

export default class List extends React.Component {
  static propTypes = {
    selectedIndex: React.PropTypes.number,
    children: React.PropTypes.node.isRequired,
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
