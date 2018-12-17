import styled from 'styled-components';
import { themeGet } from 'extensions';

export default styled.div`
  display: flex;
  flex-direction: row;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  color: ${({ disabled }) =>
    disabled ? 'var(--colors-text-disabled)' : 'auto'};

  & > *:not(:last-child) {
    margin-right: ${themeGet('spacing.small')};
  }
`;
