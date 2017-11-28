import styled from 'styled-components';
import NavigationBar from './NavigationBar';

export default styled.div.withConfig({
  displayName: 'NavigationItemListStack',
})`
  display: flex;
  flex-direction: column;
  color: inherit;

  & > div {
    margin-top: auto;
  }

  ${NavigationBar} > &, ${NavigationBar.Dark} > &, ${NavigationBar.Sub} > & {
    margin-bottom: 0;
  }
`;
