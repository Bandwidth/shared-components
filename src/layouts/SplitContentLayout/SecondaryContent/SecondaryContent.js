import React from 'react';
import PropTypes from 'prop-types';
import { ScrollShadow } from 'behaviors';
import * as styles from './styles';
import { Consumer } from '../Context';
import PresenceNotifier from './PresenceNotifier';

/**
 * Secondary content is the 'sidebar'. In common configurations,
 * it's either an item list or a small single-column form.
 * Secondary content can contain an Action Bar if you want it to.
 */
const SecondaryContent = React.forwardRef(
  ({ children, overlapBorder, Container, ShadowContainer, ...rest }, ref) => (
    <Consumer>
      {layoutContext =>
        layoutContext.renderElement(
          'secondaryContent',
          <ScrollShadow
            Container={ShadowContainer}
            ScrollContainer={Container}
            actionBarPresent={layoutContext.actionBarPresent}
            actionBarLocation={layoutContext.actionBarLocation}
            mainContentLocation={layoutContext.mainContentLocation}
            overlapBorder={overlapBorder}
            ref={ref}
            {...rest}
          >
            <PresenceNotifier
              updateSecondaryContentPresence={
                layoutContext.updateSecondaryContentPresence
              }
            />
            {children}
          </ScrollShadow>,
        )
      }
    </Consumer>
  ),
);

SecondaryContent.propTypes = {
  /**
   * Children you want to render in the sidebar
   */
  children: PropTypes.node,
  /**
   * A component to override the one that renders the outer container
   */
  Container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  /**
   * A component to override the one that renders the shadow container for
   * the inner ScrollShadow
   */
  ShadowContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

SecondaryContent.defaultProps = {
  Container: styles.Container,
  ShadowContainer: styles.ShadowContainer,
};

SecondaryContent.styles = styles;

SecondaryContent.Container = styles.Container;
SecondaryContent.SidebarList = styles.SidebarList;

export default SecondaryContent;
