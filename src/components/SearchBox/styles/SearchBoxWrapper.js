import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  & > .react-autosuggest__container {
    width: 100%;

    & input {
      padding-right: 2em;
    }
  }

  & > button {
    margin: 0 0 auto 0;
  }
`;
