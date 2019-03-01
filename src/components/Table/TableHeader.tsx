import * as React from 'react';
import { defaultProps } from 'recompose';
import DefaultLink from 'components/Link';
import * as styles from './styles';
import noop from 'lodash.noop';
import { Diff } from 'utility-types';

interface TableHeaderProps {
  /**
   * Called when the user clicks the header cell.
   */
  onClick: (order: number) => void;
  /**
   * Specifies the sorting order of this column. [-1, 0, 1] for descending, none, or ascending.
   */
  sortOrder: number;
  /**
   * Indicates whether this column is sortable. This changes how it's rendered.
   */
  sortable: boolean;
  /**
   * A component for rendering an icon, used for sort arrows.
   */
  Icon?: any;
  /**
   * A link component. Defaults Link
   */
  Link?: any;
  /**
   * A component for rendering the th element styles
   */
  Styles?: any;
  /**
   * A component for rendering the sort arrow container
   */
  SortArrows?: any;
  /**
   * A component for rendering the column name text
   */
  ColumnName?: any;
}

class TableHeader extends React.Component<
  TableHeaderProps &
    Diff<React.HTMLAttributes<HTMLTableHeaderCellElement>, TableHeaderProps>
> {
  static defaultProps = {
    sortable: false,
    sortOrder: 0,
    onClick: noop,
    Icon: styles.HeaderSortArrowIcon,
    Link: DefaultLink,
    Styles: styles.Header,
    SortArrows: styles.HeaderSortArrows,
    ColumnName: styles.HeaderColumnName,
  };

  static styles = styles;
  static Small = defaultProps<any>({ Styles: (styles.Header as any).Small })(
    TableHeader,
  );

  createClickHandler = (naturalOrder: number) => ev => {
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
      Styles,
      SortArrows,
      Link,
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

TableHeader.Small = defaultProps<any>({ Styles: (styles.Header as any).Small })(
  TableHeader,
);

export default TableHeader;
