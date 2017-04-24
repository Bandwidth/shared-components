import React from 'react';
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
`;

const ColumnName = styled.span`
  display: inline;
  text-decoration: underline;
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
    columnKey: React.PropTypes.string.isRequired,
    handleClick: React.PropTypes.func.isRequired,
    sortOrder: React.PropTypes.number.isRequired,
    sorting: React.PropTypes.bool,
  };

  static defaultProps = {
    sorting: false,
  };

  render() {
    return (
      <TH onClick={this.props.handleClick}>
        <ColumnName>{sentence(this.props.columnKey)}</ColumnName>
        <SortArrows sortOrder={this.props.sortOrder}>
          <Icon name="up" />
          <Icon name="down" />
        </SortArrows>
      </TH>
    );
  }
}