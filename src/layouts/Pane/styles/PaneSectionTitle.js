import SectionTitle from 'components/SectionTitle';
import get from 'extensions/themeGet';
import styled from 'styled-components';

export default styled(SectionTitle)`
  width: auto;
  margin: 0 -var(--spacing-large) var(--spacing-small) calc(-1 * var(--spacing-large));
`;
