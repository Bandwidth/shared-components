import styled from 'styled-components';
import get from 'extensions/themeGet';
import NavigationItem from './NavigationItem';
import NavigationBar from './NavigationBar';

const NavigationItemList = styled.div.withConfig({
  displayName: 'NavigationItemList',
})`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  background: transparent;
  color: inherit;

  & > * {
    margin-right: ${get('spacing.large')};
    margin-top: auto;
  }

  & > *:last-child {
    margin: auto 0 0 0;
    padding-right: 0;
  }
`;

NavigationItemList.Small = NavigationItemList.extend`
  /* this doesn't contain any special styling, see NavigationItem for rules */
  /* adding one rule to ensure a new class is created */

  display: flex;
`;

export default NavigationItemList;
