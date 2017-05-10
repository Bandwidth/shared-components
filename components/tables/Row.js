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
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    index: 0,
    loading: false,
  };

  render() {
    const { loading } = this.props;

    return (
      <TR style={{ opacity: loading ? '0.5' : '1' }}>{this.props.children}</TR>
    );
  }
}
