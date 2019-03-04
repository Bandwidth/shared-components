import React from 'react';
import PropTypes from 'prop-types';
import themeGet from 'extensions/themeGet';
import styled from 'styled-components';
import dotNotation from 'extensions/dotNotation';

export interface LogoProps {
  /**
   * Manually control the width of the logo. If only width is set, height
   * will be based on the aspect ratio.
   */
  width?: string | number;
  /**
   * Manually control the width of the logo. If only height is set, width
   * will be based on the aspect ratio.
   */
  height?: string | number;
  /**
   * Sets the color of the logo.
   */
  color?: string;
}

const Logo = styled.div<LogoProps>`
  width: ${({ width }) => width};
  fill: ${({ color }) => (color ? color : themeGet('colors.text.inverted'))};
  height: ${({ height }) => (height ? height : themeGet('spacing.large'))};
`;

/**
 * Renders the company logo! Small, regular and large set pixel sizes.
 * Bandwidth and the BW logo are trademarks of Bandwidth.com, Inc.
 * Bandwidth reserves all rights to these trademarks, as well as any others that may be included from time to time.
 */
export default dotNotation(Logo, {
  Small: styled(Logo)`
    height: ${themeGet('spacing.medium')};
  `,
  Large: styled(Logo)`
    height: ${themeGet('spacing.extraLarge')};
  `,
});
