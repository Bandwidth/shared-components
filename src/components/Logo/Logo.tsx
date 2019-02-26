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

export default dotNotation(Logo, {
  Small: styled(Logo)`
    height: ${themeGet('spacing.medium')};
  `,
  Large: styled(Logo)`
    height: ${themeGet('spacing.extraLarge')};
  `,
});
