import React from 'react';
import * as styles from './styles';
import { Consumer } from '../Context';
import dotNotation from 'extensions/dotNotation';

export interface MainContentProps {
  /**
   * Children to render in the main area
   */
  children: React.ReactNode;
  /**
   * A component to use to render the container around the content
   */
  Container?: any;
}

/**
 * Main content is the primary content group for the page. This is usually
 * the 'details' view. Main content can contain an Action Bar at any level
 * of nesting and it will work properly.
 */
const MainContent: React.SFC<
  MainContentProps &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>
> = ({ children, Container, ...rest }) => (
  <Consumer>
    {layoutContext =>
      layoutContext.renderElement(
        'mainContent',
        <Container
          actionBarPresent={layoutContext.actionBarPresent}
          actionBarLocation={layoutContext.actionBarLocation}
          mainContentLocation={layoutContext.mainContentLocation}
          {...rest}
        >
          {children}
        </Container>,
      )
    }
  </Consumer>
);

MainContent.defaultProps = {
  Container: styles.Container,
};

export default dotNotation(MainContent, {
  styles,
  Container: styles.Container,
  Box: styles.ContentBox,
});
