import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const FormColumn = styled.section`
  padding-left: ${get('spacing.large')};
  padding-right: ${get('spacing.large')};
  border-right-width: ${get('thicknesses.normal')};
  border-right-style: solid;
  border-right-color: ${get('colors.border.light')};

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    border-right: none;
    padding-right: 0;
  }
`;

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

/**
 * @component
 */
export default FormColumn;
