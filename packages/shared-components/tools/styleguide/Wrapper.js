import React from 'react';
import PropTypes from 'prop-types';
import { BandwidthProvider, BandwidthThemeProvider } from '../../src';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import styled from 'styled-components';
import get from '../../src/extensions/themeGet';

const history = createMemoryHistory('/');

const Container = styled.div`
  position: relative;
  margin: 0;
  background: ${get('colors.background.default')};
  color: ${get('colors.text.default')};
`;

const Content = styled.div`
  margin-top: ${get('spacing.medium')};
`;

export default class Wrapper extends React.Component {
  render() {
    return (
      <Router history={history}>
        <BandwidthProvider StyleRoot={React.Fragment} customTheme={null}>
          <Container>{this.props.children}</Container>
        </BandwidthProvider>
      </Router>
    );
  }
}
