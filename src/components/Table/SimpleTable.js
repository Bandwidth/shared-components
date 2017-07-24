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
     * An array of column descriptions. Column name should correspond to a key in the data items.
     */
    columns: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
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

  blankSortOrders = () => this.props.columns.reduce((orders, { name }) => ({ ...orders, [name]: 0 }), {});

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

  renderRows = () => {
    const { items, renderRow } = this.props;
    return items.reduce((elements, item) => {
      const rendered = React.cloneElement(renderRow(item), { onClick: this.createRowClickHandler(item) });
      if (item === this.state.detailsItem) {
        return [
          ...elements,
          rendered,
          this.renderDetails(item),
        ];
      }
      return [...elements, rendered];
    }, []);
  };

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
            {column.name}
          </Table.Header>
        ))}
      </Table.Row>
    );
  }

  render() {
    return (
      <Table headers={this.renderColumnHeaders()} loading={this.props.loading}>
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
