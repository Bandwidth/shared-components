import styled from 'styled-components';
import get from 'extensions/themeGet';
import TabContainer from './TabContainer';

const TabContent = styled.div`
  padding: ${get('spacing.medium')};

  border-width: ${get('thicknesses.normal')};
  border-style: solid;
  border-color: ${get('colors.border.medium')};

  ${TabContainer} > & {
    flex: 0 0 auto;
  }

  ${TabContainer.Vertical} > & {
    flex: 1;
  }
`;

export default TabContent;
