import React from 'react';
import styled from 'styled-components';
import get from 'extensions/themeGet';

export interface TableRowProps {
  onClick: Function;
}

const TableRow = styled.tr<TableRowProps>`
  border-top: ${get('thicknesses.normal')} solid ${get('colors.shadow.light')};

  &:first-of-type {
    border-top: none;
  }

  ${({ onClick }) => (!!onClick ? 'cursor: pointer;' : '')};
`;

export default TableRow;
