import { css } from 'styled-components';
import get from 'extensions/themeGet';

const focusAfterStyles = css`
  height: calc(100% + 0.2em);
  width: calc(100% + 0.6em);
  left: -0.3em;
  opacity: 0.125;
  transition: height 0.15s ease, width 0.15s ease, left 0.15s ease,
    opacity 0s ease;
`;

const color = get('colors.primary.alternate');
const disabledColor = get('colors.text.default');
export const base = css`
  color: ${({ disabled }) => (disabled ? disabledColor : color)};
  font-family: ${get('fonts.brand')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
  height: auto;
  margin: auto;

  &:focus {
    outline: none;
  }

  &:active {
    color: ${({ disabled }) =>
      disabled ? disabledColor : get('colors.primary.default')};
  }

  ${({ disabled, appearFocused }) =>
    disabled
      ? ''
      : `
    &::after {
      content: '';
      background: ${color};
      border-radius: 2em;
      height: 1px;
      width: 100%;
      position: absolute;
      bottom: -0.1em;
      left: 0;
      transition: height 0.15s ease, width 0.15s ease, left 0.15s ease,
      opacity 0.25s ease;

      ${appearFocused ? focusAfterStyles : ''};
    }
   
    &:hover::after,
    &:focus::after {
      ${focusAfterStyles};
    }`};
`;

const dangerColor = get('colors.negative.default');
export const negative = css`
  color: ${({ disabled }) => (disabled ? disabledColor : dangerColor)};

  &:active {
    color: ${({ disabled }) => (disabled ? '' : get('colors.negative.dark'))};
  }

  &::after {
    background: ${({ disabled }) => (disabled ? '' : dangerColor)};
  }
`;

const positiveColor = get('colors.positive.default');
export const positive = css`
  color: ${({ disabled }) => (disabled ? disabledColor : positiveColor)};

  &:active {
    color: ${({ disabled }) => (disabled ? '' : get('colors.positive.dark'))};
  }

  &::after {
    background: ${({ disabled }) => (disabled ? '' : positiveColor)};
  }
`;

const darkColor = get('colors.primary.dark');
export const dark = css`
  color: ${({ disabled }) => (disabled ? disabledColor : darkColor)};

  &:active {
    color: ${({ disabled }) => (disabled ? '' : get('colors.primary.dark'))};
  }

  &::after {
    background: ${({ disabled }) => (disabled ? '' : darkColor)};
  }
`;

const invertedColor = get('colors.text.inverted');
export const inverted = css`
  color: ${({ disabled }) => (disabled ? disabledColor : invertedColor)};

  &:active {
    color: ${({ disabled }) => (disabled ? '' : get('colors.text.inverted'))};
  }

  &::after {
    background: ${({ disabled }) => (disabled ? '' : invertedColor)};
  }
`;
