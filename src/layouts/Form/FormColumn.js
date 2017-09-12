import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const FormColumnImpl = styled.section`
  padding: 0 ${({ theme }) => theme.spacing.large};
  border-right: 1px solid ${({ theme }) => theme.colors.borderLight};

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    border-right: none;
    padding-right: 0;
  }
`;

const FormColumn = ({ children, ...rest }) => (
  <FormColumnImpl {...rest}>{children}</FormColumnImpl>
);

FormColumn.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

FormColumn.defaultProps = {
  id: null,
  className: null,
};

export default sharedComponent()(FormColumn);
