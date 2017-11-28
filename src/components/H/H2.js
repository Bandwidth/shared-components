import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const H2 = styled.h2.withConfig({ displayName: 'H2' })`
  color: ${get('colors.text.default')};
  font-weight: 700;
  font-family: ${get('fonts.brand')};
  font-size: 2em;
  line-height: 1.5em;
  margin: 0;
  padding: 0;
`;

H2.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

H2.defaultProps = {
  className: null,
  id: null,
};

/**
 * @component
 */
export default H2;
