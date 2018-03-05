import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icons from '../Icon/icons';
import SubmitButton from './SubmitButton';
import get from 'extensions/themeGet';

const Button = styled.button`
  font-size: 0.8em;
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

  /* 2px less than design system values since we always render a 1px border */
  padding: 11px 38px;
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
    content: '${({ leftIcon, iconHelper }) => iconHelper(leftIcon)}';
    left: -200px;
  }

  &::after {
    content: '${({ rightIcon, iconHelper }) => iconHelper(rightIcon)}';
    right: -200px;
  }

  &:hover:not(:disabled)::before {
    left: 10px;
  }

  &:hover:not(:disabled)::after {
    right: 10px;
  }
`;

Button.propTypes = {
  /**
   * An icon name for an icon to pop in from the left side of the button on hover.
   */
  leftIcon: PropTypes.string,
  /**
   * An icon name for an icon to pop in from the right side of the button on hover.
   */
  rightIcon: PropTypes.string,
  /**
   * Use this to override the icon provider function (advanced). An icon provider function takes an icon name and
   * provides a unicode character to render.
   */
  iconHelper: PropTypes.func,
  /**
   * A class name to add to the button element.
   */
  className: PropTypes.string,
  /**
   * An id to add to the button element.
   */
  id: PropTypes.string,
};

Button.defaultProps = {
  leftIcon: null,
  rightIcon: null,
  iconHelper: icons,
  className: null,
  id: null,
};

Button.Submit = SubmitButton;

Button.Secondary = styled(Button)`
  color: ${get('colors.primary.dark')};
  border-color: ${get('colors.primary.dark')};
  background: transparent;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: ${get('colors.text.inverted')};
    background: ${get('colors.primary.dark')};
    border-color: ${get('colors.primary.dark')};
  }
`;

Button.Small = styled(Button)`
  padding: 9px 28px;
  font-size: 0.6em;
`;

Button.Large = styled(Button)`
  padding: 13px 58px;
  font-size: 0.9em;
`;

Button.Danger = styled(Button)`
  border-color: ${get('colors.negative.default')};
  background: ${get('colors.negative.default')};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background: ${get('colors.negative.dark')};
    border-color: ${get('colors.negative.dark')};
  }
`;

/**
 * @component
 */
export default Button;
