import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tag from 'clean-tag';
import get from 'extensions/themeGet';
import userTextSpacing from 'extensions/userTextSpacing';

const H5 = styled(tag.h5)
  .withConfig({ displayName: 'H5' })
  .attrs({
    spacing: userTextSpacing,
  })`
  color: ${get('colors.text.default')};
  font-weight: 800;
  font-family: ${get('fonts.brand')};
  font-size: 1.15em;
  margin: ${props => props.spacing};
  padding: 0;
`;

H5.propTypes = {
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

H5.defaultProps = {
  spacing: { bottom: 'lg' },
  className: null,
  id: null,
};

/**
 * @component
 */
export default H5;
