import React from 'react';
import linkExtensions from './linkExtensions';
import * as styles from './styles';
import dotNotation from 'extensions/dotNotation';

export const Link = dotNotation(linkExtensions(styles.TextLink), {
  styles,
  Positive: linkExtensions((styles.TextLink as any).Positive),
  Negative: linkExtensions((styles.TextLink as any).Negative),
  Dark: linkExtensions((styles.TextLink as any).Dark),
  Inverted: linkExtensions((styles.TextLink as any).Inverted),
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
