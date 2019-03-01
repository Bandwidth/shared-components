import styled from 'styled-components';
import dotNotation from 'extensions/dotNotation';

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabContainerVertical = styled(TabContainer)`
  flex-direction: row;
`;

export default dotNotation(TabContainer, { Vertical: TabContainerVertical });
