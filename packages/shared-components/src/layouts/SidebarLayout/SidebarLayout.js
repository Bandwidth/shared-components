import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const SidebarLayout = styled.div.withConfig({ displayName: 'SidebarLayout' })`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin: 0;
  padding: 0;

  & > *:${props => (props.right ? 'last-child' : 'first-child')} {
    flex: 3;
  }

  & > *:${props => (props.right ? 'first-child' : 'last-child')} {
    flex: 6;
    background: ${get('colors.gray.light')};
    border-${props => (props.right ? 'right' : 'left')}-width: ${get(
  'thicknesses.normal',
)};
    border-${props => (props.right ? 'right' : 'left')}-style: solid;
    border-${props => (props.right ? 'right' : 'left')}-color: ${get(
  'colors.border.light',
)};
    margin-${props => (props.right ? 'right' : 'left')}: -1px;
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
  /**
   * Sidebar is put on the right side instead of left.
   */
  right: PropTypes.bool,
};

SidebarLayout.defaultProps = {
  id: null,
  className: null,
  right: false,
};

/**
 * @component
 */
export default SidebarLayout;
