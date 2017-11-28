import styled from 'styled-components';
import get from 'extensions/themeGet';

const AccordionContent = styled.div`
  padding: ${get('spacing.large')};
  padding-top: 0;
  display: flex;
  flex-direction: column;
`;

AccordionContent.Small = AccordionContent.extend`
  padding: ${get('spacing.medium')};
`;

export default AccordionContent;
