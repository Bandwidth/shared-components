import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('Heading4', ({ colors, fonts }) => ({
    color: colors.primary.default,
    fontWeight: 900,
    fontFamily: fonts.brand,
    fontSize: '1.25em',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  }))
  .createSelector();

const Heading4Impl = theme.connect(styled.h4.withConfig({ displayName: 'Heading4' })`
  ${spreadStyles(select)}
  margin: 0;
  padding: 0;
`);

const Heading4 = ({...rest, children}) => (
  <Heading4Impl {...rest}>{children}</Heading4Impl>
)

Heading4.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

Heading4.defaultProps = {
  className: null,
  id: null,
};

export default Heading4;
