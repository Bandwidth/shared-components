import React from 'react';
import PropTypes from 'prop-types';
import styled, {ThemeProvider} from 'styled-components';
import sharedComponent from '../../sharedComponent';
import icons from '../Icon/icons';
import SubmitButton from './SubmitButton';
import {secondaryTheme} from '../../theme';

const ButtonImpl = styled.button`
  font-size: ${({ theme }) => theme.button.fontSize};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.button.fontWeight};
  font-family: ${({ theme }) => theme.button.fontFamily};
  text-transform: ${({ theme }) => theme.button.textTransform};

  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 3em;
  padding: ${({ theme }) => theme.button.padding};
  display: inline-block;
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
  position: relative;
  overflow: hidden;

  &:hover:not(:disabled), &:focus {
    background-color: ${({ theme }) => theme.button.activeBG};
    border-color: ${({ theme }) => theme.button.activeBG};
    color: ${({ theme }) => theme.button.activeFG};
    box-shadow: 0 2px 4px ${({ theme }) => theme.shadow.color};
  }

  &:disabled {
    background: ${({ theme }) => theme.button.disabledBG};
    color: ${({ theme }) => theme.button.disabledFG};
    border: ${({ theme }) => theme.button.disabledBorder};
    cursor: default;
  }

  &::before, &::after {
    position: absolute;
    height: 100%;
    font-size: 125%;
    color: ${({ theme }) => theme.button.fg};
    transition: all 0.3s;
    speak: none;
    font-family: 'Bandwidth';
  }

  &:hover::before, &:hover::after {
    color: ${({ theme }) => theme.button.activeFG};
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

Button.Example2 = () => (<ThemeProvider theme={secondaryTheme}>
<Button>Secondary!</Button>
</ThemeProvider>)

Button.Submit = SubmitButton;
Button.Styled = ButtonImpl;

export default sharedComponent({ Submit: SubmitButton })(Button);
