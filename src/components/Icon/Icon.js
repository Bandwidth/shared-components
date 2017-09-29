import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icons, { map } from './icons';
import theme from '../../theme';

const select = theme
  .register('Icon', {
    size: '16px',
    color: 'inherit',
    fontStyle: 'normal',
    display: 'inline-block',
  })
  .createSelector();

const IconImpl = theme.connect(styled.i.withConfig({ displayName: 'Icon' })`
  font-family: 'Bandwidth';
  font-size: ${select('size')};
  color: ${select('color')};
  font-style: ${select('fontStyle')};
  display: ${select('display')};
  &::before {
    content: "${({ name, iconsHelper }) => iconsHelper(name) || iconsHelper('help_2')}";
    display: block;
    color: inherit;
  }
`);

const Icon = ({children, ...rest}) => (
  <IconImpl {...rest}>{children}</IconImpl>
)

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
}

Icon.defaultProps = {
  className: null,
  id: null,
  iconsHelper: icons,
};

Icon.Styled = IconImpl;

export default Icon;
