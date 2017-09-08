import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const FormBox = styled.div.withConfig({ displayName: 'FormBox' })`
  background: ${({ theme }) => theme.form.bg};
  border: ${({ theme }) => theme.form.border};
  padding: ${({ theme }) => theme.padding.large};
  max-width: 70vw;
  width: 100%;
  margin: auto;
`;

FormBox.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

FormBox.defaultProps = {
  id: null,
  className: null,
};

export default sharedComponent(`
# FormBox

FormBox is the containing box around a standalone form. It more or less just applies a border to make the form stand out from its surroundings.

\`\`\`
<FormBox>
  <Form>
    <TextInput />
  </Form>
</FormBox>
\`\`\`
`)(FormBox);
