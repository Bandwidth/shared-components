import get from 'extensions/themeGet';
import styled from 'styled-components';

export default styled.div`
  opacity: ${({ isDragging }) => (isDragging ? '0' : '1')};
  pointer-events: ${({ isDragging }) => (isDragging ? 'none' : 'inherit')};
`;
