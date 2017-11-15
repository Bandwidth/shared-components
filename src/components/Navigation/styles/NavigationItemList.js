import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div.withConfig({
  displayName: 'NavigationItemsContainer',
})`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  background: transparent;
  color: inherit;
  margin-bottom: auto;

  & > * {
    margin-right: ${get('spacing.large')};
  }

  & > *:last-of-type {
    margin: 0;
    padding-right: 0;
  }

  & > a {
    color: inherit;
    text-decoration: none;
  }
`;
