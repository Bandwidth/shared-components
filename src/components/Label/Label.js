import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import userTextSpacing from 'extensions/userTextSpacing';

const Label = styled.label.withConfig({ displayName: 'Label' }).attrs({
  spacing: userTextSpacing,
})`
  font-size: 1em;
  letter-spacing: 0.02em;
  font-weight: 600;
  font-family: ${get('fonts.brand')};
  color: ${get('colors.text.default')};
  background: transparent;
  line-height: 1.5;
  display: block;
  margin: ${props => props.spacing};

  ${({ disabled }) => (disabled ? 'opacity: 0.5;' : '')} &:disabled {
    opacity: 0.5;
  }

  ${({ required }) =>
    required
      ? css`
          &::after {
            content: '*';
            color: #e8562e;
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
  className: null,
  id: null,
  required: false,
};

/**
 * @component
 */
export default Label;
