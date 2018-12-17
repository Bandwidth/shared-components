import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icons from './icons';
import get from 'extensions/themeGet';

const Icon = styled.i.withConfig({ displayName: 'Icon' })`
  font-family: ${get('fonts.icon')};
  font-size: inherit;
  color: ${({ color }) => color || 'inherit'};
  font-style: normal;
  display: inline-block;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'inherit')};
  &::before {
    content: "${({ name, iconsHelper }) =>
      iconsHelper(name) || iconsHelper('help_2')}";
    display: block;
    color: inherit;
  }
`;

Icon.propTypes = {
  /**
   * The name of the glyph to use (see src/Icon/icons.js)
   */
  name: PropTypes.string.isRequired,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Replace the icon helper function (advanced).
   */
  iconsHelper: PropTypes.func,
  /**
   * Color of the icon
   */
  color: PropTypes.string,
};

Icon.defaultProps = {
  className: null,
  id: null,
  iconsHelper: icons,
  color: null,
};

/**
 * @component
 */
export default Icon;
