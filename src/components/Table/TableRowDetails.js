import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TBody from './TableBody';
import theme from '../../theme';

// Firefox has an artificial limit on colspan of 1000. This is obviously an arbitrary
// number of columns, but there are no cleaner or easier solutions to spanning the entire
// table at time of writing.
const COLSPAN = 1000;

const select = theme
  .register('TableRowDetails', ({ colors, spacing }) => ({
    textAlign: 'left',
    zebraLightStripeColor: 'transparent',
    zebraDarkStripColor: colors.shadowExtraLight,
    borderColor: colors.border,
    borderWidth: '1px',
    borderStyle: 'solid',
    effectColor: colors.shadowLight,
    effectWidth: '5px',
    padding: `${spacing.small} ${spacing.meium} ${spacing.small} 20px`,
  }))
  .addVariant('small', { padding: '3px 8px 3px 13px' })
  .createSelector();

const TableRowDetailContainer = theme.connect(styled.tr`
  display: table-row;
  text-align: ${select('text-align')};

  &:nth-child(even) {
    background: ${select('zebraLightStripeColor')};
  }
  &:nth-child(odd) {
    background: ${select('zebraDarkStripeColor')};
  }
`);

const TableRowDetailsStyles = theme.connect(styled.td`
  border-top: ${select('borderWidth')} ${select('borderStyle')} ${select('borderColor')};
  border-bottom: ${select('borderWidth')} ${select('borderStyle')} ${select('borderColor')};
  box-shadow: inset ${select('effectWidth')} 0 0 ${select('effectColor')};
`);

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
