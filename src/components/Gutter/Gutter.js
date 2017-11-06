import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('Gutter', ({ colors }) => ({
    background: colors.gray.light,
    padding: 0,
    margin: 0,
  }))
  .createSelector();

const GutterImpl = theme.connect(styled.div.withConfig({ displayName: 'Gutter' })`
  ${spreadStyles(select)}
  background: ${select('background')};
  padding: ${select('padding')};
  margin: ${select('margin')};
`);

const Gutter = ({children, ...rest}) => (
  <GutterImpl {...rest}>{children}</GutterImpl>
)

Gutter.propTypes = {
  /**
   * A class name to add to the gutter element.
   */
  className: PropTypes.string,
  /**
   * An id to add to the gutter element.
   */
  id: PropTypes.string,
};

Gutter.defaultProps = {
  className: null,
  id: null,
};

Gutter.Styled = GutterImpl;

export default Gutter;
