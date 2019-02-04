import styled from 'styled-components';
import get from 'extensions/themeGet';

const NavigationItemList = styled.div.withConfig({
  displayName: 'NavigationItemList',
})`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  background: transparent;
  color: inherit;

  padding-top: 20px;

  * + & {
    padding-top: 10px;
  }

  & > * + * {
    margin-left: 20px;
  }
`;

NavigationItemList.Small = styled(NavigationItemList)`
  /* this doesn't contain any special styling, see NavigationItem for rules */
  /* adding one rule to ensure a new class is created */

  display: flex;
`;

export default NavigationItemList;
