import styled from 'styled-components';
import { TWO_THIRDS } from '../../constants';
import { themeGet } from 'extensions';

const getLeftFromProps = props =>
  props.mainContentLocation === 'left' ? TWO_THIRDS : '0';
const getRightFromProps = props =>
  props.mainContentLocation === 'left'
    ? '0'
    : props.overlapBorder
      ? TWO_THIRDS
      : `calc(${TWO_THIRDS} + 1px)`;

export default styled.div`
  position: absolute;
  height: 100%;
  left: ${getLeftFromProps};
  right: ${getRightFromProps};
  background: ${themeGet('colors-background-default')};

  &::before {
    content: '';
    width: 0px;
    border-right: ${themeGet('thicknesses.normal')} solid
      ${themeGet('colors.gray.border')};
    top: 0;
    bottom: 0;
    position: absolute;
    right: ${props => (props.mainContentLocation === 'left' ? 'auto' : '0')};
    left: ${props => (props.mainContentLocation === 'left' ? '0' : 'auto')};
  }
`;
