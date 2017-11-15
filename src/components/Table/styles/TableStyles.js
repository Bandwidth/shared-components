import styled from 'styled-components';

const TableStyles = styled.table`
  min-width: 100%;
  border-collapse: collapse;
  font-size: 1em;

  & > tbody,
  & > thead {
    background: transparent;
  }
`;

TableStyles.Small = TableStyles.extend`
  font-size: 0.9em;
`;

export default TableStyles;
