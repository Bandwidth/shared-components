import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from '../Loader';

import Cell from './TableCell';
import Header from './TableHeader';
import Row from './TableRow';
import Controls from './TableControls';
import Simple from './SimpleTable';
import RowDetails from './TableRowDetails';
import Wrap from './TableWrap';

const BaseTable = styled.table`
  min-width: 100%;
  border-collapse: collapse;
`;

const THead = styled.thead`
  background: transparent;
`;

const TBody = styled.tbody`
  background: transparent;
`;

const Overlay = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  display: flex;

  & > div {
    margin: auto;
  }
`;

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
  };

  static defaultProps = {
    loading: false,
    className: null,
    id: null,
    headers: null,
  };

  render() {
    const { children, headers, loading, className, id } = this.props;
    return (
      <Wrap>
        <BaseTable
          cellPadding={0}
          cellSpacing={0}
          className={className}
          id={id}
        >
          <THead>
            {headers}
          </THead>
          <TBody>
            {children}
          </TBody>
        </BaseTable>
        {loading &&
          <Overlay><Loader /></Overlay>
        }
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
Table.Wrap = Wrap;

Table.usage = `
Renders a table, using the \`children\` and \`headers\` props to define the various table parts. Also accepts \`loading\` to show a loading state.
`;

export default Table;
