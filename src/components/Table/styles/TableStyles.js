import styled from 'styled-components';

const TableStyles = styled.table`
  min-width: calc(100%);
  border-collapse: collapse;
  font-size: 1em;

  & > tbody,
  & > thead {
    background: transparent;
  }
`;

TableStyles.Small = styled(TableStyles)`
  font-size: 0.9em;

  & th,
  & td {
    padding: 3px 8px;
  }
`;

export default TableStyles;
