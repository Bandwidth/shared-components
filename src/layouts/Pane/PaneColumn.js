import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const PaneColumn = styled.div.withConfig({ displayName: 'PaneColumn' })`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;

  & > * {
    flex: 1 0 auto;
    border-bottom: ${get('thicknesses.normal')} solid ${get('colors.border.light')};
  }

  & > *:last-child {
    border-bottom: none;
  }
`;

PaneColumn.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

PaneColumn.defaultProps = {
  id: null,
  className: null,
};

/**
 * @component
 */
export default PaneColumn;
