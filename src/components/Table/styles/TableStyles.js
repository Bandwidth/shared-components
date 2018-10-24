import styled from 'styled-components';

const TableStyles = styled.table`
  /**
   * Due to a browser quirk, we have to account for a 1px difference,
   * see ScrollShadow > Sentinel.
   */
  min-width: calc(100% - 1px);
  border-collapse: collapse;
  font-size: 1em;

  & > tbody,
  & > thead {
    background: transparent;
  }
`;

TableStyles.Small = styled(TableStyles)`
  font-size: 0.9em;
`;

export default TableStyles;
