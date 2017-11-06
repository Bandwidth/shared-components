import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('Heading5', ({ colors, fonts }) => ({
    color: colors.text.default,
    fontWeight: 800,
    fontFamily: fonts.brand,
    fontSize: '1.15em',
  }))
  .createSelector();

const Heading5Impl = theme.connect(styled.h5.withConfig({ displayName: 'Heading5' })`
  ${spreadStyles(select)}
  margin: 0;
  padding: 0;
`);

const Heading5 = ({...rest, children}) => (
  <Heading5Impl {...rest}>{children}</Heading5Impl>
)

Heading5.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

Heading5.defaultProps = {
  className: null,
  id: null,
};

export default Heading5;
