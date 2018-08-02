import styled from 'styled-components';
import { themeGet } from '@bandwidth/shared-components';
import {
  SidebarListContainer,
  SidebarListItemContainer,
} from './SidebarList/components';
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

  /*
   * Modifying child list behavior a bit to make things more seamless.
   * Some usages wrap SidebarListItem in an Anchor, so we do some
   * internal selecting here.
   * TODO: move this change into the default for SCL
  */

  & ${SidebarListContainer} > * {
    border-top: ${themeGet('thicknesses.normal')} solid
      ${themeGet('colors.gray.border')};
    border-bottom: 0;
  }
  & ${SidebarListContainer} > *:last-child {
    border-bottom: ${themeGet('thicknesses.normal')} solid
      ${themeGet('colors.gray.border')};
  }

  & > ${SidebarListContainer} > * > ${SidebarListItemContainer} {
    border-bottom: 0;
    border-top: 0;
  }
`;
