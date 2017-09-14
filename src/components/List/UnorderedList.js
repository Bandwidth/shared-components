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

  & ul {
    list-style: circle outside;
  }

  & ul ${Item.Styled}:first-child,
  & ol ${Item.Styled}:first-child {
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
  className: null,
  id: null,
};

UnorderedList.usage = `
A basic bulletted list. Fill with \`Item\` elements.

\`\`\`
<UnorderedList>
  <Item>Foo</Item>
  <Item>Bar</Item>
</UnorderedList>
\`\`\`
`;

UnorderedList.Item = Item;
UnorderedList.Ordered = Ordered;
export default UnorderedList;
