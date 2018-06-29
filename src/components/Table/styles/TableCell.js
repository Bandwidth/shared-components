import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const TableCell = styled.td`
  background: transparent;
  text-align: left;
  border-right: var(--thicknesses-normal) solid var(--colors-shadow-light);
  white-space: nowrap;
  padding: var(--spacing-small) var(--spacing-medium);
  transition: 0.2s ease all;

  &:last-child {
    border-right: none;
  }
`;

TableCell.defaultProps = {
  children: String.fromCharCode(160), // &nbsp;
};

TableCell.Small = styled(TableCell)`
  padding: 3px 8px;
`;

export default TableCell;
