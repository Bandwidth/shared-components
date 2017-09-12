import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';
import { Container as AccordionContainer } from '../../components/Accordion/Accordion';
import FormColumn from './FormColumn';
import Flow from '../Flow/Flow';

const FormImpl = styled.form.withConfig({ displayName: 'Form' })`
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
    background: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.black};
    border: ${({ theme }) => theme.colors.disabled};
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

export const Form = ({ children, ...rest }) => (
  <FormImpl {...rest}>{children}</FormImpl>
);

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

export default sharedComponent({ Column: FormColumn })(Form);
