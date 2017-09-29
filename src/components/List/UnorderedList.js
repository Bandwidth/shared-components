import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './ListItem';
import Ordered from './OrderedList';
import theme from '../../theme';

const select = theme
  .register('UnorderedList', {
    margin: '0 0 1em',
    padding: '0',
    listStyle: 'disc outside',
    nestedListStyle: 'circle outside',
    nestedListMargin: '0 0 0 1em',
    nestedFirstChildSpacing: '0.5em',
  })
  .createSelector();

const UnorderedListImpl = theme.connect(styled.ul.withConfig({ displayName: 'UnorderedList' })`
  margin: ${select('margin')};
  padding: ${select('padding')};
  list-style: ${select('listStyle')};

  &:last-child {
    margin-bottom: 0;
  }

  & > ul {
    list-style: ${select('nestedListStyle')};
    margin: ${select('nestedListMargin')};
  }

  & ul li:first-child,
  & ol li:first-child {
    margin-top: ${select('nestedFirstChildSpacing')};
  }
`);

export const UnorderedList = (props) => (<UnorderedListImpl {...props} />);

UnorderedListImpl.propTypes = UnorderedList.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

UnorderedListImpl.defaultProps = {
  className: null,
  id: null,
};

UnorderedList.Item = Item;
UnorderedList.Ordered = Ordered;
export default UnorderedList;
