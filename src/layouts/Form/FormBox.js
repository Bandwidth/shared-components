import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const FormBoxImpl = styled.div.withConfig({ displayName: 'FormBox' })`
  background: ${({ theme }) => theme.form.bg};
  border: ${({ theme }) => theme.form.border};
  padding: ${({ theme }) => theme.padding.large};
  max-width: 70vw;
  width: 100%;
  margin: auto;
`;

const FormBox = ({ children, ...rest }) => (
  <FormBoxImpl {...rest}>{children}</FormBoxImpl>
);

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

export default sharedComponent()(FormBox);
