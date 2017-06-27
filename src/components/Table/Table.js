import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Cell from './TableCell';
import Header from './TableHeader';
import Row from './TableRow';
import Controls from './TableControls';

const Wrap = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.table.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.table.borderRadius};
  overflow-x: auto;
  position: relative;
  font-size: ${({ theme }) => theme.table.fontSize};
`;

const BaseTable = styled.table`
  min-width: 100%;
`;

const THead = styled.thead`
  background: ${({ theme }) => theme.table.bg};
`;

const TBody = styled.tbody`
  background: ${({ theme }) => theme.table.bg};
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
    headers: PropTypes.node.isRequired,
    /**
     * [PENDING DEPRECATION] renders the rows as slightly transparent.
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
  };

  render() {
    const { children, headers, loading, className, id } = this.props;
    return (
      <Wrap>
        <BaseTable cellPadding={0} cellSpacing={0} className={className} id={id}>
          <THead>
            {headers}
          </THead>
          <TBody style={{ opacity: loading ? '0.5' : '1' }}>
            {children}
          </TBody>
        </BaseTable>
      </Wrap>
    );
  }
}

Table.Row = Row;
Table.Header = Header;
Table.Cell = Cell;
Table.Controls = Controls;

Table.usage = `
Renders a table, using the \`children\` and \`headers\` props to define the various table parts. Also accepts \`loading\` to show a loading state.
`;

export default Table;
