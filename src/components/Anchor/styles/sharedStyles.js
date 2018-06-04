import { css } from 'styled-components';
import get from 'extensions/themeGet';

const focusAfterStyles = css`
  height: 100%;
  width: calc(100% + 0.6em);
  left: -0.3em;
  opacity: 0.125;
  transition: height 0.15s ease, width 0.15s ease, left 0.15s ease,
    opacity 0s ease;
`;

const color = get('colors.primary.alternate');
export const base = css`
  color: ${color};
  font-family: ${get('fonts.brand')};

  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
  height: auto;
  display: inline-block;
  margin: ${props => props.spacing};

  &:focus {
    outline: none;
  }

  &:active {
    color: ${get('colors.primary.default')};
  }

  &::after {
    content: '';
    background: ${color};
    border-radius: 2em;
    height: 1px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: height 0.15s ease, width 0.15s ease, left 0.15s ease,
      opacity 0.25s ease;

    ${({ appearFocused }) => (appearFocused ? focusAfterStyles : '')};
  }

  &:hover::after,
  &:focus::after {
    ${focusAfterStyles};
  }
`;

const dangerColor = get('colors.negative.default');
export const negative = css`
  color: ${dangerColor};

  &:active {
    color: ${get('colors.negative.dark')};
  }

  &::after {
    background: ${dangerColor};
  }
`;

const positiveColor = get('colors.positive.default');
export const positive = css`
  color: ${positiveColor};

  &:active {
    color: ${get('colors.positive.dark')};
  }

  &::after {
    background: ${positiveColor};
  }
`;

const darkColor = get('colors.primary.dark');
export const dark = css`
  color: ${darkColor};

  &:active {
    color: ${get('colors.primary.dark')};
  }

  &::after {
    background: ${darkColor};
  }
`;

const invertedColor = get('colors.text.inverted');
export const inverted = css`
  color: ${invertedColor};

  &:active {
    color: ${get('colors.text.inverted')};
  }

  &::after {
    background: ${invertedColor};
  }
`;
