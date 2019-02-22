import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Table from 'components/Table';

const TableRenderer = ({ classes, columns, rows, getRowKey }) => (
  <Table.Small
    headers={
      <Table.Row>
        {columns.map(column => (
          <Table.Header key={column.caption} style={{ maxWidth: '25vw' }}>
            {column.caption}
          </Table.Header>
        ))}
      </Table.Row>
    }
  >
    {rows.map(row => (
      <Table.Row key={getRowKey(row)}>
        {columns.map(column => (
          <Table.Cell key={column.caption} style={{ maxWidth: '25vw' }}>
            {column.render(row)}
          </Table.Cell>
        ))}
      </Table.Row>
    ))}
  </Table.Small>
);

export default TableRenderer;
