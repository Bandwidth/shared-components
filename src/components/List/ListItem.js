import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li.withConfig({ displayName: 'ListItem' })`
  margin: 0 0 0.5em 2em;
  padding: 0;

  & p {
    margin: 0 0 0.5em;
  }
`;

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

ListItem.usage = `
A basic list item.

\`\`\`
<ListItem>Foo</ListItem>
\`\`\`
`;

export default ListItem;
