import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Prevents the `newTab` prop from being passed to Link,
 * which emits errors when it receives props it doesn't expect.
 */
export default ({ newTab, children, ...rest }) => (
  <Link {...rest}>{children}</Link>
);
