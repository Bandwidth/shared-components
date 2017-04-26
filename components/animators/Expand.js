import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AnimationTimer } from 'animation-timer';
import { Easer } from 'functional-easing';

const Container = styled.div`overflow: hidden; width: 100%; height: 100%;`;
const Content = styled.div`overflow: hidden; width: 100%; height: 100%;`;

class Expand extends React.Component {
  static propTypes = {
    animate: PropTypes.bool,
    direction: PropTypes.oneOf(['vertical', 'horizontal', 'both']),
    children: PropTypes.node.isRequired,
    duration: PropTypes.number,
  };

  static defaultProps = {
    animate: true,
    direction: 'vertical',
    duration: 200,
  };

  animate = () => {
    const { direction, duration } = this.props;
    const content = this._content;
    const naturalHeight = content.scrollHeight;
    const naturalWidth = content.scrollWidth;
    const easer = new Easer().using('cubic');

    if (direction === 'vertical' || direction === 'both') {
      content.style.height = '0px';
    }
    if (direction === 'horizontal' || direction === 'both') {
      content.style.width = '0px';
    }

    new AnimationTimer()
      .duration(duration)
      .on('tick', easer((percent) => {
        if (direction === 'vertical' || direction === 'both') {
          content.style.height = `${naturalHeight * percent}px`;
        }
        if (direction === 'horizontal' || direction === 'both') {
          content.style.width = `${naturalWidth * percent}px`;
        }
      }))
      .on('stop', () => {
        content.style.width = '';
        content.style.height = '';
      })
      .play();
  }

  componentDidMount() {
    if (this.props.animate) {
      this.animate();
    }
  }

  render() {
    return (
      <Container>
        <Content innerRef={(el) => { this._content = el; }}>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}

export default Expand;