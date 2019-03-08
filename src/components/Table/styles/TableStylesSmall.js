import styled from 'styled-components';
import TableStyles from './TableStyles';

export default styled(TableStyles)`
  font-size: 0.9em;

  & th,
  & td {
    padding: 3px 8px;
  }
`;
