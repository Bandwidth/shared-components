import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const select = theme
  .register('FormColumn', ({ colors, spacing }) => ({
    innerPadding: spacing.large,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.borderLight,
  }))
  .createSelector();

const FormColumnImpl = styled.section`
  padding-left: ${select('innerPadding')};
  padding-right: ${select('innerPadding')};
  border-right: ${select('borderWidth')} ${select('borderStyle')} ${select('borderColor')};

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    border-right: none;
    padding-right: 0;
  }
`;

export const FormColumn = (props) => <FormColumnImpl {...props} />;

FormColumn.propTypes = FormColumnImpl.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

FormColumn.defaultProps = FormColumnImpl.defaultProps = {
  id: null,
  className: null,
};

export default FormColumnImpl;
