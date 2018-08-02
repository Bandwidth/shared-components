import styled from 'styled-components';
import StepContainer from './StepContainer';

export default styled.div`
  ${StepContainer} > & {
    flex: 1 0 0;
    margin-top: 0.5em;
    margin-left: 1em;
  }
`;
