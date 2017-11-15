import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import { AnimationTimer } from 'animation-timer';
import { Easer } from 'functional-easing';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

/**
 * FIXME: migrate this to use react-movement!
 */
class Expand extends React.Component {
  static propTypes = {
    /**
     * Whether or not the expansion should be animated.
     */
    animate: PropTypes.bool,
    /**
     * A direction to expand in. [vertical, horizontal, both].
     */
    direction: PropTypes.oneOf(['vertical', 'horizontal', 'both']),
    /**
     * Contents of the expanding area.
     */
    children: PropTypes.node.isRequired,
    /**
     * Milliseconds to spend expanding.
     */
    duration: PropTypes.number,
    /**
     * Adds an id to the container.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the container.
     */
    className: PropTypes.string,
  };

  static defaultProps = {
    animate: true,
    direction: 'vertical',
    duration: 200,
    id: null,
    className: null,
  };

  componentDidMount() {
    this.updateSize();

    window.addEventListener('resize', _.debounce(this.updateSize, 300));
  }

  componentDidUpdate() {
    this.updateSize();
  }

  updateSize = () => {
    const { direction, duration, animate } = this.props;
    const content = this._content;

    if (!animate) {
      content.style.width = 'auto';
      content.style.height = 'auto';
      return;
    }

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
      .on(
        'tick',
        easer(percent => {
          if (direction === 'vertical' || direction === 'both') {
            content.style.height = `${naturalHeight * percent}px`;
          }
          if (direction === 'horizontal' || direction === 'both') {
            content.style.width = `${naturalWidth * percent}px`;
          }
        }),
      )
      .on('stop', () => {
        content.style.width = '';
        content.style.height = '';
      })
      .play();
  };

  render() {
    const { children, id, className } = this.props;
    return (
      <Container id={id} className={className}>
        <Content
          innerRef={el => {
            this._content = el;
          }}
        >
          {children}
        </Content>
      </Container>
    );
  }
}

export default Expand;
