import React, { createContext } from 'react';
import throttle from 'lodash.throttle';

const { Provider: _Provider, Consumer: _Consumer } = createContext({
  mode: 'none',
});

/**
 * Similar to the default ScrollShadow.Observer, but hooks into
 * the global window scroll, which requires slightly different logic.
 */
export class Provider extends React.PureComponent {
  state = {
    mode: 'none',
  };

  scrollElement = null;

  componentDidMount() {
    if (window.addEventListener) {
      window.addEventListener('scroll', this.handleScrollResize);
    } else {
      window.onscroll = this.handleScrollResize;
    }

    // resize events, too
    this.scrollElement = window.document.documentElement;
    this.scrollResizeObserver.observe(this.scrollElement);

    this.update();
  }

  componentWillUnmount() {
    if (this.scrollElement && this.scrollResizeObserver) {
      this.scrollResizeObserver.unobserve(this.scrollElement);
    }

    if (window.removeEventListener) {
      window.removeEventListener('scroll', this.handleScrollResize);
    }
  }

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
    this.setState({ mode: this.calcShadowMode() });
  };

  handleScrollResize = throttle(this.update, 100);

  scrollResizeObserver = new window.ResizeObserver(this.handleScrollResize);

  render() {
    return <_Provider value={this.state}>{this.props.children}</_Provider>;
  }
}

export const Consumer = _Consumer;
