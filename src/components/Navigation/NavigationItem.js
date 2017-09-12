import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const NavigationItemImpl = styled.div.withConfig({ displayName: 'NavigationItem' })`
  border: 0;
  padding: ${({ mods }) => mods.small ? '30px 0 0 0' : '30px 0 30px 0'};
  opacity: 1;
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};

  &::before {
    content: "";
    background: ${({ theme }) => theme.colors.primary};
    width: 104%;
    height: ${({ active }) => (active ? '5px' : 0)};
    display: block;
    position: absolute;
    bottom: ${({ mods }) => mods.small ? 'auto' : '0'};
    top: ${({ mods }) => mods.small ? 'calc(100% + 10px)' : 'auto'};
    left: 50%;
    transform: translateX(-50%);
    transition: height 0.2s ease, opacity 0.2s ease;
  }

  &:hover::before {
    opacity: 0.5;
    height: 5px;
  }
`;

export const NavigationItem = ({ children, ...rest }) => (
  <NavigationItemImpl {...rest}>{children}</NavigationItemImpl>
);

NavigationItem.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

NavigationItem.defaultProps = {
  className: null,
  id: null,
};

export default sharedComponent({ Styled: NavigationItemImpl })(NavigationItem);
