import React from 'react';
import PropTypes from 'prop-types';
import NewBadge from '../NewBadge';
import Blob from 'skeletons/Blob';
import PulseGroup from 'skeletons/PulseGroup';
import SidebarListItemContainer from './styles/SidebarListItemContainer';
import SidebarListItemLabel from './styles/SidebarListItemLabel';
import SidebarListItemDetails from './styles/SidebarListItemDetails';

/**
 * An element of a [SidebarList](/#!/SidebarList).
 * @visibleName SidebarList.Item
 */
class SidebarListItem extends React.PureComponent {
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
      isNew,
      Container,
      Label,
      Details,
      ...rest
    } = this.props;

    return (
      <Container {...rest}>
        <Label>
          {isNew ? <NewBadge /> : null}
          {label}
        </Label>
        <Details>{details}</Details>
      </Container>
    );
  }
}

const PulseContainer = PulseGroup(SidebarListItemContainer);
SidebarListItem.Skeleton = ({ details, ...rest }) => (
  <SidebarListItem
    {...rest}
    Container={PulseContainer}
    Label={() => (
      <Blob
        display="block"
        width={`${Math.random() * 20 + 80}%`}
        height="14px"
      />
    )}
    Details={() =>
      details ? (
        <Blob
          style={{ marginTop: '8px' }}
          display="block"
          width={`${Math.random() * 20 + 80}%`}
          height="14px"
        />
      ) : null
    }
  />
);

export default SidebarListItem;
