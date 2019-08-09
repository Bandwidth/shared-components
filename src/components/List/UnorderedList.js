import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './ListItem';
import Ordered from './OrderedList';

const UnorderedList = styled.ul.withConfig({ displayName: 'UnorderedList' })`
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

UnorderedList.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

UnorderedList.defaultProps = {
  className: "scl-unordered-list",
  id: null,
};

UnorderedList.Item = Item;
UnorderedList.Ordered = Ordered;

/**
 * @component
 */
export default UnorderedList;
