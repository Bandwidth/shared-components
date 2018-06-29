import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.span`
  display: inline-block;
  font-size: 10px;
  font-weight: bold;

  margin-left: var(--spacing-small);

  border-width: var(--thicknesses-normal);
  border-style: solid;
  border-color: var(--colors-border-medium);
  border-radius: 3px;

  padding: 0 var(--spacing-small);
  padding-top: 1px;
  background: var(--colors-background-default);
  text-transform: uppercase;
`;
