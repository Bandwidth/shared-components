import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const H3 = styled.h3.withConfig({ displayName: 'H3' })`
  color: ${get('colors.text.default')};
  font-weight: 300;
  font-family: ${get('fonts.brand')};
  font-size: 1.75em;
  line-height: 1.25;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
`;

H3.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

H3.defaultProps = {
  className: null,
  id: null,
};

H3.Primary = styled(H3)`
  color: ${get('colors.primary.default')};
`;

/**
 * @component
 */
export default H3;
