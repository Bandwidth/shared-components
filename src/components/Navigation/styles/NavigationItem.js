import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import NavigationItemList from './NavigationItemList';
import NavigationItemListStack from './NavigationItemListStack';
import NavigationBar from './NavigationBar';
import { calcTopOffset, calcBottomOffset } from 'extensions/userSpacing';

const hoverOpacityEffects = css`
  &:focus,
  &:active {
    opacity: 0.7;
  }

  &:hover::before {
    opacity: 0.25;
  }

  &:hover,
  &:focus,
  &:active {
    &:before {
      height: 5px;
    }
  }
`;

const NavigationItem = styled.div.withConfig({ displayName: 'NavigationItem' })`
  border: 0;
  padding-bottom: calc(${calcBottomOffset(1.5)} + 20px);
  margin-top: ${calcTopOffset(1.5)};
  line-height: 1.5;
  opacity: 1;
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
  color: inherit;
  font-size: 1em;
  font-weight: 200;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'inherit')};

  &::before {
    content: '';
    opacity: ${({ active }) => (active ? 1 : 0)};
    background: ${get('colors.primary.dark')};
    width: 104%;
    height: ${({ active }) => (active ? '5px' : 0)};
    display: block;
    position: absolute;
    bottom: 0;
    top: auto;
    left: 50%;
    transform: translateX(-50%);
    transition: height 0.2s ease, opacity 0.2s ease;
  }

  ${NavigationBar.Dark} &, ${NavigationBar.Sub.Dark} & {
    &:before {background: ${get('colors.primary.default')}; }
  }

  ${NavigationItemList}:not(:last-child) &,
  ${NavigationItemList.Small}:not(:last-child) & {
    padding-bottom: calc(${calcBottomOffset(1.5)} + 10px);
  }

  /* make items smaller when they're inside a small list */

  ${NavigationItemList.Small} & {
    font-size: 0.8em;
  }

  ${({ active, disabled }) => (!active && !disabled ? hoverOpacityEffects : '')}

  /* for convenience, apply active styles if parent has active class */

  *.active > & {
    &::before {
      opacity: 1;
      height: 5px;
    }

    &:hover::before {
      opacity: 1;
    }
  }
`;

NavigationItem.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,

  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Determines if a navigation item is active or not
   */
  active: PropTypes.bool,
  /**
   * Determines if a navigation item is disabled or not
   */
  disabled: PropTypes.bool,
};

NavigationItem.defaultProps = {
  className: null,
  id: null,
  active: false,
  disabled: false,
};

export default NavigationItem;
