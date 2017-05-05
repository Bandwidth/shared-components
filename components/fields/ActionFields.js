import styled from 'styled-components';
import { Container as FieldWrapperContainer } from '../fields/FieldWrapper';

const ActionFields = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ align }) => {
    switch(align) {
      case 'right':
        return 'flex-end';
      case 'left':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'outside':
        return 'space-between';
    }
  }};
  margin-top: ${({ theme }) => theme.form.elementVerticalSpacing / 2}px;
  margin-bottom: ${({ theme }) => theme.form.elementVerticalSpacing / 2}px;
  flex: 1 0 100%;

  & > ${FieldWrapperContainer} {
    margin: auto ${({ theme }) => theme.form.elementHorizontalSpacing / 2}px;
  }
`;

ActionFields.defaultProps = {
  align: 'right',
};

ActionFields.usage = `
# ActionFields

ActionFields is a layout container for that last row of buttons and links in a form. You know the one. They're all aligned in a particular way. You could achieve this with some fiddling and a FieldGroup, but why not just include a more convenient component for it?

You can pass \`left|right|center|outside\` to the \`'align'\` prop to switch the alignment.

\`\`\`
<Form>
  <Field component={TextField} label="name" />
  <ActionFields>
    <LinkField>Cancel</LinkField>
    <ButtonField type="submit">Save</ButtonField>
  </ActionFields>
</Form>
\`\`\`
`;

export default ActionFields;
