import styled from 'styled-components';

export const HiddenInput = styled.input`
  margin: -9999px;

  &:focus + label::before {
    box-shadow: ${({ theme }) => theme.toggle.focusShadow};
  }
`;

const Toggle = styled.label`
  cursor: pointer;
  position: relative;
  top: 50%;
  padding: ${({ theme }) => theme.toggle.padding};
  float: left;
  user-select: none;
  transition: all 0.2s ease;
  line-height: ${({ theme }) => theme.toggle.height};
  font-family: ${({ theme }) => theme.toggle.fontFamily};
  font-weight: ${({ theme }) => theme.toggle.fontWeight};
  transform: translateY(-50%);

  &::before {
    content: '';
    background: ${({ theme, active }) => active ? theme.toggle.activeBG : theme.toggle.bg};
    border: ${({ theme }) => theme.toggle.border};
    border-radius: 2em;
    width: ${({ theme }) => theme.toggle.width};
    height: ${({ theme }) => theme.toggle.height};
    cursor: pointer;
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease;
  }

  &::after {
    content: '';
    background: ${({ theme, active }) => active ? theme.toggle.activeFG : theme.toggle.fg};
    border: ${({ theme }) => theme.toggle.border};
    border-radius: 2em;
    width: ${({ theme }) => theme.toggle.height};
    height: ${({ theme }) => theme.toggle.height};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${({ active }) => active ? '1.7em' : 0};
    display: block;
    transition: all 0.2s ease;
  }

  &:hover::before,
  &:hover::after {
    border: ${({ theme }) => theme.toggle.hoverBorder};
  }
  &:hover::before {
    background: ${({ theme, active }) => active ? theme.toggle.hoverBG : theme.toggle.bg};
  }

  &:disabled::before, &:disabled::after {
    border: ${({ theme }) => theme.toggle.disabledBorder};
    background: ${({ theme }) => theme.toggle.disabledBG};
  }
`;

Toggle.usage = `
A simple toggle input. The default export is the label to use.

Also exports \`HiddenInput\`, which is the actual <input> element.

It's probably easier to use \`fields/ToggleField\`, which assembles these for you.

\`\`\`
<HiddenInput value={true} id="a" />
<Toggle for="a" />
\`\`\`
`;

Toggle.Input = HiddenInput;
export default Toggle;
