import styled from 'styled-components';
import { themeGet } from 'extensions';

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: ${themeGet('spacing.small')};
  min-height: 1em;
`;

export default LabelContainer;
