import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';
import userTextSpacing from 'extensions/userTextSpacing';

const H4 = styled.h4.withConfig({ displayName: 'H4' }).attrs({
  spacing: userTextSpacing,
})`
  color: ${get('colors.primary.default')};
  font-weight: 900;
  font-family: ${get('fonts.brand')};
  font-size: 1.25em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: ${props => props.spacing};
  padding: 0;
`;

H4.propTypes = {
  /**
   * Specify a CSS value or an object { top, right, bottom, left } to
   * control the spacing around the heading. Defaults to no space.
   */
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
  spacing: null,
  className: null,
  id: null,
};

/**
 * @component
 */
export default H4;
