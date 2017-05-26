import styled from 'styled-components';
import icons from '../helpers/icons';

const Button = styled.button`
  font-size: ${({ theme }) => theme.button.fontSize};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.button.fontWeight};
  font-family: ${({ theme }) => theme.button.fontFamily};
  text-transform: ${({ theme }) => theme.button.textTransform};

  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.button.fg};
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

Button.defaultProps = {
  leftIcon: null,
  rightIcon: null,
  iconHelper: icons,
};

Button.usage = `
# Button

The trusty button. Renders a \`<button\` tag with styling. You can add fancy little icons with animations using the \`leftIcon\` and \`rightIcon\` props. These icons should be names from the icons list (see \`components/helpers/icons\`).

Change the color with themes, not on the button itself!

\`\`\`
<Button rightIcon="checkmark">Ok</Button>
\`\`\`

\`\`\`
<ThemeProvider theme={secondaryTheme}>
  <Button>Secondary!</Button>
</ThemeProvider>
\`\`\`
`;

export default Button;
