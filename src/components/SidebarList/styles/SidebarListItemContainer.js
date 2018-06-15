import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.li`
  background: ${props =>
    props.active
      ? get('colors.gray.light')(props)
      : get('colors.background.default')(props)};
  color: ${get('colors.text.default')};
  padding: ${get('spacing.medium')} ${get('spacing.large')};
  border-bottom: ${get('thicknesses.normal')} solid
    ${get('colors.border.medium')};
  border-right: ${get('thicknesses.normal')} solid
    ${props =>
      props.active
        ? get('colors.gray.light')(props)
        : get('colors.border.medium')(props)};
  position: relative;
  overflow-x: visible;
  z-index: 100;
`;
