import React from 'react';
import { withPulseGroup } from 'skeletons/PulseGroup';
import * as styles from './styles';

const PulseFieldRow = withPulseGroup(styles.FieldRow);

interface FieldGroupProps {
  /**
   * The number of columns to divide the fieldset into when rendering. Field.Group can span multiple columns if provided
   * with a columnSpan prop. Field.Group which overflow the column limit will be added to new rows. If a Field's
   * columnSpan is too large to fit in the current row, it will be wrapped to the next one.
   */
  columns: number;
  /**
   * A component prop to override the component used to render the outer container which renders field rows.
   * Defaults to Field.Group.styles.FieldRowContainer.
   */
  RowContainer?: any;
  /**
   * A component prop to override the component which is injected to wrap Field elements into discrete rows.
   * Row receives the same `columns` prop provided to this component. Defaults to Field.Group.styles.FieldRow.
   */
  Row?: any;
}

/**
 * A component that renders a collection of Field components into a grid, making space for
 * labels, help text, etc. Simply pass the number of columns into this component and render
 * Field components as its children.
 * @visibleName Field.Group
 */
class FieldGroup extends React.Component<FieldGroupProps> {
  static defaultProps = {
    RowContainer: styles.FieldRowContainer,
    Row: styles.FieldRow,
    columns: 2,
  };

  static styles = styles;

  static Skeleton = ({ ...rest }) => (
    <FieldGroup Row={props => <PulseFieldRow {...props} />} {...rest} />
  );

  partitionFields = () => {
    const { columns, children, Row } = this.props;
    const childArray = React.Children.toArray(children);

    const rows = childArray.reduce(
      (rows, child: any) => {
        const childColumnSpan = child.props.columnSpan || 1;

        if (childColumnSpan > columns) {
          throw new Error(
            `A Field has a columnSpan of ${childColumnSpan}, but the containing Field.Group only has ${columns} columns`,
          );
        }
        //@ts-ignore
        const currentRow = rows[rows.length - 1];
        if (currentRow.columnWidth + childColumnSpan <= columns) {
          // add to current row
          return [
            //@ts-ignore
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
            //@ts-ignore
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

    //@ts-ignore
    return rows.map((row, rowIdx) => (
      <Row key={rowIdx} columns={columns}>
        {row.children.map(({ element, column }) =>
          React.cloneElement(element, { column }),
        )}
      </Row>
    ));
  };

  render() {
    const { RowContainer, Row, columns, ...rest } = this.props;

    return <RowContainer {...rest}>{this.partitionFields()}</RowContainer>;
  }
}
export default FieldGroup;
