import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const select = theme
  .register('FormBox', ({ colors, spacing }) => ({
    background: colors.white,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.border,
    padding: spacing.large,
  }))
  .createSelector();

const FormBoxImpl = theme.connect(styled.div.withConfig({ displayName: 'FormBox' })`
  background: ${select('background')};
  border: ${select('borderWidth')} ${select('borderStyle')} ${select('borderColor')};
  padding: ${select('padding')};
`);

export const FormBox = (props) => <FormBoxImpl {...props} />;

FormBox.propTypes = FormBoxImpl.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

FormBox.propTypes = FormBoxImpl.defaultProps = {
  id: null,
  className: null,
};

export default FormBoxImpl;
