import React from 'react';
import { Consumer as LocalConsumer } from './ScrollContext';
import { Consumer as GlobalConsumer } from './GlobalScrollContext';
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
export default ({
  children,
  outer,
  entireViewport,
  disabled,
  global,
  theme,
  Container = DefaultContainer,
  ...extraProps
}) => {
  const shadowPlacement = outer ? 'outer' : 'inner';

  const Consumer = global ? GlobalConsumer : LocalConsumer;

  return (
    <Container className="scroll-shadow-container" {...extraProps}>
      {children}
      {!disabled && (
        <Consumer>
          {({ mode }) => (
            <ShadowOverlay
              className="scroll-shadow"
              global={global}
              mode={mode}
              placement={shadowPlacement}
              entireViewport={entireViewport}
            />
          )}
        </Consumer>
      )}
    </Container>
  );
};
