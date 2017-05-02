/**
 * This is the box that goes around some common input components, like text boxes.
 * We render this as a shell component so we can wrap it around multiple types of DOM nodes
 */
import styled from 'styled-components';

const InputBox = styled.div.withConfig({ displayName: 'InputBox' })`
  color: ${({ theme }) => theme.input.fg};
  background: ${({ theme }) => theme.input.bg};
  display: flex;
  flex-direction: row;
  width: 100%;

  ${({ disabled, theme }) =>
    disabled ? `
        color: ${theme.input.disabledFG};
        background: ${theme.input.disabledBG};
        border: ${theme.input.disabledBorder};
      ` : ''
  }
`;

InputBox.usage = `
# InputBox

This is the box that goes around some common input components, like text boxes.
We render this as a shell component so we can wrap it around multiple types of DOM nodes.

\`\`\`js
<InputBox><input type="text" /></InputBox>
\`\`\`
`;

export default InputBox;
