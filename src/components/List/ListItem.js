import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const select = theme
  .register('ListItem', {
    margin: '0 0 0.5em 2em',
    padding: '0',
    paragraphMargin: '0 0 0.5em',
  })
  .createSelector();

const ListItemImpl = theme.connect(styled.li.withConfig({ displayName: 'ListItem' })`
  margin: ${select('margin')};
  padding: ${select('padding')};

  & p {
    margin: ${select('paragraphMargin')};
  }
`);

const ListItem = ({children, ...rest}) => (
  <ListItemImpl {...rest}>{children}</ListItemImpl>
)

ListItem.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

ListItem.defaultProps = {
  className: null,
  id: null,
};

export default ListItem;
