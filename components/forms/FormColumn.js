import styled from 'styled-components';

const FormColumn = styled.section`
  padding: 0 15px;
  border-right: ${({ theme }) => theme.formColumn.border};

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    border-right: none;
    padding-right: 0;
  }
`;

FormColumn.usage = `
# FormColumn

Sometimes forms are split into vertical columns. Very rarely, but we still have a component for that.

\`\`\`
<Form>
  <FormColumn>
    <Field component={Foo} />
    <FieldGroup> ... </FieldGroup>
  </FormColumn>
  <FormColumn>
    <Field component={Bar} />
    <FieldGroup> ... </FieldGroup>
  </FormColumn>
</Form>
\`\`\`
`;

export default FormColumn;
