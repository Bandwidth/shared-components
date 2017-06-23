import styled from 'styled-components';
import arrowImage from './arrow.png';

const Select = styled.select`
  padding: ${({ theme }) => theme.padding.medium};
  border: ${({ theme }) => theme.input.border};
  border-radius: 0;
  width: 100%;
  color: ${({ theme }) => theme.input.fg};
  font-family: ${({ theme }) => theme.input.fontFamily};
  font-size: ${({ theme }) => theme.input.fontSize};
  letter-spacing: ${({ theme }) => theme.input.letterSpacing};
  line-height: ${({ theme }) => theme.input.lineHeight};
  cursor: pointer;
  box-shadow: none;
  background-color: ${({ theme }) => theme.input.bg};
  appearance: none;
  position: relative;

  background-image: url(${arrowImage});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 35px;

  transition: 0.2s ease all;

  &:focus {
    box-shadow: inset 0 -5px 0 ${({ theme }) => theme.input.accentValid};
    border-color: ${({ theme }) => theme.input.focusedBorder};
    outline: none;
  }

  &:disabled {
    background: ${({ theme }) => theme.input.disabledBG};
    color: ${({ theme }) => theme.input.disabledFG};
  }
`;

Select.usage = `
A dropdown input which lets you pick from a list of provided items. Supports default input-style props:

* \`input\`: supplied by Redux Form's Field component, you can also specify this manually. Should contain \`value\` and \`onChange\` at least.
* \`label\`: a renderable label to go above the component
* \`helpText\`: some text to be rendered below the component
* \`disabled\`: disables the component
* \`required\`: adds a required mark and HTML field validation
* \`options\`: an array of data
* \`renderOption\`: a function to transform an option item into some text to show. Defaults to \`val => '' + val\`
* \`selectOptionKey\`: a function to transform an option into a **unique** key

\`\`\`
<Select label="Choose:" required helpText="Make a choice!" options={['a', 'b']}>
\`\`\`
`;

export default Select;
