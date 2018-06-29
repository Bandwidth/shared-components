import styled from 'styled-components';
import get from 'extensions/themeGet';

const NavigationBar = styled.header.withConfig({
  displayName: 'NavigationBar',
})`
  background: var(--colors-primary-default);
  color: var(--colors-text-inverted);
  border-bottom: var(--thicknesses-normal) solid var(--colors-shadow-default);
  padding: 0 var(--spacing-large);
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;

  /* we don't want the nav to expand or collapse, just keep its natural size */
  flex: 0 0 auto;

  & > * {
    margin: auto 0;
  }
`;

NavigationBar.Sub = styled(NavigationBar)`
  background: var(--colors-gray-light);
  color: var(--colors-text-default);
`;

NavigationBar.Dark = styled(NavigationBar)`
  background: var(--colors-primary-dark);
`;

export default NavigationBar;
