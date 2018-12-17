import React from 'react';

/**
 * How we calculate external:
 * 1. If the user has explicitly provided an `newTab` prop, use that- whether it's true or false.
 * 2. Otherwise, check for a protocol on the URL.
 */
const isExternal = props =>
  (props.newTab !== undefined && props.newTab) ||
  /^(https?:)*\/\//.test(props.to);

const processOnClick = props => {
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

/**
 * A HOC that provides a bit more intelligence / intuitive
 * function to the basic styled link
 */
export default WrappedLink => props => (
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
