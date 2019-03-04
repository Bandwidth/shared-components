import styled from 'styled-components';
import get from 'extensions/themeGet';

/**
 * NewBadge lets a user quickly find new items that were just created by a previous action.
 * Drop it on any item which just appeared on the page to easily inform the user of changes.
 */
export default styled.span`
  display: inline-block;

  &::after {
    content: 'New:';
    display: inline-block;
    color: ${get('colors.primary.default')};
    font-weight: bold;
    font-size: 0.85em;
    margin: 0 1em 0 0;
    text-transform: uppercase;
  }
`;
