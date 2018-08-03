import React, { createContext, createRef } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import shadows from './shadows';

const { Provider: _Provider, Consumer: _Consumer } = createContext({
  mode: 'none',
});

/**
 * Monitors the scroll position of a ref'd element and updates a scroll 'mode'
 * based on whether there should be a shadow above, below, or both.
 */
export class Provider extends React.PureComponent {
  static propTypes = {
    global: PropTypes.bool,
  };

  static defaultProps = {
    global: false,
  };

  scrollElement = null;

  componentDidMount() {
    if (this.props.global) {
      if (window.addEventListener) {
        window.addEventListener('scroll', this.handleScrollResize);
      } else {
        window.onscroll = this.handleScrollResize;
      }

      this.scrollElement = window.document.documentElement;
      this.scrollResizeObserver.observe(this.scrollElement);

      this.update();
    }
  }

  componentWillUnmount() {
    if (this.scrollElement && this.scrollResizeObserver) {
      this.scrollResizeObserver.unobserve(this.scrollElement);
    }

    if (this.props.global && window.removeEventListener) {
      window.removeEventListener('scroll', this.handleScrollResize);
    }
  }

  scrollElementRef = el => {
    if (!el) {
      this.scrollElement.removeEventListener('scroll', this.handleScrollResize);
      this.scrollResizeObserver.unobserve(this.scrollElement);
      this.scrollElement = null;
      return;
    }

    this.scrollElement = el;
    this.scrollElement.addEventListener('scroll', this.handleScrollResize);

    //resize events, too
    this.scrollResizeObserver.observe(el);

    this.update();
  };

  calcShadowMode = () => {
    const element = this.scrollElement;
    if (!element) {
      return;
    }

    const top = element.scrollTop > 0;
    const bottom =
      element.scrollHeight !== element.clientHeight + element.scrollTop;

    if (top && bottom) {
      return 'both';
    } else if (top) {
      return 'top';
    } else if (bottom) {
      return 'bottom';
    } else {
      return 'none';
    }
  };

  update = () => {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }

    this.animationFrame = requestAnimationFrame(() => {
      const currentMode = this.calcShadowMode();

      Object.values(this.shadowElementRegistrations).forEach(registration => {
        const { ref, outer, mode } = registration;
        // we don't want to recalculate styles needlessly, so we also ensure
        // the mode has changed since last style assignment
        if (ref.current && mode !== currentMode) {
          ref.current.style.boxShadow = shadows(currentMode, outer);
          registration.mode = currentMode;
        }
      });
    });
  };

  handleScrollResize = throttle(this.update, 100);

  scrollResizeObserver = new window.ResizeObserver(this.handleScrollResize);

  shadowElementRegistrations = {};

  getShadowElementRef = (name, outer) => {
    if (!this.shadowElementRegistrations[name]) {
      console.info('creating new ref', name);
      this.shadowElementRegistrations[name] = {
        ref: createRef(),
      };
    }

    this.shadowElementRegistrations[name].outer = outer;
    return this.shadowElementRegistrations[name].ref;
  };

  renderChildren = () => {
    const { children } = this.props;

    if (typeof children === 'function') {
      return children({
        scrollElementRef: this.scrollElementRef,
      });
    }

    return children;
  };

  render() {
    return (
      <_Provider value={this.getShadowElementRef}>
        {this.renderChildren()}
      </_Provider>
    );
  }
}

export const Consumer = _Consumer;
