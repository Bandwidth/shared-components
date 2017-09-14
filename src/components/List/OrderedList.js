import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './ListItem';

const OrderedListImpl = styled.ul.withConfig({ displayName: 'OrderedList' })`
  margin: 0 0 1em;
  padding: 0;
  list-style: decimal outside;

  &:last-child {
    margin-bottom: 0;
  }

  & ul {
    list-style: lower-latin outside;
  }

  & ul ${Item.Styled}:first-child,
  & ol ${Item.Styled}:first-child {
    margin-top: 0.5em;
  }
`;

const OrderedList = ({children, ...rest}) => (
  <OrderedListImpl {...rest}>{children}</OrderedListImpl>
)

OrderedList.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

OrderedList.defaultProps = {
  className: null,
  id: null,
};

OrderedList.Item = Item;
OrderedList.Styled = OrderedListImpl;

export default OrderedList;
