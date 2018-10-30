import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  & + & {
    padding-top: ${get('spacing.small')};
  }
`;
