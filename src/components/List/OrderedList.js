import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './ListItem';

const OrderedList = styled.ol.withConfig({ displayName: 'OrderedList' })`
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

/**
 * @component
 */
export default OrderedList;
