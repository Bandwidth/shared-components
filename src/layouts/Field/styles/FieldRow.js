import React from 'react';
import themeGet from 'extensions/themeGet';
import styled from 'styled-components';

const AREA = {
  LABEL: 'label',
  CONTENT: 'content',
  HELP_TEXT: 'helpText',
};

const copyArea = (input, times) =>
  new Array(times)
    .fill(input)
    .map((text, index) => `${text}${index}`)
    .join(' ');

// Returns true if at least one child uses a label
const hasLabel = children =>
  React.Children.toArray(children).some(
    child =>
      child.props.label &&
      (typeof child.props.label !== 'string' || child.props.label.length > 0),
  );

// Returns true if at least one child uses help text
const hasHelpText = children =>
  React.Children.toArray(children).some(
    child =>
      child.props.helpText &&
      (typeof child.props.helpText !== 'string' ||
        child.props.helpText.length > 0),
  );

/*
 * We calculate whether we need the label and help text rows based on
 * whether any children need them. This helps deal with the gridGap,
 * as it will still be present if a grid area gets a size of zero.
 */
const includeArea = (area, children) => {
  if (area === AREA.LABEL) {
    return hasLabel(children);
  }
  if (area === AREA.HELP_TEXT) {
    return hasHelpText(children);
  }
  return true;
};

const calcGridAreas = children =>
  [AREA.LABEL, AREA.CONTENT, AREA.HELP_TEXT].filter(area =>
    includeArea(area, children),
  );

const calcGridTemplateAreas = (children, columns) =>
  calcGridAreas(children)
    .map(area => `"${copyArea(area, columns)}"`)
    .join('\n');

const calcGridTemplateRows = children =>
  calcGridAreas(children)
    .map(() => 'auto')
    .join(' ');

const FieldRowDiv = styled.div`
  @supports (display: grid) {
    display: grid;
    /* defines spacing between rows and columns */
    grid-gap: var(--spacing-small) var(--spacing-large);
  }

  display: flex;
`;

const FieldRow = ({ children, columns, theme, ...rest }) => {
  return (
    <FieldRowDiv
      {...rest}
      style={{
        // each row has 3 sub-rows: label, content, helpText.
        // there's a named area for each column.
        gridTemplateAreas: calcGridTemplateAreas(children, columns),
        // each column has an equal size. To make fields larger than
        // adjacent fields, use the columnSpan prop on Field to span
        // multiple columns. This keeps all field sizes directly proportional
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        // label and helpText rows expand or contract as needed.
        // content row has a minimum size of 53px, and can expand as needed.
        gridTemplateRows: calcGridTemplateRows(children),
      }}
    >
      {children}
    </FieldRowDiv>
  );
};

FieldRow.defaultProps = {
  className: 'scl-field-row',
  columnCount: 2,
};

export default FieldRow;
