import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, ShowMore as ShowMoreComponent } from './components';
import Item from './Item';

/**
 * Lays out items vertically in a sidebar. Does not handle scrolling.
 * Use [SidebarList.Item](/#!/SidebarListItem) as the child elements.
 *
 * You can show selected state by either passing an `active` prop to the correct item
 * or linking your list to your router so that each item is a unique route. If you go that direction,
 * you can wrap the items with `<Route/>` components from React Router, and have them utilize RR's
 * built-in route matching logic to determine rendering appearance.
 */
export default class SidebarList extends React.PureComponent {
  static propTypes = {
    /**
     * List items.
     */
    children: PropTypes.node.isRequired,
    /**
     * Adds a class name to the containing list element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the containing list element.
     */
    id: PropTypes.string,
    /**
     * A compoennt to render the container around the list
     */
    Container: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    id: null,
    Container: Container,
  };

  static ShowMore = ShowMoreComponent;
  static Item = Item;

  render() {
    const { className, id, Container, children, ...rest } = this.props;
    return (
      <Container className={className} id={id} {...rest}>
        {children}
      </Container>
    );
  }
}
