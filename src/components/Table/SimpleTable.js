import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Table from './Table';

const defaultValueRenderer = (val) =>
  _.isString(val) ?
    val :
    (
      _.isArray(val) ?
        `[${val.map(defaultValueRenderer).join(',')}]` :
        JSON.stringify(val)
    );

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
    columns: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      displayName: PropTypes.string,
      sortable: PropTypes.bool,
    })),
    /**
     * Called when the user changes the sort state of a column. Column name and sort order are passed as params.
     * (columnName, sortOrder) => void
     */
    onSortChanged: PropTypes.func,
    /**
     * Indicates whether the table should render a loading state.
     */
    loading: PropTypes.bool,
  };

  static defaultProps = {
    renderRow: (item) => (
      <Table.Row key={JSON.stringify(item)}>
        {Object.values(item).map((val) => <Table.Cell>{defaultValueRenderer(val)}</Table.Cell>)}
      </Table.Row>
    ),
    renderDetails: null,
    columns: null,
    onSortChanged: () => null,
    loading: false,
  };

  state = {
    sortOrders: {},
    detailsItem: null,
  };

  blankSortOrders = () => this.props.columns.reduce(
    (orders, { name }) => ({ ...orders, [name]: 0 }),
    {}
  );

  indexOfDetailsItem = () => this.props.items.findIndex(
    (item) => item === this.state.detailsItem
  );

  createHeaderClickHandler = (headerName) =>
    this.props.onSortChanged ?
      (sortOrder) => {
        const newSortOrder = sortOrder || -this.state.sortOrders[headerName] || 1;
        this.setState({
          sortOrders: {
            ...this.blankSortOrders(),
            [headerName]: newSortOrder,
          },
        });
        this.props.onSortChanged(headerName, newSortOrder);
      } :
      null;

  createRowClickHandler = (item) => () => {
    if (this.state.detailsItem === item) {
      this.setState({ detailsItem: null });
    } else {
      this.setState({ detailsItem: item });
    }
  };

  renderDetails = (item) => {
    const { renderDetails } = this.props;
    return (
      <Table.RowDetails key="details">
        {renderDetails(item)}
      </Table.RowDetails>
    );
  };

  renderUpperSection = () => {
    const { items, renderRow } = this.props;
    const detailsItemIndex = this.indexOfDetailsItem();
    return (
      <Table.Body>
        {
          items.slice(0, detailsItemIndex >= 0 ? detailsItemIndex + 1 : undefined)
            .map((item) => React.cloneElement(renderRow(item), {
              onClick: this.createRowClickHandler(item),
              key: JSON.stringify(item),
            }))
        }
      </Table.Body>
    );
  };

  renderRowDetails = () => {
    const itemIdx = this.indexOfDetailsItem();
    if (!this.state.detailsItem || itemIdx === -1) {
      return null;
    }

    return (
      <Table.RowDetails rowIndex={itemIdx}>
        {this.props.renderDetails(this.state.detailsItem)}
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
      <Table.Body startIndex={itemIdx + 1}>
        {
          items.slice(itemIdx + 1)
            .map((item) => React.cloneElement(renderRow(item), {
              onClick: this.createRowClickHandler(item),
              key: JSON.stringify(item),
            }))
        }
      </Table.Body>
    );
  };

  renderRows = () => ([
    this.renderUpperSection(),
    this.renderRowDetails(),
    this.renderLowerSection()
  ]);

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
            onClick={column.sortable && this.createHeaderClickHandler(column.name)}
            sortable={column.sortable}
            sortOrder={sortOrders[column.name]}
          >
            {column.displayName || column.name}
          </Table.Header>
        ))}
      </Table.Row>
    );
  }

  render() {
    return (
      <Table headers={this.renderColumnHeaders()} loading={this.props.loading} wrapBody={false}>
        {this.renderRows()}
      </Table>
    );
  }
}

SimpleTable.usage = `
Provides a more straighforward interface for creating a Table which may suit most use cases.

\`\`\`
<Table.Simple
  items={arrayOfItemData}
  columns={arrayOfColumnData}
  renderRow={functionToRenderARow}
  onSortChanged={functionToHandleSortChanges}
  renderDetails={functionToRenderDetailViewOfRow}
  loading={trueOrFalse}
/>
\`\`\`
`;

export default SimpleTable;
