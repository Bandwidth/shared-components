import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaneRow = styled.div.withConfig({ displayName: 'PaneRow' })`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;

  & > * {
    flex: 1;
    border-right: 1px solid #e1e1e1;
    border-left: 1px solid #e1e1e1;
    margin-left: -1px;
  }

  & > *:first-child {
    margin-left: 0;
    border-left: none;
  }

  & > *:last-child {
    border-right: none;
  }
`;

PaneRow.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

PaneRow.defaultProps = {
  id: null,
  className: null,
};

PaneRow.usage = `
# PaneRow

A composeable column. Lays out children horizontally. Applies a divider between children.

\`\`\`
<PaneRow>
  <Pane>Content</Pane>
  <Pane>Content</Pane>
</PaneRow>
\`\`\`
`;

export default PaneRow;
