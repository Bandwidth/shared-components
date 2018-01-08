import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc((1 / 5 - ${get('spacing.small')}));
  }
`;
