import styled from 'styled-components';
import get from 'extensions/themeGet';
import tag from 'clean-tag';

const AlertContent = styled(tag.div)`
  padding: var(--spacing-small) var(--spacing-medium);
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: var(--spacing-small);
  min-height: 53px;
  border-color: inherit;
`;

AlertContent.Small = styled(AlertContent)`
  padding: 5px;
  min-height: 30px;
`;

export default AlertContent;
