import styled from 'styled-components';
import icons from './helpers/icons';

const Button = styled.button`
  font-size: ${({ theme }) => theme.button.fontSize};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.button.fontWeight};
  font-family: ${({ theme }) => theme.button.fontFamily};
  text-transform: ${({ theme }) => theme.button.textTransform};

  background: ${({ theme }) => theme.button.bg};
  border: ${({ theme }) => theme.button.border};
  color: ${({ theme }) => theme.button.fg};
  border-radius: 3em;
  margin: ${({ theme }) => theme.button.margin};
  padding: ${({ theme }) => theme.button.padding};
  width: auto;
  height: auto;
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
    left: -60%;
  }

  &::after {
    content: '${({ rightIcon, iconHelper }) => iconHelper(rightIcon)}';
    left: 160%;
  }

  &:hover:not(:disabled)::before {
    left: 8%;
  }

  &:hover:not(:disabled)::after {
    left: 80%;
  }
`;

Button.defaultProps = {
  leftIcon: null,
  rightIcon: null,
  iconHelper: icons,
};

export default Button;
