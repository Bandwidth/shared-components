import React from 'react';
import themeGet from 'extensions/themeGet';
import { withTheme } from 'styled-components';

const copyArea = (input, times) =>
  new Array(times)
    .fill(input)
    .map((text, index) => `${text}${index}`)
    .join(' ');

const FieldRow = ({ children, columns, theme }) => (
  <div
    style={{
      display: 'grid',
      // each row has 3 sub-rows: label, content, helpText.
      // there's a named area for each column.
      gridTemplateAreas: [
        `"${copyArea('label', columns)}"`,
        `"${copyArea('content', columns)}"`,
        `"${copyArea('helpText', columns)}"`,
      ].join('\n'),
      // defines spacing between rows and columns
      gridGap: `${themeGet('spacing.extraSmall')({ theme })} ${themeGet(
        'spacing.large',
      )({ theme })}`,
      // each column has an equal size. To make fields larger than
      // adjacent fields, use the columnSpan prop on Field to span
      // multiple columns. This keeps all field sizes directly proportional
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      // label and helpText rows expand or contract as needed.
      // content row has a minimum size of 53px, and can expand as needed.
      gridTemplateRows: 'auto minmax(53px, auto) auto',
    }}
  >
    {children}
  </div>
);

FieldRow.defaultProps = {
  columnCount: 2,
};

export default withTheme(FieldRow);
