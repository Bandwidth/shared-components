import React from 'react';
import PropTypes from 'prop-types';
import { ScrollShadow } from 'behaviors';
import * as styles from './styles';
import { Consumer } from '../Context';
import dotNotation from 'extensions/dotNotation';

export interface SecondaryContentProps {
  /**
   * Children you want to render in the sidebar
   */
  children: React.ReactNode;
  /**
   * A component to override the one that renders the outer container
   */
  Container?: any;
  /**
   * A component to override the one that renders the shadow container for
   * the inner ScrollShadow
   */
  ShadowContainer?: any;
  // FIXME: needs docs
  overlapBorder?: boolean;
}

/**
 * Secondary content is the 'sidebar'. In common configurations,
 * it's either an item list or a small single-column form.
 * Secondary content can contain an Action Bar if you want it to.
 */
const SecondaryContent: React.SFC<
  SecondaryContentProps & React.HTMLAttributes<HTMLDivElement>
> = ({ children, overlapBorder, Container, ShadowContainer, ...rest }) => (
  <Consumer>
    {layoutContext =>
      layoutContext.renderElement(
        'secondaryContent',
        //@ts-ignore
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

SecondaryContent.defaultProps = {
  Container: styles.Container,
  ShadowContainer: styles.ShadowContainer,
};

export default dotNotation(SecondaryContent, {
  styles,
  Container: styles.Container,
  SidebarList: styles.SidebarList,
});
