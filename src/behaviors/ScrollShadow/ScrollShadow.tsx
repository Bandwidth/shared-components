import React, { createContext, createRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import * as styles from './styles';

type getShadowElementRef = (name: string) => React.RefObject<Element> | object;

const { Provider, Consumer } = createContext<getShadowElementRef>(
  () => () => {},
);

interface ScrollShadowProps {
  /**
   * This ScrollShadow should listen to the global window scroll value. Only one
   * such ScrollShadow should be present in your application.
   */
  global: boolean;
  /**
   * Switches the scrolling to horizontal mode
   */
  horizontal: boolean;
  /**
   * Customize the outer container element by passing a component here. Your element
   * MUST have relative or absolute positioning applied!
   */
  Container: any;
  /**
   * Customize the scroll container element by passing a component here. Your element
   * MUST have relative or absolute positioning, an overflow mode, and accept a
   * ref prop!
   */
  ScrollContainer: any;
  /**
   * A component responsible for monitoring the position of the scroll using its own
   * visibility. You probably don't want to override this.
   */
  Sentinel: any;
  /**
   * A component responsible for rendering the shadow over the top of the scroll
   * area. You probably don't want to override this.
   */
  ShadowOverlay: any;
  /**
   * Flip this to true to show a red line where the scroll sentinel elements are.
   * Can be useful for debugging if the shadows don't seem to work correctly.
   */
  debugShowSentinels: boolean;
  disabled?: boolean;
  outer?: boolean;
}

interface ConnectedShadowProps {
  ShadowOverlay?: any;
  name?: string;
  disabled?: boolean;
  outer?: boolean;
  entireViewport?: boolean;
}

/**
 * A ConnectedShadow is a shadow element which gets its shadow mode from
 * a ScrollShadow context higher in the React tree. Using this, you can
 * add some shadows to 'unrelated' elements which respond to the
 * scroll state of the containing scroll element. This is good for
 * advanced use cases, like rendering an element which hovers over
 * a scroll container.
 */
export class ConnectedShadow extends React.PureComponent<ConnectedShadowProps> {
  static defaultProps = {
    ShadowOverlay: styles.ShadowOverlay,
  };

  generatedName = `shadow${Math.floor(Math.random() * 100000)}`;

  render() {
    const {
      outer,
      entireViewport,
      disabled,
      ShadowOverlay,
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
            ref={getShadowElementRef(name)}
          />
        )}
      </Consumer>
    );
  }
}

/**
 * A scrolling container which has a shadow effect to indicate that there is more
 * content above or below. This element also creates a context which can inform
 * components below it in the tree of the scroll state of the scrolling container.
 */
export default class ScrollShadow extends React.Component<ScrollShadowProps> {
  static defaultProps = {
    global: false,
    horizontal: false,
    Container: styles.DefaultContainer,
    ScrollContainer: styles.DefaultScrollContainer,
    Sentinel: styles.Sentinel,
    ShadowOverlay: styles.ShadowOverlay,
    debugShowSentinels: false,
  };

  static styles = styles;

  static ConnectedShadow = ConnectedShadow;

  /**
   * A sentinel is an invisible element which is used to track the scroll boundaries.
   * We place them at the top and bottom of the content. When either of them becomes
   * visible, we know that the user has hit that particular scroll boundary.
   */
  startSentinelRef = createRef();
  endSentinelRef = createRef();
  sentinelIntersectionObserver: any;
  /**
   * We are not storing this information in this.state on purpose. We will actually
   * be skipping the React update cycle entirely for changing the shadow styles
   * on the shadow element to avoid unnecessary work for a simple aesthetic change.
   */
  isStartSentinelVisible = true;
  isEndSentinelVisible = false;

  componentDidMount() {
    if (this.props.global) {
      /**
       * In global mode, the entire window is our scroll context. We can do that by
       * passing 'null' as the context element for the IntersectionObserver.
       * As documented, it will use the visible window area as the intersection
       * boundary.
       */
      this.scrollElementRef(null);
    }
  }

  /**
   * Simply figures out where the shadows should be based on which boundaries
   * are visible right now.
   */
  calcShadowMode = () => {
    const { horizontal } = this.props;
    const start = !this.isStartSentinelVisible;
    const end = !this.isEndSentinelVisible;

    if (start && end) {
      return horizontal ? 'leftRight' : 'topBottom';
    } else if (start) {
      return horizontal ? 'left' : 'top';
    } else if (end) {
      return horizontal ? 'right' : 'bottom';
    } else {
      return 'none';
    }
  };

