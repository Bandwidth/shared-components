import React from 'react';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const TableRow = styled.tr`
  border-top: var(--thicknesses-normal) solid var(--colors-shadow-light);

  &:first-of-type {
    border-top: none;
  }

  ${({ onClick }) => (!!onClick ? 'cursor: pointer;' : '')};
`;

export default TableRow;
