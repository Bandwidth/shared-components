import React from 'react';
import PropTypes from 'prop-types';
import linkExtensions from './linkExtensions';
import * as styles from './styles';

const Link = linkExtensions(styles.TextLink);

Link.Positive = linkExtensions(styles.TextLink.Positive);
Link.Negative = linkExtensions(styles.TextLink.Negative);
Link.Dark = linkExtensions(styles.TextLink.Dark);
Link.Inverted = linkExtensions(styles.TextLink.Inverted);
Link.Wrap = linkExtensions(styles.TransparentLink);

Link.propTypes = {
  /**
   * The URL to route to. Maybe external or internal. Different props
   * will be passed to the underlying element based on external or internal
   * URLs; all external URLs will open in a new tab and display a special
   * effect.
   */
  to: PropTypes.string,
  /**
   * Programatically control whether the link appears to be in the focused
   * state.
   */
  appearFocused: PropTypes.bool,
  /**
   * Content (text) to render within the link.
   */
  children: PropTypes.node,
  /**
   * Forces the link to open in a new tab
   */
  newTab: PropTypes.bool,
  /**
   * Adds an icon to the link and turns it into a "combo" link, which
   * uses uppercase styling
   */
  icon: PropTypes.string,
  /**
   * If true, this link will be rendered differently and non-interactive
   */
  disabled: PropTypes.bool,
};

Link.Positive.propTypes = Link.Negative.propTypes = Link.Dark.propTypes = Link.Inverted.propTypes =
  Link.propTypes;

Link.defaultProps = Link.Positive.defaultProps = Link.Negative.defaultProps = Link.Dark.defaultProps = Link.Inverted.defaultProps = {
  to: '#',
  appearFocused: false,
  newTab: undefined,
  icon: null,
};

Link.Wrap.propTypes = {
  /**
   * The URL to route to.
   */
  to: PropTypes.string,
  /**
   * Content of any type to render within the link
   */
  children: PropTypes.node,
  /**
   * Forces the link to open in a new tab
   */
  newTab: PropTypes.bool,
  /**
   * If true, this link will not be interactive
   */
  disabled: PropTypes.bool,
};

Link.Wrap.defaultProps = {
  to: '#',
  newTab: undefined,
};

/**
 * Creates a local or remote link.
 * External / internal is inferred by the URL provided to `to`
 */
export default Link;
