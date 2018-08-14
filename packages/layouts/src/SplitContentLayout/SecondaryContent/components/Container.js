import styled from 'styled-components';
import { themeGet } from '@bandwidth/shared-components';
import { ACTION_BAR_HEIGHT } from '../../constants';

const getBottomSpaceFromState = props => {
  const actionBarIsOverlapping =
    props.actionBarPresent &&
    props.actionBarLocation !== props.mainContentLocation;

  if (props.overlapBorder) {
    if (actionBarIsOverlapping) {
      return `${ACTION_BAR_HEIGHT}px`;
    }
    return '0px';
  }

  if (actionBarIsOverlapping) {
    return `calc(${themeGet('spacing.large')(props)} + ${ACTION_BAR_HEIGHT}px)`;
  }

  return themeGet('spacing.large')(props);
};

export default styled.div`
  position: relative;
  top: 0;

  height: 100%;
  overflow-y: auto;
  overflow-y: overlay;

  padding: ${props =>
    props.overlapBorder ? '0' : themeGet('spacing.large')(props)};
  padding-bottom: ${getBottomSpaceFromState};
`;
