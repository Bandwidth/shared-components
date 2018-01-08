import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const H4 = styled.h4.withConfig({ displayName: 'H4' })`
  color: ${get('colors.primary.default')};
  font-weight: 900;
  font-family: ${get('fonts.brand')};
  font-size: 1.25em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`;

H4.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

H4.defaultProps = {
  className: null,
  id: null,
};

/**
 * @component
 */
export default H4;
