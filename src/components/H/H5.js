import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';
import userSpacing from 'extensions/userSpacing';
import Skeleton from 'skeletons/Skeleton';

const H5 = styled.h5.withConfig({ displayName: 'H5' })`
  color: ${get('colors.text.default')};
  font-weight: 800;
  font-family: ${get('fonts.brand')};
  font-size: 1.15em;
  margin: ${userSpacing.text};
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
  className: "scl-header-5",
  id: null,
};
H5.Skeleton = () => <Skeleton width="200px" height="1.15em" />;

/**
 * @component
 */
export default H5;
