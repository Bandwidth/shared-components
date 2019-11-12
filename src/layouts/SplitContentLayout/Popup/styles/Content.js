import styled from 'styled-components';
import { themeGet } from 'extensions';

export default styled.div`
  overflow-y: auto;
  overflow-y: overlay;
  padding: 0 ${themeGet('spacing.large')};
  flex: 1;
`;
