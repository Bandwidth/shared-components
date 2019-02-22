import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';
import Item from './ListItem';
import Ordered from './OrderedList';

type StyledUnorderedList = StyledComponentClass<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >,
  any
>;

interface UnorderedList extends StyledUnorderedList {
  Item?: any;
  Ordered?: any;
}

const UnorderedList: UnorderedList = styled.ul`
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

UnorderedList.Item = Item;
UnorderedList.Ordered = Ordered;

export default UnorderedList;
