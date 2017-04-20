/**
 * This is the box that goes around some common input components, like text boxes.
 * We render this as a shell component so we can wrap it around multiple types of DOM nodes
 */
import styled from 'styled-components';

const InputBox = styled.div`
  color: ${({ theme }) => theme.textInput.fg};
  background: ${({ theme }) => theme.textInput.bg};
  display: flex;
  flex-direction: row;
  margin: ${({ theme }) => theme.textInput.margin};
  width: 100%;

  ${({ disabled, theme }) =>
    disabled ? `
        color: ${theme.textInput.disabledFG};
        background: ${theme.textInput.disabledBG};
        border: ${theme.textInput.disabledBorder};
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