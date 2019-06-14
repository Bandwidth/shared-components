import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  position: relative;
  padding: ${get('spacing.medium')} 0;
  &::before {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    top: 0;
    border-top-width: ${get('thicknesses.normal')};
    border-top-style: solid;
    border-top-color: ${get('colors.border.medium')};
  }
`;
