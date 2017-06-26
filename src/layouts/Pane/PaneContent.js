import PropTypes from 'prop-types';
import styled from 'styled-components';

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

PaneContent.usage = `
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
`;

export default PaneContent;
