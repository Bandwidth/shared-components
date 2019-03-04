import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import icons from 'components/Icon/icons';
import Link from './NativeALinkImplementation';
import dotNotation from 'extensions/dotNotation';

const focusAfterStyles = css`
  height: calc(100% + 0.2em);
  width: calc(100% + 0.6em);
  left: -0.3em;
  opacity: 0.125;
  transition: height 0.15s ease, width 0.15s ease, left 0.15s ease,
    opacity 0s ease;
`;

const focusBeforeStyles = css`
  right: -1.5em;
  opacity: 1;
  transition: right 0.3s ease, opacity 0.2s ease 0.1s;
`;

const newTabIconStyles = css<{ appearFocused: boolean }>`
  &::before {
    content: "${icons('openInWindow')}";
    font-family: ${get('fonts.icon')};
    opacity: 0;
    background: transparent;
    position: absolute;
    right: 0;
    z-index: 1;
    transition: right 0.3s ease, opacity 0.2s ease;

    ${({ appearFocused }) => (appearFocused ? focusBeforeStyles : '')}
  }

  &:focus::before,
  &:hover::before {
    ${focusBeforeStyles}
  }
`;

const iconStyles = css<{ icon: string; children: React.ReactNode }>`
  &::before {
    font-family: ${get('fonts.icon')};
    content: ${({ icon }) => (!!icon ? `"${icons(icon)}"` : '')};
    font-weight: normal;
    margin-right: ${({ icon, children }) =>
      !!icon && !!children ? '0.5em' : '0'};
  }
`;

const color = get('colors.primary.alternate');

const TextLink = styled(Link)`
  color: ${color};
  font-family: ${get('fonts.brand')};

  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
  height: auto;
  margin: auto;
  text-transform: ${({ icon }) => (icon ? 'uppercase' : 'none')};
  font-weight: ${({ icon }) => (icon ? '700' : 'initial')};

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

    ${({ appearFocused, icon }) =>
      appearFocused ? focusAfterStyles : icon ? 'opacity: 0;' : ''};
  }

  &:hover::after,
  &:focus::after {
    ${focusAfterStyles};
  }

  ${({ newTab, icon }) => (!icon && newTab ? newTabIconStyles : '')};

  ${({ icon }) => (icon ? iconStyles : '')};

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${get('colors.text.disabled')} !important;
      pointer-events: none;
    `};
`;

const Negative = styled(TextLink)`
  color: ${get('colors.negative.default')};

  &:active {
    color: ${get('colors.negative.dark')};
  }

  &::after {
    background: ${get('colors.negative.default')};
  }
`;

const Positive = styled(TextLink)`
  color: ${get('colors.positive.default')};

  &:active {
    color: ${get('colors.positive.dark')};
  }

  &::after {
    background: ${get('colors.positive.default')};
  }
`;

const Dark = styled(TextLink)`
  color: ${get('colors.primary.dark')};

  &:active {
    color: ${get('colors.primary.dark')};
  }

  &::after {
    background: ${get('colors.primary.dark')};
  }
`;

const Inverted = styled(TextLink)`
  color: ${get('colors.text.inverted')};

  &:active {
    color: ${get('colors.text.inverted')};
  }

  &::after {
    background: ${get('colors.text.inverted')};
  }
`;

export default dotNotation(TextLink, { Negative, Positive, Dark, Inverted });
