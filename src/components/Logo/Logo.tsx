import React from 'react';
import PropTypes from 'prop-types';
import themeGet from 'extensions/themeGet';
// import LogoSvg from './logo.svg';
import styled, { StyledComponentClass } from 'styled-components';

interface LogoProps {
  width: string | number;
  height: string | number;
  color: string;
}

type StyledDiv = StyledComponentClass<
  React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement> &
    LogoProps,
  any
>;

interface Logo extends StyledDiv {
  Small?: Logo;
  Large?: Logo;
  Primary?: Logo;
}

const Logo: Logo = styled.div<LogoProps>`
  width: ${({ width }) => width};
  fill: ${({ color }) => (color ? color : themeGet('colors.text.inverted'))};
  height: ${({ height }) => (height ? height : themeGet('spacing.large'))};
`;

// Logo.propTypes = {
//   /**
//    * Adds a class name to the logo image.
//    */
//   className: PropTypes.string,
//   /**
//    * Adds an id to the logo image.
//    */
//   id: PropTypes.string,
//   /**
//    * Sets the color of the logo.
//    */
//   color: PropTypes.string,
//   /**
//    * Manually control the width of the logo. If only width is set, height
//    * will be based on the aspect ratio.
//    */
//   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   /**
//    * Manually control the width of the logo. If only height is set, width
//    * will be based on the aspect ratio.
//    */
//   height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };

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
