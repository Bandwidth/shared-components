import styled from 'styled-components';
import { themeGet } from '@bandwidth/shared-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  pointer-events: initial;
  justify-content: flex-end;
  height: 100%;
  margin-left: auto;

  /* IE 11 detection: fix bug with content justify */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    justify-content: flex-start;
  }

  & > * {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: ${themeGet('spacing.medium')};
    margin-left: 0;

    &:last-child {
      margin-right: 0;
    }
  }
`;
