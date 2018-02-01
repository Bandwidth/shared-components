import React from 'react';
import PropTypes from 'prop-types';
import FieldRowContainer from './styles/FieldRowContainer';
import FieldRow from './styles/FieldRow';
import Field from './Field';

class Fields extends React.PureComponent {
  static Field = Field;

  static propTypes = {
    RowContainer: PropTypes.func,
    Row: PropTypes.func,
    columns: PropTypes.number,
  };

  static defaultProps = {
    RowContainer: FieldRowContainer,
    Row: FieldRow,
    columns: 2,
  };

  partitionFields = () => {
    const { columns, children, Row } = this.props;
    const childArray = React.Children.toArray(children);

    const rows = childArray.reduce(
      (rows, child) => {
        const childColumnSpan = child.props.columnSpan || 1;
        const currentRow = rows[rows.length - 1];
        if (currentRow.columnWidth + childColumnSpan <= columns) {
          // add to current row
          return [
            ...rows.slice(0, rows.length - 1),
            {
              children: [
                ...currentRow.children,
                {
                  column: currentRow.columnWidth,
                  element: child,
                },
              ],
              columnWidth: currentRow.columnWidth + childColumnSpan,
            },
          ];
        } else {
          // create new row
          return [
            ...rows,
            {
              children: [{ column: 0, element: child }],
              columnWidth: childColumnSpan,
            },
          ];
        }
      },
      [{ children: [], columnWidth: 0 }],
    );

    return rows.map((row, rowIdx) => (
      <Row key={rowIdx} columns={columns}>
        {row.children.map(({ element, column }) =>
          React.cloneElement(element, { column }),
        )}
      </Row>
    ));
  };

  render() {
    const { RowContainer } = this.props;

    return <RowContainer>{this.partitionFields()}</RowContainer>;
  }
}

export default Fields;
