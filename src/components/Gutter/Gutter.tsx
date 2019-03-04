import * as React from 'react';
import styled from 'styled-components';
import get from 'extensions/themeGet';

/**
 * A simple container box which sets the background color. That's it!
 */
export default styled.div`
  background: ${get('colors.gray.light')};
`;
