import * as React from 'react';
import styled from 'styled-components';
import Item from './ListItem';
import dotNotation from 'extensions/dotNotation';

const OrderedList = styled.ol`
  margin: 0 0 1em;
  padding: 0;
  list-style: decimal outside;

  &:last-child {
    margin-bottom: 0;
  }

  & > ol {
    list-style: lower-latin outside;
    margin: 0 0 0 1em;
  }

  & ul li:first-child,
  & ol li:first-child {
    margin-top: 0.5em;
  }
`;

export default dotNotation(OrderedList, { Item });
