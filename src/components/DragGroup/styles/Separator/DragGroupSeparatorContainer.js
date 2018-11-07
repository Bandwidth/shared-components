import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  position: relative;
  display: flex;
  height: ${get('spacing.medium')};

  cursor: pointer;
  user-select: none;

  opacity: 0;

  &:hover {
    opacity: 1;
  }

  &::after {
    content: '';
    width: 100%;
    position: absolute;
    top: calc(50% - 1px);
    border-bottom-width: ${get('thicknesses.normal')};
    border-bottom-style: dashed;
    border-bottom-color: ${get('colors.gray.medium')};
  }
`;
