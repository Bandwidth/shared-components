import React from 'react';
import { Consumer } from './ScrollContext';
import DefaultContainer from './DefaultContainer';
import ShadowOverlay from './ShadowOverlay';

/**
 * Wraps the child component in a relative-positioned container,
 * then adds an overlay div which renders a shadow based on the
 * current scroll position.
 *
 * Requires a ScrollShadow.Observer to connect to the scroll container.
 * For simple use cases, this will be just above ScrollShadow in the tree,
 * but for more complicated shadow usage it's more helpful (for instance,
 * creating shadows based on a scroll container that's higher in the tree).
 *
 * You can also hook the global scroll value. Just provide the `global`
 * prop.
 *
 * You can disable the shadow as needed using the `disabled` prop.
 *
 * Finally, you can change the component used to render the outer
 * container by providing a Container prop. Make sure your Container
 * has position: relative.
 */
export default class ScrollShadow extends React.Component {
  defaultName = `${Math.floor(Math.random() * 100000000)}`;

  render() {
    const {
      children,
      outer,
      entireViewport,
      disabled,
      theme,
      name = this.defaultName,
      Container = DefaultContainer,
      ...extraProps
    } = this.props;

    const shadowPlacement = outer ? 'outer' : 'inner';

    return (
      <Container className="scroll-shadow-container" {...extraProps}>
        {children}
        {!disabled && (
          <Consumer>
            {getShadowElementRef => (
              <ShadowOverlay
                className="scroll-shadow"
                entireViewport={entireViewport}
                innerRef={getShadowElementRef(name, outer)}
              />
            )}
          </Consumer>
        )}
      </Container>
    );
  }
}
