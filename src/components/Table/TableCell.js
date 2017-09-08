import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const TD = styled.td`
  text-align: left;
  background: transparent;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  white-space: nowrap;
  transition: 0.2s ease all;

  &:last-child {
    border-right: none;
  }
`;

export class TableCell extends React.Component {
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
    return (
      <TD id={id} className={className}>
        {children}
      </TD>
    );
  }
}

export default sharedComponent({ TD })(TableCell);
