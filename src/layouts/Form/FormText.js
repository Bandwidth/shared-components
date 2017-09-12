import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * DEPRECATED
 */
const FormText = styled.div.withConfig({ displayName: 'FormText' })`
  font-family: ${({ theme }) => theme.form.fontFamily};
  color: ${({ theme }) => theme.form.fg};
  margin: 0;

  & > p, & > b, & > i, & > a {
    margin: 0;
  }
`;

FormText.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

FormText.defaultProps = {
  id: null,
  className: null,
};

FormText.usage = `
# FormText

Use FormText to put some arbitrary text inside a Form and have it layout correctly.
`;

export default FormText;
