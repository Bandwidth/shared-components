import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.li`
  background: ${props =>
    props.active
      ? get('colors.gray.light')(props)
      : get('colors.background.default')(props)};
  color: ${props =>
    props.active
      ? get('colors.primary.default')(props)
      : get('colors.text.default')(props)};
  padding: ${get('spacing.medium')} ${get('spacing.large')};
  border-bottom: ${get('thicknesses.normal')} solid
    ${get('colors.border.light')};
  border-right: ${get('thicknesses.normal')} solid
    ${props =>
      props.active
        ? get('colors.gray.light')(props)
        : get('colors.border.light')(props)};
  position: relative;
  overflow-x: visible;
  z-index: 100;
`;
