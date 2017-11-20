import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import NavigationItemList from './NavigationItemList';
import NavigationItemListStack from './NavigationItemListStack';
import NavigationBar from './NavigationBar';

const NavigationItem = styled.div.withConfig({ displayName: 'NavigationItem' })`
  border: 0;
  padding: ${get('spacing.large')} 0 ${get('spacing.large')} 0;
  line-height: 1;
  opacity: 1;
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
  color: inherit;
  font-size: 1em;
  font-weight: 200;

  &::before {
    content: '';
    background: ${get('colors.primary.dark')};
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

  /* items that are children of a dark and sub nav have different colors */

  ${NavigationBar.Dark} &, ${NavigationBar.Sub} & {
    &::before {
      background: ${get('colors.primary.default')};
    }

    /* hover state must be repeated for specificity */

    &:hover::before {
      opacity: 0.5;
      height: 5px;
    }
  }

  /* sub nav items use a color for active state as well */

  ${NavigationBar.Sub} & {
    color: ${props =>
      props.active ? get('colors.primary.default')(props) : 'inherit'};
  }

  /* make items smaller when they're inside a small list */

  ${NavigationItemList.Small} & {
    padding: ${get('spacing.large')} 0 0 0;
    margin-bottom: 10px;
    font-size: 0.8em;

    &::before {
      height: ${props => (props.active ? '5px' : 0)};
      top: calc(100% + 10px);
      bottom: auto;
    }

    &:hover::before {
      opacity: 0.5;
      height: 5px;
    }
  }

  /*
    when items are in a stack, but not part of the first list in the stack,
    they get squished down a bit on the top.
  */

  ${NavigationItemListStack} > ${NavigationItemList}:not(:first-child) :not(:only-child) & {
    padding-top: ${get('spacing.medium')};
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
