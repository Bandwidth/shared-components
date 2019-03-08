import * as React from 'react';
import defaultProps from 'extensions/defaultProps';

import Loader from 'components/Loader';
import ScrollShadow from 'behaviors/ScrollShadow';

import RowDetails from './TableRowDetails';
import Header from './TableHeader';

import * as styles from './styles';
import SkeletonTable from './SkeletonTable';

interface TableProps {
  /**
   * Render the rows of the Table within its children.
   */
  children?: React.ReactNode;
  /**
   * Render headers for the columns with this property.
   */
  headers?: React.ReactNode;
  /**
   * Renders a loading spinner over the table body.
   */
  loading?: boolean;
  /**
   * Adds a class name to the table element.
   */
  className?: string;
  /**
   * Adds an id to the table element.
   */
  id?: string;
  /**
   * Whether to wrap the passed children in a <Table.Body>. Defaults true.
   */
  wrapBody?: boolean;
  /**
   * A component to render the table element
   */
  Styles?: any;
  /**
   * A component to render any content that overlays the table itself
   */
  Overlay?: any;
  /**
   * A component that wraps the whole table as a scroll context
   */
  ScrollContainer?: any;
  /**
   * A component that renders a <tbody>
   */
  Body?: any;
}

class Table extends React.Component<TableProps> {
  static defaultProps: TableProps = {
    loading: false,
    wrapBody: true,
    Styles: styles.TableStyles,
    Overlay: styles.Overlay,
    ScrollContainer: styles.ScrollContainer,
    Body: styles.Body,
  };

  static styles = styles;
  static Row = styles.Row;
  static Header = Header;
  static Cell = styles.Cell;
  static RowDetails = RowDetails;
  static Body = styles.Body;
  static Skeleton = SkeletonTable;

  static Small = defaultProps(Table, {
    Styles: styles.TableStylesSmall,
  });

  render() {
    const {
      className,
      id,
      children,
      loading,
      headers,
      wrapBody,
      Styles,
      Overlay,
      Body,
      ScrollContainer,
      ...rest
    } = this.props;
    return (
      <ScrollShadow horizontal ScrollContainer={ScrollContainer} {...rest}>
        <Styles cellPadding={0} cellSpacing={0} className={className} id={id}>
          <thead>{headers}</thead>
          {wrapBody ? <Body>{children}</Body> : children}
        </Styles>
        {loading && (
          <Overlay>
            <Loader />
          </Overlay>
        )}
      </ScrollShadow>
    );
  }
}

export default Table;
