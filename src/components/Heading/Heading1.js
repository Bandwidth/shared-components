import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

import H2 from './Heading2';
import H3 from './Heading3';
import H4 from './Heading4';
import H5 from './Heading5';

const select = theme
  .register('Heading1', ({ colors, fonts }) => ({
    color: colors.primary.default,
    fontWeight: 100,
    fontFamily: fonts.brand,
    fontSize: '2.5em',
  }))
  .createSelector();

const Heading1Impl = theme.connect(styled.h1.withConfig({ displayName: 'Heading1' })`
  ${spreadStyles(select)}
  margin: 0;
  padding: 0;
`);

const Heading1 = ({...rest, children}) => (
  <Heading1Impl {...rest}>{children}</Heading1Impl>
)

Heading1.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

Heading1.defaultProps = {
  className: null,
  id: null,
};

Heading1.Heading2 = H2;
Heading1.H2 = H2;
Heading1.Heading3 = H3;
Heading1.H3 = H3;
Heading1.Heading4 = H4;
Heading1.H4 = H4;
Heading1.Heading5 = H5;
Heading1.H5 = H5;

export default Heading1;
