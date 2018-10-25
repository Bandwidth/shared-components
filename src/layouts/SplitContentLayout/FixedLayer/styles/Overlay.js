import styled from 'styled-components';
import { TWO_THIRDS, ONE_THIRD } from '../../constants';
import { themeGet } from 'extensions';

export default styled.div`
  position: fixed;
  pointer-events: none;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 10;

  & > * {
    pointer-events: initial;
  }
`;
