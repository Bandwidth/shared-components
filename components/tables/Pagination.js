import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';

const ITEM_SIZE = '30px';

const Container = styled.ul`
  display: inline-block;
  margin: 0;
  padding: 0;
  float: left;
  list-style: none;
  user-select: none;
`;

const Item = styled.li`
  float: left;
  margin: 0;
  padding: 0;
  width: ${ITEM_SIZE};
  height: ${ITEM_SIZE};
  line-height: ${ITEM_SIZE};
  text-align: center;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-right: none;
  user-select: none;

  ${({ active, theme }) => active ?
    `
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      color: ${theme.colors.white};

      & + li {
        border-left-color: ${theme.colors.primary};
      }
    ` :
    `
      &:hover {
        background: ${theme.colors.primaryLight};
      }
    `
  }

  &:active {
    background: ${({ theme }) => theme.colors.lightGray};
  }

  &:first-of-type {
    border-radius: 3px 0px 0px 3px;
  }

  &:last-of-type {
    border-radius: 0px 3px 3px 0px;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const ItemPlaceholder = styled.li`
  float: left;
  margin: 0;
  padding: 0;
  width: ${ITEM_SIZE};
  height: ${ITEM_SIZE};
`;

class Pagination extends React.Component {
  static propTypes = {
    pageCount: PropTypes.number,
    currentPage: PropTypes.number,
    onPageSelected: PropTypes.func.isRequired,
  };

  static defaultProps = {
    pageCount: 1,
    currentPage: 0,
  };

  createItemClickHandler = (index) => () => this.props.onPageSelected(index);

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
    this.props.currentPage > 0 ?
      (
        <Item
          onClick={this.handlePreviousClick}
        >
          <Icon name="back" />
        </Item>
      ) : <ItemPlaceholder />;


  renderNext = () =>
    this.props.currentPage < this.props.pageCount - 1 ?
      (
        <Item
          onClick={this.handleNextClick}
        >
          <Icon name="forward" />
        </Item>
      ) : <ItemPlaceholder />;

  renderItems = () => {
    const { pageCount, currentPage } = this.props;
    console.log(`${pageCount}, ${currentPage}`);
    const start = Math.max(0, Math.min(currentPage + 5, pageCount) - 10);
    const end = Math.min(start + 10, pageCount);
    return new Array(pageCount)
      .fill(null)
      // creates an array of incrementing numbers
      .map((_, index) => index)
      .slice(start, end)
      .map((pageNumber) => (
        <Item
          key={pageNumber}
          onClick={this.createItemClickHandler(pageNumber)}
          active={pageNumber === currentPage}
        >
          {pageNumber + 1}
        </Item>
      ));
  };

  render() {
    return (
      <Container>
        {this.renderPrevious()}
        {this.renderItems()}
        {this.renderNext()}
      </Container>
    );
  }
}

Pagination.usage = `
# Pagination

Renders a 'controlled' pagination container. You need to provide the current page and other metadata.

\`\`\`
<Pagination pageCount={4} page={1} onPageSelected={(pageNumber) => { /* handle it */ }} />
\`\`\`
`;

export default Pagination;
