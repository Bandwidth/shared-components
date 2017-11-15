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
  }}`;

export default class TabContainer extends React.Component {

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

  attachParams = (children, vertical) => {
    if (typeof children !== 'object') {
      return children;
    }

    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }

      return React.cloneElement(child, { vertical });
    });
  };

  render() {
    return (<Div vertical={this.props.vertical}>{this.attachParams(this.props.children, this.props.vertical)}</Div>);
  }
}
