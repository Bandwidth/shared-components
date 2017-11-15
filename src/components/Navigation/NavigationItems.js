import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import Anchor from '../Anchor';
import NavigationItem from './styles/NavigationItem';
import NavigationItemList from './styles/NavigationItemList';

export const linksPropType = PropTypes.arrayOf(PropTypes.shape({
  to: PropTypes.string,
  onClick: PropTypes.func,
  content: PropTypes.node.isRequired,
  exact: PropTypes.bool,
  newTab: PropTypes.bool,
}));

const NavigationItems = ({ links, className, id, List, Item }) => (
  <List id={id} className={className}>
    {links.map((link) => (
      <Anchor
        key={`${link.content}_${link.to}`}
        to={link.to}
        onClick={link.onClick}
        exact={link.exact}
        newTab={link.newTab}
      >
        <Item>{link.content}</Item>
      </Anchor>
    ))}
  </List>
);

NavigationItems.propTypes = {
  /**
   * Links to render in the list.
   */
  links: linksPropType,
  /**
   * Adds a class name to the link container element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the link container element.
   */
  id: PropTypes.string,
  /**
   * A component to render the list container for the items
   */
  List: PropTypes.func,
  /**
   * A component to render an item
   */
  Item: PropTypes.func,
};
NavigationItems.defaultProps = {
  links: [],
  className: null,
  id: null,
  List: NavigationItemList,
  Item: NavigationItem,
};

NavigationItems.Item = NavigationItem;
NavigationItems.Small = withProps({
  Item: NavigationItem.Small,
})(NavigationItems);
NavigationItems.Dark = withProps({
  Item: NavigationItem.Dark,
})(NavigationItems);
NavigationItems.Small.Dark = withProps({
  Item: NavigationItem.Small.Dark,
})(NavigationItems);
NavigationItems.Dark.Small = NavigationItems.Small.Dark;

export default NavigationItems;
