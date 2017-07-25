import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableRowDetailContainer = styled.caption`
  display: table-row;
  text-align: left;

  &:nth-child(even) {
    background: transparent;
  }
  &:nth-child(odd) {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const TableRowDetailsStyles = styled.td`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: inset 5px 0 0 rgba(0,0,0,.12);
`;

const TableRowDetails = ({ children }) => (
  <TableRowDetailContainer>
    <TableRowDetailsStyles colSpan={100000}>
      {children}
    </TableRowDetailsStyles>
  </TableRowDetailContainer>
);

export default TableRowDetails;
