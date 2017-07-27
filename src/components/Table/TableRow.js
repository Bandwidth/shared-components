import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const TR = styled.tr`
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  &:first-of-type {
    border-top: none;
  }

  ${({ clickable }) => (clickable ? 'cursor: pointer;' : '')};
`;

export class Row extends React.Component {
  static propTypes = {
    /**
     * Contents of the row - should be cells.
     */
    children: PropTypes.node.isRequired,
    /**
     * Adds a class name to the element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the element.
     */
    id: PropTypes.string,
    /**
     * Handler that is called whenever the row is clicked.
     */
    onClick: PropTypes.func,
  };

  static defaultProps = {
    index: 0,
    className: null,
    id: null,
    onClick: () => null,
  };

  render() {
    const { id, className, children, onClick } = this.props;

    return (
      <TR id={id} className={className} onClick={onClick} clickable={!!onClick}>
        {children}
      </TR>
    );
  }
}

export default sharedComponent({ TR })(Row);
