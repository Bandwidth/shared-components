import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TBody from './TBody';

// Firefox has an artificial limit on colspan of 1000. This is obviously an arbitrary
// number of columns, but there are no cleaner or easier solutions to spanning the entire
// table at time of writing.
const COLSPAN = 1000;

const TableRowDetailContainer = styled.tr`
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: inset 5px 0 0 rgba(0,0,0,.12);
`;

const TableRowDetails = ({ children, rowIndex = 0 }) => (
  <TBody startIndex={rowIndex}>
    <TableRowDetailContainer>
      <TableRowDetailsStyles colSpan={COLSPAN}>
        {children}
      </TableRowDetailsStyles>
    </TableRowDetailContainer>
  </TBody>
);

TableRowDetails.usage = `
\`TableRowDetails\` is a \`<tbody>\` with a full-length element as its only row.

Insert it between an upper \`<tbody>\` and a lower \`<tbody>\`, where the last row in the upper \`<tbody>\` is the selected element to show details for. See \`SimpleTable\` for example usage.
`;

export default TableRowDetails;
