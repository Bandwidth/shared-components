import styled from 'styled-components';
import get from 'extensions/themeGet';
import PaneRow from '../PaneRow';

export default styled.article`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  padding: 0 ${get('spacing.large')};
  background: ${get('colors.background.default')};

  /* for panes within rows that are not on the top, add top padding */

  ${PaneRow}:not(:first-of-type) > & {
    padding-top: ${get('spacing.large')};
  }
`;
