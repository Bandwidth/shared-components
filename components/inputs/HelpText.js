import styled from 'styled-components';

const HelpText = styled.div`
  color: ${({ theme }) => theme.textInput.helpTextFG};
  font-style: italic;
  font-weight: ${({ theme }) => theme.textInput.helpTextFontWeight};
  padding: ${({ theme }) => theme.textInput.helpTextPadding};
`;

HelpText.usage = `
# HelpText

HelpText goes below an input or interactive component to give the user some information about what
that component might do, or below some information to explain its meaning, context or importance.
`;

export default HelpText;