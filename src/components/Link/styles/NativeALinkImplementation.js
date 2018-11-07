import React from 'react';

export default ({
  children,
  to,
  // below are just filtering out non-dom props
  newTab,
  appearFocused,
  icon,
  ...rest
}) => (
  <a {...rest} href={to}>
    {children}
  </a>
);
