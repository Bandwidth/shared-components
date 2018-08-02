import styled from 'styled-components';
import { ACTION_BAR_HEIGHT } from '../../constants';
import { themeGet } from '@bandwidth/shared-components';

export default styled.div`
  margin-top: ${ACTION_BAR_HEIGHT}px;
  padding-bottom: ${ACTION_BAR_HEIGHT}px;
  height: ${ACTION_BAR_HEIGHT}px;
  background: transparent;
  pointer-events: none;
  z-index: 10;
  transition: 0.2s ease all;

  .expand-enter-active &,
  .expand-enter-done & {
    background: ${themeGet('colors.background.default')};
    overflow-y: overlay;
    z-index: 0;
    pointer-events: initial;
    height: auto;
    margin-top: 0;
  }

  .expand-enter &,
  .expand-exit & {
    transition: 0.2s ease margin-top, 0.2s ease top;
  }

  & > * {
    pointer-events: initial;
  }
`;