  /**
   * This will be called every time the intersection state of either sentinel changes.
   */
  handleSentinelIntersection = (entries, observer) => {
    // `entries` is an array of records, one per changed sentinel.
    entries.forEach(entry => {
      if (entry.target === this.startSentinelRef.current) {
        this.isStartSentinelVisible = entry.isIntersecting;
      } else if (entry.target === this.endSentinelRef.current) {
        this.isEndSentinelVisible = entry.isIntersecting;
      }

      const currentMode = this.calcShadowMode();

      /**
       * Iterate over every registered shadow element to update their styles
       * if they need to change.
       */
      Object.values(this.shadowElementRegistrations).forEach(registration => {
        const { ref, mode } = registration;
        // we don't want to recalculate styles needlessly, so we also ensure
        // the mode has changed since last style assignment
        if (ref.current && mode !== currentMode) {
          // reset classes
          ref.current.classList.remove(
            'top',
            'bottom',
            'topBottom',
            'left',
            'right',
            'leftRight',
          );
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

    this.sentinelIntersectionObserver = new (window as any).IntersectionObserver(
      this.handleSentinelIntersection,
      {
        root: el,
      },
    );
    this.sentinelIntersectionObserver.observe(this.startSentinelRef.current);
    this.sentinelIntersectionObserver.observe(this.endSentinelRef.current);
  };

  /**
   * A map of elements which have registered that they want a shadow applied to them.
   * Elements can register by using the `getShadowElementRef` function we pass through
   * the Context.
   */
  shadowElementRegistrations: {
    [key: string]: { ref: React.RefObject<Element>; mode?: string };
  } = {};

  getShadowElementRef = (name: string) => {
    if (!this.shadowElementRegistrations[name]) {
      this.shadowElementRegistrations[name] = {
        ref: createRef(),
      };
    }

    return this.shadowElementRegistrations[name].ref;
  };

  renderGlobalSentinels = () => {
    const { horizontal, Sentinel } = this.props;

    return createPortal(
      <React.Fragment>
        <Sentinel
          ref={this.startSentinelRef}
          className={`scroll-shadow-sentinel ${
            horizontal ? 'left' : 'top'
          } global`}
          debugShow={this.props.debugShowSentinels}
        />
        <Sentinel
          ref={this.endSentinelRef}
          className={`scroll-shadow-sentinel ${
            horizontal ? 'right' : 'bottom'
          } global`}
          debugShow={this.props.debugShowSentinels}
        />
      </React.Fragment>,
      window.document.body,
    );
  };

  renderChildren = () => {
    const {
      children,
      global,
      Container,
      ScrollContainer,
      Sentinel,
      disabled,
      outer,
      horizontal,
      ShadowOverlay,
      ...extraProps
    } = this.props;

    // we will be rendering something slightly different if we are in global mode
    if (global) {
      return (
        <React.Fragment>
          {children}
          {this.renderGlobalSentinels()}
          {!disabled && (
            <ShadowOverlay
              className={`scroll-shadow inner`}
              entireViewport
              ref={this.getShadowElementRef('built-in')}
            />
          )}
        </React.Fragment>
      );
    }

    const shadowPlacement = outer ? 'outer' : 'inner';

    return (
      <Container
        horizontal={horizontal}
        className="scroll-shadow-container"
        {...extraProps}
      >
        <ScrollContainer
          horizontal={horizontal}
          ref={this.scrollElementRef}
          {...extraProps}
        >
          <Sentinel
            ref={this.startSentinelRef}
            className={`scroll-shadow-sentinel ${horizontal ? 'left' : 'top'}`}
            debugShow={this.props.debugShowSentinels}
          />
          {children}
          <Sentinel
            ref={this.endSentinelRef}
            className={`scroll-shadow-sentinel ${
              horizontal ? 'right' : 'bottom'
            }`}
            debugShow={this.props.debugShowSentinels}
          />
        </ScrollContainer>
        {!disabled && (
          <ShadowOverlay
            className={`scroll-shadow ${shadowPlacement}`}
            ref={this.getShadowElementRef('built-in')}
          />
        )}
      </Container>
    );
  };

  render() {
    return (
      <Provider value={this.getShadowElementRef}>
        {this.renderChildren()}
      </Provider>
    );
  }
}
