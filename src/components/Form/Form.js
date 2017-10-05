import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormColumn from './FormColumn';
import FormBox from './FormBox';
import theme from '../../theme';

const select = theme
  .register('Form', {
    background: 'transparent',
    color: 'inherit',
    flexDirection: 'row',
  })
  .createSelector();

const buttonSelect = theme.createSelector('Button');

const FormImpl = styled.form.withConfig({ displayName: 'Form' })`
  background: ${select('background')};
  color: ${select('color')};
  display: flex;
  flex-direction: ${select('flexDirection')};

  & > * {
    flex: 1;
  }

  &:invalid button[type="submit"] {
    background: ${buttonSelect('backgrounds.disabled')};
    color: ${buttonSelect('colors.disabled')};
    border-color: ${buttonSelect('borderColors.disabled')};
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

export const Form = (props) => <Form {...props} />;

Form.propTypes = FormImpl.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

Form.defaultProps = FormImpl.defaultProps = {
  id: null,
  className: null,
};

FormImpl.Column = FormColumn;
FormImpl.Box = FormBox;

export default FormImpl;
