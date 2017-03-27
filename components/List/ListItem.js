import React from 'react';
import styled, { css } from 'styled-components';

const ListItemContainer = styled.li`
  background: ${({ active, theme }) => active ? theme.listItem.selectedBG : theme.listItem.bg};
  color: ${({ active, theme }) => active ? theme.listItem.selectedFG : theme.listItem.fg};
  padding: ${({ theme }) => theme.listItem.padding};
  border-bottom: ${({ theme }) => theme.listItem.border};
  position: relative;
  overflow-x: visible;

  ${({ active, theme }) => {
    if (active) {
      return css`
        &::after {
          content: '';
          width: 2px;
          background: ${theme.listItem.selectedBG};
          position: absolute;
          right: -1px;
          height: 100%;
          top: 0;
          z-index: 100;
        }
      `;
    }
    return '';
  }}
`;

const ListLabel = styled.h3`
  text-transform: ${({ theme }) => theme.listItem.textTransform};
  font-weight: ${({ theme }) => theme.listItem.fontWeight};
  margin: 0;
`;

const ListDetails = styled.div``;

export default class ListItem extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    details: React.PropTypes.node,
    active: React.PropTypes.bool,
  };

  static defaultProps = {
    label: null,
    details: null,
    active: false,
  };

  render() {
    const { label, details, active } = this.props;

    return (
      <ListItemContainer active={active}>
        <ListLabel>{label}</ListLabel>
        <ListDetails>{details}</ListDetails>
      </ListItemContainer>
    );
  }
}
