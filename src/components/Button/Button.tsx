import * as React from 'react';
import styled from 'styled-components';
import icons from 'components/Icon/icons';
import get from 'extensions/themeGet';

export interface ButtonProps {
  /**
   * An icon name for an icon to pop in from the left side of the button on hover.
   */
  leftIcon?: string;
  /**
   * An icon name for an icon to pop in from the right side of the button on hover.
   */
  rightIcon?: string;
  /**
   * Use this to override the icon provider function (advanced). An icon provider function takes an icon name and
   * provides a unicode character to render.
   */
  iconHelper?: (name: string) => string;
}

/**
 * NOTE: all paddings in button are adjusted to accomodate
 * border widths on both sides. If border widths are changed,
 * also change padding to compensate!
 *
 * Vertical paddings are also displaced to accomodate text cap and base lines.
 * Basically, 1px is added to the top, 1px subtracted from the bottom.
 *
 * @component
 */
const Button = styled.button<ButtonProps>`
  font-size: 0.8rem;
  text-decoration: none;
  font-weight: 700;
  font-family: ${get('fonts.brand')};
  text-transform: uppercase;

  border-width: ${get('thicknesses.normal')};
  border-style: solid;
  border-radius: 3em;
  border-color: ${get('colors.primary.default')};

  color: ${get('colors.text.inverted')};
  background: ${get('colors.primary.default')};

  padding: 12px 28px 10px 28px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  line-height: normal;
  white-space: nowrap;

  vertical-align: middle;
  text-align: center;

  cursor: pointer;
  -webkit-user-drag: none;
  /* should get auto-prefixed */
  user-select: none;

  box-sizing: border-box;

  transition: all 0.25s ease;

  outline: none;


  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background: ${get('colors.primary.dark')};
    border-color: ${get('colors.primary.dark')};
    box-shadow: ${get('shadows.short')};
  }

  &:disabled {
    background: ${get('colors.background.disabled')};
    color: ${get('colors.text.disabled')};
    border-color: ${get('colors.background.disabled')};
    cursor: default;
    opacity: 0.5;
  }

  &::before, &::after {
    position: absolute;
    height: 100%;
    color: inherit;
    transition: all 0.3s;
    speak: none;
    font-family: ${get('fonts.icon')};
  }

  &::before {
    content: '${({ leftIcon, iconHelper }) =>
      leftIcon && iconHelper && iconHelper(leftIcon)}';
    left: -200px;
  }

  &::after {
    content: '${({ rightIcon, iconHelper }) =>
      rightIcon && iconHelper && iconHelper(rightIcon)}';
    right: -200px;
  }

  &:hover:not(:disabled)::before {
    left: 10px;
  }

  &:hover:not(:disabled)::after {
    right: 10px;
  }
`;

Button.displayName = 'Button';

Button.defaultProps = {
  iconHelper: icons,
};

export default Button;
