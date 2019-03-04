import * as React from 'react';
import styled from 'styled-components';
import icons from './icons';
import get from 'extensions/themeGet';

export interface IconProps {
  /**
   * The name of the glyph to use (see src/Icon/icons.js)
   */
  name: string;
  /**
   * Replace the icon helper function (advanced).
   */
  iconsHelper?: (name: string) => string;
  /**
   * Color of the icon
   */
  color?: string;
}

/*
 * Icons let you easily render some of our icons. Pass in the `name` prop to specify which one.
 * The icon definition file is in `components/Icons/icons.js`
 */
export const Icon = styled.i<IconProps>`
  font-family: ${get('fonts.icon')};
  font-size: inherit;
  color: ${({ color }) => color || 'inherit'};
  font-style: normal;
  display: inline-block;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'inherit')};
  &::before {
    content: "${({ name, iconsHelper }) =>
      iconsHelper && (iconsHelper(name) || iconsHelper('help_2'))}";
    display: block;
    color: inherit;
  }
`;

Icon.defaultProps = {
  iconsHelper: icons,
};

export default Icon;
