import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TD = styled.td`
  text-align: left;
  background: ${({ theme }) => theme.table.cellBG};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  margin: ${({ theme }) => theme.table.cellMargin};
  padding: ${({ theme }) => `${theme.padding.small} ${theme.padding.medium}`};
  white-space: nowrap;
  transition: 0.2s ease all;

  &:last-child {
    border-right: none;
  }
`;

export default class Cell extends React.Component {
  static propTypes = {
    /**
     * Contents of the table cell.
     */
    children: PropTypes.node,
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
    children: String.fromCharCode(160), // &nbsp;
    className: null,
    id: null,
  };

  render() {
    const { id, className, children } = this.props;
    return <TD id={id} className={className}>{children}</TD>;
  }
}
