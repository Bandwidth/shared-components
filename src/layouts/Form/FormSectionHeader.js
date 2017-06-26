import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormSectionHeader = styled.h2.withConfig({ displayName: 'FormSectionHeader' })`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.17em;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.brand};
  text-transform: uppercase;
`;

FormSectionHeader.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

FormSectionHeader.defaultProps = {
  id: null,
  className: null,
};

FormSectionHeader.usage = `
# FormSectionHeader

Like a subheader for sections of a form.
`;

export default FormSectionHeader;
