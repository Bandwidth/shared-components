import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaneColumn = styled.div.withConfig({ displayName: 'PaneColumn' })`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;

  & > * {
    flex: 1 0 auto;
    border-bottom: 1px solid #e1e1e1;
  }

  & > *:last-child {
    border-bottom: none;
  }
`;

PaneColumn.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

PaneColumn.defaultProps = {
  id: null,
  className: null,
};

PaneColumn.usage = `
# PaneColumn

A composeable column. Lays out children vertically. Applies a divider between children.

\`\`\`
<PaneColumn>
  <Pane>Content</Pane>
  <Pane>Content</Pane>
</PaneColumn>
\`\`\`
`;

export default PaneColumn;
