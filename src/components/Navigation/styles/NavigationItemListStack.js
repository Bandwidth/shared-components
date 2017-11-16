import styled from 'styled-components';

export default styled.div.withConfig({
  displayName: 'NavigationItemListStack',
})`
  display: flex;
  flex-direction: column;

  & > div {
    margin-top: auto;
  }
`;
