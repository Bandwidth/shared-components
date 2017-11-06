import React from 'react';
import PropTypes from 'prop-types';
import styled, {ThemeProvider} from 'styled-components';
import icons from '../Icon/icons';
import SubmitButton from './SubmitButton';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('Button', ({ colors, fonts, shadows }) => ({
    fontSize: '0.8em',
    textDecoration: 'none',
    fontWeight: 700,
    fontFamily: fonts.brand,
    textTransform: 'uppercase',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '3em',
    backgrounds: {
      default: colors.primary.default,
      hover: colors.primary.alternate,
      focus: colors.primary.alternate,
      disabled: colors.gray.disabled,
    },
    colors: {
      default: colors.text.inverted,
      hover: colors.text.inverted,
      focus: colors.text.inverted,
      disabled: colors.text.default,
    },
    borderColors: {
      default: colors.primary.default,
      hover: colors.primary.alternate,
      focus: colors.primary.alternate,
      disabled: colors.gray.disabled,
    },
    // these are 2px less than design system values because
    // all buttons in the SCL have a 1px border for consistency
    padding: '11px 38px',
    display: 'inline-block',
    lineHeight: 'normal',
    whiteSpace: 'nowrap',
    hoverShadow: shadows.short,
  }))
  .addVariant('secondary', ({ colors }) => ({
    borderColors: {
      default: colors.primary.dark,
      hover: colors.primary.dark,
    },
    backgrounds: {
      default: 'transparent',
      hover: colors.primary.dark,
    },
    colors: {
      default: colors.primary.dark,
    },
  }))
  .addVariant('danger', ({ colors }) => ({
    borderColors: {
      default: colors.negative.default,
      hover: colors.negative.dark,
      focus: colors.negative.dark,
    },
    backgrounds: {
      default: colors.negative.default,
      hover: colors.negative.dark,
      focus: colors.negative.dark,
    },
  }))
  .addVariant('small', {
    padding: '9px 28px',
    fontSize: '0.6em',
  })
  .addVariant('large', ({ spacing }) => ({
    padding: `${spacing.medium} ${spacing.extraLarge}`,
    fontSize: '0.8em',
  }))
  .createSelector();

const ButtonImpl = theme.connect(styled.button`
  ${spreadStyles(select)}
  background: ${select('backgrounds.default')};
  color: ${select('colors.default')};
  border-color: ${select('borderColors.default')};

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

  &:hover:not(:disabled) {
    background-color: ${select('backgrounds.hover')};
    border-color: ${select('backgrounds.hover')};
    color: ${select('colors.hover')};
    box-shadow: ${select('hoverShadow')};
  }

  &:focus:not(:disabled) {
    background-color: ${select('backgrounds.focus')};
    border-color: ${select('backgrounds.focus')};
    color: ${select('colors.focus')};
  }

  &:disabled {
    background: ${select('backgrounds.disabled')};
    color: ${select('colors.disabled')};
    border-color: ${select('borderColors.disabled')};
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
Button.Small = theme.variant('small')(Button);
Button.Large = theme.variant('large')(Button);
Button.Danger = theme.variant('danger')(Button);
Button.Styled = ButtonImpl.WrappedComponent;

export default Button;
