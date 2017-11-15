import styled from 'styled-components';
import get from 'extensions/themeGet';

const AccordionLabel = styled.div`
  padding: ${get('spacing.large')};
  color: ${get('colors.primary.default')};
  font-family: ${get('fonts.brand')};
  font-size: 1.5em;
  text-transform: none;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  user-select: none;
`;

AccordionLabel.Small = AccordionLabel.extend`
  padding: ${get('spacing.medium')};
  color: ${get('colors.text.default')};
  font-weight: 600;
  font-size: 1em;
  text-transform: uppercase;
`;

export default AccordionLabel;
