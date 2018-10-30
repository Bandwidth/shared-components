import styled from 'styled-components';

const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

RadioGroupContainer.Vertical = styled(RadioGroupContainer)`
  flex-direction: column;
`;

export default RadioGroupContainer;
