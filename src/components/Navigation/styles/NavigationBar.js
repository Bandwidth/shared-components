import styled from 'styled-components';
import get from 'extensions/themeGet';
import NavigationLinkArea from './NavigationLinkArea';
import NavigationLogoPairWrapper from './NavigationLogoPairWrapper';

const NavigationBar = styled.header.withConfig({ displayName: 'NavigationBar' })`
  background: ${get('colors.primary.default')};
  color: ${get('colors.text.inverted')};
  border-bottom: ${get('thicknesses.normal')} solid ${get('colors.shadow.default')};
  padding: 0 ${get('spacing.large')};
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  z-index: 1000;

  /* we don't want the nav to expand or collapse, just keep its natural size */
  flex: 0 0 auto;

  & > ${NavigationLinkArea} {
    align-self: flex-end;
  }

  & > ${NavigationLogoPairWrapper} {
    margin: auto 0;
  }
`;

NavigationBar.Sub = NavigationBar.extend`
  background: ${get('colors.gray.light')};
  color: ${get('colors.text.default')};
`;

NavigationBar.Dark = NavigationBar.extend`
  background: ${get('colors.primary.dark')};
`;




export default NavigationBar;
