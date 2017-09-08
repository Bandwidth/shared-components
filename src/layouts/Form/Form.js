import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';
import { Container as AccordionContainer } from '../../components/Accordion/Accordion';
import FormColumn from './FormColumn';
import Flow from '../Flow/Flow';

const Form = styled.form.withConfig({ displayName: 'Form' })`
  background: 'transparent';
  color: inherit;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;

  & > ${FormColumn.Class} {
    flex: 0 0 50%;
  }

  & > ${AccordionContainer} {
    flex: 1 0 100%;
  }

  &:invalid button[type="submit"] {
    background: ${({ theme }) => theme.button.disabledBG};
    color: ${({ theme }) => theme.button.disabledFG};
    border: ${({ theme }) => theme.button.disabledBorder};
    cursor: default;
    box-shadow: none;
  }
  &:invalid button[type="submit"]::after {
    left: 160%;
  }
  &:invalid button[type="submit"]::before {
    left: -60%;
  }

  & > ${Flow.Class} {
    margin: 0;
    width: 100%;
  }
`;

Form.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

Form.defaultProps = {
  id: null,
  className: null,
};

export default sharedComponent(`
# Form

Form is a smart layout component. It tries its best to lay out any Input components you place within it in a reasonable way. There are two ways to put Inputs in forms:

1. 'Loose' inputs, placed directly in the form. The form will attempt to size these inputs to half the total width of the form.

2. FieldGroups, which take up a full row in the form, and can align / size their child inputs however they want using FlexBox.

Regardless of whether Inputs are 'loose' or inside a FieldGroup, the Form will try to put the proper padding between them and ensure that the outside edges are not padded.

\`\`\`
<FormBox>
  <Form>
    <TextInput />
    <TextInput />
    <FieldGroup>
      <ButtonInput />
      <LinkInput />
    </FieldGroup>
  </Form>
</FormBox>
\`\`\`
`, { Column: FormColumn })(Form);
