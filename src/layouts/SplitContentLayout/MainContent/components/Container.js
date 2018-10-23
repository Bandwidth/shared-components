import styled from 'styled-components';
import { ONE_THIRD, ACTION_BAR_HEIGHT } from '../../constants';
import { themeGet } from 'extensions';

const getBottomSpaceFromState = props => {
  const actionBarIsOverlapping =
    props.actionBarPresent &&
    props.actionBarLocation === props.mainContentLocation;

  if (actionBarIsOverlapping) {
    return `calc(${themeGet('spacing.large')(props)} + ${ACTION_BAR_HEIGHT}px)`;
  }

  return themeGet('spacing.large')(props);
};

const getLeftFromState = props =>
  props.mainContentLocation === 'left' ? '0' : ONE_THIRD;
const getRightFromState = props =>
  props.mainContentLocation === 'left' ? ONE_THIRD : '0';

export default styled.div`
  position: relative;
  margin-left: ${getLeftFromState};
  margin-right: ${getRightFromState};
  display: flex;
  flex-direction: column;
  padding: ${themeGet('spacing.large')};
  padding-bottom: ${getBottomSpaceFromState};
`;
