import styled from 'styled-components';
import DragGroupSeparatorContainer from './DragGroupSeparatorContainer';
import get from 'extensions/themeGet';

export default styled.div`
  background: ${get('colors.background.default')};
  color: ${get('colors.gray.medium')};
  text-transform: uppercase;
  position: relative;
  z-index: 10;
  font-size: 10px;

  ${DragGroupSeparatorContainer} > & {
    margin: auto;
  }
`;
