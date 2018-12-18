import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const Container = styled.div`
  position: relative;
  & > * {
    width: 100%;
    position: absolute;
  }

  .cross-fade-exit {
    opacity: 1;
  }
  .cross-fade-exit.cross-fade-exit-active {
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

export default ({ loading, render, renderLoading }) => (
  <Container>
    <CSSTransition
      in={loading}
      unmountOnExit
      classNames="cross-fade"
      timeout={500}
    >
      <span>{renderLoading()}</span>
    </CSSTransition>
    <CSSTransition
      in={!loading}
      unmountOnExit
      classNames="cross-fade"
      timeout={500}
    >
      <span>{render()}</span>
    </CSSTransition>
  </Container>
);
