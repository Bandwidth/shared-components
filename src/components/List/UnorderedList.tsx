import * as React from 'react';
import styled from 'styled-components';
import Item from './ListItem';
import Ordered from './OrderedList';
import dotNotation from 'extensions/dotNotation';

/**
 * A basic bulletted list. Fill with `UnorderedList.Item` elements.
 */
const UnorderedList = styled.ul`
  margin: 0 0 1em;
  padding: 0;
  list-style: disc outside;

  &:last-child {
    margin-bottom: 0;
  }

  & > ul {
    list-style: circle outside;
    margin: 0 0 0 1em;
  }

  & ul li:first-child,
  & ol li:first-child {
    margin-top: 0.5em;
  }
`;

export default dotNotation(UnorderedList, { Item, Ordered });
