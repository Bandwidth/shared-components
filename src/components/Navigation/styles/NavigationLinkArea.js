import styled from 'styled-components';




export default styled.div.withConfig({ displayName: 'NavigationLinks' })`
  display: flex;
  flex-direction: column;

  & > div {
    margin-top: auto;
  }
`
