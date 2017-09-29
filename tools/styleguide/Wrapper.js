import React from 'react';
import PropTypes from 'prop-types';
import BandwidthThemeProvider from '../../src/components/BandwidthThemeProvider';
import Anchor from '../../src/components/Anchor';
import {Router} from 'react-router';
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
    const {children} = this.props;
    const {disable} = this.state
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

export default class Wrapper extends React.Component {
    render() {
      return (
        <BandwidthThemeProvider>
          <Router history={history}>
            <Container>
            <OptXRay>
              {this.props.children}
            </OptXRay>
            </Container>
          </Router>
        </BandwidthThemeProvider>
      );
    }
  }
