import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import NavigationItemList from './NavigationItemList';
import NavigationItemListStack from './NavigationItemListStack';
import NavigationBar from './NavigationBar';
import { calcTopOffset, calcBottomOffset } from 'extensions/userSpacing';

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

  &::before {
    content: '';
    background: var(--nav-color-highlight);
    width: 104%;
    height: ${props => (props.active ? '5px' : 0)};
    display: block;
    position: absolute;
    bottom: 0;
    top: auto;
    left: 50%;
    transform: translateX(-50%);
    transition: height 0.2s ease, opacity 0.2s ease;
  }

  &:hover::before {
    opacity: 0.5;
    height: 5px;
  }
  }

  ${NavigationItemList}:not(:last-child) & {
    padding-bottom: calc(${calcBottomOffset(1.5)} + 10px);
  }

  /* make items smaller when they're inside a small list */

  ${NavigationItemList.Small} & {
    font-size: 0.8em;

    &:hover::before {
      opacity: 0.5;
      height: 5px;
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
};

NavigationItem.defaultProps = {
  className: null,
  id: null,
};

export default NavigationItem;
