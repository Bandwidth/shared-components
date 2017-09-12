import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';
import Item from './ListItem';
import Ordered from './OrderedList';

const UnorderedListImpl = styled.ul.withConfig({ displayName: 'UnorderedList' })`
  margin: 0 0 1em;
  padding: 0;
  list-style: disc outside;

  &:last-child {
    margin-bottom: 0;
  }

  & ul {
    list-style: circle outside;
  }

  & ul ${Item.Class}:first-child,
  & ol ${Item.Class}:first-child {
    margin-top: 0.5em;
  }
`;

export const UnorderedList = ({children, ...rest}) => (
  <UnorderedListImpl {...rest}>{children}</UnorderedListImpl>
);

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
  className: null,
  id: null,
};

export default sharedComponent({ Item, Ordered })(UnorderedList);
