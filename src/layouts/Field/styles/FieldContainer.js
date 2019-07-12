import styled from 'styled-components';

const FieldContainer = styled.div`
  grid-column: auto / span ${props => props.columnSpan || '1'};
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export default FieldContainer;
