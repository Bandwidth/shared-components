import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import {
  PaginationContainer,
  PaginationItem,
  PaginationItemPlaceholder,
} from './styles';

/**
 * A basic Pagination component that allows a user to move between pages. You need to provide the current page and other metadata.
 */
class Pagination extends React.Component {
  static propTypes = {
    /**
     * The number of total pages available.
     */
    pageCount: PropTypes.number,
    /**
     * The currently selected page index.
     */
    currentPage: PropTypes.number,
    /**
     * A callback for page selection. The callback is passed the new selected page index.
     */
    onPageSelected: PropTypes.func.isRequired,
    /**
     * Adds a class name to the pagination container element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the pagination container element.
     */
    id: PropTypes.string,
    /**
     * A component to render a container for the pagination
     */
    Container: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render a single pagination item
     */
    Item: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render a placeholder space for a pagination item
     */
    ItemPlaceholder: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    pageCount: 1,
    currentPage: 0,
    className: null,
    id: null,
    Container: PaginationContainer,
    Item: PaginationItem,
    ItemPlaceholder: PaginationItemPlaceholder,
  };

  createItemClickHandler = index => () => this.props.onPageSelected(index);

  handlePreviousClick = () => {
    const { onPageSelected, currentPage } = this.props;
    if (currentPage === 0) {
      return;
    }
    onPageSelected(currentPage - 1);
  };

  handleNextClick = () => {
    const { onPageSelected, currentPage, pageCount } = this.props;
    if (currentPage === pageCount - 1) {
      return;
    }

    onPageSelected(currentPage + 1);
  };

  renderPrevious = () =>
    this.props.currentPage > 0 ? (
      <this.props.Item
        className="paginationBack"
        onClick={this.handlePreviousClick}
      >
        <Icon name="back" />
      </this.props.Item>
    ) : (
      <this.props.ItemPlaceholder />
    );

  renderNext = () =>
    this.props.currentPage < this.props.pageCount - 1 ? (
      <this.props.Item
        className="paginationNext"
        onClick={this.handleNextClick}
      >
        <Icon name="forward" />
      </this.props.Item>
    ) : (
      <this.props.ItemPlaceholder />
    );

  renderItems = () => {
    const { pageCount, currentPage, Item } = this.props;
    const start = Math.max(0, Math.min(currentPage + 5, pageCount) - 10);
    const end = Math.min(start + 10, pageCount);
    return (
      new Array(pageCount)
        .fill(null)
        // creates an array of incrementing numbers
        .map((_, index) => index)
        .slice(start, end)
        .map(pageNumber => (
          <Item
            key={pageNumber}
            onClick={this.createItemClickHandler(pageNumber)}
            selected={pageNumber === currentPage}
          >
            {pageNumber + 1}
          </Item>
        ))
    );
  };

  render() {
    const { Container, onPageSelected, ...rest } = this.props;
    return (
      <Container {...rest}>
        {this.renderPrevious()}
        {this.renderItems()}
        {this.renderNext()}
      </Container>
    );
  }
}

export default Pagination;
