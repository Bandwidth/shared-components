import styled from 'styled-components';
import StepContainer from './StepContainer';
import themeGet from 'extensions/themeGet';

export default styled.div`
  ${StepContainer} > & {
    flex: 1 0 0;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: ${themeGet('spacing.small')};
  }
`;
