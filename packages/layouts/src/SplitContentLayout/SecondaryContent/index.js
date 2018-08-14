import React from 'react';
import { ScrollShadow } from '@bandwidth/shared-components';
import { Container, ShadowContainer, SidebarList } from './components';
import { Consumer } from '../Context';

/**
 * Secondary content is the 'sidebar'. In common configurations,
 * it's either an item list or a small single-column form.
 * Secondary content can contain an Action Bar if you want it to.
 */
const SecondaryContent = ({ children, overlapBorder, ...rest }) => (
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
          {...rest}
        >
          {children}
        </ScrollShadow>,
      )
    }
  </Consumer>
);

SecondaryContent.Container = Container;
SecondaryContent.SidebarList = SidebarList;

export default SecondaryContent;
