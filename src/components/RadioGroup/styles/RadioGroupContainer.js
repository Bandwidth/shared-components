import styled, { css } from 'styled-components';

const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

RadioGroupContainer.Vertical = RadioGroupContainer.extend`
  flex-direction: column;
`;

export default RadioGroupContainer;
