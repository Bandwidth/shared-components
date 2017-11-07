import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const select = theme.register('SearchSuggestionsContainer', ({ colors }) => ({
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: colors.gray.border,
  }))
  .createSelector();

const Container = theme.connect(styled.div`
  border-style: ${select('borderStyle')};
  border-color: ${select('borderColor')};
  border-width: ${select('borderWidth')};
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
`);

export default Container;
