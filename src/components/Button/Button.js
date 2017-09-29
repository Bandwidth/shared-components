import React from 'react';
import PropTypes from 'prop-types';
import styled, {ThemeProvider} from 'styled-components';
import icons from '../Icon/icons';
import SubmitButton from './SubmitButton';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('Button', ({ colors, fonts, spacing, shadows }) => ({
    fontSize: '0.8em',
    textDecoration: 'none',
    fontWeight: 700,
    fontFamily: fonts.brand,
    textTransform: 'uppercase',
    background: colors.primary,
    borderColor: colors.primary,
    borderThickness: '1px',
    borderStyle: 'solid',
    color: colors.white,
    borderRadius: '3em',
    padding: '12px 40px',
    display: 'inline-block',
    lineHeight: 'normal',
    whiteSpace: 'nowrap',
    activeBackground: colors.primaryDark,
    activeColor: colors.white,
    activeShadow: shadows.short,
    disabledBackground: colors.disabled,
    disabledColor: colors.black,
    disabledBorderColor: colors.disabled,
  }))
  .addVariant('secondary', ({ colors }) => ({
    borderColor: colors.secondary,
    background: 'transparent',
    color: colors.secondary,
    activeBackground: colors.secondary,
  }))
  .createSelector();

const ButtonImpl = theme.connect(styled.button`
  ${spreadStyles(select)}

  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  -webkit-user-drag: none;
  /* should get auto-prefixed */
  user-select: none;
  box-sizing: border-box;
  transition: all 0.25s ease;
  outline: none;
  position: relative;
  overflow: hidden;

  &:hover:not(:disabled), &:focus {
    background-color: ${select('activeBackground')};
    border-color: ${select('activeBackground')};
    color: ${select('activeColor')};
    box-shadow: ${select('activeShadow')};
  }

  &:disabled {
    background: ${select('disabledBackground')};
    color: ${select('disabledColor')};
    border-width: ${select('borderWidth')};
    border-style: ${select('borderStyle')};
    border-color: ${select('disabledBorderColor')};
    cursor: default;
  }

  &::before, &::after {
    position: absolute;
    height: 100%;
    font-size: 125%;
    color: inherit;
    transition: all 0.3s;
    speak: none;
    font-family: 'Bandwidth';
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
`);

const Button = ({children, ...rest}) => (
  <ButtonImpl {...rest}>{children}</ButtonImpl>
)

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
Button.Secondary = theme.variant('secondary')(Button);
Button.Styled = ButtonImpl;

export default Button;
