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
        <ScrollShadow.Observer>
          {({ scrollElementRef }) => (
            <ScrollShadow
              Container={ShadowContainer}
              mainContentLocation={layoutContext.mainContentLocation}
              overlapBorder={overlapBorder}
            >
              <Container
                innerRef={scrollElementRef}
                actionBarPresent={layoutContext.actionBarPresent}
                actionBarLocation={layoutContext.actionBarLocation}
                mainContentLocation={layoutContext.mainContentLocation}
                overlapBorder={overlapBorder}
                {...rest}
              >
                {children}
              </Container>
            </ScrollShadow>
          )}
        </ScrollShadow.Observer>,
      )
    }
  </Consumer>
);

SecondaryContent.Container = Container;
SecondaryContent.SidebarList = SidebarList;

export default SecondaryContent;
