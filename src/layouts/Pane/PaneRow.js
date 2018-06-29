import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const PaneRow = styled.div.withConfig({ displayName: 'PaneRow' })`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;

  & > * {
    flex: 1;
    border-right: var(--thicknesses-normal) solid var(--colors-border-medium);
    border-left: var(--thicknesses-normal) solid var(--colors-border-medium);
    margin-left: -var(--thicknesses-normal);
  }

  & > *:first-child {
    margin-left: 0;
    border-left: none;
  }

  & > *:last-child {
    border-right: none;
  }
`;

PaneRow.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

PaneRow.defaultProps = {
  id: null,
  className: null,
};

/**
 * @component
 */
export default PaneRow;
