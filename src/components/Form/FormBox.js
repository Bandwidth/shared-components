import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const FormBox = styled.div.withConfig({ displayName: 'FormBox' })`
  background: var(--colors-background-default);
  border-width: var(--thicknesses-normal);
  border-style: solid;
  border-color: var(--colors-border-medium);
  padding: var(--spacing-large);
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

/**
 * @component
 */
export default FormBox;
