import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { sentence } from 'change-case';
import Icon from '../Icon';

const TH = styled.th`
  background: ${({ theme }) => theme.table.headerBG};
  text-transform: uppercase;
  color: ${({ theme }) => theme.table.headerFG};
  font-weight: ${({ theme }) => theme.table.headerFontWeight};
  font-family: ${({ theme }) => theme.table.headerFontFamily};
  padding: ${({ theme }) => theme.table.headerPadding};
  text-align: left;

  cursor: ${({ sortable }) => sortable ? 'pointer' : 'default' };
`;

const ColumnName = styled.span`
  display: inline;
  text-decoration: ${({ sortable }) => sortable ? 'underline' : 'none'};
`;

const SortArrows = styled.span`
  margin-left: 8px;

  &>span {
    color: ${({ theme }) => theme.table.sortArrowFG};
  }

  &>span::after {
    color: inherit;
    display: inline;
    padding: 0;
  }

  ${({ theme, sortOrder }) => {
    if (sortOrder > 0) {
      return css`&>span:first-child { color: ${theme.table.sortArrowActiveFG}; }`;
    } else if (sortOrder < 0) {
      return css`&>span:last-child { color: ${theme.table.sortArrowActiveFG}; }`;
    }
  }}
`;

export default class Header extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    handleClick: PropTypes.func,
    sortOrder: PropTypes.number,
    sortable: PropTypes.bool,
  };

  static defaultProps = {
    sortable: false,
    sortOrder: 0,
    handleClick: () => null,
  };

  render() {
    const { sortable, sortOrder, children, handleClick } = this.props;

    return (
      <TH onClick={handleClick} sortable={sortable}>
        <ColumnName sortable={sortable}>{children}</ColumnName>
        {
          sortable ?
          (
            <SortArrows sortOrder={sortOrder}>
              <Icon name="up" />
              <Icon name="down" />
            </SortArrows>
          ) :
          null
        }
      </TH>
    );
  }
}
