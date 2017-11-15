import styled from 'styled-components';
import get from 'extensions/themeGet';

const color = get('colors.primary.alternate');

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
    content: "";
    background: ${color};
    border-radius: 2em;
    height: 1px;
    width: 100%;
    position: absolute;
    bottom: -0.1em;
    left: 0;
    transition:
      height 0.15s ease,
      width 0.15s ease,
      left 0.15s ease,
      opacity 0.25s ease;
  }

  &:hover::after,
  &:focus::after {
    height: calc(100% + 0.2em);
    width: calc(100% + 0.6em);
    left: -0.3em;
    opacity: 0.125;
    transition:
      height 0.15s ease,
      width 0.15s ease,
      left 0.15s ease,
      opacity 0s ease;
  }
`;

const dangerColor = get('colors.negative.default');

ExternalTextAnchor.Danger = ExternalTextAnchor.extend`
  color: ${dangerColor};

  &:active {
    color: ${get('colors.negative.dark')};
  }

  &::after {
    background: ${dangerColor};
  }
`;

export default ExternalTextAnchor;
