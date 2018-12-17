import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ItemContainer, ItemLabel, ItemDetails } from './components';

/**
 * An element of a [SidebarList](#!/SidebarList).
 */
export default class SidebarListItem extends React.PureComponent {
  static propTypes = {
    /**
     * Content to render inside the item.
     */
    children: PropTypes.node.isRequired,
    /**
     * Renders the item as the one currently selected.
     */
    active: PropTypes.bool,
    /**
     * Adds a class name to the outer item element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the outer item element.
     */
    id: PropTypes.string,
    /**
     * A component for rendering a container of an item
     */
    Container: PropTypes.func,
  };

  static defaultProps = {
    label: null,
    details: null,
    active: false,
    isNew: false,
    className: null,
    id: null,
    Container: ItemContainer,
  };

  static Label = ItemLabel;
  static Details = ItemDetails;

  render() {
    const {
      active,
      isNew,
      id,
      className,
      Container,
      children,
      ...rest
    } = this.props;

    return (
      <Container active={active} className={className} id={id} {...rest}>
        {children}
      </Container>
    );
  }
}
