import PropTypes from 'prop-types';
import styled from 'styled-components';

const Gutter = styled.div.withConfig({ displayName: 'Gutter' })`
  background: ${({ theme }) => theme.colors.gutter};
`;

Gutter.propTypes = {
  /**
   * A class name to add to the gutter element.
   */
  className: PropTypes.string,
  /**
   * An id to add to the gutter element.
   */
  id: PropTypes.string,
};

Gutter.defaultProps = {
  className: null,
  id: null,
};

Gutter.usage = `
A simple container box which sets the background color. That's it!

\`\`\`
<Page>
  <Gutter>
    <!-- content -->
  </Gutter>
</Page>
\`\`\`
`;

export default Gutter;
