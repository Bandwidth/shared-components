import styled from 'styled-components';
import get from 'extensions/themeGet';
import icons from '../../../Icon/icons';
import Icon from '../../../Icon';

export default styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  &::before {
    content: "${icons('expandArrow')}";
    font-family: ${get('fonts.icon')};
    font-size: 8px;
    transform: ${({ expanded }) =>
      expanded ? 'rotate(0deg)' : 'rotate(-90deg)'};
    transition: transform 0.2s ease;
    flex: 0 0 auto;
    margin: auto;
  }

  &::after {
    content: '';
    border-bottom-width: ${get('thicknesses.normal')};
    border-bottom-style: dashed;
    border-bottom-color: ${get('colors.border.medium')};
    flex: 1 0 0;
    margin: auto;
  }

  & > ${Icon} {
    display: none;
    position: absolute;
    right: 0;
    background: ${get('colors.background.default')};
    font-size: 10px;
    color: ${get('colors.gray.medium')};
  }

  &:hover > ${Icon} {
    display: block;
  }
`;
