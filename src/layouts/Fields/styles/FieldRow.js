import React from 'react';
import themeGet from 'extensions/themeGet';
import { withTheme } from 'styled-components';

const copyArea = (input, times) =>
  new Array(times)
    .fill(input)
    .map((text, index) => `${text}${index}`)
    .join(' ');

const hasLabel = children =>
  React.Children.toArray(children).some(
    child =>
      child.props.Label != null &&
      child.props.label != null &&
      child.props.label.length > 0,
  );

const hasHelpText = children =>
  React.Children.toArray(children).some(
    child =>
      child.props.HelpText != null &&
      child.props.helpText != null &&
      child.props.helpText.length > 0,
  );

/*
 * We calculate whether we need the label and help text rows based on
 * whether any children need them. This helps deal with the gridGap,
 * as it will still be present if a grid area gets a size of zero.
 */
const calcGridTemplateAreas = (children, columns) => {
  const areas = [];
  if (hasLabel(children)) {
    areas.push(copyArea('label', columns));
  }
  areas.push(copyArea('content', columns));
  if (hasHelpText(children)) {
    areas.push(copyArea('helpText', columns));
  }
  return areas.map(a => `"${a}"`).join('\n');
};

const FieldRow = ({ children, columns, theme }) => {
  return (
    <div
      style={{
        display: 'grid',
        // each row has 3 sub-rows: label, content, helpText.
        // there's a named area for each column.
        gridTemplateAreas: calcGridTemplateAreas(children, columns),
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
        gridTemplateRows: `${
          hasLabel(children) ? 'auto' : ''
        } minmax(53px, auto) ${hasHelpText(children) ? 'auto' : ''}`,
      }}
    >
      {children}
    </div>
  );
};

FieldRow.defaultProps = {
  columnCount: 2,
};

export default withTheme(FieldRow);
