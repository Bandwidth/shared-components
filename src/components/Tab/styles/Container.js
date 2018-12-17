import styled from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

TabContainer.Vertical = styled(TabContainer)`
  flex-direction: row;
`;

export default TabContainer;
