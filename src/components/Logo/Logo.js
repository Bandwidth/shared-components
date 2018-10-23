import React from 'react';
import PropTypes from 'prop-types';
import themeGet from 'extensions/themeGet';
import { defaultProps } from 'recompose';
import irisTheme from 'themes/irisTheme';
import LogoSvg from './logo.svg';
import styled from 'styled-components';

// const Logo = ({ width, height, color, style, ...rest }) => (
//   <LogoSvg style={{ width, height, fill: color, ...style }} {...rest} />
// );
//
const Logo = styled(LogoSvg)`
  width: ${({ width }) => width};
  fill: ${({ color }) => (color ? color : themeGet('colors.text.inverted'))};
  height: ${({ height }) => (height ? height : themeGet('spacing.large'))};
`;

Logo.propTypes = {
  /**
   * Adds a class name to the logo image.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the logo image.
   */
  id: PropTypes.string,
  /**
   * Sets the color of the logo.
   */
  color: PropTypes.string,
  /**
   * Manually control the width of the logo. If only width is set, height
   * will be based on the aspect ratio.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Manually control the width of the logo. If only height is set, width
   * will be based on the aspect ratio.
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Logo.defaultProps = {
  className: null,
  id: null,
  color: null,
  height: null,
};

Logo.Small = styled(Logo)`
  height: ${themeGet('spacing.medium')};
`;
Logo.Large = styled(Logo)`
  height: ${themeGet('spacing.extraLarge')};
`;

Logo.Primary = styled(Logo)`
  fill: ${themeGet('colors.primary.default')};
`;
Logo.Primary.Small = styled(Logo)`
  fill: ${themeGet('colors.primary.default')};
  height: ${themeGet('spacing.medium')};
`;
Logo.Primary.Large = styled(Logo)`
  fill: ${themeGet('colors.primary.default')};
  height: ${themeGet('spacing.extraLarge')};
`;

export default Logo;
