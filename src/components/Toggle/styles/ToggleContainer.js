import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  display: block;
  position: relative;
  & + & {
    margin-top: var(--spacing-extra-small);
  }
`;
