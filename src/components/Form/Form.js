import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormColumn from './FormColumn';
import FormBox from './FormBox';
import get from 'extensions/themeGet';

const Form = styled.form.withConfig({ displayName: 'Form' })`
  background: transparent;
  color: inherit;
  display: flex;
  flex-direction: row;

  & > * {
    flex: 1;
  }

  &:invalid button[type="submit"] {
    background: ${get('colors.background.disabled')};
    color: ${get('colors.text.disabled')};
    border-color: ${get('colors.background.disabled')};
    cursor: default;
    box-shadow: none;
  }
  &:invalid button[type="submit"]::after {
    left: 160%;
  }
  &:invalid button[type="submit"]::before {
    left: -60%;
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

Form.Column = FormColumn;
Form.Box = FormBox;

/**
 * @component
 */
export default Form;
