import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Container as FieldWrapperContainer } from './FieldWrapper';

/**
 * DEPRECATED: prefer FlexFields
 */
const ActionFields = styled.div`
  display: flex;
  flex-direction: row;
  ${({ align }) => {
    switch(align) {
      case 'right':
        return 'justify-content: flex-end;';
      case 'left':
        return 'justify-content: flex-end; flex-direction: row-reverse;';
      case 'center':
        return 'justify-content: center;';
      case 'outside':
        return 'justify-content: space-between;';
    }
  }};
  margin-top: ${({ theme }) => theme.form.elementVerticalSpacing / 2}px;
  margin-bottom: ${({ theme }) => theme.form.elementVerticalSpacing / 2}px;
  flex: 1 0 100%;

  & > ${FieldWrapperContainer} {
    margin: auto ${({ theme }) => theme.form.elementHorizontalSpacing / 2}px;
  }
  & > ${FieldWrapperContainer}:last-child {
    margin-${({ align }) => align}: 0;
  }
`;

ActionFields.propTypes = {
  /**
   * Indicates how the fields should align.
   */
  align: PropTypes.oneOf(['right', 'left', 'center', 'outside']),
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
}

ActionFields.defaultProps = {
  align: 'right',
  className: null,
  id: null,
};

ActionFields.usage = `
# ActionFields

ActionFields is a layout container for that last row of buttons and links in a form. You know the one. They're all aligned in a particular way. You could achieve this with some fiddling and a FieldGroup, but why not just include a more convenient component for it?

You can pass \`left|right|center|outside\` to the \`'align'\` prop to switch the alignment.

Alignment \`'left'\` will reverse the order of elements, so you can switch easily between left and right.

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
