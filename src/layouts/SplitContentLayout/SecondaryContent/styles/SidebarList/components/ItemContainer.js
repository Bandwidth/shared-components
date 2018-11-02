import styled from 'styled-components';
import { themeGet } from 'extensions';

export default styled.li`
  background: ${props =>
    props.active
      ? themeGet('colors.gray.light')(props)
      : themeGet('colors.background.default')(props)};
  color: ${themeGet('colors.text.default')};
  padding: ${themeGet('spacing.medium')} ${themeGet('spacing.large')};
  border-right: ${themeGet('thicknesses.normal')} solid
    ${props =>
      props.active
        ? themeGet('colors.gray.light')(props)
        : themeGet('colors.border.medium')(props)};
  position: relative;
  overflow-x: visible;

  &.active {
    background: ${themeGet('colors.gray.light')};
    border-right-color: ${themeGet('colors.gray.light')};
  }
`;
