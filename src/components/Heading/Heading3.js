import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('Heading3', ({ colors, fonts }) => ({
    color: colors.text.default,
    fontWeight: 300,
    fontFamily: fonts.brand,
    fontSize: '1.75em',
    lineHeight: '1em',
  }))
  .addVariant('primary', ({ colors }) => ({ color: colors.primary.default }))
  .createSelector();

const Heading3Impl = theme.connect(styled.h3.withConfig({ displayName: 'Heading3' })`
  ${spreadStyles(select)}
  margin: 0;
  padding: 0;
`);

const Heading3 = ({...rest, children}) => (
  <Heading3Impl {...rest}>{children}</Heading3Impl>
)

Heading3.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

Heading3.defaultProps = {
  className: null,
  id: null,
};

Heading3.Primary = theme.variant('primary')(Heading3);

export default Heading3;
