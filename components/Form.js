import styled from 'styled-components';
import { FieldGroup, Button } from './inputs';
import { Container as InputWrapperContainer } from './inputs/InputWrapper';

const Form = styled.form.withConfig({ displayName: 'Form' })`
  padding: ${({ theme }) => theme.form.padding};
  background: 'transparent';
  color: inherit;
  display: flex;
  flex-direction: column;

  & > ${FieldGroup} {
    width: 100%;
  }

  & > ${InputWrapperContainer} {
    margin: ${({ theme }) => theme.input.margin};
  }
`;

Form.usage = `
# Form

Form doesn't apply much visual styling, but it does include padding and a flexbox model to help arrange inputs.

\`\`\`
<FormBox>
  <Form>
    <TextInput />
  </Form>
</FormBox>
\`\`\`
`;

export default Form;