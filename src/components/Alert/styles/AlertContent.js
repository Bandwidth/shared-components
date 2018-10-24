import styled from 'styled-components';
import get from 'extensions/themeGet';

const AlertContent = styled.div`
  padding: ${get('spacing.small')} ${get('spacing.medium')};
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: ${get('spacing.small')};
  min-height: 53px;
  border-color: inherit;
`;

AlertContent.Small = styled(AlertContent)`
  padding: 5px;
  min-height: 30px;
`;

export default AlertContent;
