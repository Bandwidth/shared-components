import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './ListItem';
import theme from '../../theme';

const select = theme
  .register('OrderedList', {
    margin: '0 0 1em',
    padding: '0',
    listStyle: 'decimal outside',
    nestedListStyle: 'lower-latin outside',
    nestedListMargin: '0 0 0 1em',
    nestedFirstChildSpacing: '0.5em',
  })
  .createSelector();

const OrderedListImpl = theme.connect(styled.ol.withConfig({ displayName: 'OrderedList' })`
  margin: ${select('margin')};
  padding: ${select('padding')};
  list-style: ${select('listStyle')};

  &:last-child {
    margin-bottom: 0;
  }

  & > ol {
    list-style: ${select('nestedListStyle')};
    margin: ${select('nestedListMargin')};
  }

  & ul li:first-child,
  & ol li:first-child {
    margin-top: ${select('nestedFirstChildSpacing')};
  }
`);

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

export default OrderedList;
