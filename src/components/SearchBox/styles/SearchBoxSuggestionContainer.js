import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  background: ${props =>
    props.isHighlighted
      ? 'var(--colors-primary-light)'
      : 'var(--colors-background-default)'};
  color: var(--colors-text-default);
  display: block;
  padding: var(--spacing-small);
  cursor: pointer;
`;
