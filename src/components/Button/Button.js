import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icons from '../Icon/icons';
import SubmitButton from './SubmitButton';
import get from 'extensions/themeGet';

/**
 * NOTE: all paddings in button are adjusted to accomodate
 * border widths on both sides. If border widths are changed,
 * also change padding to compensate!
 *
 * Vertical paddings are also displaced to accomodate text cap and base lines.
 * Basically, 1px is added to the top, 1px subtracted from the bottom.
 */

const Button = styled.button`
  font-size: 0.8rem;
  text-decoration: none;
  font-weight: 700;
  font-family: var(--fonts-brand);
  text-transform: uppercase;

  border-width: var(--thicknesses-normal);
  border-style: solid;
  border-radius: 3em;
  border-color: var(--colors-primary-default);

  color: var(--colors-text-inverted);
  background: var(--colors-primary-default);

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
    background: var(--colors-primary-dark);
    border-color: var(--colors-primary-dark);
    box-shadow: var(--shadows-short);
  }

  &:disabled {
    background: var(--colors-background-disabled);
    color: var(--colors-text-disabled);
    border-color: var(--colors-background-disabled);
    cursor: default;
    opacity: 0.5;
  }

  &::before, &::after {
    position: absolute;
    height: 100%;
    color: inherit;
    transition: all 0.3s;
    speak: none;
    font-family: var(--fonts-icon);
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
  color: var(--colors-primary-dark);
  border-color: var(--colors-primary-dark);
  background: transparent;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: var(--colors-text-inverted);
    background: var(--colors-primary-dark);
    border-color: var(--colors-primary-dark);
  }
`;

Button.Small = styled(Button)`
  padding: 10px 28px 9px 28px;
  font-size: 0.6rem;
`;

Button.Large = styled(Button)`
  padding: 14px 38px 12px 38px;
  font-size: 0.9rem;
`;

Button.Danger = styled(Button)`
  border-color: var(--colors-negative-default);
  background: var(--colors-negative-default);

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background: var(--colors-negative-dark);
    border-color: var(--colors-negative-dark);
  }
`;

/**
 * @component
 */
export default Button;
