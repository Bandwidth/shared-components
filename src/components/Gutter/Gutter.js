import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GutterImpl = styled.div.withConfig({ displayName: 'Gutter' })`
  background: ${({ theme }) => theme.colors.gutter};
`;

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

export default Gutter;
