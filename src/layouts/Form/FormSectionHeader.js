import styled from 'styled-components';

const FormSectionHeader = styled.h2.withConfig({ displayName: 'FormSectionHeader' })`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.17em;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.brand};
  text-transform: uppercase;
`;

FormSectionHeader.usage = `
# FormSectionHeader

Like a subheader for sections of a form.
`;

export default FormSectionHeader;
