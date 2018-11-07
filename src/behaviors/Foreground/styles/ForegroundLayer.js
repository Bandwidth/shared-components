import styled from 'styled-components';
import { themeGet } from 'extensions';

export default styled.div`
  font-family: ${themeGet('fonts.default')};
  color: ${themeGet('colors.text.default')};
  font-size: ${themeGet('fontSizes.default')};
  line-height: 1.5;
  letter-spacing: 0.28px;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100000;

  /* the div itself is not interactive */

  pointer-events: none;

  /* all children are, though */

  & > * {
    pointer-events: initial;
  }
`;
