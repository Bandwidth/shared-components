import * as React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import * as styles from './styles';

interface PaginationProps {
  /**
   * The number of total pages available.
   */
  pageCount: number;
  /**
   * The currently selected page index.
   */
  currentPage: number;
  /**
   * A callback for page selection. The callback is passed the new selected page index.
   */
  onPageSelected?: (index: number) => void;
  /**
   * Adds a class name to the pagination container element.
   */
  className: string;
  /**
   * Adds an id to the pagination container element.
   */
  id: string;
  /**
   * A component to render a container for the pagination
   */
  Container: any;
  /**
   * A component to render a single pagination item
   */
  Item: any;
  /**
   * A component to render a placeholder space for a pagination item
   */
  ItemPlaceholder: any;
}

/**
 * A basic Pagination component that allows a user to move between pages. You need to provide the current page and other metadata.
 */
class Pagination extends React.Component<PaginationProps> {
  static defaultProps = {
    pageCount: 1,
    currentPage: 0,
    className: null,
    id: null,
    Container: styles.Container,
    Item: styles.Item,
    ItemPlaceholder: styles.ItemPlaceholder,
  };

  static styles = styles;

  createItemClickHandler = (index: number) => () =>
    this.props.onPageSelected && this.props.onPageSelected(index);

  handlePreviousClick = () => {
    const { onPageSelected, currentPage } = this.props;
    if (currentPage === 0) {
      return;
    }
    onPageSelected && onPageSelected(currentPage - 1);
  };

  handleNextClick = () => {
    const { onPageSelected, currentPage, pageCount } = this.props;
    if (currentPage === pageCount - 1) {
      return;
    }

    onPageSelected && onPageSelected(currentPage + 1);
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
