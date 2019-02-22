import styled, { StyledComponentClass } from 'styled-components';

type StyledTabContainer = StyledComponentClass<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  any
>;

interface TabContainer extends StyledTabContainer {
  Vertical?: TabContainer;
}

const TabContainer: TabContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

TabContainer.Vertical = styled(TabContainer)`
  flex-direction: row;
`;

export default TabContainer;
