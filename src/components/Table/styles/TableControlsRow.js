import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 var(--spacing-small) 0;

  & > h1 {
    flex: 1;
    margin: 0;
    line-height: 1;
  }

  & > div {
    flex: 0 0 auto;
    & > a {
      margin-left: var(--spacing-medium);
    }
  }
`;
