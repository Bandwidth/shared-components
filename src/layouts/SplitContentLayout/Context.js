import React, { createContext } from 'react';
import { createPortal } from 'react-dom';

const { Provider: _Provider, Consumer: _Consumer } = createContext();

/**
 * Manages the layout-level state, keeping track of various
 * moving parts (literally) and providing information to all nested
 * layout components about the layout configuration.
 */
export class Provider extends React.PureComponent {
  state = {
    // whether the main content is on the left or right
    mainContentLocation: this.props.mainContentLocation || 'right',
    // position of the action bar. Currently not configurable by the user.
    actionBarLocation: this.props.actionBarLocation || 'right',
    /**
     *  whether an action bar is rendered anywhere in the layout.
     * this is tricky since the user can include an action bar at any level in
     * the tree, so we must use this context to track it.
     */
    actionBarPresent: false,
    /**
     * whether there is a SecondaryContent child mounted within the layout.
     * this controls the size of the MainContent, which will expand to fill
     * the whole area if SecondaryContent is not present.
     */
    secondaryContentPresent: false,
    /**
     * A reference to the DOM element for the fixed layer which overlays
     * the main content area.
     */
    layerElement: null,
    /**
     * A reference to the outer element of the entire layout.
     */
    rootElement: null,
  };

  componentDidMount() {
    /**
     *  not using throttling or debouncing since this needs to be snappy.
     * on the plus side, we are bypassing the React update loop for these handlers,
     * so we shouldn't cause any update spam.
     */
    window.addEventListener('scroll', this.updateHeight);
    window.addEventListener('resize', this.updateHeight);

    /**
     *  fonts loading in can change the layout unexpectedly. We may need to calculate
     * the absolute top again once fonts are loaded in.
     */
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        const { layerElement, rootElement } = this.state;
        if (layerElement && rootElement) {
          this.updateAbsoluteTop(rootElement, layerElement);
        }
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateHeight);
    window.removeEventListener('resize', this.updateHeight);
  }

  rootElementRef = el => {
    this.setState(state => {
      // we are ready to calculate the absolute height when both elements are ready
      if (state.layerElement) {
        this.updateAbsoluteTop(el, state.layerElement);
      }
      return { rootElement: el };
    });
  };

  layerElementRef = el => {
    this.setState(state => {
      // we are ready to calculate the absolute height when both elements are ready
      if (el && state.rootElement) {
        this.updateAbsoluteTop(state.rootElement, el);
      }
      return { layerElement: el };
    });
  };

  /**
   * Keeps the overall logical height of the layout container in state so that
   * child containers can use it for calculations. Also updates the 'clientTop';
   * this is the distance in pixels the layout container is from the top of the
   * screen (minimum 0).
   */
  updateHeight = () => {
    if (this.state.layerElement) {
      this.state.layerElement.style.top = this.getTop(this.absoluteTop) + 'px';
    }
  };

  /**
   * This is expensive (calculating bounding rectangle).
   * We want to cache it and do it as little as possible.
   * Right now, this assumes that the content above the layout
   * will not change in height. This will probably need to be revisited
   * if we adopt responsive layouts for the top navigation... but then again,
   * this whole layout problem might be moot in such a responsive configuration.
   */
  updateAbsoluteTop = (rootElement, layerElement) => {
    const scrollTop = this.getScrollTop();
    this.absoluteTop = rootElement.getBoundingClientRect().top + scrollTop;
    layerElement.style.top = this.getTop(this.absoluteTop) + 'px';
  };

  /**
   * Gets the aparent visible height of the whole layout area within the
   * client's viewport. This is not the scrollable height - this is the number
   * of vertical pixels of the layout you can currently see in the window
   */
  getHeight = absoluteTop => {
    return window.innerHeight - Math.max(0, absoluteTop - this.getScrollTop());
  };
  /**
   * Gets the top of the layout relative to the entire document
   */
  getTop = absoluteTop => Math.max(0, absoluteTop - this.getScrollTop());
  /**
   * Gets the scroll position of the window
   */
  getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop;

  /**
   * Called by the ActionBar itself whenever it mounts so that we have
   * a record of whether it is present in the layout or not
   */
  updateActionBarPresence = isPresent =>
    this.setState({ actionBarPresent: isPresent });

  updateSecondaryContentPresence = isPresent =>
    this.setState({ secondaryContentPresent: isPresent });

  /**
   * A master function for rendering components within the layout. This will
   * separate out sections which must be rendered in a 'fixed' layer and
   * use portals to put them in their place. Otherwise, it just falls back
   * to regular old rendering.
   */
  renderElement = (name, jsx) => {
    if (
      name === 'secondaryContent' ||
      name === 'actionBar' ||
      name === 'popup'
    ) {
      return this.state.layerElement
        ? createPortal(jsx, this.state.layerElement, name)
        : null;
    }

    return jsx;
  };

  render() {
    return (
      <_Provider
        value={{
          ...this.state,
          updateActionBarPresence: this.updateActionBarPresence,
          updateSecondaryContentPresence: this.updateSecondaryContentPresence,
          renderElement: this.renderElement,
        }}
      >
        {this.props.children(this.rootElementRef, this.layerElementRef)}
      </_Provider>
    );
  }
}

export const Consumer = _Consumer;
