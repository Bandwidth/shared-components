import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const PaneContent = styled.div`
  padding: ${({ theme }) => theme.pane.contentPadding};
`;

PaneContent.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

PaneContent.defaultProps = {
  id: null,
  className: null,
};

export default sharedComponent(`
# PaneContent

Wraps content inside a Pane or PaneSection with appropriate padding.

\`\`\`
<Pane>
  <PaneSection>
    <PaneContent>
      foo
    </PaneContent>
  </PaneSection>
</Pane>
\`\`\`
`)(PaneContent);
