import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const H5 = styled.h5.withConfig({ displayName: 'H5' })`
  color: ${get('colors.text.default')};
  font-weight: 800;
  font-family: ${get('fonts.brand')};
  font-size: 1.15em;
  margin: 0;
  padding: 0;
`;

H5.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

H5.defaultProps = {
  className: null,
  id: null,
};

/**
 * @component
 */
export default H5;
