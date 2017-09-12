import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const SidebarLayoutImpl = styled.div.withConfig({ displayName: 'SidebarLayout' })`
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
    background: ${({ theme }) => theme.colors.gutter};
    border-left: 1px solid ${({ theme }) => theme.colors.borderLight};
    margin-left: -1px;
  }
`;

export const SidebarLayout = ({ children, ...rest }) => (
  <SidebarLayoutImpl {...rest}>{children}</SidebarLayoutImpl>
);

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

export default sharedComponent()(SidebarLayout);
