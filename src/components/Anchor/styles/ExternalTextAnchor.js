import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import icons from 'components/Icon/icons';

const color = get('colors.primary.alternate');

const newTabIconStyles = css`
  &::before {
    content: "${icons('openInWindow')}";
    font-family: ${get('fonts.icon')};
    opacity: 0;
    background: ${get('colors.background.default')};
    position: absolute;
    right: 0;
    z-index: 1;
    transition: right 0.3s ease, opacity 0.2s ease;
  }

  &:hover::before {
    right: -1.5em;
    opacity: 1;
    transition: right 0.3s ease, opacity 0.2s ease 0.1s;
  }
`;

const ExternalTextAnchor = styled.a`
  color: ${color};
  font-family: ${get('fonts.brand')};

  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
  height: auto;
  margin: auto;

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
    bottom: -0.1em;
    left: 0;
    transition: height 0.15s ease, width 0.15s ease, left 0.15s ease,
      opacity 0.25s ease;
  }

  &:hover::after,
  &:focus::after {
    height: calc(100% + 0.2em);
    width: calc(100% + 0.6em);
    left: -0.3em;
    opacity: 0.125;
    transition: height 0.15s ease, width 0.15s ease, left 0.15s ease,
      opacity 0s ease;
  }

  ${({ newTab }) => (newTab ? newTabIconStyles : '')};
`;

const dangerColor = get('colors.negative.default');

ExternalTextAnchor.Danger = ExternalTextAnchor.Negative = ExternalTextAnchor.extend`
  color: ${dangerColor};

  &:active {
    color: ${get('colors.negative.dark')};
  }

  &::after {
    background: ${dangerColor};
  }
`;

const positiveColor = get('colors.positive.default');

ExternalTextAnchor.Positive = ExternalTextAnchor.extend`
  color: ${positiveColor};

  &:active {
    color: ${get('colors.positive.dark')};
  }

  &::after {
    background: ${positiveColor};
  }
`;

const darkColor = get('colors.primary.dark');

ExternalTextAnchor.Dark = ExternalTextAnchor.extend`
  color: ${darkColor};

  &:active {
    color: ${get('colors.primary.dark')};
  }

  &::after {
    background: ${darkColor};
  }
`;

const invertedColor = get('colors.text.inverted');

ExternalTextAnchor.Inverted = ExternalTextAnchor.extend`
  color: ${invertedColor};

  &:active {
    color: ${get('colors.text.inverted')};
  }

  &::after {
    background: ${invertedColor};
  }
`;

export default ExternalTextAnchor;
