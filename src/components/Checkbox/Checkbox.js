import styled, { css } from 'styled-components';
import icons from '../Icon/icons';

const SIZE = '22px';

export const HiddenInput = styled.input`
  margin-left: -9999px;

  &:focus + label::after {
    box-shadow: ${({ theme }) => theme.shadows.focusOutline};
  }
`;

const Checkbox = styled.label`
  cursor: pointer;
  position: relative;
  top: 50%;
  font-size: 14px;
  padding: ${({ theme }) => theme.checkbox.labelPadding};
  user-select: none;
  float: left;
  font-size: ${({ theme }) => theme.label.fontSize};
  font-weight: ${({ theme }) => theme.label.fontWeight};
  letter-spacing: ${({ theme }) => theme.label.letterSpacing};
  color: ${({ theme }) => theme.label.fg};
  transform: translateY(-50%);

  /* the check */
  &::before {
    content: ${({ active }) => active ? `"${icons('checkmark')}"` : '""'};
    color: ${({ theme }) => theme.checkbox.checkFG};
    font-family: 'Bandwidth';
    font-size: 1em;
    display: block;
    position: absolute;
    top: 50%;
    left: calc(${SIZE} / 2);
    transform: translate(-50%, -48%);
    z-index: 1;
  }

  /* the box */
  &::after {
    content: "";
    background: ${({ theme, active }) => active ? theme.checkbox.fullBG : theme.checkbox.emptyBG};
    border: ${({ theme }) => theme.checkbox.border};
    border-radius: 0.2em;
    width: ${SIZE};
    height: ${SIZE};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: all 0.2s ease;
  }

  ${({ disabled, theme }) =>
    disabled ?
      css`
        opacity: ${theme.checkbox.disabledOpacity};
        &::before { opacity: ${theme.checkbox.disabledOpacity}; }
      ` :
      ''
  }
`;

Checkbox.usage = `
A simple checkbox input. The default export is the label to use.

Also exports \`HiddenInput\`, which is the actual <input> element.

It's probably easier to use \`fields/CheckboxField\`, which assembles these for you.

\`\`\`
<HiddenInput value={true} id="a" />
<Checkbox for="a" />
\`\`\`
`;

Checkbox.Input = HiddenInput;
export default Checkbox;
