import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { sentence } from 'change-case';
import Icon from '../Icon';
import Anchor from '../Anchor';

const TH = styled.th`
  background: ${({ theme }) => theme.table.headerBG};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.table.headerFontWeight};
  font-family: ${({ theme }) => theme.table.headerFontFamily};
  padding: ${({ theme }) => theme.table.headerPadding};
  text-align: left;
  white-space: nowrap;

  cursor: ${({ sortable }) => sortable ? 'pointer' : 'default' };

  &>a {
    color: inherit;
  }
  &>a:focus {
    color: inherit;
  }
  &>a::after {
    background: ${({ theme }) => theme.colors.white};
  }
`;

const ColumnName = styled.span`
  display: inline;
`;

const SortArrows = styled.span`
  margin-left: 8px;
  white-space: nowrap;

  &>a {
    color: ${({ theme }) => theme.colors.grayLightText};
  }
  &>a:focus {
    color: ${({ theme }) => theme.colors.white};
  }
  &>a::after {
    background: ${({ theme }) => theme.colors.grayLightText};
  }

  ${({ theme, sortOrder }) => {
    if (sortOrder < 0) {
      return css`&>*:first-child { color: ${theme.colors.white}; }`;
    } else if (sortOrder > 0) {
      return css`&>*:last-child { color: ${theme.colors.white}; }`;
    }
  }}
`;

export default class Header extends React.Component {
  static propTypes = {
    /**
     * Contents of the header cell.
     */
    children: PropTypes.node.isRequired,
    /**
     * [Deprecated] use onClick
     */
    handleClick: PropTypes.func,
    /**
     * Called when the user clicks the header cell.
     */
    onClick: PropTypes.func,
    /**
     * Specifies the sorting order of this column. [-1, 0, 1] for descending, none, or ascending.
     */
    sortOrder: PropTypes.number,
    /**
     * Indicates whether this column is sortable. This changes how it's rendered.
     */
    sortable: PropTypes.bool,
    /**
     * Adds a class name to the element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the element.
     */
    id: PropTypes.string,
  };

  static defaultProps = {
    sortable: false,
    sortOrder: 0,
    handleClick: () => null,
    onClick: () => null,
    className: null,
    id: null,
  };

  createClickHandler = (naturalOrder) => () =>
    this.props.onClick ? this.props.onClick(naturalOrder) :
    this.props.handleClick(naturalOrder);

  renderColumnName = () => {
    const { sortable, children, sortOrder } = this.props;

    if (sortable) {
      return (
        <Anchor type="text" onClick={this.createClickHandler(sortOrder === 0 ? 1 : -sortOrder)}>
          <ColumnName sortable>{children}</ColumnName>
        </Anchor>
      );
    }

    return <ColumnName>{children}</ColumnName>;
  }

  render() {
    const { sortable, sortOrder, handleClick, onClick, id, className } = this.props;

    return (
      <TH sortable={sortable} className={className} id={id}>
        {this.renderColumnName()}
        {sortable &&
          <SortArrows sortOrder={sortOrder}>
            <Anchor type="icon" onClick={this.createClickHandler(-1)}><Icon name="down" /></Anchor>
            <Anchor type="icon" onClick={this.createClickHandler(1)}><Icon name="up" /></Anchor>
          </SortArrows>
        }
      </TH>
    );
  }
}
