import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';
import icons, { map } from './icons';

const IconImpl = styled.i.withConfig({ displayName: 'Icon' })`
  font-family: 'Bandwidth';
  font-size: ${({ theme, size }) => `${size}` || '16px'};
  color: inherit;
  font-style: normal;
  display: inline-block;
  &::before {
    content: "${({ name, iconsHelper }) =>
      iconsHelper(name) || iconsHelper('help_2')}";
    display: block;
    color: inherit;
  }
`;

export const Icon = ({children, ...rest}) => (
  <IconImpl {...rest}>{children}</IconImpl>
)

Icon.propTypes = {
  /**
   * The name of the glyph to use (see src/Icon/icons.js)
   */
  name: PropTypes.string.isRequired,
  /**
   * Change the size of the icon. Can be any CSS dimension string.
   */
  size: PropTypes.string,
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
};

Icon.defaultProps = {
  theme: {
    icon: { fontSize: '16px', fg: 'inherit' },
  },
  className: null,
  id: null,
  size: '16px',
  iconsHelper: icons,
};

export default sharedComponent({ Styled: IconImpl })(Icon);
