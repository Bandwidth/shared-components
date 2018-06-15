import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;

  &::-webkit-scrollbar-thumb {
    background: ${get('colors.gray.light')};
  }

  &::-webkit-scrollbar-track {
    background: ${get('colors.gray.dark')};
  }
`;
