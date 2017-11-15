import React from 'react';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const TableRow = styled.tr`
  border-top: ${get('thicknesses.normal')} solid ${get('colors.shadow.light')};

  &:first-of-type {
    border-top: none;
  }

  ${({ onClick }) => !!onClick ? 'cursor: pointer;' : ''}
`;

export default TableRow;
