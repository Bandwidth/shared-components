import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TR = styled.tr`
  &:nth-child(odd) {
    background: ${({ theme }) => theme.table.rowOddBG};
  }
  &:nth-child(even) {
    background: ${({ theme }) => theme.table.rowEvenBG};
  }
`;

export default class Row extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    children: PropTypes.node.isRequired,
    sorting: PropTypes.bool,
  };

  static defaultProps = {
    index: 0,
    sorting: false,
  };

  render() {
    return (
      <TR>{this.props.children}</TR>
    );
  }
}
