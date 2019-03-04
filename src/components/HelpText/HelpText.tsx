import * as React from 'react';
import styled from 'styled-components';
import get from 'extensions/themeGet';
import userSpacing, { SpacingProps } from '../../extensions/userSpacing';

export interface HelpTextProps extends SpacingProps {
  /**
   * Whether this help text is in an error state
   */
  error?: string | boolean;
}

/**
 * HelpText goes below an input or interactive component to give the user some information about what
 * that component might do, or below some information to explain its meanin  g, context or importance.
 */
export default styled.div<HelpTextProps>`
  color: ${({ error }) =>
    error ? get('colors.negative.default') : get('colors.gray.medium')};
  font-style: italic;
  font-weight: 300;
  font-family: ${get('fonts.brand')};
  margin: ${userSpacing.text};
`;
