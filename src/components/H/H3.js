import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';
import userTextSpacing from 'extensions/userTextSpacing';

const LINE_HEIGHT = 1.25;

const H3 = styled.h3.withConfig({ displayName: 'H3' }).attrs({
  spacing: userTextSpacing.withLineHeight(LINE_HEIGHT),
})`
  color: ${get('colors.text.default')};
  font-weight: 300;
  font-family: ${get('fonts.brand')};
  font-size: 1.75em;
  line-height: ${LINE_HEIGHT};
  letter-spacing: 0;
  margin: ${props => props.spacing};
  padding: 0;
`;

H3.propTypes = {
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

H3.defaultProps = {
  spacing: null,
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
