import styled from 'styled-components';
import get from 'extensions/themeGet';
import icons from 'components/Icon/icons';

export default styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1000000;
  transition: all 0.2s ease;

  /* the check */

  &:checked + label::before {
    content: "${icons('checkmark')}";
  }

  /* the bubble */

  & + label::after {
    border-color: ${get('colors.border.dark')};
  }

  &:disabled + label::after {
    border-color: ${get('colors.border.disabled')};
  }

  &:disabled:checked + label::after {
    background-color: ${get('colors.background.disabledSelected')};
  }

  &:disabled:not(:checked) + label::after {
    background-color: ${get('colors.background.disabled')};
  }

  &:checked:not(:disabled) + label::after {
    background-color: ${get('colors.background.dark')};
  }

  &:not(:checked):not(:disabled) + label::after {
    background-color: ${get('colors.background.default')};
  }

`;
