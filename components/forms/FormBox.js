import styled from 'styled-components';

const FormBox = styled.div.withConfig({ displayName: 'FormBox' })`
  background: ${({ theme }) => theme.form.bg};
  border: ${({ theme }) => theme.form.border};
  padding: ${({ theme }) => theme.form.padding};
  max-width: 70vw;
  width: 100%;
  margin: auto;
`;

FormBox.usage = `
# FormBox

FormBox is the containing box around a standalone form. It more or less just applies a border to make the form stand out from its surroundings.

\`\`\`
<FormBox>
  <Form>
    <TextInput />
  </Form>
</FormBox>
\`\`\`
`;

export default FormBox;