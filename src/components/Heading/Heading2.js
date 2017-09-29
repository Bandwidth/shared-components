import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('Heading2', ({ colors, fonts }) => ({
    color: colors.black,
    fontWeight: 700,
    fontFamily: fonts.brand,
    fontSize: '2em',
    lineHeight: '1.5em',
  }))
  .createSelector();

const Heading2Impl = theme.connect(styled.h2.withConfig({ displayName: 'Heading2' })`
  ${spreadStyles(select)}
  margin: 0;
  padding: 0;
`);

const Heading2 = ({...rest, children}) => (
  <Heading2Impl {...rest}>{children}</Heading2Impl>
)

Heading2.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

Heading2.defaultProps = {
  className: null,
  id: null,
};

export default Heading2;
