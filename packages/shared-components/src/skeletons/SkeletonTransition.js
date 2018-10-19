import React from 'react';
import styled from 'styled-components';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

const Container = styled.div`
  .cross-fade-leave {
    opacity: 1;
  }
  .cross-fade-leave.cross-fade-leave-active {
    opacity: 0;
    transition: opacity 0.5s ease-in;
  }

  .cross-fade-enter {
    opacity: 0;
  }
  .cross-fade-enter.cross-fade-enter-active {
    opacity: 1;
    transition: opacity 0.5s ease-in;
  }

  .cross-fade-height {
    transition: height 0.25s ease-in-out;
  }
`;

export default ({ children }) => (
  <Container>
    <ReactCSSTransitionReplace
      transitionName="cross-fade"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {children}
    </ReactCSSTransitionReplace>
  </Container>
);
