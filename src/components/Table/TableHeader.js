import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import styled, { css } from 'styled-components';
import { sentence } from 'change-case';
import DefaultLink from 'components/Link';
import * as styles from './styles';
import noop from 'lodash.noop';

class TableHeader extends React.Component {
  static propTypes = {
    /**
     * Contents of the header cell.
     */
    children: PropTypes.node.isRequired,
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
    Icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A link component. Defaults Link
     */
    Link: PropTypes.func,
    /**
     * A component for rendering the th element styles
     */
    Styles: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component for rendering the sort arrow container
     */
    SortArrows: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component for rendering the column name text
     */
    ColumnName: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    sortable: false,
    sortOrder: 0,
    onClick: noop,
    className: null,
    id: null,
    Icon: styles.HeaderSortArrowIcon,
    Link: DefaultLink,
    Styles: styles.Header,
    SortArrows: styles.HeaderSortArrows,
    ColumnName: styles.HeaderColumnName,
  };

  static styles = styles;

  createClickHandler = naturalOrder => ev => {
    ev.preventDefault();

    this.props.onClick && this.props.onClick(naturalOrder);
  };

  sortUp = this.createClickHandler(1);
  sortDown = this.createClickHandler(-1);

  renderColumnName = () => {
    const { sortable, children, sortOrder, Link, ColumnName } = this.props;

    if (sortable) {
      const titleSortHandler = sortOrder > 0 ? this.sortDown : this.sortUp;

      return (
        <Link onClick={titleSortHandler}>
          <ColumnName sortable>{children}</ColumnName>
        </Link>
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
      Link,
      Icon,
      ...rest
    } = this.props;

    return (
      <Styles sortable={sortable} {...rest}>
        {this.renderColumnName()}
        {sortable && (
          <SortArrows sortOrder={sortOrder}>
            <Link icon="up" onClick={this.sortUp} />
            <Link icon="down" onClick={this.sortDown} />
          </SortArrows>
        )}
      </Styles>
    );
  }
}

TableHeader.Small = withProps({ Styles: styles.Header.Small })(TableHeader);

export default TableHeader;
