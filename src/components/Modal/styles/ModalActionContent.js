import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  position: relative;
  padding: var(--spacing-large) 0;
  margin: 0 var(--spacing-large);

  &::before {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    top: 0;
    border-top-width: var(--thicknesses-normal);
    border-top-style: solid;
    border-top-color: var(--colors-border-light);
  }
`;
