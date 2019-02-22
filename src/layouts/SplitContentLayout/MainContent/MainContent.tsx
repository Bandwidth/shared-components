import React from 'react';
import * as styles from './styles';
import { Consumer } from '../Context';

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
const MainContent: React.SFC<MainContentProps> & {
  Container: any;
  Box: any;
  styles: any;
} = ({ children, Container, ...rest }) => (
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

MainContent.styles = styles;

MainContent.Container = styles.Container;
MainContent.Box = styles.ContentBox;

export default MainContent;
