import styled from 'styled-components';
import get from 'extensions/themeGet';




export default styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1000000;

  &:active:not(:disabled) + label::after {
    border-color: ${get('colors.primary.dark')};
  }
  &:checked:not(:disabled) + label::after {
    background: ${get('colors.primary.dark')};
  }
  &:active:not(:disabled) + label::after {
    border-color: ${get('colors.primary.alternate')};
  }
  &:checked:active:not(:disabled) + label::after {
    background: ${get('colors.primary.alternate')};
  }
  &:focus:not(:hover) + label::after {
    box-shadow: ${get('shadows.focusOutline')};
  }
  &:disabled + label {
    opacity: 0.5;
    cursor: default;
  }
  &:disabled + label::before {
    color: ${get('colors.gray.medium')};
  }
`;
