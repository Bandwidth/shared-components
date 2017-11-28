import styled from 'styled-components';
import TabContainer from './TabContainer';

const TabList = styled.ul`
  display: flex;
  flex-direction: row;
  user-select: none;
  padding: unset;
  margin: unset;
  overflow: visible;

  ${TabContainer} > & {
    flex: 0 0 auto;
  }

  ${TabContainer.Vertical} > & {
    flex: 0 0 25%;
  }
`;

TabList.Vertical = TabList.extend`
  flex-direction: column;
`;

export default TabList;
