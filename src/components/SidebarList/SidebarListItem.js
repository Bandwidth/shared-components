import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import NewBadge from '../NewBadge';

const ListItemContainer = styled.li`
  background: ${({ active, theme }) => active ? theme.colors.gutter : theme.colors.white};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.black};
  padding: ${({ theme }) => `${theme.padding.medium} ${theme.padding.large}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-right: 1px solid ${({ theme, active }) => active ? theme.colors.gutter : theme.colors.borderLight};
  position: relative;
  overflow-x: visible;
`;

const ListLabel = styled.h3`
  text-transform: ${({ theme }) => theme.listItem.textTransform};
  font-weight: ${({ theme }) => theme.listItem.fontWeight};
  margin: 0;
`;

const ListDetails = styled.div``;

class SidebarListItem extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    details: PropTypes.node,
    active: PropTypes.bool,
    isNew: PropTypes.bool,
  };

  static defaultProps = {
    label: null,
    details: null,
    active: false,
    isNew: false,
  };

  render() {
    const { label, details, active, isNew } = this.props;

    return (
      <ListItemContainer active={active}>
        <ListLabel>{isNew ? <NewBadge /> : null}{label}</ListLabel>
        <ListDetails>{details}</ListDetails>
      </ListItemContainer>
    );
  }
}

SidebarListItem.usage = `
# SidebarListItem

Renders a list item component. Use it inside a List for optimal effect.

Props:

* \`label\`: the main content
* \`details\`: some extra info to render below the label
* \`active\`: determines whether the item should render as active or not

TODO: refactor this to use Card.

\`\`\`
<SidebarListItem label="hi" active={true} />
\`\`\`
`;

export default SidebarListItem;
