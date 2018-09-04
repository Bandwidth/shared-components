import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';

import Loader from '../Loader';

import TableStyles from './styles/TableStyles';
import TableOverlay from './styles/TableOverlay';

import Cell from './styles/TableCell';
import Header from './TableHeader';
import Row from './styles/TableRow';
import Controls from './TableControls';
import Simple from './SimpleTable';
import RowDetails from './TableRowDetails';
import TableWrap from './TableWrap';
import TableBody from './styles/TableBody';

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
    Styles: PropTypes.func,
    /**
     * A component to render any content that overlays the table itself
     */
    Overlay: PropTypes.func,
    /**
     * A component that wraps the whole table as a scroll context
     */
    Wrap: PropTypes.func,
  };

  static defaultProps = {
    loading: false,
    className: null,
    id: null,
    headers: null,
    wrapBody: true,
    Styles: TableStyles,
    Overlay: TableOverlay,
    Wrap: TableWrap,
  };

  render() {
    const {
      children,
      headers,
      loading,
      wrapBody,
      Wrap,
      Styles,
      Overlay,
      ...rest
    } = this.props;
    return (
      <Wrap>
        <Styles cellPadding={0} cellSpacing={0} {...rest}>
          <thead>{headers}</thead>
          {wrapBody ? <TableBody>{children}</TableBody> : children}
        </Styles>
        {loading && (
          <Overlay>
            <Loader />
          </Overlay>
        )}
      </Wrap>
    );
  }
}

Table.Row = Row;
Table.Header = Header;
Table.Cell = Cell;
Table.Controls = Controls;
Table.Simple = Simple;
Table.RowDetails = RowDetails;
Table.Wrap = TableWrap;
Table.Body = TableBody;

Table.Small = withProps({
  Styles: TableStyles.Small,
})(Table);

export default Table;
