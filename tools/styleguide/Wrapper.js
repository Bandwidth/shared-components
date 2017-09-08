import React from 'react';
import PropTypes from 'prop-types';
import { BandwidthThemeProvider, Anchor, Checkbox } from '../../src';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import XRay from 'react-x-ray';
import styled from 'styled-components';


const history  = createMemoryHistory('/');

const Container = styled.div`
  position: relative;
  margin-top: 30px;
`;

const FloatButton = styled(Anchor)`
  position: absolute;
  top: -40px;
  right: 0px;
`;

class OptXRay extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  state = {
    disable: true,
  }

  toggleState = () => {
    this.setState({
      disable: !this.state.disable
    })
  }

  render () {
    const { children } = this.props;
    const { disable } = this.state
    return (
      <div>
        <FloatButton onClick={this.toggleState}>X-RAY Component</FloatButton>
        <XRay disabled={disable} grid={5}>
          {children}
        </XRay>
      </div>
    );
  }
}

const FixedModToggle = styled.div`
  position: absolute;
  top: -40px;
  left: 0;
`;

const FixedModSelector = styled.div`
  position: absolute;
  bottom: calc(100% + 44px);
  left: 0;
  margin-top: 4px;
  padding: 8px;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  z-index: 1000;

  & > div {
    margin-top: 4px;
  }
`;

class MockSharedComponentContext extends React.Component {
  static childContextTypes = {
    mods: PropTypes.shape({
      small: PropTypes.bool,
      large: PropTypes.bool,
    }),
  };

  state = {
    show: false,
    mods: {
      small: false,
      large: false,
    },
  };

  getChildContext() {
    return { mods: this.state.mods };
  }

  toggleMod = (name) => {
    this.setState({ mods: { ...this.state.mods, [name]: !this.state.mods[name] } });
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { children } = this.props;
    const { show, mods: { small, large } } = this.state;
    return (
      <div>
        <FixedModToggle>
          <Anchor onClick={this.toggleShow}>{show ? 'hide mods' : 'show mods'}</Anchor>
        </FixedModToggle>
        {show &&
          <FixedModSelector>
            <Checkbox value={small} onChange={() => this.toggleMod('small')} description="Small" />
            <Checkbox value={large} onChange={() => this.toggleMod('large')} description="Large" />
          </FixedModSelector>
        }
        <OptXRay>
          {children}
        </OptXRay>
      </div>
    );
  }
}

export default class Wrapper extends React.Component {
    render() {
      return (
        <BandwidthThemeProvider>
          <Router history={history}>
            <Container>
              <MockSharedComponentContext>
                {this.props.children}
              </MockSharedComponentContext>
            </Container>
          </Router>
        </BandwidthThemeProvider>
      );
    }
  }
