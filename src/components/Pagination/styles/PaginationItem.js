import styled from 'styled-components';
import get from 'extensions/themeGet';

export const SIZE = '30px';

export default styled.li`
  float: left;
  margin: 0;
  padding: 0;
  width: ${SIZE};
  height: ${SIZE};
  line-height: ${SIZE};
  text-align: center;
  cursor: pointer;
  border-width: var(--thicknesses-normal);
  border-style: solid;
  border-color: var(--colors-border-medium);
  border-right: none;
  user-select: none;
  background: var(--colors-background-default);
  color: var(--colors-text-default);

  ${props =>
    props.selected
      ? `
      background: var(--colors-primary-default);
      border-color: var(--colors-primary-default);
      color: var(--colors-text-inverted);

      & + li {
        border-left-color: var(--colors-primary-default);
      }
    `
      : `
      &:hover {
        background: var(--colors-primary-light);
      }
    `} &:active {
    background: var(--colors-primary-default);
  }

  &:first-of-type {
    border-radius: 3px 0px 0px 3px;
  }

  &:last-of-type {
    border-radius: 0px 3px 3px 0px;
    border-right: var(--thicknesses-normal) solid var(--colors-border-medium);
  }
`;
