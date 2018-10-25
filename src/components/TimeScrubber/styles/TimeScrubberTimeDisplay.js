import React from 'react';
import styled from 'styled-components';
import Label from 'components/Label';
import themeGet from 'extensions/themeGet';

const Display = styled(Label)`
  position: absolute;
  top: ${themeGet('spacing.small')};
  left: 0;
  right: 0;
  text-align: center;
  pointer-events: none;
`;

/**
 * Displays the provided time within a TimeScrubber viewport
 */
const TimeDisplay = ({ time }) => (
  <Display>{time && time.format('h:mm A')}</Display>
);

export default TimeDisplay;
