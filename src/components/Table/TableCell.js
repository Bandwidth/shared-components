import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const select = theme
  .register('TableCell', ({ colors, spacing }) =>({
    background: 'transparent',
    textAlign: 'left',
    borderColor: colors.shadow,
    borderWidth: '1px',
    borderStyle: 'solid',
    whiteSpace: 'nowrap',
    padding: `${spacing.small} ${spacing.medium}`,
  }))
  .createSelector();

const TD = styled.td`
  background: ${select('background')};
  text-align: ${select('textAlign')};
  border-right: ${select('borderWidth')} ${select('borderStyle')} ${select('borderColor')};
  white-space: ${select('whiteSpace')};
  padding: ${select('padding')};
  transition: 0.2s ease all;

  &:last-child {
    border-right: none;
  }
`;

export default class TableCell extends React.Component {
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
