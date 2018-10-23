import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import styled, { css } from 'styled-components';
import { sentence } from 'change-case';
import DefaultAnchor from '../Anchor';
import TableHeaderSortArrowIcon from './styles/TableHeaderSortArrowIcon';
import TableHeaderStyles from './styles/TableHeaderStyles';
import TableHeaderSortArrows from './styles/TableHeaderSortArrows';
import TableHeaderColumnName from './styles/TableHeaderColumnName';

class TableHeader extends React.Component {
  static propTypes = {
    /**
     * Contents of the header cell.
     */
    children: PropTypes.node.isRequired,
    /**
     * [Deprecated] use onClick
     */
    handleClick: PropTypes.func,
    /**
     * Called when the user clicks the header cell.
     */
    onClick: PropTypes.func,
    /**
     * Specifies the sorting order of this column. [-1, 0, 1] for descending, none, or ascending.
     */
    sortOrder: PropTypes.number,
    /**
     * Indicates whether this column is sortable. This changes how it's rendered.
     */
    sortable: PropTypes.bool,
    /**
     * Adds a class name to the element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the element.
     */
    id: PropTypes.string,
    /**
     * A component for rendering an icon, used for sort arrows.
     */
    Icon: PropTypes.func,
    /**
     * An anchor component. Defaults Anchor
     */
    Anchor: PropTypes.func,
    /**
     * A component for rendering the th element styles
     */
    Styles: PropTypes.func,
    /**
     * A component for rendering the sort arrow container
     */
    SortArrows: PropTypes.func,
    /**
     * A component for rendering the column name text
     */
    ColumnName: PropTypes.func,
  };

  static defaultProps = {
    sortable: false,
    sortOrder: 0,
    handleClick: () => null,
    onClick: () => null,
    className: null,
    id: null,
    Icon: TableHeaderSortArrowIcon,
    Anchor: DefaultAnchor,
    Styles: TableHeaderStyles,
    SortArrows: TableHeaderSortArrows,
    ColumnName: TableHeaderColumnName,
  };

  createClickHandler = naturalOrder => () =>
    this.props.onClick
      ? this.props.onClick(naturalOrder)
      : this.props.handleClick(naturalOrder);

  renderColumnName = () => {
    const { sortable, children, sortOrder, Anchor, ColumnName } = this.props;

    if (sortable) {
      return (
        <Anchor
          className="toggleSort"
          type="text"
          onClick={this.createClickHandler(sortOrder === 0 ? 1 : -sortOrder)}
        >
          <ColumnName sortable>{children}</ColumnName>
        </Anchor>
      );
    }

    return <ColumnName>{children}</ColumnName>;
  };

  render() {
    const {
      sortable,
      sortOrder,
      handleClick,
      onClick,
      Styles,
      SortArrows,
      Anchor,
      Icon,
      ...rest
    } = this.props;

    return (
      <Styles sortable={sortable} {...rest}>
        {this.renderColumnName()}
        {sortable && (
          <SortArrows sortOrder={sortOrder}>
            <Anchor className="sortUp" type="icon" onClick={this.createClickHandler(1)}>
              <Icon name="up" />
            </Anchor>
            <Anchor className="sortDown" type="icon" onClick={this.createClickHandler(-1)}>
              <Icon name="down" />
            </Anchor>
          </SortArrows>
        )}
      </Styles>
    );
  }
}

TableHeader.Small = withProps({ Styles: TableHeaderStyles.Small })(TableHeader);

export default TableHeader;
