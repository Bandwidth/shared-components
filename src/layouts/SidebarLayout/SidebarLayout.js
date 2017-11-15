import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const SidebarLayout = styled.div.withConfig({ displayName: 'SidebarLayout' })`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin: 0;
  padding: 0;

  & > *:first-child {
    flex: 3;
  }

  & > *:last-child {
    flex: 6;
    background: ${get('colors.gray.light')};
    border-left-width: ${get('thicknesses.normal')};
    border-left-style: solid;
    border-left-color: ${get('colors.border.light')};
    margin-left: -1px;
  }
`;

SidebarLayout.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

SidebarLayout.defaultProps = {
  id: null,
  className: null,
};

/**
 * @component
 */
export default SidebarLayout;
