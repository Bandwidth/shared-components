import * as React from 'react';
import PropTypes from 'prop-types';
import styled, { StyledComponentClass } from 'styled-components';
import Item from './ListItem';

type StyledOrderedList = StyledComponentClass<
  React.DetailedHTMLProps<
    React.OlHTMLAttributes<HTMLOListElement>,
    HTMLOListElement
  >,
  any
>;

interface OrderedList extends StyledOrderedList {
  Item?: any;
}

const OrderedList: OrderedList = styled.ol`
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

OrderedList.Item = Item;

export default OrderedList;
