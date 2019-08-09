import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import userTextSpacing from 'extensions/userTextSpacing';

const Label = styled.label.withConfig({ displayName: 'Label' })`
  font-size: 1em;
  letter-spacing: 0.02em;
  font-weight: 700;
  font-family: ${get('fonts.brand')};
  color: ${get('colors.text.default')};
  background: transparent;
  line-height: 1.5;
  display: block;
  margin: ${userTextSpacing};
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${get('colors.text.disabled')};
    `};

  ${({ required }) =>
    required
      ? css`
          &::after {
            content: '*';
            color: ${get('colors.negative.default')};
            padding-left: 0.3em;
          }
        `
      : ''};
`;

Label.propTypes = {
  /**
   * Styles the label to indicate that the associated field is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a red star at the end of the label.
   */
  required: PropTypes.bool,
  /**
   * Specify a CSS value or an object { top, right, bottom, left } or { vertical, horizontal } to
   * control the spacing around the heading. Defaults to a large space below the element.
   */
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Label.defaultProps = {
  disabled: false,
  className: "scl-label",
  id: null,
  required: false,
};

/**
 * @component
 */
export default Label;
