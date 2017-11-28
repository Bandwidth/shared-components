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
  border-width: ${get('thicknesses.normal')};
  border-style: solid;
  border-color: ${get('colors.border.medium')};
  border-right: none;
  user-select: none;
  background: ${get('colors.background.default')};
  color: ${get('colors.text.default')};

  ${props =>
    props.selected
      ? `
      background: ${get('colors.primary.default')(props)};
      border-color: ${get('colors.primary.default')(props)};
      color: ${get('colors.text.inverted')(props)};

      & + li {
        border-left-color: ${get('colors.primary.default')(props)};
      }
    `
      : `
      &:hover {
        background: ${get('colors.primary.light')(props)};
      }
    `} &:active {
    background: ${get('colors.primary.default')};
  }

  &:first-of-type {
    border-radius: 3px 0px 0px 3px;
  }

  &:last-of-type {
    border-radius: 0px 3px 3px 0px;
    border-right: ${get('thicknesses.normal')} solid
      ${get('colors.border.medium')};
  }
`;
