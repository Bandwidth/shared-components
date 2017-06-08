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
