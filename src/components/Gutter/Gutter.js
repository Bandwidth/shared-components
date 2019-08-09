import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const Gutter = styled.div.withConfig({ displayName: 'Gutter' })`
  background: ${get('colors.gray.light')};
`;

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
  className: "scl-gutter",
  id: null,
};

/**
 * @component
 */
export default Gutter;
