import React from 'react';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const SearchBoxSuggestionsList = styled.div`
  border-style: solid;
  border-color: var(--colors-border-medium);
  border-width: var(--thicknesses-normal);
  margin-top: -1px;

  & ul {
    display: block;
    padding: 0;
    margin: 0;

    & > li {
      display: block;
      padding: 0;
      margin: 0;
    }
  }
`;

export default SearchBoxSuggestionsList;
