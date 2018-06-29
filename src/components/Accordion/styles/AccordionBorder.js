import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  border-width: var(--thicknesses-normal);
  border-color: var(--colors-gray-border);
  border-style: solid;

  background: ${props =>
    props.disabled ? 'var(--colors-background-disabled)' : 'transparent'};
`;
