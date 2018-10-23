import styled from 'styled-components';

export default styled.div`
  opacity: ${({ isDragging }) => (isDragging ? '0' : '1')};
  transition: 0.2s ease all;

  & .DragGroupItem--handle {
    cursor: move;
    cursor: grab;
  }
`;
