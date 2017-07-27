import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import sharedComponent from '../../sharedComponent';
import NewBadge from '../NewBadge';

const ListItemContainer = styled.li`
  background: ${({ active, theme }) =>
    active ? theme.colors.gutter : theme.colors.white};
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.black};
  padding: ${({ theme }) => `${theme.padding.medium} ${theme.padding.large}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-right: 1px solid
    ${({ theme, active }) =>
      active ? theme.colors.gutter : theme.colors.borderLight};
  position: relative;
  overflow-x: visible;
`;

const ListLabel = styled.h3`
  text-transform: ${({ theme }) => theme.listItem.textTransform};
  font-weight: ${({ theme }) => theme.listItem.fontWeight};
  margin: 0;
`;

const ListDetails = styled.div``;

export class SidebarListItem extends React.Component {
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
  };

  static defaultProps = {
    label: null,
    details: null,
    active: false,
    isNew: false,
    className: null,
    id: null,
  };

  render() {
    const { label, details, active, isNew, id, className } = this.props;

    return (
      <ListItemContainer active={active} className={className} id={id}>
        <ListLabel>
          {isNew ? <NewBadge /> : null}
          {label}
        </ListLabel>
        <ListDetails>
          {details}
        </ListDetails>
      </ListItemContainer>
    );
  }
}

export default sharedComponent({
  Container: ListItemContainer,
  Label: ListLabel,
  Details: ListDetails
})(SidebarListItem);
