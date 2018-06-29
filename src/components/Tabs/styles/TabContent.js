import styled from 'styled-components';
import get from 'extensions/themeGet';
import TabContainer from './TabContainer';

const TabContent = styled.div`
  padding: var(--spacing-medium);

  border-width: var(--thicknesses-normal);
  border-style: solid;
  border-color: var(--colors-border-medium);

  ${TabContainer} > & {
    flex: 0 0 auto;
  }

  ${TabContainer.Vertical} > & {
    flex: 1;
  }
`;

export default TabContent;
