import styled from 'styled-components';
import get from 'extensions/themeGet';
import PaneStyles from './PaneStyles';
import PaneRow from '../PaneRow';

export default styled.section`
  ${PaneStyles} > & {
    margin: var(--spacing-large) 0 0 0;

    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: var(--spacing-large);
    }
  }

  /* in the last row, we don't want any bottom space */

  ${PaneRow}:last-child > ${PaneStyles} > & {
    margin-bottom: 0;
  }
`;
