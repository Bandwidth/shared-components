import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const PaneLayout = styled.div.withConfig({ displayName: 'PaneLayout' })`
  padding: 30px;
`;

PaneLayout.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

PaneLayout.defaultProps = {
  id: null,
  className: null,
};

export default sharedComponent(`
# PaneLayout

A top-level space for panes. Simply provides the padding that is common to pane layouts.

\`\`\`
<PaneLayout>
  <PaneColumn>
    <PaneRow>
      <Pane />
      <Pane />
    </PaneRow>
    <PaneRow>
      <Pane />
      <Pane />
    </PaneRow>
  </PaneColumn>
</PaneLayout>
\`\`\`
`)(PaneLayout);
