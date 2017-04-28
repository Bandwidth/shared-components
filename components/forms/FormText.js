import styled from 'styled-components';

const FormText = styled.div.withConfig({ displayName: 'FormText' })`
  font-family: ${({ theme }) => theme.form.fontFamily};
  color: ${({ theme }) => theme.form.fg};
  margin: 0;

  & > p, & > b, & > i, & > a {
    margin: 0;
  }
`;

FormText.usage = `
# FormText

Use FormText to put some arbitrary text inside a Form and have it layout correctly.
`;

export default FormText;