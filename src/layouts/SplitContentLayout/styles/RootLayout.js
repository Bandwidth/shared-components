import styled from 'styled-components';
import { themeGet } from 'extensions';

export default styled.div`
  position: relative;

  background: ${props =>
    props.gutter
      ? themeGet('colors.gray.light')(props)
      : themeGet('colors.background.default')(props)};
`;
