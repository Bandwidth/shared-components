import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tag from 'clean-tag';
import get from 'extensions/themeGet';
import userSpacing from 'extensions/userSpacing';

const H4 = styled(tag.h4)
  .withConfig({ displayName: 'H4' })
  .attrs({
    spacing: userSpacing.text,
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
   * Specify a CSS value or an object { top, right, bottom, left } or { vertical, horizontal } to
   * control the spacing around the heading. Defaults to a large space below the element.
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
  spacing: { bottom: 'lg' },
  className: null,
  id: null,
};

/**
 * @component
 */
export default H4;
