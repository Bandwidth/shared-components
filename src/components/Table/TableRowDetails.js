import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DefaultTableBody from './styles/TableBody';
import TableRowDetailsRow from './styles/TableRowDetailsRow';
import TableRowDetailsStyles from './styles/TableRowDetailsStyles';

// Firefox has an artificial limit on colspan of 1000. This is obviously an arbitrary
// number of columns, but there are no cleaner or easier solutions to spanning the entire
// table at time of writing.
const COLSPAN = 1000;

const TableRowDetails = ({ children, rowIndex = 0, Row, Styles }) => (
  <TableBody startIndex={rowIndex}>
    <Row>
      <Styles colSpan={COLSPAN}>{children}</Styles>
    </Row>
  </TableBody>
);

TableRowDetails.propTypes = {
  /**
   * Contents of the details
   */
  children: PropTypes.node.isRequired,
  /**
   * The row index the details are related to
   */
  rowIndex: PropTypes.number,
  /**
   * A component to render the styles of the tr
   */
  Row: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * A component to render the styles of the td
   */
  Styles: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * A tbody element
   */
  TableBody: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

TableRowDetails.defaultProps = {
  Row: TableRowDetailsRow,
  Styles: TableRowDetailsStyles,
  TBody: DefaultTableBody,
};

export default TableRowDetails;
