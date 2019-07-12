import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const FieldGroup = ({ columns, children, Grid }) => {
  return <Grid columns={columns}>{children}</Grid>;
};

FieldGroup.propTypes = {
  /**
   * The number of columns to divide the fieldset into when rendering. Field.Group can span multiple columns if provided
   * with a columnSpan prop. Field.Group which overflow the column limit will be added to new rows. If a Field's
   * columnSpan is too large to fit in the current row, it will be wrapped to the next one.
   */
  columns: PropTypes.number,
  /**
   * A component prop to override the component used to render the outer container which renders fields.
   * Defaults to Field.Group.styles.FieldGrid.
   */
  Grid: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

FieldGroup.defaultProps = {
  Grid: styles.FieldGrid,
  columns: 2,
};

FieldGroup.styles = styles;

export default FieldGroup;
