import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';

import Loader from 'components/Loader';
import ScrollShadow from 'behaviors/ScrollShadow';

import RowDetails from './TableRowDetails';
import Header from './TableHeader';

import {
  TableStyles,
  TableOverlay,
  TableCell as Cell,
  TableRow as Row,
  TableBody,
  TableScrollContainer,
} from './styles';

class Table extends React.Component {
  static propTypes = {
    /**
     * Render the rows of the Table within its children.
     */
    children: PropTypes.node.isRequired,
    /**
     * Render headers for the columns with this property.
     */
    headers: PropTypes.node,
    /**
     * Renders a loading spinner over the table body.
     */
    loading: PropTypes.bool,
    /**
     * Adds a class name to the table element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the table element.
     */
    id: PropTypes.string,
    /**
     * Whether to wrap the passed children in a <Table.Body>. Defaults true.
     */
    wrapBody: PropTypes.bool,
    /**
     * A component to render the table element
     */
    Styles: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render any content that overlays the table itself
     */
    Overlay: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component that wraps the whole table as a scroll context
     */
    ScrollContainer: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    loading: false,
    className: null,
    id: null,
    headers: null,
    wrapBody: true,
    Styles: TableStyles,
    Overlay: TableOverlay,
    ScrollContainer: TableScrollContainer,
  };

  render() {
    const {
      children,
      headers,
      loading,
      className,
      id,
      wrapBody,
      Styles,
      Overlay,
      ScrollContainer,
    } = this.props;
    return (
      <ScrollShadow horizontal ScrollContainer={ScrollContainer}>
        <Styles cellPadding={0} cellSpacing={0} className={className} id={id}>
          <thead>{headers}</thead>
          {wrapBody ? <TableBody>{children}</TableBody> : children}
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

Table.Row = Row;
Table.Header = Header;
Table.Cell = Cell;
Table.RowDetails = RowDetails;
Table.Body = TableBody;

Table.Small = withProps({
  Styles: TableStyles.Small,
})(Table);

export default Table;
