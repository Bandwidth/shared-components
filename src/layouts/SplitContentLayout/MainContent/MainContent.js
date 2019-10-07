import React from 'react';
import PropTypes from 'prop-types';
import { ScrollShadow } from 'behaviors';
import * as styles from './styles';
import { Consumer } from '../Context';

/**
 * Main content is the primary content group for the page. This is usually
 * the 'details' view. Main content can contain an Action Bar at any level
 * of nesting and it will work properly.
 */
const MainContent = React.forwardRef(
  ({ children, Container, ...rest }, ref) => (
    <Consumer>
      {layoutContext =>
        layoutContext.renderElement(
          'mainContent',
          <Container
            actionBarPresent={layoutContext.actionBarPresent}
            secondaryContentPresent={layoutContext.secondaryContentPresent}
            actionBarLocation={layoutContext.actionBarLocation}
            mainContentLocation={layoutContext.mainContentLocation}
            ref={ref}
            {...rest}
          >
            {children}
          </Container>,
        )
      }
    </Consumer>
  ),
);

MainContent.propTypes = {
  /**
   * Children to render in the main area
   */
  children: PropTypes.node,
  /**
   * A component to use to render the container around the content
   */
  Container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

MainContent.defaultProps = {
  Container: styles.Container,
};

MainContent.styles = styles;

MainContent.Container = styles.Container;
MainContent.Box = styles.ContentBox;

export default MainContent;
