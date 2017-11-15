import React from 'react';
import PropTypes from 'prop-types';
import { irisTheme, catapultTheme, BandwidthThemeProvider } from '../../src';
import bootstrap from '../../src/bootstrap';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import XRay from 'react-x-ray';
import styled from 'styled-components';
import get from '../../src/extensions/themeGet';
import WrapperControls from './WrapperControls';

bootstrap();

const history  = createMemoryHistory('/');

const Container = styled.div`
  position: relative;
  margin: 0;
  background: ${get('colors.background.default')};
  color: ${get('colors.text.default')};
`;

const Content = styled.div`
  margin-top: ${get('spacing.medium')};
`;

const themes = {
  iris: irisTheme,
  catapult: catapultTheme,
};

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: 'iris', xray: false };
  }

  setXRay = (val) => {
    console.log(val);
    this.setState({ xray: val });
  };
  setTheme = (val) => {
    this.setState({ theme: val });
  };

  render() {
    const { theme, xray } = this.state;

    return (
      <Router history={history}>
        <BandwidthThemeProvider theme={themes[theme]}>
          <Container>
            <WrapperControls theme={theme} xray={xray} setTheme={this.setTheme} setXRay={this.setXRay} />
            <Content>
              <XRay disabled={!xray}>
                {this.props.children}
              </XRay>
            </Content>
          </Container>
        </BandwidthThemeProvider>
      </Router>
    );
  }
}
