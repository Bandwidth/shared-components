import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import NewBadge from '../NewBadge';
import SidebarListItemContainer from './styles/SidebarListItemContainer';
import SidebarListItemLabel from './styles/SidebarListItemLabel';
import SidebarListItemDetails from './styles/SidebarListItemDetails';

class SidebarListItem extends React.Component {
  static propTypes = {
    /**
     * The main details of the list item.
     */
    label: PropTypes.string,
    /**
     * Extra details to render on another line.
     */
    details: PropTypes.node,
    /**
     * Renders the item as the one currently selected.
     */
    active: PropTypes.bool,
    /**
     * Adds a new badge to the list item.
     */
    isNew: PropTypes.bool,
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
    /**
     * A component for rendering an item label
     */
    Label: PropTypes.func,
    /**
     * A component for rendering the details container in the item
     */
    Details: PropTypes.func,
  };

  static defaultProps = {
    label: null,
    details: null,
    active: false,
    isNew: false,
    className: null,
    id: null,
    Container: SidebarListItemContainer,
    Details: SidebarListItemDetails,
    Label: SidebarListItemLabel,
  };

  render() {
    const {
      label,
      details,
      active,
      isNew,
      id,
      className,
      Container,
      Label,
      Details,
    } = this.props;

    return (
      <Container active={active} className={className} id={id}>
        <Label>
          {isNew ? <NewBadge /> : null}
          {label}
        </Label>
        <Details>{details}</Details>
      </Container>
    );
  }
}

export default SidebarListItem;
