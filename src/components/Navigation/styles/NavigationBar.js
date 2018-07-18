import styled from 'styled-components';
import get from 'extensions/themeGet';

const NavigationBar = styled.header.withConfig({
  displayName: 'NavigationBar',
})`
  /* General text color to use */
  --nav-color-text: var(--colors-text-inverted);
  /* Accent color for highlighting links */
  --nav-color-highlight: var(--colors-primary-dark);
  --nav-color-background: var(--colors-primary-default);

  background: var(--nav-color-background);
  color: var(--nav-color-text);
  border-bottom: ${get('thicknesses.normal')} solid
    ${get('colors.shadow.default')};
  padding: 0 ${get('spacing.large')};
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
  --nav-color-background: var(--colors-gray-light);
  --nav-color-text: var(--colors-text-default);
`;

NavigationBar.Dark = styled(NavigationBar)`
  --nav-color-highlight: var(--colors-primary-default);
  --nav-color-background: var(--colors-primary-dark);
`;

NavigationBar.Sub.Dark = styled(NavigationBar)`
  --nav-color-highlight: var(--colors-primary-default);
  --nav-color-background: var(--colors-primary-dark);
`;

NavigationBar.Light = styled(NavigationBar)`
  --nav-color-text: var(--colors-text-default);
  --nav-color-background: var(--colors-background-default);
`;

export default NavigationBar;
