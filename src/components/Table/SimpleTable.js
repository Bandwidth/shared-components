import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Table from './Table';

const defaultValueRenderer = val =>
  _.isString(val)
    ? val
    : _.isArray(val)
      ? `[${val.map(defaultValueRenderer).join(',')}]`
      : JSON.stringify(val);

/**
 * This is a helper behavioral implementation of a table.
 * Note that this component is not designed to support all use cases, just very simple ones.
 * This component may be moved out of the library in the future.
 *
 * @class SimpleTable
 * @extends {React.Component}
 */
class SimpleTable extends React.Component {
  static propTypes = {
    /**
     * An array of data items to use for the rows of the table.
     */
    items: PropTypes.array.isRequired,
    /**
     * Renders a Table.Row that represents a particular item. Row must include an onClick prop for details to work.
     * (item) => <Row />
     */
    renderRow: PropTypes.func,
    /**
     * Renders the detail view of any item when that item is selected.
     */
    renderDetails: PropTypes.func,
    /**
     * An array of column descriptions. Column name should correspond to a key in the data items. displayName is what is actually rendered (defaults to name).
     */
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        displayName: PropTypes.string,
        sortable: PropTypes.bool,
      }),
    ),
    /**
     * Called when the user changes the sort state of a column. Column name and sort order are passed as params.
     * (columnName, sortOrder) => void
     */
    onSortChanged: PropTypes.func,
    /**
     * Indicates whether the table should render a loading state.
     */
    loading: PropTypes.bool,
    /**
     * A function that provides an unique id for a row item.
     */
    getId: PropTypes.func,
  };

  static defaultProps = {
    renderRow: item => (
      <Table.Row key={JSON.stringify(item)}>
        {Object.values(item).map(val => (
          <Table.Cell>{defaultValueRenderer(val)}</Table.Cell>
        ))}
      </Table.Row>
    ),
    renderDetails: null,
    columns: null,
    onSortChanged: () => null,
    getId: item => {
      if (_.isString(item)) {
        return item;
      }
      if (_.isFunction(item.get)) {
        return item.get('id');
      }
      return item.id || JSON.stringify(item);
    },
    loading: false,
  };

  state = {
    sortOrders: {},
    detailsItemId: null,
  };

  blankSortOrders = () =>
    this.props.columns.reduce(
      (orders, { name }) => ({ ...orders, [name]: 0 }),
      {},
    );

  indexOfDetailsItem = () =>
    this.props.items.findIndex(
      item => this.props.getId(item) === this.state.detailsItemId,
    );

  createHeaderClickHandler = headerName =>
    this.props.onSortChanged
      ? sortOrder => {
          const newSortOrder =
            sortOrder || -this.state.sortOrders[headerName] || 1;
          this.setState({
            sortOrders: {
              ...this.blankSortOrders(),
              [headerName]: newSortOrder,
            },
          });
          this.props.onSortChanged(headerName, newSortOrder);
        }
      : null;

  createRowClickHandler = item => () => {
    if (!this.props.renderDetails) {
      return;
    }

    if (this.state.detailsItemId === this.props.getId(item)) {
      this.setState({ detailsItemId: null });
    } else {
      this.setState({ detailsItemId: this.props.getId(item) });
    }
  };

  renderDetails = item => {
    const { renderDetails } = this.props;
    return (
      <Table.RowDetails key="details">{renderDetails(item)}</Table.RowDetails>
    );
  };

  renderUpperSection = () => {
    const { items, renderRow } = this.props;
    const detailsItemIndex = this.indexOfDetailsItem();
    return (
      <Table.Body key="upperSection">
        {items
          .slice(0, detailsItemIndex >= 0 ? detailsItemIndex + 1 : undefined)
          .map(item =>
            React.cloneElement(renderRow(item), {
              onClick: this.createRowClickHandler(item),
              key: JSON.stringify(item),
            }),
          )}
      </Table.Body>
    );
  };

  renderRowDetails = () => {
    const itemIdx = this.indexOfDetailsItem();

    if (!this.props.renderDetails || itemIdx === -1) {
      return null;
    }

    const item = this.props.items[itemIdx];
    return (
      <Table.RowDetails rowIndex={itemIdx} key="rowDetails">
        {this.props.renderDetails(item)}
      </Table.RowDetails>
    );
  };

  renderLowerSection = () => {
    const { items, renderRow } = this.props;
    const itemIdx = this.indexOfDetailsItem();
    // if details item is not present, the upper section contains all rows already
    if (itemIdx === -1) {
      return null;
    }

    return (
      <Table.Body startIndex={itemIdx + 1} key="lowerSection">
        {items.slice(itemIdx + 1).map(item =>
          React.cloneElement(renderRow(item), {
            onClick: this.createRowClickHandler(item),
            key: JSON.stringify(item),
          }),
        )}
      </Table.Body>
    );
  };

  renderRows = () => [
    this.renderUpperSection(),
    this.renderRowDetails(),
    this.renderLowerSection(),
  ];

  renderColumnHeaders = () => {
    const { columns, onSortChanged } = this.props;
    const { sortOrders } = this.state;
    if (!columns) {
      return null;
    }

    return (
      <Table.Row>
        {columns.map((column, idx) => (
          <Table.Header
            key={column.name}
            onClick={
              column.sortable && this.createHeaderClickHandler(column.name)
            }
            sortable={column.sortable}
            sortOrder={sortOrders[column.name]}
          >
            {column.displayName || column.name}
          </Table.Header>
        ))}
      </Table.Row>
    );
  };

  render() {
    return (
      <Table
        headers={this.renderColumnHeaders()}
        loading={this.props.loading}
        wrapBody={false}
      >
        {this.renderRows()}
      </Table>
    );
  }
}

export default SimpleTable;
