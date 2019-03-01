import * as React from 'react';
import LinkProps from './LinkProps';

/**
 * How we calculate external:
 * 1. If the user has explicitly provided an `newTab` prop, use that- whether it's true or false.
 * 2. Otherwise, check for a protocol on the URL.
 */
const isExternal = (props: LinkProps) =>
  (props.newTab !== undefined && props.newTab) ||
  (props.to && /^(https?:)*\/\//.test(props.to));

const processOnClick = (props: WrappedLinkProps) => {
  return event => {
    // if link is disabled, prevent any effects
    if (props.disabled) {
      event.preventDefault();
      return;
    }

    if (props.onClick) {
      // if user is using the link only for styling (not navigation),
      // prevent navigation effect.
      if (props.to === '#') {
        event.preventDefault();
      }
      props.onClick(event);
    }
  };
};

interface WrappedLinkProps extends LinkProps {
  onClick: (WrappedLinkProps) => void;
}

/**
 * A HOC that provides a bit more intelligence / intuitive
 * function to the basic styled link
 */
export default (WrappedLink: any): React.FC<WrappedLinkProps> => props => (
  <WrappedLink
    {...props}
    {...(isExternal(props)
      ? { newTab: true, target: '_blank', rel: 'noopener' }
      : { newTab: false })}
    onClick={processOnClick(props)}
  >
    {props.children}
  </WrappedLink>
);
