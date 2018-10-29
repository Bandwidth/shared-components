import styled from 'styled-components';
import { themeGet } from 'extensions';

export default styled.div`
  display: flex;
  flex-direction: row;

  & > *:not(:last-child) {
    margin-right: ${themeGet('spacing.small')};
  }
`;
