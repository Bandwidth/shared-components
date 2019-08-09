import React from 'react';
import PropTypes from 'prop-types';
import { withPulseGroup } from 'skeletons/PulseGroup';
import * as styles from './styles';

/**
 * A component that renders a collection of Field components into a grid, making space for
 * labels, help text, etc. Simply pass the number of columns into this component and render
 * Field components as its children.
 * @visibleName Field.Group
 */
class FieldGroup extends React.Component {
  static propTypes = {
    /**
     * The number of columns to divide the fieldset into when rendering. Field.Group can span multiple columns if provided
     * with a columnSpan prop. Field.Group which overflow the column limit will be added to new rows. If a Field's
     * columnSpan is too large to fit in the current row, it will be wrapped to the next one.
     */
    columns: PropTypes.number,
    /**
     * A component prop to override the component used to render the outer container which renders field rows.
     * Defaults to Field.Group.styles.FieldRowContainer.
     */
    RowContainer: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component prop to override the component which is injected to wrap Field elements into discrete rows.
     * Row receives the same `columns` prop provided to this component. Defaults to Field.Group.styles.FieldRow.
     */
    Row: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    className: "scl-field-group",
    RowContainer: styles.FieldRowContainer,
    Row: styles.FieldRow,
    columns: 2,
  };

  static styles = styles;

  partitionFields = () => {
    const { columns, children, Row } = this.props;
    const childArray = React.Children.toArray(children);

    const rows = childArray.reduce(
      (rows, child) => {
        const childColumnSpan = child.props.columnSpan || 1;

        if (childColumnSpan > columns) {
          throw new Error(
            `A Field has a columnSpan of ${childColumnSpan}, but the containing Field.Group only has ${columns} columns`,
          );
        }

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
    const { RowContainer, Row, columns, ...rest } = this.props;

    return <RowContainer {...rest}>{this.partitionFields()}</RowContainer>;
  }
}

const PulseFieldRow = withPulseGroup(styles.FieldRow);
FieldGroup.Skeleton = ({ ...rest }) => (
  <FieldGroup Row={props => <PulseFieldRow {...props} />} {...rest} />
);
export default FieldGroup;
