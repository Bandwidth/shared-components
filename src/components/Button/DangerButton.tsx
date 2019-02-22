import Button from './Button';
import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled(Button)`
  border-color: ${get('colors.negative.default')};
  background: ${get('colors.negative.default')};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background: ${get('colors.negative.dark')};
    border-color: ${get('colors.negative.dark')};
  }
`;
