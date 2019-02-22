import styled from 'styled-components';

interface DragItemContainerProps {
  isDragging: boolean;
}

export default styled.div<DragItemContainerProps>`
  opacity: ${({ isDragging }) => (isDragging ? '0' : '1')};
  transition: 0.2s ease all;

  & .DragGroupItem--handle {
    cursor: move;
    cursor: grab;
  }
`;
