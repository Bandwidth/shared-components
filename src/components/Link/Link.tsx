import React from 'react';
import linkExtensions from './linkExtensions';
import * as styles from './styles';
import dotNotation from 'extensions/dotNotation';

/**
 * Creates a local or remote link using a simple `<a>` tag. External / internal is inferred by the URL provided to the `to` prop.

 * Other supported props:

 * `appearFocused`: Allows you to programmatically control whether the link is styled as focused. Useful for advanced keyboard navigation scenarios.
 * `Link.Icon` takes the `icon` property, which is the name of the icon to use.
 */
export const Link = dotNotation(linkExtensions(styles.TextLink), {
  styles,
  Positive: linkExtensions(styles.TextLink.Positive),
  Negative: linkExtensions(styles.TextLink.Negative),
  Dark: linkExtensions(styles.TextLink.Dark),
  Inverted: linkExtensions(styles.TextLink.Inverted),
  Wrap: linkExtensions(styles.TransparentLink),
});

Link.defaultProps = Link.Positive.defaultProps = Link.Negative.defaultProps = Link.Dark.defaultProps = Link.Inverted.defaultProps = {
  to: '#',
  appearFocused: false,
  disabled: false,
  newTab: false,
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
