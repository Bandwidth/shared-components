import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Div = styled.div`
  ${({ vertical }) => {
    if (vertical) {
      return css`
        width: 100%;
        display: table;
      `;
    }
  }};
`;

export default class TabList extends React.Component {
  static propTypes = {
    /**
     * Tab elements within container
     */
    children: PropTypes.node,
    /**
     * Enable vertical tab layout
     */
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    vertical: false,
  };

  attachParams = (children, vertical) =>
    React.Children.map(
      children,
      child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { vertical })
          : child,
    );

  render() {
    return (
      <Div vertical={this.props.vertical}>
        {this.attachParams(this.props.children, this.props.vertical)}
      </Div>
    );
  }
}
