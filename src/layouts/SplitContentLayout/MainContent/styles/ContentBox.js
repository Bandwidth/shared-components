import styled from 'styled-components';
import { themeGet } from 'extensions';

export default styled.div`
  background: ${themeGet('colors.background.default')};
  padding: ${themeGet('spacing.large')};
  border: ${themeGet('thicknesses.normal')} solid
    ${themeGet('colors.gray.border')};
  margin-bottom: ${themeGet('spacing.large')};

  &:last-child {
    margin-bottom: 0;
  }
`;
