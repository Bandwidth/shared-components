import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SidebarListShowMore from './styles/SidebarListShowMore';
import SidebarListItem from './SidebarListItem';
import SidebarListContainer from './styles/SidebarListContainer';

class SidebarList extends React.Component {
  static propTypes = {
    /**
     * Optional: indicate which item should be considered active.
     */
    selectedIndex: PropTypes.number,
    /**
     * List items. An 'active' prop will be passed to the item that matches selectedIndex.
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
    selectedIndex: -1,
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

  renderItems = () => {
    const { selectedIndex } = this.props;

    return React.Children.toArray(this.props.children)
      .filter((child) => child !== null)
      .map(
        (listItem, idx) => React.cloneElement(listItem, { key: idx, active: idx === selectedIndex }),
      );
  };

  render() {
    const { className, id, Container } = this.props;
    return (
      <Container className={className} id={id}>
        {this.renderPrevious()}
        {this.renderItems()}
        {this.renderNext()}
      </Container>
    );
  }
}

SidebarList.Item = SidebarListItem;
export default SidebarList;
