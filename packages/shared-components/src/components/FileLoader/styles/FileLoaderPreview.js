import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  margin: auto 4px auto 16px;
  & > * {
    &:last-child {
      margin: auto auto auto 2px;
      color: ${get('colors.primary.alternate')};
      text-decoration: underline;
    }
  }
`;
