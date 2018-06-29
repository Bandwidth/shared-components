import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.li`
  background: ${props =>
    props.active
      ? 'var(--colors-gray-light)'
      : 'var(--colors-background-default)'};
  color: var(--colors-text-default);
  padding: var(--spacing-medium) var(--spacing-large);
  border-bottom: var(--thicknesses-normal) solid var(--colors-border-medium);
  border-right: var(--thicknesses-normal) solid
    ${props =>
      props.active
        ? 'var(--colors-gray-light)'
        : 'var(--colors-border-medium)'};
  position: relative;
  overflow-x: visible;
`;
