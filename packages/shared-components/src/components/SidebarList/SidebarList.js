import React from 'react';
import PropTypes from 'prop-types';
import BlobSidebarList from 'skeletons/BlobSidebarList';
import SidebarListShowMore from './styles/SidebarListShowMore';
import SidebarListItem from './SidebarListItem';
import SidebarListContainer from './styles/SidebarListContainer';

/**
 * Lays out items vertically in a sidebar. Does not handle scrolling.
 * Use [SidebarList.Item](/#!/SidebarListItem) as the child elements.
 *
 * You can show selected state by either passing an `active` prop to the correct item
 * or linking your list to your router so that each item is a unique route. If you go that direction,
 * you can wrap the items with `<Route/>` components from React Router, and have them utilize RR's
 * built-in route matching logic to determine rendering appearance.
 */
class SidebarList extends React.PureComponent {
  static propTypes = {
    /**
     * List items.
     */
    children: PropTypes.node.isRequired,
    /**
     * Indicates whether the list should show that it has a next page.
     */
    hasNextPage: PropTypes.bool,
    /**
     * Indicates whether the list should show that it has a previous page.
     */
    hasPreviousPage: PropTypes.bool,
    /**
     * Called when the button to load the next page is clicked.
     */
    onNextPageClicked: PropTypes.func,
    /**
     * Called when the button to load the previous page is clicked.
     */
    onPreviousPageClicked: PropTypes.func,
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
    /**
     * A container that renders a clickable 'show more' area
     */
    ShowMore: PropTypes.func,
  };

  static defaultProps = {
    hasNextPage: false,
    hasPreviousPage: false,
    onNextPageClicked: () => null,
    onPreviousPageClicked: () => null,
    className: null,
    id: null,
    Container: SidebarListContainer,
    ShowMore: SidebarListShowMore,
  };

  renderPrevious = () => {
    const { hasPreviousPage, onPreviousPageClicked, ShowMore } = this.props;
    if (hasPreviousPage) {
      return <ShowMore onClick={onPreviousPageClicked}>Show Previous</ShowMore>;
    }

    return null;
  };

  renderNext = () => {
    const { hasNextPage, onNextPageClicked, ShowMore } = this.props;
    if (hasNextPage) {
      return <ShowMore onClick={onNextPageClicked}>Show Next</ShowMore>;
    }

    return null;
  };

  render() {
    const { Container, children, ...rest } = this.props;
    return (
      <Container {...rest}>
        {this.renderPrevious()}
        {children}
        {this.renderNext()}
      </Container>
    );
  }
}

SidebarList.Item = SidebarListItem;
SidebarList.Skeleton = BlobSidebarList;
export default SidebarList;
