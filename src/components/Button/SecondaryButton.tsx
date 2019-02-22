import Button from './Button';
import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled(Button)`
  color: ${get('colors.primary.dark')};
  border-color: ${get('colors.primary.dark')};
  background: transparent;
  border-width: ${get('thicknesses.wide')};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: ${get('colors.text.inverted')};
    background: ${get('colors.primary.dark')};
    border-color: ${get('colors.primary.dark')};
  }
`;
