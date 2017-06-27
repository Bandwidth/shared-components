import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TR = styled.tr`
  &:nth-child(odd) {
    background: ${({ theme }) => theme.colors.white};
  }
  &:nth-child(even) {
    background: rgba(0, 0, 0, 0.05);
  }

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-of-type {
    border-bottom: none;
  }
`;

export default class Row extends React.Component {
  static propTypes = {
    /**
     * Contents of the row - should be cells.
     */
    children: PropTypes.node.isRequired,
    /**
     * [PENDING DEPRECATION] renders the row as semitransparent.
     */
    loading: PropTypes.bool,
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
    index: 0,
    loading: false,
    className: null,
    id: null,
  };

  render() {
    const { loading, id, className, children } = this.props;

    return (
      <TR style={{ opacity: loading ? '0.5' : '1' }} id={id} className={className}>{children}</TR>
    );
  }
}
