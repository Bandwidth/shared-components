import styled from 'styled-components';
import get from 'extensions/themeGet';

const BulkSelectItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > button {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc((1 / 5 - ${get('spacing.small')}));
    height: 53px;
    margin: 7.5px;
    padding: 0 10px;
    min-width: 53px;
  }
`;

BulkSelectItemContainer.Small = styled(BulkSelectItemContainer)`
  & > button {
    height: 30px;
    font-size: 0.8em;
    margin: 2.5px;
    padding: 0 10px;
    min-width: 30px;
  }
`;

export default BulkSelectItemContainer;
