import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ContentDiv = styled.div`
  border: ${({ theme }) => theme.tabs.border};
  padding: ${({ theme }) => theme.tabs.padding};

  ${({ vertical }) => {
    if (vertical) {
      return css`
        border-radius: 0 3px 3px 0;
        width: 75%;
        display: table-cell;
        vertical-align: top;
      `;
    }
    return css`
      border-radius: 0 0 3px 3px;
      min-height: 53px;
      margin-right: -1px;
      clear: both;
    `;
  }};
`;

export default class TabContent extends React.Component {
  static propTypes = {
    /**
     * Elements within container
     */
    children: PropTypes.node,
    /**
     * Enable vertical tab layout
     */
    vertical: PropTypes.bool,
  };

  render() {
    return (
      <ContentDiv vertical={this.props.vertical}>
        {this.props.children}
      </ContentDiv>
    );
  }
}
