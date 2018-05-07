import get from 'extensions/themeGet';
import styled, { css } from 'styled-components';

export default styled.div`
  position: relative;
  padding: 20px;
  border: 1px solid
    ${({ isDragging }) =>
      isDragging
        ? get('colors.background.disabled')
        : get('colors.border.medium')};
  background-color: ${({ isDragging }) =>
    isDragging
      ? get('colors.background.disabled')
      : get('colors.background.default')};

  ${({ isDragging }) =>
    isDragging &&
    css`
      cursor: move;
      pointer-events: all;
    `} ${'' /* cursor: ${({ isDragging }) => isDragging ? 'move' : 'inherit'}; */};
`;
