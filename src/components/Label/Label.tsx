import * as React from 'react';
import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import userSpacing, { SpacingProps } from '../../extensions/userSpacing';

export interface LabelProps extends SpacingProps {
  /**
   * Styles the label to indicate that the associated field is disabled.
   */
  disabled?: boolean;
  /**
   * Adds a red star at the end of the label.
   */
  required?: boolean;
}

/**
 * A simple label. Meant to be tied to an input component.
 */
export const Label = styled.label<LabelProps>`
  font-size: 1em;
  letter-spacing: 0.02em;
  font-weight: 700;
  font-family: ${get('fonts.brand')};
  color: ${get('colors.text.default')};
  background: transparent;
  line-height: 1.5;
  display: block;
  margin: ${userSpacing.text};
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

Label.defaultProps = {
  disabled: false,
  required: false,
};

export default Label;
