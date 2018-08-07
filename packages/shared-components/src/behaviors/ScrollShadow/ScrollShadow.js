import React, { createContext, createRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import Sentinel from './Sentinel';
import ShadowOverlay from './ShadowOverlay';
import DefaultContainer from './DefaultContainer';
import DefaultScrollContainer from './DefaultScrollContainer';

const { Provider, Consumer } = createContext(() => () => {});

/**
 * Monitors the scroll position of a ref'd element and updates a scroll 'mode'
 * based on whether there should be a shadow above, below, or both.
 */
export default class ScrollShadow extends React.Component {
  static propTypes = {
    global: PropTypes.bool,
    Container: PropTypes.func,
    ScrollContainer: PropTypes.func,
    debugShowSentinels: PropTypes.bool,
  };

  static defaultProps = {
    global: false,
    Container: DefaultContainer,
    ScrollContainer: DefaultScrollContainer,
    debugShowSentinels: false,
  };

  topSentinelRef = createRef();
  bottomSentinelRef = createRef();
  isTopSentinelVisible = true;
  isBottomSentinelVisible = false;

  componentDidMount() {
    if (this.props.global) {
      this.scrollElementRef(null);
    }
  }

  calcShadowMode = () => {
    const top = !this.isTopSentinelVisible;
    const bottom = !this.isBottomSentinelVisible;

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

  handleSentinelIntersection = (entries, observer) => {
    console.info(entries);
    entries.forEach(entry => {
      if (entry.target === this.topSentinelRef.current) {
        this.isTopSentinelVisible = entry.isIntersecting;
      } else if (entry.target === this.bottomSentinelRef.current) {
        this.isBottomSentinelVisible = entry.isIntersecting;
      }

      const currentMode = this.calcShadowMode();

      Object.values(this.shadowElementRegistrations).forEach(registration => {
        const { ref, mode } = registration;
        // we don't want to recalculate styles needlessly, so we also ensure
        // the mode has changed since last style assignment
        if (ref.current && mode !== currentMode) {
          ref.current.classList.remove('top');
          ref.current.classList.remove('bottom');
          ref.current.classList.remove('both');
          ref.current.classList.add(currentMode);
          registration.mode = currentMode;
        }
      });
    });
  };

  scrollElementRef = el => {
    if (this.sentinelIntersectionObserver) {
      this.sentinelIntersectionObserver.disconnect();
    }

    this.sentinelIntersectionObserver = new window.IntersectionObserver(
      this.handleSentinelIntersection,
      {
        root: el,
      },
    );
    this.sentinelIntersectionObserver.observe(this.topSentinelRef.current);
    this.sentinelIntersectionObserver.observe(this.bottomSentinelRef.current);
  };

  shadowElementRegistrations = {};

  getShadowElementRef = name => {
    if (!this.shadowElementRegistrations[name]) {
      this.shadowElementRegistrations[name] = {
        ref: createRef(),
      };
    }

    return this.shadowElementRegistrations[name].ref;
  };

  renderGlobalSentinels = () =>
    createPortal(
      <React.Fragment>
        <Sentinel
          innerRef={this.topSentinelRef}
          className="scroll-shadow-sentinel top global"
          debugShow={this.props.debugShowSentinels}
        />
        <Sentinel
          innerRef={this.bottomSentinelRef}
          className="scroll-shadow-sentinel bottom global"
          debugShow={this.props.debugShowSentinels}
        />
      </React.Fragment>,
      window.document.body,
    );

  renderChildren = () => {
    const {
      children,
      global,
      Container,
      ScrollContainer,
      disabled,
      outer,
      ...extraProps
    } = this.props;

    if (global) {
      return (
        <React.Fragment>
          {children}
          {this.renderGlobalSentinels()}
          {!disabled && (
            <ShadowOverlay
              className={`scroll-shadow inner`}
              entireViewport
              innerRef={this.getShadowElementRef('built-in')}
            />
          )}
        </React.Fragment>
      );
    }

    const shadowPlacement = outer ? 'outer' : 'inner';

    return (
      <Container className="scroll-shadow-container" {...extraProps}>
        <ScrollContainer innerRef={this.scrollElementRef} {...extraProps}>
          <Sentinel
            innerRef={this.topSentinelRef}
            className="scroll-shadow-sentinel top"
            debugShow={this.props.debugShowSentinels}
          />
          {children}
          <Sentinel
            innerRef={this.bottomSentinelRef}
            className="scroll-shadow-sentinel bottom"
            debugShow={this.props.debugShowSentinels}
          />
        </ScrollContainer>
        {!disabled && (
          <ShadowOverlay
            className={`scroll-shadow ${shadowPlacement}`}
            innerRef={this.getShadowElementRef('built-in')}
          />
        )}
      </Container>
    );
  };

  render() {
    return (
      <Provider value={this.getShadowElementRef}>
        {this.renderChildren()}
        {this.props.global && this.renderGlobalSentinels()}
      </Provider>
    );
  }
}

export class ConnectedShadow extends React.PureComponent {
  generatedName = `shadow${Math.floor(Math.random() * 100000)}`;

  render() {
    const {
      outer,
      entireViewport,
      disabled,
      name = this.generatedName,
    } = this.props;

    if (disabled) {
      return null;
    }

    return (
      <Consumer>
        {getShadowElementRef => (
          <ShadowOverlay
            className={`scroll-shadow ${outer ? 'outer' : 'inner'}`}
            entireViewport={entireViewport}
            innerRef={getShadowElementRef(name)}
          />
        )}
      </Consumer>
    );
  }
}

ScrollShadow.ConnectedShadow = ConnectedShadow;
