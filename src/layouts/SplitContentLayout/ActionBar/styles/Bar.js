import styled from 'styled-components';
import { ACTION_BAR_HEIGHT, TWO_THIRDS, ONE_THIRD } from '../../constants';
import { themeGet } from 'extensions';

const getExternalSpace = props =>
  props.actionBarLocation === props.mainContentLocation
    ? `calc(${ONE_THIRD} - 1px)`
    : `calc(${TWO_THIRDS})`;

const getLeftFromState = props => {
  if (!props.secondaryContentPresent) {
    return '0';
  }
  return props.actionBarLocation === 'right' ? getExternalSpace(props) : '0';
};
const getRightFromState = props => {
  if (!props.secondaryContentPresent) {
    return '0';
  }
  return props.actionBarLocation === 'right' ? '0' : getExternalSpace(props);
};

export default styled.div`
  position: absolute;
  z-index: 15;
  bottom: 0;
  left: ${getLeftFromState};
  right: ${getRightFromState};

  background: ${themeGet('colors.background.default')};
  border-top: ${themeGet('thicknesses.normal')} solid
    ${themeGet('colors.gray.border')};
  border-left: ${themeGet('thicknesses.normal')} solid
    ${themeGet('colors.gray.border')};
  border-right: ${themeGet('thicknesses.normal')} solid
    ${themeGet('colors.gray.border')};

  display: flex;
  flex-direction: column;
  top: calc(100% - 72px);

  transition: 0.2s ease all;

  &.expand-enter,
  &.expand-enter-active,
  &.expand-enter-done {
    border-top: 0;
    top: 0;
  }
`;
