import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './ListItem';

const OrderedList = styled.ul.withConfig({ displayName: 'OrderedList' })`
  margin: 0 0 1em;
  padding: 0;
  list-style: decimal outside;

  &:last-child {
    margin-bottom: 0;
  }

  & ul {
    list-style: lower-latin outside;
  }

  & ul ${Item}:first-child,
  & ol ${Item}:first-child {
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

OrderedList.usage = `
A basic numbered list. Fill with \`Item\` elements.

\`\`\`
<OrderedList>
  <Item>Foo</Item>
  <Item>Bar</Item>
</OrderedList>
\`\`\`
`;

OrderedList.Item = Item;
export default OrderedList;
