import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  background: inherit;
  width: 1em;
  height: calc(100% - 1em + 2px);
  border-color: var(--colors-border-medium);
  border-width: var(--thicknesses-normal);
  border-style: solid;
  border-left: 0;
  position: absolute;
  top: -1px;
  right: -1em;

  &:before {
    content: '';
    height: 0;
    width: 0;
    border-width: 0.5em;
    border-color: var(--colors-border-medium) transparent transparent
      var(--colors-border-medium);
    border-style: solid;
    position: absolute;
    bottom: calc(-1em - 1px);
    left: 0;
    box-shadow: 0 -1px 0 var(--colors-border-medium);
  }

  &:after {
    content: '';
    height: 0;
    width: 0;
    border-width: calc(0.5em - 1px);
    border-color: var(--colors-background-default) transparent transparent
      var(--colors-background-default);
    border-style: solid;
    position: absolute;
    bottom: calc(-1em + 1px);
    left: 1px;
  }
`;
