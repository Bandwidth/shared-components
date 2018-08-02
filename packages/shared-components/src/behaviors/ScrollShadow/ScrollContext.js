import React, { createContext } from 'react';
import throttle from 'lodash.throttle';

const { Provider: _Provider, Consumer: _Consumer } = createContext({
  mode: 'none',
});

/**
 * Monitors the scroll position of a ref'd element and updates a scroll 'mode'
 * based on whether there should be a shadow above, below, or both.
 */
export class Provider extends React.PureComponent {
  state = {
    mode: 'none',
  };

  scrollElement = null;

  componentWillUnmount() {
    if (this.scrollElement && this.scrollResizeObserver) {
      this.scrollResizeObserver.unobserve(this.scrollElement);
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
    this.setState({ mode: this.calcShadowMode() });
  };

  handleScrollResize = throttle(this.update, 100);

  scrollResizeObserver = new window.ResizeObserver(this.handleScrollResize);

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
    return <_Provider value={this.state}>{this.renderChildren()}</_Provider>;
  }
}

export const Consumer = _Consumer;
