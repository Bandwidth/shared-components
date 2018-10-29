import styled from 'styled-components';
import { themeGet } from 'extensions';

export default styled.div`
  padding: ${themeGet('spacing.extraSmall')} ${themeGet('spacing.medium')};
  cursor: pointer;

  background: ${props =>
    props.highlighted
      ? themeGet('colors.primary.light')(props)
      : themeGet('colors.backgrounds.default')(props)};

  & + & {
    border-top: ${themeGet('thicknesses.normal')} solid
      ${themeGet('colors.border.light')};
  }
`;
