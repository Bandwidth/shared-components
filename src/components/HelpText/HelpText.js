import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';
import userTextSpacing from 'extensions/userTextSpacing';

const HelpText = styled.div.withConfig({ displayName: 'HelpText' }).attrs({
  spacing: userTextSpacing,
})`
  color: ${props =>
    props.error
      ? 'var(--colors-negative-default)'
      : 'var(--colors-gray-medium)'};
  font-style: italic;
  font-weight: 300;
  font-family: var(--fonts-brand);
  margin: ${props => props.spacing};
`;

HelpText.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Whether this help text is in an error state
   */
  error: PropTypes.bool,
  /**
   * Specify a CSS value or an object { top, right, bottom, left } or { vertical, horizontal } to
   * control the spacing around the heading. Defaults to a large space below the element.
   */
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

HelpText.defaultProps = {
  className: null,
  id: null,
};

/**
 * @component
 */
export default HelpText;
