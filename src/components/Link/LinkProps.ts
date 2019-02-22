import * as React from 'react';

export default interface LinkProps {
  /**
   * The URL to route to. Maybe external or internal. Different props
   * will be passed to the underlying element based on external or internal
   * URLs; all external URLs will open in a new tab and display a special
   * effect.
   */
  to?: string;
  /**
   * Programatically control whether the link appears to be in the focused
   * state.
   */
  appearFocused?: boolean;
  /**
   * Content (text) to render within the link.
   */
  children?: React.ReactNode;
  /**
   * Forces the link to open in a new tab
   */
  newTab?: boolean;
  /**
   * Adds an icon to the link and turns it into a "combo" link, which
   * uses uppercase styling
   */
  icon?: string;
  /**
   * If true, this link will be rendered differently and non-interactive
   */
  disabled?: boolean;
  // FIXME: Remove these by extending from anchor properly
  onClick?: (ev: any) => void;
  href?: string;
  as?: any; // FIXME: Patch that allows styled components to work properly here.
}
