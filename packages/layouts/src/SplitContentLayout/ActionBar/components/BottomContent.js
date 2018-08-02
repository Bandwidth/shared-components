import styled from 'styled-components';
import { ACTION_BAR_HEIGHT } from '../../constants';
import { themeGet } from '@bandwidth/shared-components';

export default styled.div`
  position: absolute;
  bottom: 0;
  right: ${themeGet('spacing.large')};
  left: ${themeGet('spacing.large')};
  height: ${ACTION_BAR_HEIGHT}px;
  pointer-events: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background: ${themeGet('colors.background.default')};
  border-top: ${themeGet('thicknesses.normal')} solid
    ${themeGet('colors.gray.border')};
  transition: 0.05s ease background;

  /* IE 11 detection: fix bug with content justify */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    justify-content: flex-start;
  }

  & > * {
    pointer-events: initial;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: ${themeGet('spacing.medium')};
    margin-left: 0;

    &:last-child {
      margin-right: 0;
    }
  }
`;
