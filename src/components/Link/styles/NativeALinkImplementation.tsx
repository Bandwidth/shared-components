import React from 'react';
import LinkProps from '../LinkProps';

const NativeALink: React.FC<LinkProps> = ({
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

export default NativeALink;
