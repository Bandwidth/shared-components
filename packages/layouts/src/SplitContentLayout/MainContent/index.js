import React from 'react';
import { ScrollShadow } from '@bandwidth/shared-components';
import { Container, ContentBox } from './components';
import { Consumer } from '../Context';

/**
 * Main content is the primary content group for the page. This is usually
 * the 'details' view. Main content can contain an Action Bar at any level
 * of nesting and it will work properly.
 */
const MainContent = ({ children, ...rest }) => (
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

MainContent.Container = Container;
MainContent.Box = ContentBox;

export default MainContent;
