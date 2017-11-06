import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import NewBadge from '../NewBadge';
import theme from '../../theme';

const select = theme
  .register('SidebarListItem', ({ colors, spacing }) => ({
    background: colors.background.default,
    activeBackground: colors.gray.light,
    color: colors.text.default,
    activeColor: colors.primary.default,
    padding: `${spacing.medium} ${spacing.large}`,
    borderColor: colors.gray.borderLight,
    activeBorderColor: colors.gray.light,
    borderWidth: '1px',
    labelTextTransform: 'uppercase',
    labelFontWeight: 'bold',
  }))
  .createSelector();

const ListItemContainer = theme.connect(styled.li`
  background: ${(props) => props.active ? select('activeBackground')(props) : select('background')(props)};
  color: ${(props) => props.active ? select('activeColor')(props) : select('color')(props)};
  padding: ${select('padding')};
  border-bottom: ${select('borderWidth')} solid ${select('borderColor')};
  border-right: ${select('borderWidth')} solid ${(props) =>
    props.active ?
      select('activeBorderColor')(props) :
      select('borderColor')(props)
  };
  position: relative;
  overflow-x: visible;
`, { pure: false });

const ListLabel = theme.connect(styled.h3`
  text-transform: ${select('labelTextTransform')};
  font-weight: ${select('labelFontWeight')};
  margin: 0;
`);

const ListDetails = styled.div``;

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
        <ListLabel>{isNew ? <NewBadge /> : null}{label}</ListLabel>
        <ListDetails>{details}</ListDetails>
      </ListItemContainer>
    );
  }
}

SidebarListItem.usage = `
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
